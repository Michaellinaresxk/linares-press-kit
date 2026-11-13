'use client';

import type { ReactNode } from 'react';
import { Disc3, Instagram, Youtube } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '@/lib/motion';
import { siteConfig } from '@/lib/site-config';
import styles from './connect-and-stream.module.css';

function SpotifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function TiktokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function AppleMusicIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.994 6.124a9.23 9.23 0 0 0-.215-2.037 3.535 3.535 0 0 0-.84-1.502 3.535 3.535 0 0 0-1.502-.84A9.23 9.23 0 0 0 19.4 1.53C18.148 1.5 17.73 1.5 12 1.5s-6.148 0-7.4.03a9.23 9.23 0 0 0-2.037.215 3.535 3.535 0 0 0-1.502.84 3.535 3.535 0 0 0-.84 1.502A9.23 9.23 0 0 0 .006 6.124C-.024 7.376-.024 7.794-.024 13.524s0 6.148.03 7.4a9.23 9.23 0 0 0 .215 2.037 3.535 3.535 0 0 0 .84 1.502 3.535 3.535 0 0 0 1.502.84 9.23 9.23 0 0 0 2.037.215c1.252.03 1.67.03 7.4.03s6.148 0 7.4-.03a9.23 9.23 0 0 0 2.037-.215 3.535 3.535 0 0 0 1.502-.84 3.535 3.535 0 0 0 .84-1.502 9.23 9.23 0 0 0 .215-2.037c.03-1.252.03-1.67.03-7.4s0-6.148-.03-7.4zM9.75 17.25V6.75l8.25 5.25-8.25 5.25z" />
    </svg>
  );
}

export default function ConnectAndStream({
  locale = 'en',
}: {
  locale?: 'en' | 'pl';
}) {
  const reduceMotion = useReducedMotion();
  const profiles = Object.entries(siteConfig.profiles).filter(([, url]) => url);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.5, ease: easeOut },
  };

  return (
    <section className={styles.section} aria-labelledby='connect-stream-title'>
      <div className={styles.inner}>
        <motion.div {...reveal}>
          <p className={styles.label}>
            {locale === 'pl' ? 'Łącz i streamuj' : 'Connect & Stream'}
          </p>
          <h2 className={styles.title} id='connect-stream-title'>
            {locale === 'pl' ? 'Znajdź Linarex online' : 'Find Linarex online'}
          </h2>
          <p className={styles.copy}>
            {locale === 'pl'
              ? 'Posłuchaj muzyki i śledź Linarex na platformach streamingowych i społecznościowych.'
              : 'Listen to the music and follow Linarex across streaming and social platforms.'}
          </p>
          <nav className={styles.grid} aria-label='Linarex profiles'>
            {profiles.map(([key, url]) => {
              const meta = ({
                spotify: {
                  label: 'Spotify',
                  icon: <SpotifyIcon size={22} />,
                  hint: locale === 'pl' ? 'Słuchaj muzyki' : 'Stream music',
                },
                youtube: {
                  label: 'YouTube',
                  icon: <Youtube size={22} />,
                  hint: locale === 'pl' ? 'Obejrzyj wideo' : 'Watch videos',
                },
                instagram: {
                  label: 'Instagram',
                  icon: <Instagram size={22} />,
                  hint: locale === 'pl' ? 'Śledź na Instagramie' : 'Follow updates',
                },
                tiktok: {
                  label: 'TikTok',
                  icon: <TiktokIcon size={22} />,
                  hint: locale === 'pl' ? 'Krótkie wideo' : 'Short videos',
                },
                appleMusic: {
                  label: 'Apple Music',
                  icon: <AppleMusicIcon size={22} />,
                  hint: locale === 'pl' ? 'Słuchaj muzyki' : 'Stream music',
                },
              } as Record<string, { label: string; icon: ReactNode; hint: string }>)[key] || {
                label: key,
                icon: <Disc3 size={22} />,
                hint: '',
              };

              return (
                <a
                  key={key}
                  href={url!}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.card}
                >
                  <span className={styles.icon}>{meta.icon}</span>
                  <span className={styles.text}>
                    <strong>{meta.label}</strong>
                    <span>{meta.hint}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden='true'>→</span>
                </a>
              );
            })}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
