import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { buildMetadata } from '@/lib/seo/metadata';

const base = buildMetadata({
  route: 'home',
  locale: 'en',
  title: siteConfig.seo.homeTitle,
  description: siteConfig.seo.description,
  imageAlt: `${siteConfig.name} — ${siteConfig.role}`,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...base,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    ...base.openGraph,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
        type: 'image/jpeg',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: siteConfig.name,
  },
  category: 'music',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};
