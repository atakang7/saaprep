export const SITE_NAME = 'SAA Prep';
export const DEFAULT_SITE_URL = 'https://atakang7.github.io';
export const DEFAULT_BASE_PATH = '/saaprep';
export const DEFAULT_TITLE = 'AWS SAA-C03 Practice Questions and Study Taxonomy | SAA Prep';
export const DEFAULT_DESCRIPTION =
  'Free AWS SAA-C03 practice platform with scenario questions, service decision guides, and an exam taxonomy for Solutions Architect Associate prep.';
export const DEFAULT_OG_IMAGE = '/og-image.svg';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function normalizeSiteUrl(value?: string | URL | null): string {
  const raw = value ? String(value).trim() : DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, '');
}

export function normalizeBasePath(value?: string | null): string {
  const raw = String(value || DEFAULT_BASE_PATH).trim();
  if (!raw || raw === '/') return '';
  return `/${raw.replace(/^\/+|\/+$/g, '')}`;
}

export function sitePath(pathname: string): string {
  if (/^(https?:)?\/\//i.test(pathname) || /^(mailto|tel):/i.test(pathname) || pathname.startsWith('#')) {
    return pathname;
  }

  const base = normalizeBasePath(import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL || DEFAULT_BASE_PATH);
  const pathOnly = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!base || pathOnly === base || pathOnly.startsWith(`${base}/`)) return pathOnly;
  return `${base}${pathOnly === '/' ? '/' : pathOnly}`;
}

export function stripSiteBase(pathname: string): string {
  const base = normalizeBasePath(import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL || DEFAULT_BASE_PATH);
  if (!base) return pathname;
  if (pathname === base) return '/';
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || '/';
  return pathname;
}

export function absoluteUrl(pathOrUrl: string, siteUrl: string | URL): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(sitePath(pathOrUrl), `${normalizeSiteUrl(siteUrl)}/`).toString();
}

export function canonicalPathname(pathname: string): string {
  if (/^https?:\/\//i.test(pathname)) {
    const url = new URL(pathname);
    return canonicalPathname(url.pathname);
  }

  const [pathOnly] = pathname.split(/[?#]/);
  if (!pathOnly || pathOnly === '/') return '/';
  if (/\.[a-z0-9]+$/i.test(pathOnly)) return pathOnly;
  return `${pathOnly.replace(/\/+$/, '')}/`;
}

export function cleanText(value: unknown): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function excerpt(value: unknown, maxLength = 155): string {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, Math.max(0, maxLength - 3)).replace(/\s+\S*$/, '').trim();
  return `${trimmed}...`;
}

export function listSentence(items: string[], limit = 4): string {
  const cleanItems = items.map(cleanText).filter(Boolean).slice(0, limit);
  if (cleanItems.length === 0) return '';
  if (cleanItems.length === 1) return cleanItems[0];
  return `${cleanItems.slice(0, -1).join(', ')}, and ${cleanItems.at(-1)}`;
}

export function serviceDescription(service: any): string {
  return excerpt(
    `${service.name} SAA-C03 exam guide: ${service.job} Learn when to choose it, when to avoid it, and the exam trap signals to watch for.`,
    158
  );
}

export function topicDescription(topic: any): string {
  const services = listSentence((topic.core_services || []).map((svc: any) => svc.name), 5);
  const domains = listSentence(topic.exam_domains || [], 4);
  return excerpt(
    `${topic.cluster_title} SAA-C03 study guide covering ${services}. Review tested AWS architecture decisions across ${domains}.`,
    158
  );
}

export function breadcrumbJsonLd(items: BreadcrumbItem[], siteUrl: string | URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(canonicalPathname(item.url), siteUrl)
    }))
  };
}
