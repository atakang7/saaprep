const DEFAULT_ALLOWED_ORIGINS = [
  'https://atakang7.github.io',
  'http://localhost:4321',
  'http://localhost:4322',
  'http://localhost:4323'
];

const DEFAULT_MODEL = 'poolside/laguna-s-2.1:free';
const AI_ROW_LABELS = ['Verdict', 'Giveaway', 'Why', 'Trap', 'Check'];
const rateBuckets = new Map();

function allowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || DEFAULT_ALLOWED_ORIGINS.join(','))
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean);
}

function requestOrigin(event) {
  const headers = event.headers || {};
  return String(headers.origin || headers.Origin || '').replace(/\/+$/, '');
}

function isAllowedOrigin(origin) {
  return Boolean(origin && allowedOrigins().includes(origin));
}

function clientIp(event) {
  return String(event.requestContext?.http?.sourceIp || 'unknown');
}

function checkRateLimit(event) {
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS || 60000);
  const maxRequests = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 12);
  const now = Date.now();
  const key = clientIp(event);
  const bucket = rateBuckets.get(key);

  if (!bucket || now - bucket.startedAt > windowMs) {
    rateBuckets.set(key, { startedAt: now, count: 1 });
    return true;
  }

  bucket.count += 1;
  return bucket.count <= maxRequests;
}

function cleanString(value, maxLength = 4000) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function cleanStringArray(value, maxItems = 8, maxLength = 500) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => cleanString(item, maxLength)).filter(Boolean).slice(0, maxItems);
}

function eventBody(event) {
  if (!event.body) return '{}';
  return event.isBase64Encoded
    ? Buffer.from(event.body, 'base64').toString('utf8')
    : event.body;
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Vary': 'Origin',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
}

function streamResponse(responseStream, metadata) {
  return awslambda.HttpResponseStream.from(responseStream, metadata);
}

function writeSse(responseStream, event, data) {
  responseStream.write(`event: ${event}\n`);
  responseStream.write(`data: ${JSON.stringify(data)}\n\n`);
}

function parseSseEvents(buffer, onEvent) {
  const events = buffer.split(/\r?\n\r?\n/);
  const remainder = events.pop() || '';

  events.forEach((rawEvent) => {
    const dataLines = [];

    rawEvent.split(/\r?\n/).forEach((line) => {
      if (!line || line.startsWith(':')) return;
      if (line.startsWith('data:')) dataLines.push(line.slice(5).trimStart());
    });

    const dataText = dataLines.join('\n').trim();
    if (dataText) onEvent(dataText);
  });

  return remainder;
}

function aiLineText(text) {
  return cleanString(text, 3000)
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\b(Verdict|Giveaway|Why|Trap|Check)\s*:?\s*/g, '\n$1: ')
    .replace(/\n+/g, '\n')
    .trim();
}

function structuredRows(text) {
  const lineText = aiLineText(text);
  const rows = [];

  lineText.split('\n').forEach((line) => {
    const match = line.match(/^(Verdict|Giveaway|Why|Trap|Check):\s*(.*)$/);
    if (!match) {
      if (rows.length > 0) {
        rows[rows.length - 1].text = `${rows[rows.length - 1].text} ${line}`.trim();
      }
      return;
    }

    const label = match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
    const textValue = match[2].replace(/^[:\-–—\s]+/, '').trim();

    if (textValue) rows.push({ label, text: textValue });
  });

  if (rows.length > 0) return rows;
  return lineText ? [{ label: 'Verdict', text: lineText }] : [];
}

function completeRows(rows) {
  const rowMap = new Map(rows.map((row) => [row.label.toLowerCase(), row.text]));
  return AI_ROW_LABELS.map((label) => ({
    label,
    text: rowMap.get(label.toLowerCase()) || ''
  }));
}

function buildPrompt(payload) {
  const question = cleanString(payload.question);
  const options = cleanStringArray(payload.options, 10, 1000);
  const selectedOption = cleanString(payload.selectedOption, 1000);
  const selectedLetter = cleanString(payload.selectedLetter, 10);
  const selectionIsCorrect = typeof payload.selectionIsCorrect === 'boolean' ? payload.selectionIsCorrect : null;
  const correctAnswer = cleanString(payload.correctAnswer, 1000);
  const correctOptions = cleanStringArray(payload.correctOptions, 4, 1000);
  const existingExplanation = cleanStringArray(payload.explanation, 6, 1000);
  const references = cleanStringArray(payload.references, 6, 300);

  if (!question || !correctAnswer || options.length === 0) {
    return { error: 'Question, options, and correctAnswer are required.' };
  }

  const prompt = [
    'Analyze this AWS SAA-C03 question like an exam detective.',
    'Focus on the exact selected answer when provided.',
    'Pinpoint the wording clues that route to the correct option.',
    'Explain why the selected option is right or wrong without writing a broad AWS lesson.',
    'Stay inside the supplied question, options, answer, and references.',
    'Output exactly these five labeled lines and keep the whole answer under 95 words:',
    'Verdict: selected answer status and correct answer',
    'Giveaway: the shortest question clue words and what they point to',
    'Why: the AWS behavior that makes the answer work',
    'Trap: the closest wrong-option confusion to avoid',
    'Check: one important fact to verify against the supplied reference',
    'Use the labels exactly. Include the colon. Put each label on a separate line. No markdown.',
    '',
    `Question: ${question}`,
    '',
    `Options:\n${options.map((option) => `- ${option}`).join('\n')}`,
    '',
    selectedOption
      ? `Learner selected: ${selectedLetter ? `${selectedLetter}. ` : ''}${selectedOption}`
      : 'Learner selected: not provided',
    selectionIsCorrect === null ? '' : `Selection correctness: ${selectionIsCorrect ? 'correct' : 'incorrect'}`,
    `Correct answer: ${correctAnswer}`,
    correctOptions.length ? `Correct option text:\n${correctOptions.map((option) => `- ${option}`).join('\n')}` : '',
    existingExplanation.length ? `Existing explanation:\n${existingExplanation.map((line) => `- ${line}`).join('\n')}` : '',
    references.length ? `References: ${references.join(', ')}` : ''
  ].filter(Boolean).join('\n');

  return { prompt };
}

