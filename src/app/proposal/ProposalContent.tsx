'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, Play } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from './proposal.module.css';

const performances = [
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
    alt: 'The audience watching the Linarex and Jacke Matheus live show',
  },
] as const;

const showTags = [
  'Funk & Afrobeat',
  'Pop Anthems',
  'Rock Classics',
  'Latin Hits',
  'Original Songs',
  siteConfig.live.setLengthShort,
] as const;

export default function ProposalContent() {
  const reduceMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby='proposal-title'>
        <Image
          src='/img/risas.jpg'
          alt='Linarex and Jacke Matheus sharing a moment together'
          fill
          priority
          sizes='100vw'
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <motion.div
          className={styles.heroContent}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>Live music · Warsaw, Poland</p>
            <h1 id='proposal-title' className={styles.heroTitle}>
              LINAREX
              <br />
              <span>&amp;</span>
              <br />
              JACKE
              <br />
              MATHEUS
            </h1>
            <p className={styles.heroPitch}>
              The band that turns any night into the one people talk about.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href={bookingEmail}>
                Ask about booking
                <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <a
                className={styles.secondaryAction}
                href='/Live-Music-Proposal.pdf'
                download
              >
                <ArrowDownToLine size={17} aria-hidden='true' />
                Download proposal PDF
              </a>
            </div>
          </div>
          <div className={styles.heroTags} aria-label='Show genres and duration'>
            {showTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
        <p className={styles.heroCaption}>
          First headline show · {siteConfig.live.firstHeadlineShow}
        </p>
      </section>

      <div className={styles.content}>
        <motion.section
          className={styles.intro}
          aria-labelledby='experience-title'
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionLabel}>The experience</p>
          <h2 id='experience-title' className={styles.sectionTitle}>
            The party is the point.
          </h2>
          <p className={styles.lead}>
            Linarex &amp; Jacke Matheus are a live band built to do one thing:
            turn your venue into the best night of the week.
          </p>
          <p className={styles.bodyText}>
            Two Latin artists — Colombia and the Dominican Republic — with
            their own music and years on stage, backed by a lineup of
            Warsaw-based professionals. They play the hits everyone knows and
            their own songs that hit just as hard: funk, pop, rock, Latin and
            afrobeat.
          </p>
          <p className={styles.bodyText}>
            Not a jukebox or background music: a real act that fills the floor,
            keeps the room moving and gives your crowd a reason to stay. Made
            for {siteConfig.live.eventTypes}.
          </p>
        </motion.section>

        <section className={styles.section} aria-labelledby='energy-title'>
          <p className={styles.sectionLabel}>What happens</p>
          <h2 id='energy-title' className={styles.sectionTitle}>
            The energy
          </h2>
          <p className={styles.energyLead}>Dance. Jump. Sing every word.</p>
          <p className={styles.bodyText}>
            Hit after hit, country after country — with original songs woven in
            that land just as hard. The crowd doesn’t sit still. From the first
            song to the last, the room stays alive.
          </p>
          <div className={styles.pills}>
            {[...showTags.slice(0, 5), siteConfig.live.setLength, 'EN · ES · PL repertoire'].map(
              (tag) => (
                <span className={styles.pill} key={tag}>
                  {tag}
                </span>
              ),
            )}
          </div>
        </section>

        <section className={styles.section} aria-labelledby='stage-title'>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel}>See it live</p>
              <h2 id='stage-title' className={styles.sectionTitle}>
                See Linarex &amp; Jacke Matheus on stage.
              </h2>
            </div>
          </div>
          <div className={styles.performanceGrid}>
            {performances.map((performance, index) => (
              <motion.a
                key={performance.href}
                href={performance.href}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.performanceCard}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <span className={styles.performanceImage}>
                  <Image
                    src={performance.image}
                    alt={performance.alt}
                    fill
                    sizes='(max-width: 700px) 100vw, 50vw'
                    className={styles.cardImage}
                  />
                  <span className={styles.playIcon} aria-hidden='true'>
                    <Play size={18} fill='currentColor' />
                  </span>
                </span>
                <span className={styles.performanceMeta}>
                  <span>
                    <strong>{performance.title}</strong>
                    <span className={styles.videoLabel}>{performance.label}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden='true' />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby='artists-title'>
          <p className={styles.sectionLabel}>The people</p>
          <h2 id='artists-title' className={styles.sectionTitle}>
            Who’s playing
          </h2>
          <div className={styles.artistGrid}>
            {siteConfig.live.artists.map((artist, index) => (
              <motion.article
                key={artist.name}
                className={styles.artistCard}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.artistImage}>
                  <Image
                    src={artist.image}
                    alt={artist.imageAlt}
                    fill
                    sizes='(max-width: 700px) 100vw, 50vw'
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.artistInfo}>
                  <p className={styles.artistOrigin}>{artist.origin}</p>
                  <h3>{artist.name}</h3>
                  <p className={styles.artistRole}>{artist.role}</p>
                  <p className={styles.artistDescription}>
                    {artist.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby='setup-title'>
          <p className={styles.sectionLabel}>At a glance</p>
          <h2 id='setup-title' className={styles.sectionTitle}>
            What to expect
          </h2>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>On stage</dt>
              <dd>
                {siteConfig.live.musicians}
                <p>{siteConfig.live.instruments.join(' · ')}</p>
                <p className={styles.factNote}>
                  Expandable for larger stages:{' '}
                  {siteConfig.live.expandableInstruments.join(' · ')}.
                </p>
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Set length</dt>
              <dd>
                {siteConfig.live.setLength}
                <p>{siteConfig.live.setDescription}</p>
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Repertoire</dt>
              <dd>
                {siteConfig.live.repertoireLanguages.join(' · ')}
                <p>{siteConfig.live.repertoireDescription}</p>
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Availability</dt>
              <dd>
                Ask about dates
                <p>{siteConfig.live.availability}</p>
              </dd>
            </div>
          </dl>
          <p className={styles.technicalDetails}>
            {siteConfig.live.technicalDetails}
          </p>
        </section>

        <section className={styles.gallerySection} aria-label='Live show photos'>
          <PhotoGallery variant='live' />
        </section>

        <blockquote className={styles.photoQuote}>
          <p>Nobody came to sit down.</p>
        </blockquote>

        <section className={styles.booking} aria-labelledby='booking-title'>
          <div>
            <p className={styles.sectionLabel}>Bring the show to your room</p>
            <h2 id='booking-title' className={styles.sectionTitle}>
              Let’s make it happen.
            </h2>
            <p className={styles.bodyText}>
              Ask about dates, event details and booking the {siteConfig.liveShow}.
            </p>
          </div>
          <div className={styles.bookingActions}>
            <a className={styles.primaryAction} href={bookingEmail}>
              {siteConfig.email}
              <ArrowUpRight size={17} aria-hidden='true' />
            </a>
            <Link className={styles.textLink} href='/epk' target='_blank' rel='noopener noreferrer'>
              Open the EPK
            </Link>
            <a
              className={styles.textLink}
              href={siteConfig.profiles.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              Listen on Spotify
            </a>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Link href='/' className={styles.footerName}>
              {siteConfig.name}
            </Link>
            <p>
              Live music · Warsaw, Poland
              <br />
              Original songs, familiar hits, one room moving together.
            </p>
          </div>
          <nav className={styles.footerLinks} aria-label='Footer navigation'>
            <Link href='/proposal'>Live show</Link>
            <Link href='/epk' target='_blank' rel='noopener noreferrer'>
              Press kit
            </Link>
            <a href={siteConfig.profiles.spotify} target='_blank' rel='noopener noreferrer'>
              Spotify
            </a>
            <a href={siteConfig.profiles.instagram} target='_blank' rel='noopener noreferrer'>
              Instagram
            </a>
            <a href={bookingEmail}>Booking</a>
          </nav>
          <p className={styles.footerCopyright}>
            © {siteConfig.name} · All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
