# saaprep

Static AWS SAA-C03 practice site for exam candidates, built with Astro.

```text
+--------------------+
| questions.json     | ------+
+--------------------+       |
+--------------------+       | JSON   +------------------+  data  +-----------+
| topic-pages.json   | ------+------> | src/lib/data.ts  | -----> | src/pages |
+--------------------+       |        +------------------+        +-----------+
+--------------------+       |                                     |
| taxonomy-tree.json | ------+                                     v HTML
+--------------------+                                          +------+
                                                                 | dist |
                                                                 +------+
```

## Quick start

```sh
nvm use
npm ci
npm run dev
npm run build
```

## Layout

| Path | What it is |
| --- | --- |
| [`src/`](src/README.md) | Astro pages, UI, data access, and search |
| [`.github/`](.github/README.md) | Pull request build and GitHub Pages deployment |

## Docs

- [Documentation index](docs/README.md)
- [Deploy](docs/how-to/deploy.md)
- [Data files](docs/reference/data.md)
- [Routes](docs/reference/routes.md)
- [Architecture](docs/explanation/architecture.md)

## Limits

- Static deployment has no server-side question sessions.
- AI explanations depend on an external endpoint.
- Service filters use substring matching; see [architecture](docs/explanation/architecture.md).
