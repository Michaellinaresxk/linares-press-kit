'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, Play } from 'lucide-react';
import BookerInfo from '@/components/BookerInfo';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import { epkCopy, withEpkVars, type EpkLocale } from '@/lib/i18n/epk';
import { bookingEmail, siteConfig, siteGenresOriginal } from '@/lib/site-config';
import styles from './epk.module.css';

export default function EpkView({ locale }: { locale: EpkLocale }) {
  const reduceMotion = useReducedMotion();
  const t = epkCopy[locale];
  const show = siteConfig.liveShow;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 },
  };

  const clips = [
    {
      title: t.liveSetTitle,
      label: t.liveSetLabel,
      href: show.videoUrl,
      image: show.videoThumbnails.youtube,
      alt: t.liveSetAlt,
    },
    {
      title: t.crowdTitle,
      label: t.crowdLabel,
      href: show.instagramVideoUrl,
      image: show.videoThumbnails.instagram,
      alt: t.crowdAlt,
    },
  ] as const;

  const listenToRelease = (releaseTitle: string) =>
    locale === 'pl'
      ? `${releaseTitle} · ${epkCopy.pl.listenOnSpotify}`
      : `Listen to ${releaseTitle}`;

  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';

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
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.name}>{siteConfig.name}</h1>
          <p className={styles.role}>{siteConfig.role}</p>
          <p className={styles.genres}>
            Original music: {siteGenresOriginal}
          </p>
          <p className={styles.pitch}>{t.pitch}</p>
          <div className={styles.actions}>
            <a className={styles.bookingButton} href={bookingEmail}>
              {t.bookingButton}
              <ArrowUpRight size={16} aria-hidden='true' />
            </a>
            <a
              className={styles.primaryButton}
              href={siteConfig.releases[0].spotifyUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {listenToRelease(siteConfig.releases[0].title)}
            </a>
            <a
              className={styles.secondaryButton}
              href='/linarex-epk.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ArrowDownToLine size={15} aria-hidden='true' />
              {t.downloadPdf}
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
          <p className={styles.sectionLabel}>{t.theArtist}</p>
          <h2 className={styles.sectionTitle} id='about-title'>
            {t.aboutTitle}
          </h2>
          <p className={styles.bodyText}>{withEpkVars(t.aboutText, {
            name: siteConfig.name,
            origin: siteConfig.origin,
            location: siteConfig.location,
            yearsOnStage: siteConfig.yearsOnStage,
          })}</p>
        </motion.section>

        <motion.section
          className={styles.section}
          aria-labelledby='music-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>{t.listenLabel}</p>
          <h2 className={styles.sectionTitle} id='music-title'>
            {t.musicTitle}
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
                <a
                  className={styles.listenLink}
                  href={release.spotifyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={
                    locale === 'pl'
                      ? `${epkCopy.pl.listenOnSpotify} ${release.title}`
                      : `Listen to ${release.title} on Spotify`
                  }
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
          <p className={styles.sectionLabel}>{t.forBookersLabel}</p>
          <h2 className={styles.sectionTitle} id='live-show-title'>
            {t.liveTitle}
          </h2>
          <p className={styles.bodyText}>
            {withEpkVars(t.liveBody, { showName: siteConfig.liveShow.name })}
          </p>

          <h3 className={styles.showName}>{siteConfig.liveShow.name}</h3>
          <p className={styles.showRole}>{t.liveShowSubtitle}</p>
          <p className={styles.showDescription}>
            {siteConfig.liveShow.description}
          </p>

          <dl className={styles.bookerFacts}>
            <div className={styles.bookerFact}>
              <dt>{t.musiciansOnStage}</dt>
              <dd>{siteConfig.liveShow.musicians}</dd>
              <p>{siteConfig.liveShow.instrumentsDescription}</p>
              <p>{siteConfig.liveShow.expandableInstrumentsDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>{t.setLength}</dt>
              <dd>{siteConfig.liveShow.setLength}</dd>
              <p>{siteConfig.liveShow.setDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>{t.repertoire}</dt>
              <dd>{siteConfig.liveShow.repertoireLanguagesDescription}</dd>
              <p>{siteConfig.liveShow.repertoireDescription}</p>
            </div>
            <div className={styles.bookerFact}>
              <dt>{t.firstHeadlineShow}</dt>
              <dd>{siteConfig.liveShow.firstHeadlineShow}</dd>
            </div>
          </dl>

          <p className={styles.eventTypes}>
            {siteConfig.liveShow.bookingAvailability}
          </p>
          <p className={styles.technicalDetails}>
            {siteConfig.liveShow.technicalDetails}
          </p>
          <Link className={styles.proposalLink} href={proposalHref}>
            {withEpkVars(t.openProposal, { showName: siteConfig.liveShow.name })}
          </Link>

          <BookerInfo locale={locale} />

          <div className={styles.performanceGrid}>
            {clips.map((clip, index) => (
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

        <PhotoGallery variant='artist' />

        <motion.section
          className={styles.section}
          aria-labelledby='contact-title'
          {...reveal}
        >
          <p className={styles.sectionLabel}>{t.getInTouch}</p>
          <h2 className={styles.sectionTitle} id='contact-title'>
            {t.contactTitle}
          </h2>
          <a className={styles.email} href={bookingEmail}>
            {siteConfig.email}
          </a>
          <nav className={styles.socialLinks} aria-label='Linarex profiles'>
            {siteConfig.profiles &&
              Object.entries(siteConfig.profiles).map(([key, profile]) => (
                <a key={key} href={profile ?? '#'} target='_blank' rel='noopener noreferrer'>
                  {key === 'spotify'
                    ? 'Spotify'
                    : key === 'youtube'
                      ? 'YouTube'
                      : key === 'instagram'
                        ? 'Instagram'
                        : key === 'tiktok'
                          ? 'TikTok'
                          : 'Apple Music'}
                </a>
              ))}
          </nav>
        </motion.section>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
