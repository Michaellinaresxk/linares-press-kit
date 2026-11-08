import { bookingEmail, siteConfig } from '@/lib/site-config';
import YouTubeFacade from './YouTubeFacade';
import styles from './booker-info.module.css';

type Locale = 'en' | 'pl';

const copy = {
  en: {
    soundTitle: 'How does it sound live?',
    playTitle: 'What do you play?',
    sampleSetlist: 'Sample setlist',
    covers: 'Covers',
    originals: 'Originals',
    techTitle: 'What do you need technically?',
    techCta: 'Download tech rider & stage plot (PDF)',
    whereTitle: 'Where can you play?',
    feeTitle: 'How much?',
    bookedTitle: 'Who has booked you?',
    datesTitle: 'Upcoming shows',
    noDates: 'New dates coming soon — ask about availability',
    askAvailability: 'Ask about availability',
    contactTitle: 'Fast contact',
    whatsapp: 'Message on WhatsApp',
    email: 'Email',
  },
  // Review by native speaker
  pl: {
    soundTitle: 'Jak brzmi to na żywo?',
    playTitle: 'Co gracie?',
    sampleSetlist: 'Przykładowa setlista',
    covers: 'Covery',
    originals: 'Autorskie utwory',
    techTitle: 'Czego potrzebujecie technicznie?',
    techCta: 'Pobierz rider techniczny i stage plot (PDF)',
    whereTitle: 'Gdzie możecie zagrać?',
    feeTitle: 'Ile to kosztuje?',
    bookedTitle: 'Kto was już rezerwował?',
    datesTitle: 'Najbliższe koncerty',
    noDates: 'Nowe terminy już wkrótce — zapytaj o dostępność',
    askAvailability: 'Zapytaj o termin',
    contactTitle: 'Szybki kontakt',
    whatsapp: 'Napisz na WhatsApp',
    email: 'E-mail',
  },
} as const;

function formatShowDate(date: string, locale: Locale) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat(locale === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export default function BookerInfo({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const show = siteConfig.liveShow;
  const hasCovers = (show.sampleSetlist?.covers?.length ?? 0) > 0;
  const hasOriginals = (show.sampleSetlist?.originals?.length ?? 0) > 0;
  const hasSetlist = hasCovers || hasOriginals;
  const hasTestimonials = show.testimonials.length > 0;
  const hasShows = siteConfig.shows.length > 0;
  const whatsapp = siteConfig.contact.whatsapp;

  const videoLd = show.video
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: show.video.title,
        embedUrl: `https://www.youtube-nocookie.com/embed/${show.video.youtubeId}`,
        thumbnailUrl:
          show.videoThumbnails.youtube ||
          `https://i.ytimg.com/vi/${show.video.youtubeId}/hqdefault.jpg`,
        uploadDate: '2026-01-01',
      }
    : null;

  const eventLd = hasShows
    ? siteConfig.shows.map((event) => ({
        '@context': 'https://schema.org',
        '@type': 'MusicEvent',
        name: `${siteConfig.liveShow.name} — ${event.venue}`,
        startDate: event.date,
        location: {
          '@type': 'Place',
          name: event.venue,
          address: {
            '@type': 'PostalAddress',
            addressLocality: event.city,
            addressCountry: 'PL',
          },
        },
        performer: {
          '@type': 'MusicGroup',
          name: siteConfig.liveShow.name,
        },
        ...(event.url ? { url: event.url } : {}),
      }))
    : [];

  return (
    <section className={styles.section} aria-label='For bookers'>
      {videoLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
        />
      )}
      {eventLd.length > 0 && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
        />
      )}

      {show.video && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.soundTitle}</h3>
          <YouTubeFacade
            youtubeId={show.video.youtubeId}
            title={show.video.title}
            thumbnailUrl={show.videoThumbnails.youtube}
          />
        </div>
      )}

      {hasSetlist && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.playTitle}</h3>
          <p className={styles.label}>{t.sampleSetlist}</p>
          <div className={styles.setlist}>
            {hasCovers && (
              <div>
                <p className={styles.subLabel}>{t.covers}</p>
                <ul className={styles.list}>
                  {show.sampleSetlist!.covers.map((song) => (
                    <li key={song}>{song}</li>
                  ))}
                </ul>
              </div>
            )}
            {hasOriginals && (
              <div>
                <p className={styles.subLabel}>{t.originals}</p>
                <ul className={styles.list}>
                  {show.sampleSetlist!.originals.map((song) => (
                    <li key={song}>{song}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {show.techRiderUrl && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.techTitle}</h3>
          <a className={styles.cta} href={show.techRiderUrl} download>
            {t.techCta}
          </a>
        </div>
      )}

      {show.availability && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.whereTitle}</h3>
          <p className={styles.text}>{show.availability}</p>
        </div>
      )}

      {show.feeNote && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.feeTitle}</h3>
          <p className={styles.text}>{show.feeNote}</p>
        </div>
      )}

      {hasTestimonials && (
        <div className={styles.block}>
          <h3 className={styles.question}>{t.bookedTitle}</h3>
          {show.testimonials.map((item) => (
            <blockquote key={`${item.name}-${item.venue}`} className={styles.quote}>
              <p>“{item.quote}”</p>
              <footer>
                {item.name} · {item.venue}
              </footer>
            </blockquote>
          ))}
        </div>
      )}

      <div className={styles.block}>
        <h3 className={styles.question}>{t.datesTitle}</h3>
        {hasShows ? (
          <ul className={styles.shows}>
            {siteConfig.shows.map((event) => (
              <li key={`${event.date}-${event.venue}`}>
                <strong>{formatShowDate(event.date, locale)}</strong>
                <span>
                  {event.venue} · {event.city}
                </span>
                {event.url && (
                  <a href={event.url} target='_blank' rel='noopener noreferrer'>
                    Info
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.text}>{t.noDates}</p>
        )}
        <a className={styles.textLink} href={bookingEmail}>
          {t.askAvailability}
        </a>
      </div>

      <div className={styles.block}>
        <h3 className={styles.question}>{t.contactTitle}</h3>
        <div className={styles.contacts}>
          <a className={styles.cta} href={bookingEmail}>
            {t.email}: {siteConfig.email}
          </a>
          {whatsapp && (
            <a
              className={styles.ctaSecondary}
              href={`https://wa.me/${whatsapp}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t.whatsapp}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
