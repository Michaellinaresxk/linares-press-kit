import Link from 'next/link';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import { sharedCopy } from '@/lib/i18n/shared';
import styles from './site-footer.module.css';

const copy = {
  en: {
    taglineLine1: 'Live music · Warsaw, Poland',
    liveShow: 'Live show',
    pressKit: 'Press kit',
    booking: 'Booking',
    navAria: 'Footer navigation',
    copyright: 'All rights reserved',
  },
  // Review by native speaker
  pl: {
    taglineLine1: 'Muzyka na żywo · Warszawa, Polska',
    liveShow: 'Koncert na żywo',
    pressKit: 'Materiały prasowe',
    booking: 'Rezerwacja',
    navAria: 'Nawigacja w stopce',
    copyright: 'Wszelkie prawa zastrzeżone',
  },
} as const;

export type SiteFooterLocale = keyof typeof copy;

export default function SiteFooter({
  locale = 'en',
}: {
  locale?: SiteFooterLocale;
}) {
  const t = copy[locale];
  const shared = sharedCopy[locale];
  const homeHref = locale === 'pl' ? '/pl' : '/';
  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';
  const epkHref = locale === 'pl' ? '/pl/epk' : '/epk';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href={homeHref} className={styles.name}>
            {siteConfig.name}
          </Link>
          <p>
            {t.taglineLine1}
            <br />
            {shared.footer.description}
          </p>
        </div>
        <nav className={styles.links} aria-label={t.navAria}>
          <Link href={proposalHref}>{t.liveShow}</Link>
          <Link href={epkHref} target='_blank' rel='noopener noreferrer'>
            {t.pressKit}
          </Link>
          <a
            href={siteConfig.profiles.spotify}
            target='_blank'
            rel='noopener noreferrer'
          >
            Spotify
          </a>
          <a
            href={siteConfig.profiles.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <a href={bookingEmail}>{t.booking}</a>
        </nav>
        <p className={styles.copyright}>
          © {siteConfig.name} · {t.copyright}
        </p>
      </div>
    </footer>
  );
}
