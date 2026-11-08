// Review by native speaker — Polish metadata/copy rendered by ProposalView.
import type { Metadata } from 'next';
import ProposalView from '@/components/ProposalView';
import { proposalCopy } from '@/lib/i18n/proposal';
import { siteConfig } from '@/lib/site-config';

const t = proposalCopy.pl;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: '/pl/proposal',
    languages: {
      en: '/proposal',
      pl: '/pl/proposal',
      'x-default': '/proposal',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: `${siteConfig.url}/pl/proposal`,
    title: t.metaTitle,
    description: t.metaDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: t.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.metaTitle,
    description: t.metaDescription,
    images: [siteConfig.ogImage],
  },
};

export default function PolishProposalPage() {
  return <ProposalView locale='pl' />;
}
