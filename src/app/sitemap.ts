import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/epk', '/proposal'].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/epk' ? 0.9 : 0.7,
  }));
}
