Part of [saaprep](../README.md)

# Astro app

Astro builds the practice deck, topic pages, service pages, and search index from root JSON files.

## Run

```sh
npm ci
npm run dev
```

Local server: `http://localhost:4321/saaprep/`.

## Test

```sh
npm run build
```

There is no separate test script.

## Config

| Var | Default | What |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | `https://atakang7.github.io` | Canonical host for generated URLs |
| `PUBLIC_BASE_PATH` | `/saaprep` | Route prefix |
| `PUBLIC_AI_EXPLAIN_ENDPOINT` | empty locally | Optional browser POST endpoint for explanations |

Set site and base variables in the shell when overriding `astro.config.mjs`; Astro does not load `.env` during config evaluation.

## Interfaces

| Interface | Source |
| --- | --- |
| Port `4321` | `astro.config.mjs` dev server |
| `GET /api/search.json` | `pages/api/search.json.ts` |
| `POST PUBLIC_AI_EXPLAIN_ENDPOINT` | `pages/practice.astro` |
| `questions.json`, `topic-pages.json`, `taxonomy-tree.json` | `lib/data.ts` |

See [routes](../docs/reference/routes.md) and [data files](../docs/reference/data.md).
