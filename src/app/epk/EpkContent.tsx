'use client';

import Image from 'next/image';
import { ArrowDownToLine, ArrowUpRight, Disc3, Instagram, Youtube } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Contact from '@/components/Contact';
import PhotoGallery from '@/components/PhotoGallery';
import { bookingEmail, siteConfig, siteGenres } from '@/lib/site-config';
import styles from '@/components/epk.module.css';

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

const socialProfiles = [
  { name: 'Spotify', url: siteConfig.profiles.spotify, icon: <SpotifyIcon size={22} />, hint: 'Stream music' },
  { name: 'YouTube', url: siteConfig.profiles.youtube, icon: <Youtube size={22} />, hint: 'Watch videos' },
  { name: 'Instagram', url: siteConfig.profiles.instagram, icon: <Instagram size={22} />, hint: 'Follow updates' },
  { name: 'TikTok', url: siteConfig.profiles.tiktok, icon: <TiktokIcon size={22} />, hint: 'Short videos' },
].filter((profile) => profile.url);

export default function EpkContent() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 },
  };

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <motion.header
          className={styles.hero}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.portrait}>
            <Image
              src="/img/portrait.jpg"
              alt="Portrait of Linarex"
              width={144}
              height={144}
              priority
            />
          </div>
          <p className={styles.eyebrow}>Electronic Press Kit</p>
          <h1 className={styles.name}>{siteConfig.name}</h1>
          <p className={styles.role}>{siteConfig.role}</p>
          <p className={styles.genres}>{siteGenres}</p>
          <p className={styles.pitch}>
            Original music from a Dominican-born, Warsaw-based composer and drummer.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={bookingEmail}>
              Contact / booking
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className={styles.secondaryButton}
              href={siteConfig.releases[0].spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Disc3 size={16} aria-hidden="true" />
              Listen to {siteConfig.releases[0].title}
            </a>
            <a
              className={styles.secondaryButton}
              href="/linarex-epk.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowDownToLine size={15} aria-hidden="true" />
              Download PDF
            </a>
          </div>
          <nav className={styles.platformGrid} aria-label="Linarex profiles">
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url!}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.platformButton}
              >
                <span className={styles.platformIcon}>{profile.icon}</span>
                <span className={styles.platformText}>
                  <strong>{profile.name}</strong>
                  <span>{profile.hint}</span>
                </span>
                <span className={styles.platformArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
        </motion.header>

        <motion.section className={styles.section} aria-labelledby="about-title" {...reveal}>
          <p className={styles.sectionLabel}>The artist</p>
          <h2 className={styles.sectionTitle} id="about-title">
            About {siteConfig.name}
          </h2>
          <p className={styles.bodyText}>
            {siteConfig.name} was born in the {siteConfig.origin} and is based in{' '}
            {siteConfig.location}. A multi-instrumentalist, {siteConfig.name} composes on
            guitar, piano and drums. With {siteConfig.yearsOnStage} years on stage, his
            musical roots span rock and progressive rock, jazz, funk and reggae. His
            compositions are guided by one question: what does this emotion sound like?
          </p>
        </motion.section>

        <motion.section className={styles.section} aria-labelledby="music-title" {...reveal}>
          <p className={styles.sectionLabel}>Listen</p>
          <h2 className={styles.sectionTitle} id="music-title">
            Music
          </h2>
          <div className={styles.releases}>
            {siteConfig.releases.map((release, index) => (
              <motion.article
                className={styles.release}
                key={release.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
              >
                <Image
                  src={release.coverImage}
                  alt={`${release.title} single cover`}
                  width={112}
                  height={112}
                  sizes="(max-width: 640px) 72px, 88px"
                  className={styles.cover}
                />
                <div className={styles.releaseInfo}>
                  {index === 0 && <p className={styles.featuredLabel}>Featured single</p>}
                  <h3 className={styles.releaseTitle}>
                    <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      {release.title}
                    </a>
                  </h3>
                  <p className={styles.releaseDescription}>{release.description}</p>
                  <p className={styles.releaseMeta}>
                    {release.year} · feat. {release.collaborator}
                  </p>
                </div>
                <a
                  className={styles.listenLink}
                  href={release.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Listen to ${release.title} on Spotify`}
                >
                  Spotify
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <PhotoGallery variant="artist" />

        <section id="contact" aria-labelledby="contact-title">
          <Contact locale="en" />
        </section>

        <footer className={styles.footer}>
          <span>
            {siteConfig.name} · {siteConfig.location}
          </span>
          <a href={siteConfig.profiles.spotify} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </footer>
      </div>
    </main>
  );
}
