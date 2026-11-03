# SAA Prep

SAA Prep is a static study site for the AWS Certified Solutions Architect – Associate (SAA-C03) exam. It has 1,049 practice questions and organizes AWS services into 25 topic groups for review.

Site: https://atakang7.github.io/saaprep/

## Quick start

Requires Node.js 22.16.0 and npm.

```sh
git clone https://github.com/atakang7/saaprep.git
cd saaprep
cp .env.example .env
npm ci
npm run dev
```

Open http://localhost:4321/saaprep/.

For a production build:

```sh
npm run build
npm run preview
```

The generated site is in `dist/`.

## Configuration

Copy `.env.example` to `.env` for local development.

| Variable | Use |
| --- | --- |
| `PUBLIC_SITE_URL` | Site origin used for canonical URLs and the sitemap. |
| `PUBLIC_BASE_PATH` | Path prefix; defaults to `/saaprep`. |
| `PUBLIC_AI_EXPLAIN_ENDPOINT` | External HTTP endpoint for streamed question explanations. Leave empty to disable the Explain button. |

The example file points to the public explanation service used by the deployed site. It may apply request limits.

## How it works

Astro generates the question pages and topic/service routes from `questions.json`, `topic-pages.json`, and `taxonomy-tree.json`. The static search index is served from `/api/search.json`; Fuse.js searches it in the browser.

Practice answers are checked in the browser. The optional explanation panel sends the active question to `PUBLIC_AI_EXPLAIN_ENDPOINT` and reads server-sent events. That service is hosted separately and is not part of this repository.

## Deployment

`.github/workflows/ci.yml` runs `npm ci` and `npm run build` on pull requests and pushes to `main`. The Pages workflow builds from `.env.example` and publishes `dist/` after a push to `main`. Set the repository's Pages source to **GitHub Actions**.

For a different host or path prefix, update `.env.example` before deploying. The example values are public build settings, not credentials.

## Limitations

Question content may lag AWS service or exam changes; check the official AWS documentation before relying on an answer. Progress is not saved between sessions. Explanations depend on an external service and may be unavailable or rate-limited.

This is an independent study project, not an official AWS exam product.

Licensed under [MIT](LICENSE).
