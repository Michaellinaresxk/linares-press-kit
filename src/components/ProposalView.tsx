'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '@/lib/motion';
import { ArrowDownToLine, ArrowUpRight, Play } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import { proposalCopy, withVars, type ProposalLocale } from '@/lib/i18n/proposal';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from '../app/(en)/proposal/proposal.module.css';

export default function ProposalView({ locale }: { locale: ProposalLocale }) {
  const reduceMotion = useReducedMotion();
  const t = proposalCopy[locale];
  const show = siteConfig.liveShow;

  const performances = [
    {
      title: t.liveSetTitle,
      label: t.watchYoutube,
      href: show.videoUrl,
      image: show.videoThumbnails.youtube,
      alt: t.liveSetAlt,
    },
    {
      title: t.crowdTitle,
      label: t.watchInstagram,
      href: show.instagramVideoUrl,
      image: show.videoThumbnails.instagram,
      alt: t.crowdAlt,
    },
  ] as const;

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
          initial={reduceMotion ? false : 'hidden'}
          animate='show'
          variants={
            reduceMotion
              ? undefined
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.075, delayChildren: 0.12 },
                  },
                }
          }
        >
          <div className={styles.heroMain}>
            <motion.nav
              className={styles.langSwitch}
              aria-label={t.langSwitcherAria}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
              }}
            >
              <Link
                href='/proposal'
                aria-current={locale === 'en' ? 'page' : undefined}
                className={locale === 'en' ? styles.langActive : undefined}
              >
                EN
              </Link>
              <span aria-hidden='true'>|</span>
              <Link
                href='/pl/proposal'
                aria-current={locale === 'pl' ? 'page' : undefined}
                className={locale === 'pl' ? styles.langActive : undefined}
              >
                PL
              </Link>
            </motion.nav>
            <motion.p
              className={styles.eyebrow}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
              }}
            >
              {t.eyebrow}
            </motion.p>
            <motion.h1
              id='proposal-title'
              className={styles.heroTitle}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
              }}
            >
              {siteConfig.liveShow.name.toUpperCase()}
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
              }}
            >
              {siteConfig.live.artists[0].name} &amp;{' '}
              {siteConfig.live.artists[1].name}
            </motion.p>
            <motion.p
              className={styles.heroPitch}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              {t.heroPitch}
            </motion.p>
            <motion.div
              className={styles.heroActions}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              <Link
                className={styles.primaryAction}
                href={locale === 'pl' ? '/pl#contact' : '/#contact'}
              >
                {t.heroCta}
                <ArrowUpRight size={17} aria-hidden='true' />
              </Link>
              <a
                className={styles.secondaryAction}
                href={siteConfig.documents.proposalPdf}
                download
              >
                <ArrowDownToLine size={17} aria-hidden='true' />
                {t.heroPdf}
              </a>
            </motion.div>
          </div>
          <motion.div
            className={styles.heroTags}
            aria-label={t.liveRepertoireLabel}
            variants={{
              hidden: { opacity: 0, x: 16 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
          >
            <p className={styles.tagLabel}>{t.liveRepertoireLabel}:</p>
            <div className={styles.tagList}>
              {[...siteConfig.genres.live, show.setLengthShort].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <p className={styles.heroCaption}>
          {t.firstHeadlineShow} · {show.firstHeadlineShow}
        </p>
      </section>

      <div className={styles.content}>
        <motion.section
          className={styles.section}
          aria-labelledby='stage-title'
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel} data-step='01'>
                {t.stageLabel}
              </p>
              <h2 id='stage-title' className={styles.sectionTitle}>
                {t.stageTitle}
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
        </motion.section>

        <motion.section
          className={styles.intro}
          aria-labelledby='experience-title'
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionLabel} data-step='02'>
            {t.experienceLabel}
          </p>
          <h2 id='experience-title' className={styles.sectionTitle}>
            {t.experienceTitle}
          </h2>
          <p className={styles.lead}>{t.experienceLead}</p>
          <p className={styles.bodyText}>{t.experienceBody1}</p>
          <p className={styles.bodyText}>
            {withVars(t.experienceBody2, { eventTypes: show.eventTypes })}
          </p>
        </motion.section>

        <section className={styles.section} aria-labelledby='energy-title'>
          <p className={styles.sectionLabel} data-step='03'>
            {t.energyLabel}
          </p>
          <h2 id='energy-title' className={styles.sectionTitle}>
            {t.energyTitle}
          </h2>
          <p className={styles.energyLead}>{t.energyLead}</p>
          <p className={styles.bodyText}>{t.energyBody}</p>
          <div className={styles.pillsGroup}>
            <p className={styles.tagLabel}>{t.liveRepertoireLabel}:</p>
            <div className={styles.pills}>
              {[...siteConfig.genres.live, show.setLength].map((tag) => (
                <span className={styles.pill} key={tag}>
                  {tag}
                </span>
              ))}
              <span className={styles.pill}>
                {show.repertoireLanguages.join(' · ')}
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby='artists-title'>
          <p className={styles.sectionLabel} data-step='04'>
            {t.peopleLabel}
          </p>
          <h2 id='artists-title' className={styles.sectionTitle}>
            {t.peopleTitle}
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
                  <p className={styles.artistDescription}>{artist.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby='setup-title'>
          <p className={styles.sectionLabel} data-step='05'>
            {t.glanceLabel}
          </p>
          <h2 id='setup-title' className={styles.sectionTitle}>
            {t.glanceTitle}
          </h2>
          <motion.dl
            className={styles.facts}
            initial={reduceMotion ? false : 'hidden'}
            whileInView='show'
            viewport={{ once: true, amount: 0.12 }}
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07 } },
                  }
            }
          >
            {[
              {
                label: t.onStage,
                value: show.musicians,
                lines: [
                  show.instruments.join(' · '),
                  `${t.expandable}: ${show.expandableInstruments.join(' · ')}.`,
                ],
                note: true,
              },
              {
                label: t.setLength,
                value: show.setLength,
                lines: [show.setDescription],
              },
              {
                label: t.repertoire,
                value: show.repertoireLanguages.join(' · '),
                lines: [show.repertoireDescription],
              },
              {
                label: t.availability,
                value: t.askDates,
                lines: [show.availability],
              },
              {
                label: t.idealFor,
                value: show.eventTypes,
                lines: [show.bookingAvailability],
              },
            ].map((fact) => (
              <motion.div
                className={styles.fact}
                key={fact.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: easeOut },
                  },
                }}
              >
                <dt>{fact.label}</dt>
                <dd>
                  {fact.value}
                  {fact.lines[0] && <p>{fact.lines[0]}</p>}
                  {fact.lines[1] && (
                    <p className={fact.note ? styles.factNote : undefined}>
                      {fact.lines[1]}
                    </p>
                  )}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
          <p className={styles.technicalDetails}>{show.technicalDetails}</p>
        </section>

        <section className={styles.gallerySection} aria-label={t.photosAria}>
          <PhotoGallery variant='live' locale={locale} />
        </section>

        <blockquote className={styles.photoQuote}>
          <p>{t.quote}</p>
        </blockquote>

        <section className={styles.booking} aria-labelledby='booking-title'>
          <div>
            <p className={styles.sectionLabel} data-step='06'>
              {t.bookingLabel}
            </p>
            <h2 id='booking-title' className={styles.sectionTitle}>
              {t.bookingTitle}
            </h2>
            <p className={styles.bodyText}>
              {withVars(t.bookingBody, { showName: siteConfig.liveShow.name })}
            </p>
          </div>
          <div className={styles.bookingActions}>
            <a className={styles.primaryAction} href={bookingEmail}>
              {siteConfig.email}
              <ArrowUpRight size={17} aria-hidden='true' />
            </a>
            <Link
              className={styles.textLink}
              href='/epk'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t.openEpk}
            </Link>
            <a
              className={styles.textLink}
              href={siteConfig.profiles.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t.listenSpotify}
            </a>
          </div>
        </section>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
