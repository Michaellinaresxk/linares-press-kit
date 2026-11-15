import type { Metadata } from 'next';
import LiveShowView from '@/components/LiveShowView';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  route: 'live-show',
  locale: 'en',
  title: siteConfig.seo.liveShowTitle,
  description: siteConfig.seo.liveShowDescription,
  imageAlt: `${siteConfig.liveShow.name} live show with Jacke Matheus`,
});

export default function LiveShowPage() {
  return <LiveShowView locale='en' />;
}
