import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Links from '@/components/Links';

import Music from '@/components/Music';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <div className='relative'>
      <Hero />

      <About />
      <Music />
      <Collaborations />
      <Links />
      <PhotoGallery />

      <Contact />
    </div>
  );
}
