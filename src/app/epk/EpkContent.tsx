'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, ArrowUpRight, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PhotoGallery from '@/components/PhotoGallery';
import { bookingEmail, siteConfig, siteGenres } from '@/lib/site-config';
import styles from './epk.module.css';

const socialProfiles = [
  { name: 'Spotify', url: siteConfig.profiles.spotify },
  { name: 'YouTube', url: siteConfig.profiles.youtube },
  { name: 'Instagram', url: siteConfig.profiles.instagram },
  { name: 'TikTok', url: siteConfig.profiles.tiktok },
];

const performanceClips = [
  {
    title: 'Live Set — Full Room',
    label: 'Watch on YouTube',
    href: siteConfig.live.videoUrl,
    image: siteConfig.live.videoThumbnails.youtube,
    alt: 'Linarex and the band performing live',
  },
  {
    title: 'The Crowd — In Motion',
    label: 'Watch on Instagram',
    href: siteConfig.live.instagramVideoUrl,
    image: siteConfig.live.videoThumbnails.instagram,
    alt: 'The audience watching the Linarex Experience live show',
  },
];

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
              src='/img/portrait.jpg'
              alt='Portrait of Linarex'
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
            Original music from a Dominican-born, Warsaw-based composer and
            drummer.
          </p>
          <div className={styles.actions}>
            <a className={styles.bookingButton} href={bookingEmail}>
              Book the {siteConfig.liveShow}
              <ArrowUpRight size={16} aria-hidden='true' />
            </a>
            <a
              className={styles.primaryButton}
              href={siteConfig.releases[0].spotifyUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Listen to {siteConfig.releases[0].title}
            </a>
            <a
              className={styles.secondaryButton}
              href='/linarex-epk.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ArrowDownToLine size={15} aria-hidden='true' />
              Download PDF
            </a>
          </div>
          <a className={styles.heroEmail} href={bookingEmail}>
            {siteConfig.email}
          </a>
        </motion.header>

        <motion.section
          className={styles.section}
          aria-labelledby='about-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>The artist</p>
          <h2 className={styles.sectionTitle} id='about-title'>
            About {siteConfig.name}
          </h2>
          <p className={styles.bodyText}>
            {siteConfig.name} was born in the {siteConfig.origin} and is based
            in {siteConfig.location}. A multi-instrumentalist, {siteConfig.name}{' '}
            composes on guitar, piano and drums. With {siteConfig.yearsOnStage}{' '}
            years on stage, his musical roots span rock and progressive rock,
            jazz, funk and reggae.
          </p>
        </motion.section>

        <motion.section
          className={styles.section}
          aria-labelledby='music-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>Listen</p>
          <h2 className={styles.sectionTitle} id='music-title'>
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
                  sizes='(max-width: 640px) 72px, 88px'
                  className={styles.cover}
                />
                <div className={styles.releaseInfo}>
                  {index === 0 && (
                    <p className={styles.featuredLabel}>Featured single</p>
                  )}
                  <h3 className={styles.releaseTitle}>
                    <a
                      href={release.spotifyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {release.title}
                    </a>
                  </h3>
                  <p className={styles.releaseDescription}>
                    {release.description}
                  </p>
                  <p className={styles.releaseMeta}>
                    {release.year} · feat. {release.collaborator}
                  </p>
                </div>
                <a
                  className={styles.listenLink}
                  href={release.spotifyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Listen to ${release.title} on Spotify`}
                >
                  Spotify
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.liveProposal}
          aria-labelledby='live-show-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>For bookers</p>
          <h2 className={styles.sectionTitle} id='live-show-title'>
            The live show
          </h2>
          <p className={styles.bodyText}>
            The {siteConfig.liveShow} is a separate live experience, with its
            own show details, performance clips, photos and booking information.
          </p>

          <h3 className={styles.showName}>Linarex &amp; Jacke Matheus</h3>
          <p className={styles.showDescription}>
            {siteConfig.live.description}
          </p>

          <dl className={styles.bookerFacts}>
            <div className={styles.bookerFact}>
              <dt>Musicians on stage</dt>
              <dd>{siteConfig.live.musicians}</dd>
              <p>{siteConfig.live.instrumentsDescription}</p>
              <p>{siteConfig.live.expandableInstrumentsDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>Set length</dt>
              <dd>{siteConfig.live.setLength}</dd>
              <p>{siteConfig.live.setDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>Repertoire</dt>
              <dd>{siteConfig.live.repertoireLanguagesDescription}</dd>
              <p>{siteConfig.live.repertoireDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>First headline show</dt>
              <dd>{siteConfig.live.firstHeadlineShow}</dd>
            </div>
          </dl>

          <p className={styles.eventTypes}>
            {siteConfig.live.bookingAvailability}
          </p>
          <p className={styles.technicalDetails}>
            {siteConfig.live.technicalDetails}
          </p>
          <Link className={styles.proposalLink} href='/proposal'>
            Explore the {siteConfig.liveShow} proposal
          </Link>

          <div className={styles.performanceGrid}>
            {performanceClips.map((clip, index) => (
              <motion.a
                className={styles.performanceCard}
                key={clip.href}
                href={clip.href}
                target='_blank'
                rel='noopener noreferrer'
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <span className={styles.performanceImage}>
                  <Image
                    src={clip.image}
                    alt={clip.alt}
                    fill
                    sizes='(max-width: 640px) 100vw, 50vw'
                    className={styles.performanceThumbnail}
                  />
                  <span className={styles.playIcon} aria-hidden='true'>
                    <Play size={18} fill='currentColor' />
                  </span>
                </span>
                <span className={styles.performanceMeta}>
                  <strong>{clip.title}</strong>
                  <span>{clip.label}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <PhotoGallery variant='live' />
        <PhotoGallery variant='artist' />

        <motion.section
          className={styles.section}
          aria-labelledby='contact-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>Get in touch</p>
          <h2 className={styles.sectionTitle} id='contact-title'>
            Press & booking contact
          </h2>
          <a className={styles.email} href={bookingEmail}>
            {siteConfig.email}
          </a>
          <nav className={styles.socialLinks} aria-label='Linarex profiles'>
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {profile.name}
              </a>
            ))}
          </nav>
          <p className={styles.appleTodo}>{siteConfig.appleMusicTodo}</p>
        </motion.section>

        <footer className={styles.footer}>
          <span>
            {siteConfig.name} · {siteConfig.location}
          </span>
          <a
            href={siteConfig.profiles.spotify}
            target='_blank'
            rel='noopener noreferrer'
          >
            Listen on Spotify
          </a>
        </footer>
      </div>
    </main>
  );
}
