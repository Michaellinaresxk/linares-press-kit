'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Music2, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import styles from './site-navigation.module.css';
import type { SiteLocale } from '@/lib/i18n/navigation';

export default function SiteNavigation({
  locale = 'en',
}: {
  locale?: SiteLocale;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const t = {
    en: {
      home: 'Home',
      liveShow: 'Live show',
      epk: 'EPK',
      booking: 'Book the show',
      menu: 'Open menu',
      close: 'Close menu',
      language: 'Language',
      caption: 'Music · Warsaw',
    },
    pl: {
      home: 'Start',
      liveShow: 'Koncert na żywo',
      epk: 'EPK',
      booking: 'Zarezerwuj koncert',
      menu: 'Otwórz menu',
      close: 'Zamknij menu',
      language: 'Język',
      caption: 'Muzyka · Warszawa',
    },
  }[locale];

  const homeHref = locale === 'pl' ? '/pl' : '/';
  const proposalHref = locale === 'pl' ? '/pl/proposal' : '/proposal';
  const epkHref = locale === 'pl' ? '/pl/epk' : '/epk';
  const contactHref = locale === 'pl' ? '/pl#contact' : '/#contact';

  // Simple language switch: map current path to other locale where possible
  const enHref = pathname.startsWith('/pl') ? pathname.replace(/^\/pl/, '') || '/' : pathname || '/';
  const plHref = pathname.startsWith('/pl') ? pathname : `/pl${pathname === '/' ? '' : pathname}`;

  const navLinks = [
    { href: homeHref, label: t.home, isActive: pathname === homeHref },
    {
      href: proposalHref,
      label: t.liveShow,
      isActive: pathname === proposalHref,
    },
    {
      href: epkHref,
      label: t.epk,
      isActive: pathname === epkHref,
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          className={styles.brand}
          href={homeHref}
          aria-label={`${siteConfig.name} home`}
        >
          <span className={styles.brandMark} aria-hidden="true">
            <Music2 size={17} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{siteConfig.name}</span>
            <span className={styles.brandCaption}>{t.caption}</span>
          </span>
        </Link>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={`${styles.navLink} ${link.isActive ? styles.navLinkActive : ''}`}
              href={link.href}
              aria-current={link.isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.langSwitch} aria-label={t.language}>
            <Link href={enHref} className={locale === 'en' ? styles.langActive : ''}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href={plHref} className={locale === 'pl' ? styles.langActive : ''}>PL</Link>
          </div>
          <Link className={styles.bookingLink} href={contactHref}>
            <span>{t.booking}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? t.close : t.menu}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <>
          <button
            type="button"
            className={styles.backdrop}
            aria-label={t.close}
            onClick={() => setOpen(false)}
          />
          <div id="mobile-nav-panel" className={styles.mobilePanel}>
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={`${styles.mobileLink} ${link.isActive ? styles.mobileLinkActive : ''}`}
                  href={link.href}
                  aria-current={link.isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className={styles.mobileLang} aria-label={t.language}>
                <Link href={enHref} className={locale === 'en' ? styles.langActive : ''} onClick={() => setOpen(false)}>English</Link>
                <span aria-hidden="true">·</span>
                <Link href={plHref} className={locale === 'pl' ? styles.langActive : ''} onClick={() => setOpen(false)}>Polski</Link>
              </div>
              <Link className={styles.mobileBooking} href={contactHref} onClick={() => setOpen(false)}>
                <span>{t.booking}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
