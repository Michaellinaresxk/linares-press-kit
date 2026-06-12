'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Download, ArrowRight } from 'lucide-react';
import { featuredSingle } from '@/const/tracks';
import { streamingPlatforms, socialPlatforms } from '@/const/links';

// ─── Types ────────────────────────────────────────────────────────────────────

type IconKey =
  | 'spotify'
  | 'youtube'
  | 'applemusic'
  | 'instagram'
  | 'tiktok'
  | 'contact'
  | 'epk';

interface LinkItem {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  iconBg: string;
  icon: IconKey;
  variant?: 'default' | 'featured' | 'epk' | 'contact';
  badge?: string;
  external?: boolean;
  download?: boolean;
}

interface LinkSection {
  id: string;
  label: string;
  links: LinkItem[];
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const ICONS: Record<IconKey, React.ReactNode> = {
  spotify: (
    <svg viewBox='0 0 24 24' fill='currentColor' width={17} height={17}>
      <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
    </svg>
  ),
  youtube: (
    <svg viewBox='0 0 24 24' fill='currentColor' width={17} height={17}>
      <path d='M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' />
    </svg>
  ),
  applemusic: (
    <svg viewBox='0 0 24 24' fill='currentColor' width={17} height={17}>
      <path d='M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.303 6.303 0 0 0-1.776-.67c-.706-.149-1.412-.201-2.129-.2l-8.115.002a14.8 14.8 0 0 0-1.316.057 6.55 6.55 0 0 0-2.586.868C4.255 1.88 3.31 3.02 2.96 4.43a9.31 9.31 0 0 0-.196 1.897L2.76 18.091a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043.527.344 1.11.586 1.776.67.706.149 1.412.201 2.129.2l8.115-.002a14.8 14.8 0 0 0 1.316-.057 6.55 6.55 0 0 0 2.586-.868c1.396-.932 2.341-2.072 2.691-3.482a9.31 9.31 0 0 0 .196-1.897l.005-11.764zm-7.006 3.564v5.22a2.666 2.666 0 0 1-2.33 2.63 2.666 2.666 0 0 1-2.33-2.63 2.666 2.666 0 0 1 2.33-2.63c.433 0 .84.116 1.19.318V7.614l-5.332 1.537v6.636a2.666 2.666 0 0 1-2.33 2.63 2.666 2.666 0 0 1-2.33-2.63 2.666 2.666 0 0 1 2.33-2.63c.433 0 .84.116 1.19.318V8.077l7.612-2.195v3.806z' />
    </svg>
  ),
  instagram: (
    <svg viewBox='0 0 24 24' fill='currentColor' width={17} height={17}>
      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' />
    </svg>
  ),
  tiktok: (
    <svg viewBox='0 0 24 24' fill='currentColor' width={17} height={17}>
      <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
    </svg>
  ),
  contact: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      width={17}
      height={17}
    >
      <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    </svg>
  ),
  epk: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      width={17}
      height={17}
    >
      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
      <polyline points='14 2 14 8 20 8' />
      <line x1='12' y1='18' x2='12' y2='12' />
      <line x1='9' y1='15' x2='15' y2='15' />
    </svg>
  ),
};

// ─── Link data ────────────────────────────────────────────────────────────────

