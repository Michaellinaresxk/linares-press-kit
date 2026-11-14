// Review by native speaker — Polish metadata/copy rendered by ProposalView.
import type { Metadata } from 'next';
import ProposalView from '@/components/ProposalView';
import { proposalCopy } from '@/lib/i18n/proposal';
import { buildMetadata } from '@/lib/seo/metadata';

const t = proposalCopy.pl;

export const metadata: Metadata = buildMetadata({
  route: 'live-show',
  locale: 'pl',
  title: t.metaTitle,
  description: t.metaDescription,
  imageAlt: t.ogAlt,
});

export default function PolishProposalPage() {
  return <ProposalView locale='pl' />;
}
