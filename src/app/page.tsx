import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Music from '@/components/Music';
import Links from '@/components/Links';
import PhotoGallery from '@/components/PhotoGallery';
import ExperienceTeaser from '@/components/ExperienceTeaser';

export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <Music />
      <About />
      <Collaborations />
      <PhotoGallery variant='artist' />
      <ExperienceTeaser />
      <Links />
      <Contact />
    </div>
  );
}