const LINK_SECTIONS: LinkSection[] = [
  {
    id: 'release',
    label: 'Latest release',
    links: [
      {
        id: 'renacer',
        label: featuredSingle.title,
        sublabel: featuredSingle.artist ?? 'Linarex',
        href: featuredSingle.spotifyUrl ?? streamingPlatforms[0].url,
        iconBg: '#1DB954',
        icon: 'spotify',
        variant: 'featured',
        badge: featuredSingle.year,
        external: true,
      },
    ],
  },
  {
    id: 'stream',
    label: 'Stream',
    links: [
      {
        id: 'spotify',
        label: 'Spotify',
        sublabel: 'Full catalog',
        href: streamingPlatforms[0].url,
        iconBg: '#1DB954',
        icon: 'spotify',
        external: true,
      },
      {
        id: 'youtube',
        label: 'YouTube',
        sublabel: 'Music videos & live sessions',
        href: streamingPlatforms[2].url,
        iconBg: '#FF0000',
        icon: 'youtube',
        external: true,
      },
      {
        id: 'applemusic',
        label: 'Apple Music',
        sublabel: 'High-quality streaming',
        href: streamingPlatforms[1].url,
        iconBg: '#FC3C44',
        icon: 'applemusic',
        external: true,
      },
    ],
  },
  {
    id: 'social',
    label: 'Follow',
    links: [
      {
        id: 'instagram',
        label: 'Instagram',
        sublabel: '@_linarex',
        href: socialPlatforms[0].url,
        iconBg: '#E4405F',
        icon: 'instagram',
        external: true,
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        sublabel: '@linarex59',
        href: socialPlatforms[1].url,
        iconBg: '#010101',
        icon: 'tiktok',
        external: true,
      },
    ],
  },
  {
    id: 'press',
    label: 'Press & booking',
    links: [
      {
        id: 'epk',
        label: 'Press Kit (EPK)',
        sublabel: 'One-page PDF · bio, releases, contact',
        href: '/api/epk',
        iconBg: '#185fa5',
        icon: 'epk',
        variant: 'epk',
        download: true,
      },
      {
        id: 'contact',
        label: 'Booking & Management',
        sublabel: 'Send a message via the contact form',
        href: '/#contact',
        iconBg: '#1d4a72',
        icon: 'contact',
        variant: 'contact',
      },
    ],
  },
];

// ─── Row styles ───────────────────────────────────────────────────────────────

const ROW_STYLES: Record<
  'default' | 'featured' | 'epk' | 'contact',
  { row: string; label: string; sublabel: string; icon: string; bg: string }
> = {
  featured: {
    row: 'bg-[rgba(55,138,221,0.12)] border-[rgba(55,138,221,0.4)] hover:border-[rgba(55,138,221,0.7)] hover:bg-[rgba(55,138,221,0.18)]',
    label: 'text-[#e6f1fb]',
    sublabel: 'text-[#85b7eb]/60',
    icon: 'text-[#378add]/50 group-hover:text-[#378add]',
    bg: '',
  },
  epk: {
    row: 'bg-[rgba(13,24,34,0.6)] border-[rgba(55,138,221,0.25)] hover:border-[rgba(55,138,221,0.55)] hover:bg-[rgba(24,95,165,0.2)]',
    label: 'text-[#c8dcea]',
    sublabel: 'text-[#5a7a8e]',
    icon: 'text-[#85b7eb]',
    bg: '',
  },
  contact: {
    row: 'bg-[rgba(13,24,34,0.4)] border-[rgba(55,138,221,0.15)] hover:border-[rgba(55,138,221,0.4)] hover:bg-[rgba(13,24,34,0.6)]',
    label: 'text-[#c8dcea]',
    sublabel: 'text-[#5a7a8e]',
    icon: 'text-[#5a7a8e] group-hover:text-[#85b7eb]',
    bg: '',
  },
  default: {
    row: 'bg-[rgba(13,24,34,0.5)] border-[rgba(55,138,221,0.15)] hover:border-[rgba(55,138,221,0.4)] hover:bg-[rgba(13,24,34,0.7)]',
    label: 'text-[#e6f1fb]',
    sublabel: 'text-[#85b7eb]/50',
    icon: 'text-[#378add]/40 group-hover:text-[#378add]/80',
    bg: '',
  },
};

// ─── LinkRow ──────────────────────────────────────────────────────────────────

