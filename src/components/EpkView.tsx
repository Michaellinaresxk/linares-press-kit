'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, Disc3, Play, Send } from 'lucide-react';
import BookerInfo from '@/components/BookerInfo';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import { epkCopy, withEpkVars, type EpkLocale } from '@/lib/i18n/epk';
import { easeOut } from '@/lib/motion';
import {
  bookingEmail,
  siteConfig,
  siteGenresOriginal,
} from '@/lib/site-config';
import styles from './epk.module.css';

export default function EpkView({ locale }: { locale: EpkLocale }) {
  const reduceMotion = useReducedMotion();
  const t = epkCopy[locale];
  const show = siteConfig.liveShow;
  const contactHref = locale === 'pl' ? '/pl#contact' : '/#contact';
  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.5, ease: easeOut },
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

  const facts = [
    {
      label: t.originLabel,
      value: siteConfig.origin,
      detail: siteConfig.role,
    },
    {
      label: t.basedInLabel,
      value: siteConfig.location,
      detail: show.bookingAvailability,
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
    {
      label: locale === 'pl' ? 'Show' : 'Live show',
      value: show.name,
      detail: `${show.setLength} · ${show.repertoireLanguages.join(' / ')}`,
    },
  ];

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
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
                }
          }
        >
          <div className={styles.heroTop}>
            <motion.div
              className={styles.portrait}
              variants={{
                hidden: { opacity: 0, scale: 0.94, y: 8 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
              }}
            >
              <Image
                src='/img/portrait.jpg'
                alt={locale === 'pl' ? 'Portret Linarex' : 'Portrait of Linarex'}
                width={144}
                height={144}
                priority
              />
            </motion.div>

            <div className={styles.heroMain}>
              <motion.p
                className={styles.eyebrow}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } } }}
              >
                {t.eyebrow}
              </motion.p>
              <motion.h1
                className={styles.name}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: easeOut } } }}
              >
                {siteConfig.name}
              </motion.h1>
              <motion.p
                className={styles.role}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } } }}
              >
                {siteConfig.role}
              </motion.p>
              <motion.p
                className={styles.genres}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } } }}
              >
                {locale === 'pl' ? 'Muzyka autorska' : 'Original music'}: {siteGenresOriginal}
              </motion.p>
            </div>
          </div>

          <motion.p
            className={styles.pitch}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
          >
            {t.pitch}
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
          >
            <a
              className={styles.primaryButton}
              href={siteConfig.documents.epkPdf}
              download
            >
              <ArrowDownToLine size={16} aria-hidden='true' />
              {t.downloadPdf}
            </a>
            <a
              className={styles.secondaryButton}
              href={siteConfig.profiles.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Disc3 size={16} aria-hidden='true' />
              {t.spotifyCatalog}
            </a>
            <Link className={styles.secondaryButton} href={contactHref}>
              <Send size={16} aria-hidden='true' />
              {t.contactCta}
            </Link>
          </motion.div>

          <motion.div
            className={styles.quickFacts}
            aria-label={t.quickFacts}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45, ease: easeOut } } }}
          >
            {facts.map((fact) => (
              <div className={styles.factCard} key={fact.label}>
                <p className={styles.factLabel}>{fact.label}</p>
                <strong>{fact.value}</strong>
                <span>{fact.detail}</span>
              </div>
            ))}
          </motion.div>
        </motion.header>

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <motion.section className={styles.section} aria-labelledby='about-title' {...reveal}>
            <p className={styles.sectionLabel}>{t.theArtist}</p>
            <h2 className={styles.sectionTitle} id='about-title'>
              {t.aboutTitle}
            </h2>
            <p className={styles.bodyText}>
              {withEpkVars(t.aboutText, {
                name: siteConfig.name,
                origin: siteConfig.origin,
                location: siteConfig.location,
                yearsOnStage: siteConfig.yearsOnStage,
              })}
            </p>
          </motion.section>

          <motion.section className={styles.section} aria-labelledby='music-title' {...reveal}>
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
                    {index === 0 && <p className={styles.featuredLabel}>{t.featuredSingle}</p>}
                    <h3 className={styles.releaseTitle}>
                      <a href={release.spotifyUrl} target='_blank' rel='noopener noreferrer'>
                        {release.title}
                      </a>
                    </h3>
                    <p className={styles.releaseDescription}>{release.description}</p>
                    <p className={styles.releaseMeta}>
                      {release.year} · {locale === 'pl' ? 'feat.' : 'feat.'} {release.collaborator}
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
              <p>{locale === 'pl' ? 'Pełny katalog, single i profile artysty.' : 'Full catalog, singles and artist profile.'}</p>
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

        <motion.section className={styles.liveProposal} aria-labelledby='live-show-title' {...reveal}>
          <p className={styles.sectionLabel}>{t.forBookersLabel}</p>
          <h2 className={styles.sectionTitle} id='live-show-title'>
            {t.liveTitle}
          </h2>
          <p className={styles.bodyText}>
            {withEpkVars(t.liveBody, { showName: siteConfig.liveShow.name })}
          </p>

          <h3 className={styles.showName}>{siteConfig.liveShow.name}</h3>
          <p className={styles.showRole}>{t.liveShowSubtitle}</p>
          <p className={styles.showDescription}>{siteConfig.liveShow.description}</p>

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

          <div className={styles.metaBlock}>
            <p className={styles.metaLine}>{siteConfig.liveShow.bookingAvailability}</p>
            <p className={styles.metaLine}>{siteConfig.liveShow.technicalDetails}</p>
          </div>

          <div className={styles.actions}>
            <Link className={styles.ghostButton} href={proposalHref}>
              {withEpkVars(t.openProposal, { showName: siteConfig.liveShow.name })}
              <ArrowUpRight size={15} aria-hidden='true' />
            </Link>
          </div>

          <BookerInfo locale={locale} />

          <div className={styles.performanceGrid}>
            {clips.map((clip) => (
              <a
                className={styles.performanceCard}
                key={clip.href}
                href={clip.href}
                target='_blank'
                rel='noopener noreferrer'
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
              </a>
            ))}
          </div>
        </motion.section>

        <PhotoGallery variant='artist' locale={locale} />

        <motion.section className={styles.contactPanel} aria-labelledby='contact-title' {...reveal}>
          <p className={styles.sectionLabel}>{t.getInTouch}</p>
          <h2 className={styles.sectionTitle} id='contact-title'>
            {t.contactTitle}
          </h2>
          <p className={styles.bodyText}>
            {locale === 'pl'
              ? 'Rezerwacje, press, współprace i zapytania o koncert na żywo.'
              : 'Bookings, press, collaborations and live show inquiries.'}
          </p>
          <div className={styles.contactActions}>
            <Link className={styles.primaryButton} href={contactHref}>
              <Send size={16} aria-hidden='true' />
              {t.contactCta}
            </Link>
            <a
              className={styles.secondaryButton}
              href={siteConfig.profiles.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Disc3 size={16} aria-hidden='true' />
              {t.spotifyCatalog}
            </a>
            <a
              className={styles.secondaryButton}
              href={siteConfig.documents.epkPdf}
              download
            >
              <ArrowDownToLine size={16} aria-hidden='true' />
              {t.downloadPdf}
            </a>
          </div>
          <a className={styles.email} href={bookingEmail}>
            {siteConfig.email}
          </a>
          <nav className={styles.socialLinks} aria-label='Linarex profiles'>
            {Object.entries(siteConfig.profiles)
              .filter(([, url]) => url)
              .map(([key, url]) => (
                <a key={key} href={url!} target='_blank' rel='noopener noreferrer'>
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
