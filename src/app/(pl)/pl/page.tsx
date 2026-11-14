import type { Metadata } from 'next';
import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import ConnectAndStream from '@/components/ConnectAndStream';
import Contact from '@/components/Contact';
import ExperienceTeaser from '@/components/ExperienceTeaser';
import Hero from '@/components/Hero';
import Music from '@/components/Music';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  route: 'home',
  locale: 'pl',
  title:
    'Linarex – kompozytor i perkusista w Warszawie – nowy singiel „Memories”',
  description:
    'Kompozytor i perkusista z Dominikany, mieszkający w Warszawie. Posłuchaj nowego singla „Memories” i zarezerwuj koncert Linarex Experience.',
  imageAlt: `${siteConfig.name} — kompozytor i perkusista`,
});

export default function PolishHome() {
  return (
    <div className='relative'>
      {/* Story arc: artist → latest music → live show → origin story → collaborators → press photos → follow → book. */}
      <Hero locale='pl' />
      <Music locale='pl' />
      <ExperienceTeaser locale='pl' />
      <About locale='pl' />
      <Collaborations locale='pl' />
      <PhotoGallery variant='artist' locale='pl' />
      <ConnectAndStream locale='pl' />
      <Contact locale='pl' />
      <SiteFooter locale='pl' />
    </div>
  );
}
