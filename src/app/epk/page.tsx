import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import EpkContent from './EpkContent';

export const metadata: Metadata = {
  title: siteConfig.seo.epkTitle,
  description: siteConfig.seo.epkDescription,
  alternates: {
    canonical: '/epk',
  },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/epk`,
    title: siteConfig.seo.epkTitle,
    description: siteConfig.seo.epkDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.liveShow}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.epkTitle,
    description: siteConfig.seo.epkDescription,
    images: [siteConfig.ogImage],
  },
};

export default function EpkPage() {
  return <EpkContent />;
}
