import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { metadata as siteMetadata } from '@/const/metadata';
import AppMotionProvider from '@/components/AppMotionProvider';
import SiteNavigation from '@/components/SiteNavigation';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const artistId = `${siteConfig.url}/#artist`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  '@id': artistId,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.seo.description,
  genre: siteConfig.genres,
  foundingLocation: {
    '@type': 'Place',
    name: siteConfig.origin,
  },
  homeLocation: {
    '@type': 'Place',
    name: siteConfig.location,
  },
  sameAs: Object.values(siteConfig.profiles).filter(
    (profile) => profile !== null,
  ),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Booking',
    email: siteConfig.email,
  },
  track: siteConfig.releases.map((release) => ({
    '@type': 'MusicRecording',
    name: release.title,
    datePublished: release.year,
    url: release.spotifyUrl,
    image: release.coverImage,
    genre: siteConfig.genres,
    byArtist: { '@id': artistId },
    contributor: {
      '@type': 'Person',
      name: release.collaborator,
    },
  })),
};

export const viewport: Viewport = {
  themeColor: '#080c10',
};

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppMotionProvider>
          <SiteNavigation />
          {children}
        </AppMotionProvider>
      </body>
    </html>
  );
}
