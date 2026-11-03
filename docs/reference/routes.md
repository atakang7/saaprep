# Routes

`PUBLIC_BASE_PATH` prefixes every path below. Its default is `/saaprep`.

| Path | Source | Output |
| --- | --- | --- |
| `/` | [`src/pages/index.astro`](../../src/pages/index.astro) | Landing page |
| `/practice` | [`src/pages/practice.astro`](../../src/pages/practice.astro) | Question deck |
| `/concepts` | [`src/pages/concepts.astro`](../../src/pages/concepts.astro) | Exam taxonomy |
| `/services` | [`src/pages/services/index.astro`](../../src/pages/services/index.astro) | Service directory |
| `/services/:service_id` | [`src/pages/services/[service_id].astro`](../../src/pages/services/%5Bservice_id%5D.astro) | Service detail |
| `/topics/:cluster_id` | [`src/pages/topics/[cluster_id].astro`](../../src/pages/topics/%5Bcluster_id%5D.astro) | Topic detail |
| `/api/search.json` | [`src/pages/api/search.json.ts`](../../src/pages/api/search.json.ts) | Static JSON search index |
| `/robots.txt` | [`src/pages/robots.txt.ts`](../../src/pages/robots.txt.ts) | Robots rules |

Topic routes accept both cluster IDs and title slugs. Service routes include aliases; canonical URLs use normalized service IDs. Astro's sitemap integration writes `sitemap-index.xml` during the build.
