import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AppMotionProvider from '@/components/AppMotionProvider';
import SiteNavigation from '@/components/SiteNavigation';
import { siteConfig } from '@/lib/site-config';
import '../(en)/globals.css';

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
  genre: siteConfig.genres.original,
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
};

export const viewport: Viewport = {
  themeColor: '#080c10',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
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
          <SiteNavigation locale="pl" />
          {children}
        </AppMotionProvider>
      </body>
    </html>
  );
}
