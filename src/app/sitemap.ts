import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/epk', priority: 0.9 },
    { path: '/live-show', priority: 0.7 },
    { path: '/pl', priority: 1 },
    { path: '/pl/epk', priority: 0.7 },
    { path: '/pl/live-show', priority: 0.7 },
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: 'monthly',
    priority,
  }));
}
