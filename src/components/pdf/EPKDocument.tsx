/**
 * EPKDocument.tsx
 *
 * Electronic Press Kit (EPK) PDF document for Linarex.
 * Generated server-side via /api/epk route using @react-pdf/renderer.
 *
 * Usage:
 *   import { EPKDocument } from '@/components/pdf/EPKDocument';
 *   const stream = await renderToStream(<EPKDocument />);
 *
 * react-pdf gotchas respected here:
 *   - <Link> only ever wraps <Text> (never <View>/<Image>).
 *   - No array styles (style={[a, b]}) — one flattened style object per node.
 *   - Absolute image URLs only (relative /img/... paths break in server render).
 *   - NO `flex: 1` on <body> — it reserves the whole page height and shoves the
 *     column block to page 2, leaving page 1 blank. Content just flows instead.
 */

import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

// ─── Design tokens ────────────────────────────────────────────────────────────
// Brand palette mirrors the web (LinksPage / About): deep navy surfaces, a
// #378add primary blue and #85b7eb light accent. Bold via fontFamily only.
const COLORS = {
  bg: '#080e14',
  surface: '#0d1822',
  surfaceAlt: '#101d29',
  border: '#1b3244',
  borderStrong: '#24435c',
  blue: '#378add',
  blueDark: '#185fa5',
  accent: '#85b7eb',
  textHi: '#e6f1fb',
  text: '#c8dcea',
  textMute: '#7c98ab',
  textFaint: '#4d6675',
  white: '#ffffff',
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: COLORS.bg,
    color: COLORS.white,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  linkReset: { textDecoration: 'none' },

  // ── HERO ──
  hero: {
    position: 'relative',
    height: 185,
    backgroundColor: COLORS.surface,
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    opacity: 0.4,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(6,12,20,0.6)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 26,
    left: 40,
    right: 40,
  },
  heroEyebrow: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 4,
    color: COLORS.accent,
    marginBottom: 5,
  },
  heroName: {
    fontSize: 38,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  heroSubtitle: {
    fontSize: 10.5,
    color: COLORS.text,
    marginTop: 6,
    letterSpacing: 1.5,
  },
  heroBadge: {
    position: 'absolute',
    top: 22,
    right: 40,
    backgroundColor: 'rgba(55,138,221,0.15)',
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  heroBadgeText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.accent,
    letterSpacing: 2,
  },

  // ── Body (no flex:1 — see header note) ──
  body: {
    paddingHorizontal: 40,
    paddingTop: 24,
    paddingBottom: 24,
  },

  // ── Section ──
  section: { marginBottom: 16 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionDot: {
    width: 4,
    height: 15,
    backgroundColor: COLORS.blue,
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 3,
    color: COLORS.textMute,
    textTransform: 'uppercase',
  },

  // ── Photos ──
  portrait: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    marginBottom: 14,
    objectFit: 'cover',
    objectPosition: 'center top', // ← controla qué zona se conserva
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  secondaryPhoto: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 14,
    objectFit: 'contain', // ← antes 'cover'
    backgroundColor: COLORS.surface, // ← el letterbox se lee como marco
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  // ── Bio ──
  bioText: {
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.7,
  },

  // ── Stats strip ──
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  statItem: { flex: 1, alignItems: 'center', paddingHorizontal: 4 },
  statDivider: {
    position: 'absolute',
    right: 0,
    top: 4,
    bottom: 4,
    width: 1,
    backgroundColor: COLORS.borderStrong,
  },
  statNumber: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    lineHeight: 1.1,
  },
  statLabel: {
    fontSize: 6.5,
    color: COLORS.textMute,
    letterSpacing: 1,
    marginTop: 3,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  // ── Two-column ──
  twoCol: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 16,
  },
  colLeft: { flex: 1.15 },
  colRight: { flex: 0.85 },

  // ── Quote ──
  quoteBlock: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.blue,
    borderStyle: 'solid',
    paddingLeft: 14,
  },
  quoteText: {
    fontSize: 9.5,
    fontFamily: 'Times-Roman',
    color: COLORS.text,
    lineHeight: 1.65,
  },

  // ── Discography card ──
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  trackCover: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 9,
    backgroundColor: COLORS.surfaceAlt,
    objectFit: 'cover',
  },
  trackInfo: { flex: 1 },
  trackTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    marginBottom: 2,
    textDecoration: 'none',
  },
  trackMeta: {
    fontSize: 6.5,
    color: COLORS.textMute,
    lineHeight: 1.4,
  },
  trackRight: { alignItems: 'flex-end', marginLeft: 6 },
  trackYear: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.blue,
  },
  trackDuration: {
    fontSize: 6.5,
    color: COLORS.textFaint,
    marginTop: 2,
  },

  // ── Platforms ──
  platformsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  platformBadge: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
    textDecoration: 'none',
  },
  platformText: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.text,
    letterSpacing: 0.5,
  },

  // ── Contact ──
  contactGrid: { flexDirection: 'row', gap: 10 },
  contactItem: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 11,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  contactRole: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    color: COLORS.textMute,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  contactEmail: {
    fontSize: 8,
    color: COLORS.accent,
    lineHeight: 1.5,
    textDecoration: 'none',
  },

  // ── Divider ──
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 18,
  },

  // ── Footer ──
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    borderStyle: 'solid',
    backgroundColor: COLORS.surface,
  },
  footerBrandRow: { flexDirection: 'row', alignItems: 'center' },
  footerAccent: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.blue,
  },
  footerLink: {
    fontSize: 7,
    color: COLORS.textFaint,
    letterSpacing: 0.5,
    textDecoration: 'none',
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const EPK_DATA = {
  artist: 'LINAREX',
  tagline: 'Drummer · Composer · Producer',
  genre: 'Rock / Funk / Fusion',
  year: '2026',

  bio: 'Linarex is a Dominican drummer, composer and producer based in Warsaw, Poland. With more than 20 years behind the drum kit and writing songs — much of it composing for other voices — his work is built on collaboration: he writes and produces each track, and guest vocalists bring the songs to life. Since his 2025 debut, Linarex has moved across rock, funk, afrobeat and folk, guided by one question: what does this emotion sound like? Always driven by true feeling..',

  quote:
    'Each song is an emotional journey through the human experience. May it slow you down — and may it also move you beyond the confines of yourself.',

  // Honest, defensible numbers only.
  stats: [
    { number: '20+', label: 'Years drumming & composing' },
    { number: '3', label: 'Singles as Linarex' },
    { number: '2025', label: 'Debut single' },
  ],

  // ── Photos ──
  // Absolute Cloudinary URLs only. All three currently point to your one good
  // photo as a placeholder — swap portraitImage / secondaryImage for real
  // live/studio shots whenever you have the URLs. heroImage is your atmospheric bg.
  heroImage:
    'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
  portraitImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
  // TODO(Linarex): replace with a DIFFERENT real photo (live or studio).
  secondaryImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg',

  // ── Discography (single source of truth — no duplicate Collaborations) ──
  releases: [
    {
      title: 'Renacer',
      artist: 'Linarex ft. Skiwa',
      genre: 'Funk Pop',
      producer: 'Pablo Cafici',
      duration: '3:16',
      year: '2026',
      cover:
        'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',
      spotify:
        'https://open.spotify.com/intl-es/album/5JVDDkvNP77b5yz235Qu0R?si=BHdZGV2wTmGklQUWrrJ-wg',
    },
    {
      title: 'Memories',
      artist: 'Linarex ft. Jacke Matthews',
      genre: 'Rock / Indie',
      producer: 'Okirius',
      duration: '4:03',
      year: '2026',
      cover:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1786661039/bg_qvvlw9.jpg',
      spotify:
        'https://open.spotify.com/intl-es/album/57gkaRLcx11qK4Ok1PYdyW?si=dU3cwdgkS-2Rf2u8SHihPw',
    },
    {
      title: 'Vaivén',
      artist: 'Linarex ft. Daniel Rivero',
      genre: 'Afrobeat Fusion',
      producer: 'Pablo Cafici',
      duration: '3:13',
      year: '2025',
      cover:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
      spotify: 'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
    },
  ],

  platforms: [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS?si=6-KHEpmPQ3mTHwnLdw2iDg',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCZIaGK7NF4roKF039W_7O1Q',
    },
    { name: 'Instagram', url: 'https://www.instagram.com/_linarex' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@linarex59' },
    // { name: 'Apple Music', url: '' }, // re-add with the real (non-404) URL
  ],

  contact: {
    // general: { role: 'General Inquiries', email: 'linarexinfo@gmail.com' },
    booking: { role: 'Booking & Management', email: 'linarexinfo@gmail.com' },
    // press: { role: 'Press & Media', email: 'linarexinfo@gmail.com' },
  },

  website: 'linares-press-kit.vercel.app',
  websiteUrl: 'https://linares-press-kit.vercel.app',
  spotify: 'open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
  spotifyUrl:
    'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS?si=6-KHEpmPQ3mTHwnLdw2iDg',
  instagram: 'instagram.com/_linarex',
  instagramUrl: 'https://www.instagram.com/_linarex',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionDot} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

function StatStrip() {
  const last = EPK_DATA.stats.length - 1;
  return (
    <View style={styles.statsRow}>
      {EPK_DATA.stats.map((s, i) => (
        <View key={s.label} style={styles.statItem}>
          <Text style={styles.statNumber}>{s.number}</Text>
          <Text style={styles.statLabel}>{s.label}</Text>
          {i < last && <View style={styles.statDivider} />}
        </View>
      ))}
    </View>
  );
}

function TrackCard({ track }: { track: (typeof EPK_DATA.releases)[0] }) {
  return (
    <View style={styles.trackCard}>
      <Image style={styles.trackCover} src={track.cover} />
      <View style={styles.trackInfo}>
        <Link src={track.spotify} style={styles.linkReset}>
          <Text style={styles.trackTitle}>{track.title}</Text>
        </Link>
        <Text style={styles.trackMeta}>{track.artist}</Text>
        <Text style={styles.trackMeta}>
          {track.genre} · prod. {track.producer}
        </Text>
      </View>
      <View style={styles.trackRight}>
        <Text style={styles.trackYear}>{track.year}</Text>
        <Text style={styles.trackDuration}>{track.duration}</Text>
      </View>
    </View>
  );
}

// ─── Main document ────────────────────────────────────────────────────────────

export function EPKDocument() {
  return (
    <Document
      title={`Linarex — Electronic Press Kit ${EPK_DATA.year}`}
      author='Linarex'
      subject='Electronic Press Kit'
      keywords='linarex, drummer, composer, rock, funk, fusion, producer'
      creator='Linarex Press Kit'
    >
      <Page size='A4' style={styles.page}>
        {/* HERO */}
        <View style={styles.hero}>
          <Image style={styles.heroBg} src={EPK_DATA.heroImage} />
          <View style={styles.heroOverlay} />

          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>PRESS KIT {EPK_DATA.year}</Text>
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.heroEyebrow}>ELECTRONIC PRESS KIT</Text>
            <Text style={styles.heroName}>{EPK_DATA.artist}</Text>
            <Text style={styles.heroSubtitle}>
              {EPK_DATA.tagline.toUpperCase()} · {EPK_DATA.genre.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* BODY */}
        <View style={styles.body}>
          <StatStrip />

          <View style={styles.twoCol}>
            {/* Left: Portrait + Bio + Quote */}
            <View style={styles.colLeft}>
              <Image style={styles.portrait} src={EPK_DATA.portraitImage} />

              <View style={styles.section}>
                <SectionHeader title='About' />
                <Text style={styles.bioText}>{EPK_DATA.bio}</Text>
              </View>

              <View style={styles.quoteBlock}>
                <Text style={styles.quoteText}>
                  &ldquo;{EPK_DATA.quote}&rdquo;
                </Text>
              </View>
            </View>

            {/* Right: Second photo + Discography */}
            <View style={styles.colRight}>
              <Image
                style={styles.secondaryPhoto}
                src={EPK_DATA.secondaryImage}
              />

              <View style={styles.section}>
                <SectionHeader title='Discography' />
                {EPK_DATA.releases.map((t) => (
                  <TrackCard key={t.title} track={t} />
                ))}
              </View>
            </View>
          </View>

          {/* Platforms — full width, clickable, name only */}
          <View style={styles.section}>
            <SectionHeader title='Listen On' />
            <View style={styles.platformsGrid}>
              {EPK_DATA.platforms.map((p) => (
                <Link key={p.name} src={p.url} style={styles.platformBadge}>
                  <Text style={styles.platformText}>
                    {p.name.toUpperCase()}
                  </Text>
                </Link>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          {/* Contact — clickable mailto links */}
          <View style={styles.section}>
            <SectionHeader title='Contact' />
            <View style={styles.contactGrid}>
              {Object.values(EPK_DATA.contact).map((c) => (
                <View key={c.role} style={styles.contactItem}>
                  <Text style={styles.contactRole}>{c.role}</Text>
                  <Link src={`mailto:${c.email}`} style={styles.contactEmail}>
                    {c.email}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.footerBrandRow}>
            <Text style={styles.footerAccent}>linarex</Text>
            <Text style={styles.footerLink}>{'  ·  '}</Text>
            <Link src={EPK_DATA.websiteUrl} style={styles.footerLink}>
              {EPK_DATA.website}
            </Link>
          </View>
          <Link src={EPK_DATA.spotifyUrl} style={styles.footerLink}>
            {EPK_DATA.spotify}
          </Link>
          <Link src={EPK_DATA.instagramUrl} style={styles.footerLink}>
            {EPK_DATA.instagram}
          </Link>
        </View>
      </Page>
    </Document>
  );
}
export default EPKDocument;
