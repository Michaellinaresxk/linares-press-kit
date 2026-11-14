import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export type SiteLocale = 'en' | 'pl';

export type RouteKey = 'home' | 'epk' | 'live-show';

type RoutePair = { en: string; pl: string };

export const routePaths: Record<RouteKey, RoutePair> = {
  home: { en: '/', pl: '/pl' },
  epk: { en: '/epk', pl: '/pl/epk' },
  'live-show': { en: '/live-show', pl: '/pl/live-show' },
};

export function getLocalizedPath(route: RouteKey, locale: SiteLocale): string {
  return routePaths[route][locale];
}

export function buildLocalizedUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

type BuildMetadataParams = {
  route: RouteKey;
  locale: SiteLocale;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
};

export function buildMetadata({
  route,
  locale,
  title,
  description,
  image = siteConfig.ogImage,
  imageAlt,
  type = 'website',
}: BuildMetadataParams): Metadata {
  const paths = routePaths[route];
  const path = paths[locale];
  const url = buildLocalizedUrl(path);
  const ogLocale = locale === 'pl' ? 'pl_PL' : 'en_US';
  const ogAlternateLocale = locale === 'pl' ? 'en_US' : 'pl_PL';
  const resolvedImageAlt = imageAlt ?? title;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: paths.en,
        pl: paths.pl,
        'x-default': paths.en,
      },
    },
    openGraph: {
      type,
      locale: ogLocale,
      alternateLocale: [ogAlternateLocale],
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
