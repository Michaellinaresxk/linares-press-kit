'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownToLine,
  Disc3,
  Instagram,
  Play,
  Send,
  Youtube,
} from 'lucide-react';
import Contact from '@/components/Contact';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import { epkCopy, withEpkVars, type EpkLocale } from '@/lib/i18n/epk';
import { easeOut } from '@/lib/motion';
import { siteConfig, siteGenresOriginal } from '@/lib/site-config';
import styles from './epk.module.css';

function SpotifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
    </svg>
  );
}

function TiktokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z' />
    </svg>
  );
}

function AppleMusicIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M23.994 6.124a9.23 9.23 0 0 0-.215-2.037 3.535 3.535 0 0 0-.84-1.502 3.535 3.535 0 0 0-1.502-.84A9.23 9.23 0 0 0 19.4 1.53C18.148 1.5 17.73 1.5 12 1.5s-6.148 0-7.4.03a9.23 9.23 0 0 0-2.037.215 3.535 3.535 0 0 0-1.502.84 3.535 3.535 0 0 0-.84 1.502A9.23 9.23 0 0 0 .006 6.124C-.024 7.376-.024 7.794-.024 13.524s0 6.148.03 7.4a9.23 9.23 0 0 0 .215 2.037 3.535 3.535 0 0 0 .84 1.502 3.535 3.535 0 0 0 1.502.84 9.23 9.23 0 0 0 2.037.215c1.252.03 1.67.03 7.4.03s6.148 0 7.4-.03a9.23 9.23 0 0 0 2.037-.215 3.535 3.535 0 0 0 1.502-.84 3.535 3.535 0 0 0 .84-1.502 9.23 9.23 0 0 0 .215-2.037c.03-1.252.03-1.67.03-7.4s0-6.148-.03-7.4zM9.75 17.25V6.75l8.25 5.25-8.25 5.25z' />
    </svg>
  );
}

