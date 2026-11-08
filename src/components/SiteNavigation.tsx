import Link from 'next/link';
import { ArrowUpRight, Music2 } from 'lucide-react';
import { bookingEmail, siteConfig } from '@/lib/site-config';
import styles from './site-navigation.module.css';

export default function SiteNavigation() {
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
          <Link className={styles.navLink} href='/proposal'>
            Live show
          </Link>
          <Link
            className={styles.navLink}
            href='/epk'
            target='_blank'
            rel='noopener noreferrer'
          >
            EPK
          </Link>
          <a className={styles.bookingLink} href={bookingEmail}>
            <span>Book the show</span>
            <ArrowUpRight size={15} aria-hidden='true' />
          </a>
        </div>
      </nav>
    </header>
  );
}
