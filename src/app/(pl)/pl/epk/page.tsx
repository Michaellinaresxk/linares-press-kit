// Review by native speaker — Polish metadata/copy rendered by EpkView.
import type { Metadata } from 'next';
import EpkView from '@/components/EpkView';
import { epkCopy } from '@/lib/i18n/epk';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  route: 'epk',
  locale: 'pl',
  title: epkCopy.pl.metadata.title,
  description: epkCopy.pl.meta.epk.description,
  imageAlt: `${siteConfig.name} — ${siteConfig.liveShow.name}`,
});

export default function PolishEpkPage() {
  return <EpkView locale='pl' />;
}
