export function answerLetters(answer) {
  const compact = String(answer ?? '').trim().toUpperCase().replace(/\s+/g, '');
  if (/^[A-Z](?:[,/][A-Z])*$/.test(compact)) return compact.split(/[,\/]/);
  const labelled = String(answer ?? '').match(/^([A-Z])\s*(?:[.):]|[-—–])\s*\S/i);
  return labelled ? [labelled[1].toUpperCase()] : [];
}

function normalize(value) {
  return String(value ?? '').replace(/^[A-Z][.)]\s*/i, '').toLowerCase()
    .replace(/[“”]/g, '"').replace(/[’]/g, "'")
    .replace(/\s+/g, ' ').replace(/[.。]\s*$/g, '').trim();
}

export function isCorrectAnswer(answer, optionLetter, optionText) {
  const letters = answerLetters(answer);
  if (letters.length) return letters.includes(String(optionLetter).toUpperCase());
  return normalize(optionText) === normalize(answer);
}
