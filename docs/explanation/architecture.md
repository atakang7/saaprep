# Architecture

Astro reads the three JSON files at build time and writes static HTML and JSON to `dist/`. GitHub Pages hosts those files without a Node runtime.

[`src/lib/data.ts`](../../src/lib/data.ts) joins the taxonomy's short service names to entries in `topic-pages.json`. It emits alias routes for supported names. Dynamic Astro route files expand those records during the build.

[`src/components/SearchModal.astro`](../../src/components/SearchModal.astro) fetches the prebuilt `/api/search.json` index and uses Fuse in the browser. The practice page keeps question navigation and answer checks in the browser. AI explanations call an external POST endpoint when configured.

Service filters use case-insensitive substring matches against question text, options, and explanations. An alias absent from that text can leave a service with no matching questions.
