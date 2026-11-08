import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
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
      <Hero locale='en' />
      <Music locale='en' />
      <About locale='en' />
      <Collaborations locale='en' />
      <PhotoGallery variant='artist' locale='en' />
      <ExperienceTeaser locale='en' />
      <Links locale='en' />
      <Contact locale='en' />
      <SiteFooter locale='en' />
    </div>
  );
}