async function fetchOpenRouterStream(prompt, apiKey) {
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
  const baseUrl = (process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api').replace(/\/+$/, '');

  return fetch(`${baseUrl}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.PUBLIC_SITE_URL || 'https://atakang7.github.io/saaprep/',
      'X-Title': 'SAA Prep'
    },
    body: JSON.stringify({
      model,
      stream: true,
      messages: [
        {
          role: 'system',
          content: 'You are an AWS SAA-C03 exam detective. Be analytical, short, and concrete. Return only the five requested labeled lines. Never mention prompts, instructions, model behavior, hidden reasoning, or internal analysis.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.1,
      max_tokens: 180
    })
  });
}

async function streamOpenRouterToClient(openRouterResponse, responseStream) {
  const reader = openRouterResponse.body?.getReader();
  if (!reader) {
    writeSse(responseStream, 'error', { error: 'OpenRouter returned no stream.' });
    return;
  }

  const decoder = new TextDecoder();
  let buffer = '';
  let wroteText = false;
  let accumulatedText = '';

  const handleEvent = (dataText) => {
    if (dataText === '[DONE]') return;

    let chunk;
    try {
      chunk = JSON.parse(dataText);
    } catch {
      return;
    }

    if (chunk.error) {
      const message = cleanString(chunk.error.message || chunk.error, 500);
      writeSse(responseStream, 'error', { error: message || 'AI stream failed.' });
      return;
    }

    const text = chunk.choices?.[0]?.delta?.content || '';
    if (text) {
      wroteText = true;
      accumulatedText += text;
      const rows = structuredRows(accumulatedText);
      if (rows.length > 0) {
        writeSse(responseStream, 'rows', { rows: completeRows(rows) });
      }
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    buffer = parseSseEvents(buffer, handleEvent);
  }

  if (buffer.trim()) parseSseEvents(`${buffer}\n\n`, handleEvent);
  if (accumulatedText.trim()) {
    writeSse(responseStream, 'rows', { rows: completeRows(structuredRows(accumulatedText)) });
  }
  writeSse(responseStream, 'done', { ok: wroteText });
}

async function handleRequest(event, responseStream) {
  const origin = requestOrigin(event);
  const method = event.requestContext?.http?.method || 'GET';

  if (method === 'OPTIONS') {
    return jsonResponse(isAllowedOrigin(origin) ? 200 : 403, isAllowedOrigin(origin) ? { ok: true } : { error: 'Origin not allowed.' });
  }

  if (!isAllowedOrigin(origin)) {
    return jsonResponse(403, { error: 'Origin not allowed.' });
  }

  if (method !== 'POST') {
    return jsonResponse(405, { error: 'Use POST.' });
  }

  if (!checkRateLimit(event)) {
    return jsonResponse(429, { error: 'Too many explanation requests. Try again in a minute.' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return jsonResponse(500, { error: 'AI explanations are not configured.' });
  }

  let payload;
  try {
    payload = JSON.parse(eventBody(event));
  } catch {
    return jsonResponse(400, { error: 'Invalid JSON body.' });
  }

  const built = buildPrompt(payload);
  if (built.error) return jsonResponse(400, { error: built.error });

  let openRouterResponse;
  try {
    openRouterResponse = await fetchOpenRouterStream(built.prompt, apiKey);
  } catch {
    return jsonResponse(502, { error: 'AI service is unreachable right now.' });
  }

  if (!openRouterResponse.ok) {
    const data = await openRouterResponse.json().catch(() => ({}));
    return jsonResponse(openRouterResponse.status, {
      error: data?.error?.message || data?.message || 'AI request failed.'
    });
  }

  const stream = streamResponse(responseStream, {
    statusCode: 200,
    headers: {
      'Vary': 'Origin',
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no'
    }
  });

  writeSse(stream, 'ready', { ok: true });
  await streamOpenRouterToClient(openRouterResponse, stream);
  stream.end();
  return null;
}

export const handler = awslambda.streamifyResponse(async (event, responseStream) => {
  const result = await handleRequest(event, responseStream);
  if (!result) return;

  const stream = streamResponse(responseStream, {
    statusCode: result.statusCode,
    headers: result.headers
  });
  stream.end(result.body);
});
