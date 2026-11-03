Part of [saaprep](../README.md)

# GitHub Actions

Pull requests build the site; pushes to `main` publish `dist/` to GitHub Pages.

## Run

```sh
gh workflow run ci.yml
gh workflow run deploy.yml
```

## Test

```sh
npm ci
npm run build
```

## Config

| Var | Default in `deploy.yml` | What |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | `https://atakang7.github.io` | Canonical host |
| `PUBLIC_BASE_PATH` | `/saaprep` | Pages subpath |
| `PUBLIC_AI_EXPLAIN_ENDPOINT` | `https://atakangul.com/api/explain` | External explanation service |

## Interfaces

| Workflow | Trigger | Result |
| --- | --- | --- |
| `workflows/ci.yml` | Pull request, manual | Runs `npm ci` and `npm run build` |
| `workflows/deploy.yml` | Push to `main`, manual | Uploads `dist/` and deploys Pages |

Both workflows read `.nvmrc` from the repository root.
