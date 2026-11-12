import type { Metadata } from 'next';
import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import ExperienceTeaser from '@/components/ExperienceTeaser';
import Hero from '@/components/Hero';
import Links from '@/components/Links';
import Music from '@/components/Music';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title:
    'Linarex – Kompozytor i perkusista z Warszawy – Nowy singiel "Memories"',
  description:
    'Kompozytor i perkusista z Dominikany, mieszkający w Warszawie. Posłuchaj nowego singla "Memories" i zarezerwuj koncert Linarex Experience z Jacke Matheusa.',
};

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
      <Links locale='pl' />
      <Contact locale='pl' />
      <SiteFooter locale='pl' />
    </div>
  );
}
