import type { APIRoute } from 'astro';
import { absoluteUrl, normalizeSiteUrl } from '../lib/seo';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = normalizeSiteUrl(site);
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${absoluteUrl('/sitemap-index.xml', siteUrl)}`,
    ''
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
