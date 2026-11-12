import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import ConnectAndStream from '@/components/ConnectAndStream';
import Contact from '@/components/Contact';
import ExperienceTeaser from '@/components/ExperienceTeaser';
import Hero from '@/components/Hero';
import Links from '@/components/Links';
import Music from '@/components/Music';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <div className='relative'>
      {/* Story arc: artist → latest music → live show → origin story → collaborators → press photos → follow → book. */}
      <Hero locale='en' />
      <Music locale='en' />
      {/* <ExperienceTeaser locale='en' /> */}
      <About locale='en' />
      <Collaborations locale='en' />
      <PhotoGallery variant='artist' locale='en' />
      <ConnectAndStream locale='en' />
      {/* <Links locale='en' /> */}
      <Contact locale='en' />
      <SiteFooter locale='en' />
    </div>
  );
}
