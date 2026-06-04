import About from '@/components/About';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Links from '@/components/Links';

import Music from '@/components/Music';
import PhotoGallery from '@/components/PhotoGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://linares-press-kit.vercel.app',
  },
  openGraph: {
    title: 'Linarex - Composer & Music Producer',
    description:
      'Discover innovative music by Linarex. Stream "Vaivén" now on Spotify, Apple Music, YouTube Music and more.',
    url: 'https://linares-press-kit.vercel.app',
    images: [
      {
        url: 'https://linares-press-kit.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Linarex - Composer & Music Producer',
        type: 'image/jpeg',
      },
    ],
  },
};

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
