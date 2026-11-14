import type { Metadata } from 'next';
import EpkView from '@/components/EpkView';
import { epkCopy } from '@/lib/i18n/epk';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  route: 'epk',
  locale: 'en',
  title: epkCopy.en.metadata.title,
  description: epkCopy.en.meta.epk.description,
  imageAlt: `${siteConfig.name} — ${siteConfig.liveShow.name}`,
});

export default function EpkPage() {
  return <EpkView locale='en' />;
}
