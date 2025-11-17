import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Links from '@/components/Links';
import LiveShows from '@/components/LiveShows';

import Music from '@/components/Music';

export default function Home() {
  return (
    <div className='relative'>
      <Hero />

      <About />
      <Music />
      <Collaborations />
      <Links />
      <LiveShows />

      <Contact />
    </div>
  );
}
