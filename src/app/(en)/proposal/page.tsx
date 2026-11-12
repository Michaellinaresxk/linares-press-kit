import type { Metadata } from 'next';
import ProposalView from '@/components/ProposalView';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: siteConfig.seo.proposalTitle,
  description: siteConfig.seo.proposalDescription,
  alternates: {
    canonical: '/proposal',
    languages: {
      en: '/proposal',
      pl: '/pl/proposal',
      'x-default': '/proposal',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/proposal`,
    title: siteConfig.seo.proposalTitle,
    description: siteConfig.seo.proposalDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.liveShow.name} live show with Jacke Matheus`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.proposalTitle,
    description: siteConfig.seo.proposalDescription,
    images: [siteConfig.ogImage],
  },
};

export default function ProposalPage() {
  return <ProposalView locale='en' />;
}