export default function EpkView({ locale }: { locale: EpkLocale }) {
  const reduceMotion = useReducedMotion();
  const t = epkCopy[locale];

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.5, ease: easeOut },
  };

  const facts = [
    {
      label: t.originLabel,
      value: siteConfig.origin,
      detail: siteConfig.role,
    },
    {
      label: t.basedInLabel,
      value: siteConfig.location,
      detail: '',
    },
    {
      label: t.experienceLabel,
      value: `${siteConfig.yearsOnStage} ${locale === 'pl' ? 'lat' : 'years'}`,
      detail: locale === 'pl' ? 'na scenie' : 'on stage',
    },
    {
      label: locale === 'pl' ? 'Muzyka' : 'Music',
      value: siteGenresOriginal,
      detail: locale === 'pl' ? 'katalog i wydania' : 'catalog & releases',
    },
  ];

  const profiles = Object.entries(siteConfig.profiles).filter(([, url]) => url);

  const liveVideos = [
    {
      title: t.liveSetTitle,
      label: t.liveSetLabel,
      href: siteConfig.liveShow.videoUrl,
      image: siteConfig.liveShow.videoThumbnails.youtube,
      alt: t.liveSetAlt,
    },
    {
      title: t.crowdTitle,
      label: t.crowdLabel,
      href: siteConfig.liveShow.instagramVideoUrl,
      image: siteConfig.liveShow.videoThumbnails.instagram,
      alt: t.crowdAlt,
    },
  ] as const;

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <nav className={styles.langSwitch} aria-label={t.langSwitcherAria}>
          <Link
            href='/epk'
            aria-current={locale === 'en' ? 'page' : undefined}
            className={locale === 'en' ? styles.langActive : undefined}
          >
            EN
          </Link>
          <span aria-hidden='true'>|</span>
          <Link
            href='/pl/epk'
            aria-current={locale === 'pl' ? 'page' : undefined}
            className={locale === 'pl' ? styles.langActive : undefined}
          >
            PL
          </Link>
        </nav>

        <motion.header
          className={styles.hero}
          initial={reduceMotion ? false : 'hidden'}
          animate='show'
          variants={
            reduceMotion
              ? undefined
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
                  },
                }
          }
        >
          <div className={styles.heroTop}>
            <motion.div
              className={styles.portrait}
              variants={{
                hidden: { opacity: 0, scale: 0.94, y: 8 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easeOut },
                },
              }}
            >
              <Image
                src='/img/portrait.jpg'
                alt={
                  locale === 'pl' ? 'Portret Linarex' : 'Portrait of Linarex'
                }
                width={144}
                height={144}
                priority
              />
            </motion.div>

            <div className={styles.heroMain}>
              <motion.p
                className={styles.eyebrow}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: easeOut },
                  },
                }}
              >
                {t.eyebrow}
              </motion.p>
              <motion.h1
                className={styles.name}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.58, ease: easeOut },
                  },
                }}
              >
                {siteConfig.name}
              </motion.h1>
              <motion.p
                className={styles.role}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: easeOut },
                  },
                }}
              >
                {siteConfig.role}
              </motion.p>
              <motion.p
                className={styles.genres}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: easeOut },
                  },
                }}
              >
                {locale === 'pl' ? 'Muzyka autorska' : 'Original music'}:{' '}
                {siteGenresOriginal}
              </motion.p>
            </div>
          </div>

          <motion.p
            className={styles.pitch}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
          >
            {t.pitch}
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
          >
            <a
              className={styles.primaryButton}
              href={siteConfig.documents.epkPdf}
              download
            >
              <ArrowDownToLine size={16} aria-hidden='true' />
              {t.downloadPdf}
            </a>
            <a className={styles.secondaryButton} href='#music'>
              <Disc3 size={16} aria-hidden='true' />
              {t.spotifyCatalog}
            </a>
            <a className={styles.secondaryButton} href='#contact'>
              <Send size={16} aria-hidden='true' />
              {t.contactCta}
            </a>
          </motion.div>

          <motion.div
            className={styles.quickFacts}
            aria-label={t.quickFacts}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 0.45, ease: easeOut },
              },
            }}
          >
            {facts.map((fact) => (
              <div className={styles.factCard} key={fact.label}>
                <p className={styles.factLabel}>{fact.label}</p>
                <strong>{fact.value}</strong>
                {fact.detail ? <span>{fact.detail}</span> : null}
              </div>
            ))}
          </motion.div>
        </motion.header>

        <div className={styles.grid}>
          <motion.section
            className={styles.section}
            aria-labelledby='about-title'
            {...reveal}
          >
            <p className={styles.sectionLabel}>{t.theArtist}</p>
            <h2 className={styles.sectionTitle} id='about-title'>
              {t.aboutTitle}
            </h2>
            <p className={styles.bodyText}>
              {withEpkVars(t.aboutText, {
                name: siteConfig.name,
                origin: siteConfig.origin,
                location: siteConfig.location,
                yearsOnStage: String(siteConfig.yearsOnStage),
              })}
            </p>
          </motion.section>

          <motion.section
            className={styles.section}
            aria-labelledby='live-title'
            id='live'
            {...reveal}
          >
            <p className={styles.sectionLabel}>
              {locale === 'pl' ? 'Na żywo' : 'Live show'}
            </p>
            <h2 className={styles.sectionTitle} id='live-title'>
              {t.liveTitle}
            </h2>
            <p className={styles.bodyText}>
              {withEpkVars(t.liveBody, { showName: siteConfig.liveShow.name })}
            </p>

            <dl className={styles.bookerFacts}>
              <div className={styles.bookerFact}>
                <dt>{t.firstHeadlineShow}</dt>
                <dd>{siteConfig.liveShow.firstHeadlineShow}</dd>
              </div>
              <div className={styles.bookerFact}>
                <dt>{t.setLength}</dt>
                <dd>{siteConfig.liveShow.setLength}</dd>
              </div>
              <div className={styles.bookerFact}>
                <dt>{t.repertoire}</dt>
                <dd>{siteConfig.liveShow.repertoireLanguages.join(' · ')}</dd>
                <p>{siteConfig.liveShow.instruments.join(' · ')}</p>
              </div>
            </dl>

            <div className={styles.performanceGrid}>
              {liveVideos.map((video) => (
                <a
                  key={video.href}
                  href={video.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.performanceCard}
                >
                  <span className={styles.performanceImage}>
                    <Image
                      src={video.image}
                      alt={video.alt}
                      fill
                      sizes='(max-width: 700px) 100vw, 50vw'
                      className={styles.performanceThumbnail}
                    />
                    <span className={styles.playIcon} aria-hidden='true'>
                      <Play size={18} fill='currentColor' />
                    </span>
                  </span>
                  <span className={styles.performanceMeta}>
                    <strong>{video.title}</strong>
                    <span>{video.label}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.catalogBar}>
              <p>
                {locale === 'pl'
                  ? 'Pełna oferta koncertu: repertuar, skład i warunki.'
                  : 'Full live offer: repertoire, lineup and booking details.'}
              </p>
              <Link
                className={styles.secondaryButton}
                href={locale === 'pl' ? '/pl/proposal' : '/proposal'}
              >
                {withEpkVars(t.openProposal, {
                  showName: siteConfig.liveShow.name,
                })}
              </Link>
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            aria-labelledby='music-title'
            id='music'
            {...reveal}
          >
            <p className={styles.sectionLabel}>{t.listenLabel}</p>
            <h2 className={styles.sectionTitle} id='music-title'>
              {t.musicTitle}
            </h2>
            <div className={styles.releases}>
              {siteConfig.releases.map((release, index) => (
                <article className={styles.release} key={release.id}>
                  <Image
                    src={release.coverImage}
                    alt={`${release.title} cover`}
                    width={84}
                    height={84}
                    sizes='84px'
                    className={styles.cover}
                  />
                  <div className={styles.releaseInfo}>
                    {index === 0 && (
                      <p className={styles.featuredLabel}>{t.featuredSingle}</p>
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
                  <div className={styles.releaseActions}>
                    <a
                      className={styles.listenLink}
                      href={release.spotifyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${t.listenOnSpotify}: ${release.title}`}
                    >
                      Spotify
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.catalogBar}>
              <p>
                {locale === 'pl'
                  ? 'Pełny katalog, single i profile artysty.'
                  : 'Full catalog, singles and artist profile.'}
              </p>
              <a
                className={styles.secondaryButton}
                href={siteConfig.profiles.spotify}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Disc3 size={16} aria-hidden='true' />
                {t.spotifyCatalog}
              </a>
            </div>
          </motion.section>
        </div>

        <PhotoGallery variant='artist' locale={locale} />

        <motion.section
          className={styles.connectStream}
          aria-labelledby='connect-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>
            {locale === 'pl' ? 'Łącz i streamuj' : 'Connect & Stream'}
          </p>
          <h2 className={styles.sectionTitle} id='connect-title'>
            {locale === 'pl' ? 'Znajdź Linarex online' : 'Find Linarex online'}
          </h2>
          <p className={styles.bodyText}>
            {locale === 'pl'
              ? 'Posłuchaj muzyki i śledź Linarex na platformach streamingowych i społecznościowych.'
              : 'Listen to the music and follow Linarex across streaming and social platforms.'}
          </p>
          <nav className={styles.platformGrid} aria-label='Linarex profiles'>
            {profiles.map(([key, url]) => {
              const meta = {
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
                  hint:
                    locale === 'pl' ? 'Śledź na Instagramie' : 'Follow updates',
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
              }[key as string] || {
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
                  className={styles.platformButton}
                >
                  <span className={styles.platformIcon}>{meta.icon}</span>
                  <span className={styles.platformText}>
                    <strong>{meta.label}</strong>
                    <span>{meta.hint}</span>
                  </span>
                  <span className={styles.platformArrow} aria-hidden='true'>
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </motion.section>

        <section id='contact'>
          <Contact locale={locale} />
        </section>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
