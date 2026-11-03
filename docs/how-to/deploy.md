# Deploy to GitHub Pages

1. Run `npm ci` and `npm run build` in the repository root.
2. In GitHub repository settings, select GitHub Actions as the Pages build source.
3. Merge the change to `main`. The [deploy workflow](../../.github/workflows/deploy.yml) publishes `dist/`.
4. Check the `Deploy Astro site to GitHub Pages` run under Actions.

For a manual redeploy, run `gh workflow run deploy.yml`.

```text
push main -> npm ci -> astro build -> upload-pages-artifact -> deploy-pages
```
