'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '@/lib/motion';
import { ArrowDownToLine, ArrowUpRight, Play } from 'lucide-react';
import Contact from '@/components/Contact';
import PhotoGallery from '@/components/PhotoGallery';
import SiteFooter from '@/components/SiteFooter';
import {
  proposalCopy,
  withVars,
  type ProposalLocale,
} from '@/lib/i18n/proposal';
import { sharedCopy } from '@/lib/i18n/shared';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from '../app/(en)/live-show/live-show.module.css';

export default function ProposalView({ locale }: { locale: ProposalLocale }) {
  const reduceMotion = useReducedMotion();
  const t = proposalCopy[locale];
  const shared = sharedCopy[locale];
  const show = siteConfig.liveShow;
  const whatsapp = siteConfig.contact.whatsapp;
  const [playMainVideo, setPlayMainVideo] = useState(false);

  const localizedShow = {
    formats: locale === 'pl' ? '4-osobowy zespół · duet lub trio akustyczne (na życzenie)' : show.formats,
    instrumentsLine:
      locale === 'pl'
        ? 'Perkusja · Gitara · Bas · Klawisze · możliwość rozszerzenia o sekcję dętą i instrumenty perkusyjne'
        : `${show.instruments.join(' · ')} · ${show.expandableInstruments.join(', ')}`,
    setLength: locale === 'pl' ? '60–90 minut' : show.setLength,
    setDescription:
      locale === 'pl'
        ? 'Długość i przebieg koncertu dopasowane do charakteru wydarzenia.'
        : show.setDescription,
    repertoireDescription:
      locale === 'pl'
        ? 'Autorskie utwory oraz wybrane covery z różnych epok.'
        : show.repertoireDescription,
    languages: locale === 'pl' ? 'angielski · hiszpański · polski' : show.repertoireLanguages.join(' · '),
    eventTypes:
      locale === 'pl'
        ? 'kluby i bary, festiwale, wydarzenia prywatne i firmowe oraz imprezy miejskie i plenerowe'
        : show.eventTypes,
    logistics:
      locale === 'pl'
        ? 'Zespół z Warszawy, dostępny w całej Polsce. Pełna setlista i rider techniczny na życzenie.'
        : show.logistics || show.availability || '',
  };

  const liveReferences = [
    {
      title:
        locale === 'pl'
          ? 'Koncert na żywo — pełna sala'
          : 'Live Set — Full Room',
      label: locale === 'pl' ? 'Obejrzyj na YouTube' : 'Watch on YouTube',
      href: show.videoUrl,
      image: show.videoThumbnails.youtube,
      alt:
        locale === 'pl'
          ? 'Pełna sala podczas koncertu Linarex Experience'
          : 'Full room watching Linarex Experience perform live',
    },
    {
      title: locale === 'pl' ? 'Publiczność w ruchu' : 'The Crowd — In Motion',
      label: locale === 'pl' ? 'Obejrzyj na YouTube' : 'Watch on YouTube',
      href: show.instagramVideoUrl,
      image: show.videoThumbnails.instagram,
      alt:
        locale === 'pl'
          ? 'Tańcząca publiczność na koncercie Linarex Experience'
          : 'Crowd dancing at a Linarex Experience show',
    },
  ] as const;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby='proposal-title'>
        <Image
          src='/img/risas.jpg'
          alt={
            locale === 'pl'
              ? 'Linarex i Jacke Matheus dzielący wspólny moment'
              : 'Linarex and Jacke Matheus sharing a moment together'
          }
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
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: easeOut },
                },
              }}
            >
              <Link
                href='/live-show'
                aria-current={locale === 'en' ? 'page' : undefined}
                className={locale === 'en' ? styles.langActive : undefined}
              >
                EN
              </Link>
              <span aria-hidden='true'>|</span>
              <Link
                href='/pl/live-show'
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
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easeOut },
                },
              }}
            >
              {shared.brand.tagline}
            </motion.p>
            <motion.h1
              id='proposal-title'
              className={styles.heroTitle}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: easeOut },
                },
              }}
            >
              {siteConfig.liveShow.name.toUpperCase()}
            </motion.h1>
            <motion.p
              className={styles.heroPitch}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: easeOut },
                },
              }}
            >
              {t.heroPitch}
            </motion.p>
            <motion.div
              className={styles.heroActions}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: easeOut },
                },
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
                href={
                  locale === 'pl'
                    ? siteConfig.documents.liveShowPdfPl
                    : siteConfig.documents.liveShowPdf
                }
                download
              >
                <ArrowDownToLine size={17} aria-hidden='true' />
                {t.heroPdf}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className={styles.content}>
        <motion.section
          className={styles.section}
          aria-labelledby='video-title'
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.sectionLabel} data-step='01'>
            {t.videoLabel}
          </p>
          <h2 id='video-title' className={styles.sectionTitle}>
            {t.videoTitle}
          </h2>
          <div style={{ marginTop: 24, maxWidth: 960 }}>
            {playMainVideo ? (
              <video
                controls
                autoPlay
                playsInline
                preload='metadata'
                aria-label={t.embeddedVideoLabel}
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: 12,
                  background: '#000',
                  display: 'block',
                }}
              >
                <source src='https://res.cloudinary.com/michaelxk-com/video/upload/v1794582357/linarex/videos/672e3775-1f72-4f74-b4a4-e5c6616fc9b6_dhbonv.mov' />
                {locale === 'pl'
                  ? 'Twoja przeglądarka nie obsługuje odtwarzania wideo.'
                  : 'Your browser does not support the video tag.'}
              </video>
            ) : (
              <button
                type='button'
                onClick={() => setPlayMainVideo(true)}
                aria-label={`${locale === 'pl' ? 'Odtwórz wideo' : 'Play video'}: ${t.embeddedVideoLabel}`}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  border: 0,
                  padding: 0,
                  borderRadius: 12,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#000',
                  display: 'block',
                }}
              >
                <Image
                  src='https://res.cloudinary.com/michaelxk-com/image/upload/v1789319376/linarex/DSC00109_fijgbd.jpg'
                  alt=''
                  fill
                  sizes='(max-width: 960px) 100vw, 960px'
                  style={{ objectFit: 'cover' }}
                />
                <span
                  aria-hidden='true'
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.1))',
                  }}
                />
                <span
                  aria-hidden='true'
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(8, 12, 16, 0.6)',
                    border: '1px solid rgba(255,255,255,0.7)',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Play size={24} fill='currentColor' />
                </span>
              </button>
            )}
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
          <p className={styles.bodyText}>{t.experienceBody}</p>
          {t.trajectory ? <p className={styles.bodyText}>{t.trajectory}</p> : null}
        </motion.section>

        <motion.section
          className={styles.section}
          aria-labelledby='live-show-title'
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.sectionLabel} data-step='03'>
            {t.liveShowLabel}
          </p>
          <h2 id='live-show-title' className={styles.sectionTitle}>
            {t.liveShowTitle}
          </h2>
          <p className={styles.bodyText}>{shared.live.intro}</p>

          <p className={styles.tagLabel} style={{ marginTop: 28 }}>
            {t.liveReferencesLabel}
          </p>
          <div className={styles.performanceGrid} style={{ marginTop: 14 }}>
            {liveReferences.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
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
                    src={item.image}
                    alt={item.alt}
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
                    <strong>{item.title}</strong>
                    <span className={styles.videoLabel}>{item.label}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden='true' />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <section className={styles.section} aria-labelledby='artists-title'>
          <p className={styles.sectionLabel} data-step='04'>
            {t.peopleLabel}
          </p>
          <h2 id='artists-title' className={styles.sectionTitle}>
            {t.peopleTitle}
          </h2>
          <div className={styles.artistGrid}>
            {siteConfig.live.artists.map((artist, index) => {
              const isLinarex = artist.name === siteConfig.name;
              const isJacke = artist.name === 'Jacke Matheus';
              const role = isLinarex
                ? shared.people.linarex.role
                : locale === 'pl' && isJacke
                  ? 'Wokalista i gitarzysta'
                  : artist.role;
              const origin =
                locale === 'pl' && isJacke
                  ? 'Kolumbia'
                  : locale === 'pl' && isLinarex
                    ? 'Dominikana'
                    : artist.origin;
              const description = isLinarex
                ? shared.people.linarex.bio
                : locale === 'pl' && isJacke
                  ? 'Kolumbijski wokalista i gitarzysta, którego obecność sceniczna wciąga publiczność w występ.'
                  : artist.description;
              const imageAlt = isLinarex
                ? locale === 'pl'
                  ? 'Linarex, kompozytor i perkusista z Dominikany'
                  : artist.imageAlt
                : locale === 'pl' && isJacke
                  ? 'Jacke Matheus, kolumbijski wokalista i gitarzysta'
                  : artist.imageAlt;

              return (
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
                      alt={imageAlt}
                      fill
                      sizes='(max-width: 700px) 100vw, 50vw'
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.artistInfo}>
                    <p className={styles.artistOrigin}>{origin}</p>
                    <h3>{artist.name}</h3>
                    <p className={styles.artistRole}>{role}</p>
                    <p className={styles.artistDescription}>{description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className={styles.section} aria-labelledby='glance-title'>
          <p className={styles.sectionLabel} data-step='05'>
            {t.glanceLabel}
          </p>
          <h2 id='glance-title' className={styles.sectionTitle}>
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
                label: t.formats,
                value: localizedShow.formats,
                lines: [localizedShow.instrumentsLine],
              },
              {
                label: t.setLength,
                value: localizedShow.setLength,
                lines: [localizedShow.setDescription],
              },
              {
                label: t.repertoire,
                value: localizedShow.repertoireDescription,
                lines: [],
              },
              {
                label: t.languages,
                value: localizedShow.languages,
                lines: [],
              },
              {
                label: t.idealFor,
                value: localizedShow.eventTypes,
                lines: [],
              },
              {
                label: t.logistics,
                value: localizedShow.logistics,
                lines: [],
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
                  {fact.lines.filter(Boolean).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </section>

        <section className={styles.section} aria-label={t.photosAria}>
          <p className={styles.sectionLabel} data-step='06'>
            {locale === 'pl' ? 'Galeria' : 'Gallery'}
          </p>
          <div className={styles.gallerySection}>
            <PhotoGallery variant='live' locale={locale} />
          </div>
          <blockquote className={styles.photoQuote}>
            <p>{t.galleryPhrase}</p>
          </blockquote>
        </section>

        <section className={styles.booking} aria-labelledby='booking-title'>
          <div>
            <p className={styles.sectionLabel} data-step='07'>
              {t.bookingLabel}
            </p>
            <h2 id='booking-title' className={styles.sectionTitle}>
              {t.bookingTitle}
            </h2>
            <p className={styles.bodyText}>
              {withVars(t.bookingBody, { showName: siteConfig.liveShow.name })}
            </p>
            <div className={styles.bookingActions}>
              <a className={styles.textLink} href={bookingEmail}>
                {siteConfig.email}
              </a>
              {whatsapp && (
                <a
                  className={styles.secondaryAction}
                  href={`https://wa.me/${whatsapp}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t.whatsapp}
                  <ArrowUpRight size={17} aria-hidden='true' />
                </a>
              )}
              <Link
                className={styles.textLink}
                href={locale === 'pl' ? '/pl/epk' : '/epk'}
                target='_blank'
                rel='noopener noreferrer'
              >
                {t.openEpk}
              </Link>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Contact locale={locale} mode='booking' embedded />
          </div>
        </section>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
