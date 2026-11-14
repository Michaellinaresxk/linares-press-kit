import type { Metadata } from 'next';
import ProposalView from '@/components/ProposalView';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  route: 'live-show',
  locale: 'en',
  title: siteConfig.seo.proposalTitle,
  description: siteConfig.seo.proposalDescription,
  imageAlt: `${siteConfig.liveShow.name} live show with Jacke Matheus`,
});

export default function ProposalPage() {
  return <ProposalView locale='en' />;
}
