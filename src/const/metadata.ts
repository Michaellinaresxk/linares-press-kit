import type { Metadata } from 'next';

export const metadata: Metadata = {
  // Títulos y descripciones
  title:
    'Linarex - Funk-Pop Composer & Music Producer | Debut Single "Renacer"',
  description:
    'Discover Linarex, an innovative funk-pop music producer. Stream "Renacer" on all major platforms. Daft Punk influences, international collaboration.',

  // Keywords para SEO
  keywords: [
    'Linarex',
    'music producer',
    'funk pop',
    'composer',
    'Renacer',
    'streaming',
    'electronic music',
  ],

  // Información del autor
  authors: [{ name: 'Linarex', url: 'https://linarex-music.com' }],
  creator: 'Linarex',

  // URLs canónicas
  metadataBase: new URL('https://linarex-music.com'),
  alternates: {
    canonical: 'https://linarex-music.com',
    languages: {
      es: 'https://linarex-music.com/es',
      en: 'https://linarex-music.com/en',
    },
  },

  // Open Graph (Facebook, LinkedIn, etc)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://linarex-music.com',
    siteName: 'Linarex Music',
    title: 'Linarex - Funk-Pop Composer & Music Producer',
    description:
      'Discover innovative funk-pop music by Linarex. Stream "Renacer" now on Spotify, Apple Music, YouTube Music and more.',
    images: [
      {
        url: 'https://linarex-music.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Linarex - Music Producer',
        type: 'image/jpeg',
      },
      {
        url: 'https://linarex-music.com/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Linarex Profile',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Linarex - Funk-Pop Music Producer',
    description:
      'Listen to "Renacer" - A funk-pop track with Daft Punk influences',
    creator: '@linarex_music',
    images: ['https://linarex-music.com/twitter-image.jpg'],
  },

  // Apple specific
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Linarex Music',
  },

  // Categoría y clasificación
  category: 'music',
  classification: 'Music Producer | Composer',

  // Robots y indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Información de color y tema
  themeColor: '#000000',

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