function LinkRow({ link, index }: { link: LinkItem; index: number }) {
  const variant = link.variant ?? 'default';
  const styles = ROW_STYLES[variant];
  const isInternal = link.href.startsWith('/') || link.href.startsWith('#');

  const rowClass = [
    'group relative flex items-center gap-3.5 w-full',
    'px-4 py-3.5 rounded-2xl border transition-all duration-200 backdrop-blur-sm',
    styles.row,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      <span
        className='w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white'
        style={{ background: link.iconBg }}
        aria-hidden='true'
      >
        {ICONS[link.icon]}
      </span>

      <span className='flex-1 min-w-0 text-left'>
        <span className='flex items-center gap-2 flex-wrap'>
          <span className={`text-sm font-semibold truncate ${styles.label}`}>
            {link.label}
          </span>
          {link.badge && (
            <span
              className='text-[10px] font-semibold tracking-wide rounded-full px-2 py-0.5 flex-shrink-0'
              style={{
                background: 'rgba(55,138,221,0.15)',
                border: '1px solid rgba(55,138,221,0.3)',
                color: '#85b7eb',
              }}
            >
              {link.badge}
            </span>
          )}
        </span>
        {link.sublabel && (
          <span className={`text-xs truncate block mt-0.5 ${styles.sublabel}`}>
            {link.sublabel}
          </span>
        )}
      </span>

      <span
        className={`flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${styles.icon}`}
      >
        {link.download ? (
          <Download size={15} aria-hidden />
        ) : isInternal ? (
          <ArrowRight size={15} aria-hidden />
        ) : (
          <ExternalLink size={14} aria-hidden />
        )}
      </span>
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1 + index * 0.06, ease: 'easeOut' },
  } as const;

  if (isInternal && !link.download) {
    return (
      <motion.div {...motionProps}>
        <Link href={link.href} className={rowClass} aria-label={link.label}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps}>
      <a
        href={link.href}
        target={link.external ? '_blank' : '_self'}
        rel={link.external ? 'noopener noreferrer' : undefined}
        download={link.download ? 'Linarex-EPK-2026.pdf' : undefined}
        className={rowClass}
        aria-label={link.label}
      >
        {inner}
      </a>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LinksPage() {
  return (
    <main className='relative min-h-screen flex justify-center overflow-x-hidden'>
      <div className='fixed inset-0 z-0' aria-hidden='true'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg)',
          }}
        />
        <div className='absolute inset-0 bg-black/65' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />
      </div>

      <div className='relative z-10 w-full max-w-sm px-4 pt-14 pb-20 flex flex-col items-center'>
        {/* Header */}
        <motion.div
          className='flex flex-col items-center mb-8'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className='relative mb-4'>
            <Image
              src={featuredSingle.coverImage}
              alt='Linarex'
              width={88}
              height={88}
              className='rounded-2xl object-cover'
              style={{ boxShadow: '0 0 0 1px rgba(55,138,221,0.3)' }}
              priority
            />
          </div>

          <h1
            className='text-2xl font-black tracking-tight mb-1'
            style={{ color: '#e6f1fb' }}
          >
            LINAREX
          </h1>
          <p
            className='text-sm mb-3 text-center'
            style={{ color: '#85b7eb', opacity: 0.5 }}
          >
            Composer &amp; Creative Producer
          </p>
          <span
            className='text-xs rounded-full px-3 py-1 tracking-wide'
            style={{
              color: '#85b7eb',
              background: 'rgba(13,24,34,0.6)',
              border: '1px solid rgba(55,138,221,0.3)',
            }}
          >
            Funk Pop · Afrobeat Fusion
          </span>
        </motion.div>

        {/* Sections */}
        <div className='w-full space-y-6'>
          {LINK_SECTIONS.map((section) => (
            <div key={section.id}>
              <motion.p
                className='text-[10px] font-semibold tracking-[0.15em] uppercase mb-2.5 px-1'
                style={{ color: 'rgba(133,183,235,0.45)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {section.label}
              </motion.p>
              <div className='space-y-2'>
                {section.links.map((link, i) => (
                  <LinkRow key={link.id} link={link} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className='mt-10 flex flex-col items-center gap-1.5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            href='/'
            className='text-xs tracking-wide transition-colors'
            style={{ color: 'rgba(133,183,235,0.25)' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'rgba(133,183,235,0.7)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'rgba(133,183,235,0.25)')
            }
          >
            linares-press-kit.vercel.app
          </Link>
          <span
            className='text-[10px] tracking-widest uppercase'
            style={{ color: 'rgba(133,183,235,0.12)' }}
          >
            Press Kit 2026
          </span>
        </motion.div>
      </div>
    </main>
  );
}
