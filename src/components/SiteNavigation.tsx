import Link from 'next/link';
import { ArrowUpRight, Music2 } from 'lucide-react';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from './site-navigation.module.css';
import type { SiteLocale } from '@/lib/i18n/navigation';

export default function SiteNavigation({
  locale = 'en',
}: {
  locale?: SiteLocale;
}) {
  const t = {
    en: {
      liveShow: 'Live show',
      epk: 'EPK',
      booking: 'Book the show',
    },
    // Review by native speaker
    pl: {
      liveShow: 'Koncert na żywo',
      epk: 'EPK',
      booking: 'Zarezerwuj koncert',
    },
  }[locale];

  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';
  const epkHref = locale === 'pl' ? '/pl/epk' : '/epk';

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label='Main navigation'>
        <Link
          className={styles.brand}
          href='/'
          aria-label={`${siteConfig.name} home`}
        >
          <span className={styles.brandMark} aria-hidden='true'>
            <Music2 size={17} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{siteConfig.name}</span>
            <span className={styles.brandCaption}>Music · Warsaw</span>
          </span>
        </Link>
        <div className={styles.links}>
          <Link className={styles.navLink} href={proposalHref}>
            {t.liveShow}
          </Link>
          <Link className={styles.navLink} href={epkHref}>
            {t.epk}
          </Link>
          <a className={styles.bookingLink} href={bookingEmail}>
            <span>{t.booking}</span>
            <ArrowUpRight size={15} aria-hidden='true' />
          </a>
        </div>
      </nav>
    </header>
  );
}
