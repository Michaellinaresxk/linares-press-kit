// Review by native speaker — Polish metadata/copy rendered by EpkView.
import type { Metadata } from 'next';
import EpkView from '@/components/EpkView';
import { epkCopy } from '@/lib/i18n/epk';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: epkCopy.pl.metadata.title,
  description: epkCopy.pl.meta.epk.description,
  alternates: {
    canonical: '/pl/epk',
    languages: {
      en: '/epk',
      pl: '/pl/epk',
      'x-default': '/epk',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: `${siteConfig.url}/pl/epk`,
    title: epkCopy.pl.metadata.title,
    description: epkCopy.pl.meta.epk.description,
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
    title: epkCopy.pl.metadata.title,
    description: epkCopy.pl.meta.epk.description,
    images: [siteConfig.ogImage],
  },
};

export default function PolishEpkPage() {
  return <EpkView locale='pl' />;
}
