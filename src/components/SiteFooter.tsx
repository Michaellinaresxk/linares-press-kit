import Link from 'next/link';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from './site-footer.module.css';

const copy = {
  en: {
    taglineLine1: 'Live music · Warsaw, Poland',
    taglineLine2: 'Original songs, familiar hits, one room moving together.',
    liveShow: 'Live show',
    pressKit: 'Press kit',
    booking: 'Booking',
    navAria: 'Footer navigation',
  },
  // Review by native speaker
  pl: {
    taglineLine1: 'Muzyka na żywo · Warszawa, Polska',
    taglineLine2: 'Własne utwory, znane hity, jedna sala w ruchu.',
    liveShow: 'Koncert na żywo',
    pressKit: 'Press kit',
    booking: 'Rezerwacja',
    navAria: 'Nawigacja w stopce',
  },
} as const;

export type SiteFooterLocale = keyof typeof copy;

export default function SiteFooter({
  locale = 'en',
}: {
  locale?: SiteFooterLocale;
}) {
  const t = copy[locale];
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
            {t.taglineLine2}
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
          © {siteConfig.name} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
