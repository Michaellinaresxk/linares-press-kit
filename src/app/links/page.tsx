import type { Metadata } from 'next';
import LinksContent from './LinksContent';
import { siteConfig } from '@/lib/site-config';

const linksTitle = `${siteConfig.name} | Music, Socials & Booking`;

export const metadata: Metadata = {
  title: linksTitle,
  description: siteConfig.seo.description,
  alternates: {
    canonical: '/links',
  },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/links`,
    siteName: siteConfig.name,
    title: linksTitle,
    description: siteConfig.seo.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: linksTitle,
    description: siteConfig.seo.description,
    images: [siteConfig.ogImage],
  },
};

export default function LinksPage() {
  return <LinksContent />;
}
