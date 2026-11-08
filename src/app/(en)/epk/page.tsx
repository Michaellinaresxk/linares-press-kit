import type { Metadata } from 'next';
import EpkView from '@/components/EpkView';
import { epkCopy } from '@/lib/i18n/epk';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: epkCopy.en.metadata.title,
  description: epkCopy.en.metadata.description,
  alternates: {
    canonical: '/epk',
    languages: {
      en: '/epk',
      pl: '/pl/epk',
      'x-default': '/epk',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/epk`,
    title: epkCopy.en.metadata.title,
    description: epkCopy.en.metadata.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.liveShow.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: epkCopy.en.metadata.title,
    description: epkCopy.en.metadata.description,
    images: [siteConfig.ogImage],
  },
};

export default function EpkPage() {
  return <EpkView locale='en' />;
}
