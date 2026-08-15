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
 *   - Images use absolute URLs only (relative paths break in server rendering).
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

  row: { flexDirection: 'row' },
  flex1: { flex: 1 },
  linkReset: { textDecoration: 'none' },

  // ── HERO ──
  hero: {
    position: 'relative',
    height: 200,
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
    bottom: 28,
    left: 40,
    right: 40,
  },
  heroEyebrow: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 4,
    color: COLORS.accent,
    marginBottom: 6,
  },
  heroName: {
    fontSize: 40,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  heroSubtitle: {
    fontSize: 11,
    color: COLORS.text,
    marginTop: 6,
    letterSpacing: 1.5,
  },
  heroBadge: {
    position: 'absolute',
    top: 24,
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

  // ── Body ──
  body: {
    paddingHorizontal: 40,
    paddingTop: 26,
    paddingBottom: 30,
    flex: 1,
  },

  // ── Section ──
  section: { marginBottom: 18 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionDot: {
    width: 4,
    height: 16,
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
    height: 140,
    borderRadius: 8,
    marginBottom: 16,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  secondaryPhoto: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },

  // ── Bio ──
  bioText: {
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.75,
  },

  // ── Stats strip ──
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  statItem: { flex: 1, alignItems: 'center' },
  statDivider: {
    position: 'absolute',
    right: 0,
    top: 4,
    bottom: 4,
    width: 1,
    backgroundColor: COLORS.borderStrong,
  },
  statNumber: {
    fontSize: 19,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    lineHeight: 1.1,
  },
  statLabel: {
    fontSize: 7,
    color: COLORS.textMute,
    letterSpacing: 1.5,
    marginTop: 3,
    textTransform: 'uppercase',
  },

  // ── Two-column ──
  twoCol: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 18,
  },
  colLeft: { flex: 1.15 },
  colRight: { flex: 0.85 },

  // ── Quote ──
  quoteBlock: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.blue,
    borderStyle: 'solid',
    paddingLeft: 14,
    marginBottom: 18,
  },
  quoteText: {
    fontSize: 10,
    fontFamily: 'Times-Roman',
    color: COLORS.text,
    lineHeight: 1.7,
  },

  // ── Discography card ──
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 9,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  trackCover: {
    width: 42,
    height: 42,
    borderRadius: 6,
    marginRight: 10,
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
    fontSize: 7,
    color: COLORS.textMute,
    lineHeight: 1.45,
  },
  trackRight: { alignItems: 'flex-end', marginLeft: 6 },
  trackYear: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.blue,
  },
  trackDuration: {
    fontSize: 7,
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
    padding: 12,
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

  // ── Footer ──
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 14,
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

  // ── Divider ──
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 22,
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const EPK_DATA = {
  artist: 'LINAREX',
  tagline: 'Composer & Creative Producer',
  genre: 'Rock / Funk / Fusion',
  year: '2026',

  bio: 'Linarex is a composer and creative producer from the Dominican Republic, now based in Warsaw, Poland. With over 20 years of musical experience, he crafts songs guided by one question: what does this emotion sound like? For him, each release is an emotional journey through the human experience — global in reach, yet deeply personal. His work is rooted in rhythm and driven by feeling.',

  quote:
    'Each song is an emotional journey through the human experience. May it slow you down — and may it also move you beyond the confines of yourself.',

  stats: [
    { number: '20+', label: 'Years creating' },
    { number: '3', label: 'Singles released' },
    { number: '2026', label: 'Active' },
  ],

  // ── Photos ──
  // Absolute Cloudinary URLs only. Relative /img/... paths break in server render.
  portraitImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg',
  // TODO(Linarex): swap for a real live/studio press photo. This is interim —
  // it's the only other absolute image URL available in your shared files.
  secondaryImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771094800/linarex/Screenshot_2026-02-14_at_7.46.34_PM_dgzh4z.png',
  heroImage:
    'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',

  // ── Discography (single source of truth — no more duplicate Collaborations) ──
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
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
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

  // Name + url only. Clickable <Link> over <Text>. No follower counts.
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
    // Re-add with the REAL Apple Music URL when you have it (the links.ts one
    // is malformed and would 404).
    // { name: 'Apple Music', url: '' },
  ],

  contact: {
    general: { role: 'General Inquiries', email: 'linarexinfo@gmail.com' },
    booking: { role: 'Booking & Management', email: 'linarexinfo@gmail.com' },
    press: { role: 'Press & Media', email: 'linarexinfo@gmail.com' },
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

// One card per release — cover, title (clickable), credits, year + duration.
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
      keywords='linarex, rock, funk, fusion, composer, music producer'
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
            {/* Left: Portrait + Bio + Quote + Platforms */}
            <View style={styles.colLeft}>
              <Image style={styles.portrait} src={EPK_DATA.portraitImage} />

              <View style={styles.section}>
                <SectionHeader title='Artist Biography' />
                <Text style={styles.bioText}>{EPK_DATA.bio}</Text>
              </View>

              <View style={styles.quoteBlock}>
                <Text style={styles.quoteText}>
                  &ldquo;{EPK_DATA.quote}&rdquo;
                </Text>
              </View>

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

          <View style={styles.divider} />

          {/* Contact — emails are clickable mailto links */}
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

        {/* FOOTER — Links are siblings, not nested inside <Text> */}
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
