import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MusicArtist',
      '@id': 'https://linares-press-kit.vercel.app/#artist',
      name: 'Linarex',
      url: 'https://linares-press-kit.vercel.app',
      description:
        'Dominican-born composer and producer based in Warsaw, Poland. Creating Afrobeat Funk and indie folk that blends Caribbean soul with global sound.',
      genre: ['Afrobeat', 'Funk', 'Indie Folk', 'Urban'],
      birthPlace: {
        '@type': 'Place',
        name: 'Dominican Republic',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Warsaw, Poland',
      },
      image:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
      sameAs: [
        'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
        'https://music.apple.com/artist/linarex',
        'https://www.youtube.com/channel/UCZIaGK7NF4roKF039W_7O1Q',
        'https://www.instagram.com/_linarex',
        'https://www.tiktok.com/@linarex59',
      ],
    },
    {
      '@type': 'MusicRecording',
      name: 'Renacer',
      byArtist: { '@id': 'https://linares-press-kit.vercel.app/#artist' },
      datePublished: '2026',
      genre: ['Funk', 'Afrobeat'],
      url: 'https://open.spotify.com/intl-es/album/5JVDDkvNP77b5yz235Qu0R',
      description:
        'A funk-driven love story about transformation and finding home. feat. Skiwa.',
      image:
        'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',
    },
    {
      '@type': 'MusicRecording',
      name: 'Vaivén',
      byArtist: { '@id': 'https://linares-press-kit.vercel.app/#artist' },
      datePublished: '2025',
      genre: ['Afrobeat Fusion'],
      description: 'Afrobeat Fusion track. feat. Daniel Rivero.',
    },
    {
      '@type': 'WebSite',
      url: 'https://linares-press-kit.vercel.app',
      name: 'Linarex Music',
      description:
        'Official press kit and EPK for Linarex — composer and music producer.',
      author: { '@id': 'https://linares-press-kit.vercel.app/#artist' },
    },
  ],
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Títulos y descripciones
  title: 'Linarex - Composer & Music Producer | Debut Single "Vaivén"',
  description:
    'Discover Linarex, an innovative music production. Stream "Vaivén" on all major platforms.',

  // Keywords para SEO
  keywords: [
    'Linarex',
    'music producer',
    'Afrobeat Fusion',
    'composer',
    'Vaivén',
    'streaming',
    'Urban music',
    'chill beats',
  ],

  // Información del autor
  authors: [{ name: 'Linarex', url: 'https://linares-press-kit.vercel.app/' }],
  creator: 'Linarex',

  // URLs canónicas
  metadataBase: new URL('https://linares-press-kit.vercel.app/'),
  alternates: {
    canonical: 'https://linares-press-kit.vercel.app/',
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
    url: 'https://linares-press-kit.vercel.app/',
    siteName: 'Linarex Music',
    title: 'Linarex - Composer & Music Producer',
    description:
      'Discover innovative music by Linarex. Stream "Vaivén" now on Spotify, Apple Music, YouTube Music and more.',
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

  // Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Linarex - Music Producer',
    description:
      'Listen to "Vaivén" - An Afrobeat Fusion track with chill vibes',
    creator: '@linarex_music',

    images: ['https://linares-press-kit.vercel.app/og-image.jpg'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
