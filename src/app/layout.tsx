import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
        url: 'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
        width: 1200,
        height: 630,
        alt: 'Linarex - Music Producer',
        type: 'image/jpeg',
      },
      {
        url: 'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
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
    title: 'Linarex - Music Producer',
    description:
      'Listen to "Vaivén" - An Afrobeat Fusion track with chill vibes',
    creator: '@linarex_music',
    images: ['https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg'],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
