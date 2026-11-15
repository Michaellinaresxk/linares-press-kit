import type { Metadata } from 'next';
import LiveShowView from '@/components/LiveShowView';
import { liveShowCopy } from '@/lib/i18n/live-show';
import { buildMetadata } from '@/lib/seo/metadata';

const t = liveShowCopy.pl;

export const metadata: Metadata = buildMetadata({
  route: 'live-show',
  locale: 'pl',
  title: t.metaTitle,
  description: t.metaDescription,
  imageAlt: t.ogAlt,
});

export default function PolishLiveShowPage() {
  return <LiveShowView locale='pl' />;
}
