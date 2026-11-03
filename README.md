# SAA Prep

Static AWS SAA-C03 practice site with 1,049 questions and 25 topic groups.

```text
+--------------------+  reads  +-----------------+  feeds  +-------------+  writes  +-------+
| questions.json     | ------> | src/lib/data.ts | ------> | astro build | -------> | dist/ |
| topic-pages.json   |         +-----------------+         +-------------+          +-------+
| taxonomy-tree.json |
+--------------------+
```

## Run

Node.js 22.16.0.

```sh
git clone https://github.com/atakang7/saaprep.git
cd saaprep
cp .env.example .env
npm ci
npm run dev
```

Open http://localhost:4321/saaprep/.

```sh
npm run build
npm run preview
```

## Config

Values below come from `.env.example`.

| var | default | what |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | `https://atakang7.github.io` | Origin for canonical URLs and sitemap. |
| `PUBLIC_BASE_PATH` | `/saaprep` | Route prefix. |
| `PUBLIC_AI_EXPLAIN_ENDPOINT` | `https://atakangul.com/api/explain` | Remote explanation API; empty disables Explain. |

## Limits

- Question content may be outdated; verify with AWS documentation.
- Practice progress is not saved.
- AI explanations depend on an external service.
- This project is not affiliated with AWS.
