import Link from 'next/link';
import { links } from '@/lib/links';
import { siteConfig } from '@/lib/site-config';
import { sharedCopy } from '@/lib/i18n/shared';
import styles from './site-footer.module.css';

const copy = {
  en: {
    taglineLine1: 'Live music · Warsaw, Poland',
    liveShow: 'Live show',
    pressKit: 'Press kit',
    navAria: 'Footer navigation',
  },
  // Review by native speaker
  pl: {
    taglineLine1: 'Muzyka na żywo · Warszawa, Polska',
    liveShow: 'Koncert na żywo',
    pressKit: 'Materiały prasowe',
    navAria: 'Nawigacja w stopce',
  },
} as const;

export type SiteFooterLocale = keyof typeof copy;

function withFooterVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

export default function SiteFooter({
  locale = 'en',
}: {
  locale?: SiteFooterLocale;
}) {
  const t = copy[locale];
  const shared = sharedCopy[locale];
  const homeHref = locale === 'pl' ? '/pl' : '/';
  const liveShowHref = locale === 'pl' ? '/pl/live-show' : '/live-show';
  const epkHref = locale === 'pl' ? '/pl/epk' : '/epk';
  const year = String(new Date().getFullYear());

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
          <Link href={liveShowHref}>{t.liveShow}</Link>
          <Link href={epkHref} target='_blank' rel='noopener noreferrer'>
            {t.pressKit}
          </Link>
          <a
            href={links.profiles.spotifyArtist}
            target='_blank'
            rel='noopener noreferrer'
          >
            Spotify
          </a>
          <a
            href={links.profiles.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <Link href='#contact'>{shared.cta.bookShow}</Link>
        </nav>
        <p className={styles.copyright}>
          {withFooterVars(shared.footer.copyright, {
            year,
            name: siteConfig.name,
          })}
        </p>
      </div>
    </footer>
  );
}
