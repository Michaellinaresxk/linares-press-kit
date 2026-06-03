/**
 * EPKDocument.tsx
 *
 * Electronic Press Kit (EPK) PDF document for Linarex.
 * Generated server-side via /api/epk route using @react-pdf/renderer.
 *
 * Usage:
 *   import { EPKDocument } from '@/components/pdf/EPKDocument';
 *   const stream = await renderToStream(<EPKDocument />);
 */

import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

// ─── Fonts ───────────────────────────────────────────────────────────────────
// Using PDF standard fonts (no external fetch required):
//   Helvetica        → sans-serif, normal + bold
//   Helvetica-Bold   → used via fontFamily directly
//   Times-Roman      → serif italic for quotes
// These 14 fonts are built into every PDF viewer, zero network dependency.

// ─── Design tokens ────────────────────────────────────────────────────────────
const COLORS = {
  black: '#0a0a0a',
  white: '#ffffff',
  offWhite: '#f5f5f3',
  purple: '#a855f7',
  purpleDark: '#7c3aed',
  pink: '#ec4899',
  gray100: '#f3f4f6',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  accent: '#c084fc', // lighter purple for accents on dark bg
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  // ── Page ──
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: COLORS.black,
    color: COLORS.white,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  // ── Layout helpers ──
  row: { flexDirection: 'row' },
  col: { flexDirection: 'column' },
  flex1: { flex: 1 },

  // ── HERO section ──
  hero: {
    position: 'relative',
    height: 260,
    backgroundColor: COLORS.gray900,
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
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 32,
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
    fontSize: 42,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  heroSubtitle: {
    fontSize: 11,
    fontWeight: 400,
    color: COLORS.gray300,
    marginTop: 6,
    letterSpacing: 1.5,
  },
  heroBadge: {
    position: 'absolute',
    top: 24,
    right: 40,
    backgroundColor: 'rgba(168,85,247,0.2)',
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  heroBadgeText: {
    fontSize: 7,
    color: COLORS.accent,
    letterSpacing: 2,
    fontWeight: 700,
  },

  // ── Body wrapper ──
  body: {
    paddingHorizontal: 40,
    paddingTop: 32,
    paddingBottom: 40,
    flex: 1,
  },

  // ── Section ──
  section: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionDot: {
    width: 4,
    height: 16,
    backgroundColor: COLORS.purple,
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 3,
    color: COLORS.gray400,
    textTransform: 'uppercase',
  },

  // ── Bio ──
  bioText: {
    fontSize: 10.5,
    fontWeight: 400,
    color: COLORS.gray300,
    lineHeight: 1.8,
  },
  bioHighlight: {
    color: COLORS.accent,
    fontStyle: 'italic',
  },

  // ── Stats strip ──
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.gray900,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: COLORS.gray800,
    borderStyle: 'solid',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.gray700,
    marginVertical: 4,
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    lineHeight: 1.1,
  },
  statLabel: {
    fontSize: 7,
    fontWeight: 400,
    color: COLORS.gray500,
    letterSpacing: 1.5,
    marginTop: 3,
    textTransform: 'uppercase',
  },

  // ── Two-column layout ──
  twoCol: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 28,
  },
  colLeft: { flex: 1.1 },
  colRight: { flex: 0.9 },

  // ── Discography card ──
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray900,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.gray800,
    borderStyle: 'solid',
  },
  trackCover: {
    width: 44,
    height: 44,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: COLORS.gray800,
  },
  trackInfo: { flex: 1 },
  trackTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 2,
  },
  trackMeta: {
    fontSize: 7.5,
    color: COLORS.gray500,
    lineHeight: 1.5,
  },
  trackYear: {
    fontSize: 8,
    fontWeight: 700,
    color: COLORS.purple,
    marginLeft: 6,
  },

  // ── Collaboration card ──
  collabCard: {
    backgroundColor: COLORS.gray900,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.gray800,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  collabDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.purple,
    marginRight: 10,
  },
  collabTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
  },
  collabArtist: {
    fontSize: 7.5,
    color: COLORS.gray500,
    marginTop: 1,
  },

  // ── Platforms ──
  platformsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  platformBadge: {
    backgroundColor: COLORS.gray800,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: COLORS.gray700,
    borderStyle: 'solid',
  },
  platformText: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.gray300,
    letterSpacing: 0.5,
  },

  // ── Contact block ──
  contactGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  contactItem: {
    flex: 1,
    backgroundColor: COLORS.gray900,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray800,
    borderStyle: 'solid',
  },
  contactRole: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 2,
    color: COLORS.gray500,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  contactName: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 3,
  },
  contactEmail: {
    fontSize: 8,
    color: COLORS.accent,
    lineHeight: 1.5,
  },

  // ── Quote ──
  quoteBlock: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.purple,
    borderStyle: 'solid',
    paddingLeft: 14,
    marginBottom: 28,
  },
  quoteText: {
    fontSize: 10,
    fontFamily: 'Times-Roman',
    color: COLORS.gray300,
    lineHeight: 1.7,
  },

  // ── Footer ──
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray800,
    borderStyle: 'solid',
    backgroundColor: COLORS.gray900,
  },
  footerText: {
    fontSize: 7,
    color: COLORS.gray600,
    letterSpacing: 0.5,
  },
  footerAccent: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.purple,
  },

  // ── Divider ──
  divider: {
    height: 1,
    backgroundColor: COLORS.gray800,
    marginBottom: 24,
  },
});

// ─── Data (mirrors your existing consts) ─────────────────────────────────────
const EPK_DATA = {
  artist: 'LINAREX',
  fullName: 'Linarex',
  tagline: 'Composer & Creative Producer',
  genre: 'Funk Pop / Afrobeat Fusion',
  origin: 'Dominican Republic, based in Warsaw, Poland',
  year: '2026',

  bio: 'Linarex is a composer and creative producer from the Dominican Republic, now based in Warsaw, Poland. With over 20 years of musical experience and work across 11 countries, he crafts songs guided by one question: what does this emotion sound like? His debut single "Vaivén" (Afrobeat Fusion, 2025) and latest release "Renacer" (Funk Pop, 2026, ft. Skiwa) showcase a sound that is simultaneously global and deeply personal — rooted in rhythm, driven by feeling.',

  quote:
    'I create universal emotions that connect souls and search for the voice that can set them free.',

  stats: [
    { number: '20+', label: 'Years creating' },
    { number: '3+', label: 'Collaborations' },
    { number: '11', label: 'Countries' },
    { number: '2026', label: 'Active' },
  ],

  releases: [
    {
      title: 'Renacer',
      artist: 'Linarex ft. Skiwa',
      year: '2026',
      genre: 'Funk Pop',
      cover:
        'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',
      spotify:
        'https://open.spotify.com/intl-es/album/5JVDDkvNP77b5yz235Qu0R?si=BHdZGV2wTmGklQUWrrJ-wg',
    },
    {
      title: 'Vaivén',
      artist: 'Linarex ft. Daniel Rivero',
      year: '2025',
      genre: 'Afrobeat Fusion',
      cover:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
      spotify: 'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
    },
  ],

  collaborations: [
    { title: 'Renacer', artist: 'feat. Skiwa', year: '2026' },
    { title: 'Vaivén', artist: 'feat. Daniel Rivero', year: '2025' },
    { title: 'Parte 2', artist: 'feat. Jacke Matthews', year: '2023' },
  ],

  platforms: ['Spotify', 'Apple Music', 'YouTube', 'Instagram', 'TikTok'],

  contact: {
    general: {
      role: 'General Inquiries',
      email: 'linarexinfo@gmail.com',
    },
    booking: {
      role: 'Booking & Management',
      email: 'linarexinfo@gmail.com',
    },
    press: {
      role: 'Press & Media',
      email: 'linarexinfo@gmail.com',
    },
  },

  website: 'linares-press-kit.vercel.app',
  spotify: 'open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
  instagram: 'instagram.com/_linarex',

  heroImage:
    'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
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
  return (
    <View style={styles.statsRow}>
      {EPK_DATA.stats.map((s, i) => (
        <View key={i} style={styles.statItem}>
          <Text style={styles.statNumber}>{s.number}</Text>
          <Text style={styles.statLabel}>{s.label}</Text>
          {i < EPK_DATA.stats.length - 1 && (
            <View
              style={[
                styles.statDivider,
                { position: 'absolute', right: 0, top: 0, bottom: 0 },
              ]}
            />
          )}
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
        <Text style={styles.trackTitle}>{track.title}</Text>
        <Text style={styles.trackMeta}>{track.artist}</Text>
        <Text style={styles.trackMeta}>{track.genre}</Text>
      </View>
      <Text style={styles.trackYear}>{track.year}</Text>
    </View>
  );
}

function CollabCard({
  collab,
}: {
  collab: (typeof EPK_DATA.collaborations)[0];
}) {
  return (
    <View style={styles.collabCard}>
      <View style={styles.collabDot} />
      <View style={{ flex: 1 }}>
        <Text style={styles.collabTitle}>{collab.title}</Text>
        <Text style={styles.collabArtist}>
          {collab.artist} · {collab.year}
        </Text>
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
      keywords='linarex, funk pop, afrobeat fusion, composer, music producer'
      creator='Linarex Press Kit'
    >
      <Page size='A4' style={styles.page}>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <View style={styles.hero}>
          <Image style={styles.heroBg} src={EPK_DATA.heroImage} />
          <View style={styles.heroOverlay} />

          {/* Badge top-right */}
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>PRESS KIT {EPK_DATA.year}</Text>
          </View>

          {/* Artist name bottom-left */}
          <View style={styles.heroContent}>
            <Text style={styles.heroEyebrow}>ELECTRONIC PRESS KIT</Text>
            <Text style={styles.heroName}>{EPK_DATA.artist}</Text>
            <Text style={styles.heroSubtitle}>
              {EPK_DATA.tagline.toUpperCase()} · {EPK_DATA.genre.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* ── BODY ─────────────────────────────────────────────────────── */}
        <View style={styles.body}>
          {/* Stats strip */}
          <StatStrip />

          {/* Two columns: Bio + Discography */}
          <View style={styles.twoCol}>
            {/* Left: Bio + Quote */}
            <View style={styles.colLeft}>
              <View style={styles.section}>
                <SectionHeader title='Artist Biography' />
                <Text style={styles.bioText}>{EPK_DATA.bio}</Text>
              </View>

              <View style={styles.quoteBlock}>
                <Text style={styles.quoteText}>
                  &ldquo;{EPK_DATA.quote}&rdquo;
                </Text>
              </View>

              {/* Platforms */}
              <View style={styles.section}>
                <SectionHeader title='Available On' />
                <View style={styles.platformsGrid}>
                  {EPK_DATA.platforms.map((p) => (
                    <View key={p} style={styles.platformBadge}>
                      <Text style={styles.platformText}>{p.toUpperCase()}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* Right: Releases + Collaborations */}
            <View style={styles.colRight}>
              <View style={styles.section}>
                <SectionHeader title='Key Releases' />
                {EPK_DATA.releases.map((t) => (
                  <TrackCard key={t.title} track={t} />
                ))}
              </View>

              <View style={styles.section}>
                <SectionHeader title='Collaborations' />
                {EPK_DATA.collaborations.map((c) => (
                  <CollabCard key={c.title + c.year} collab={c} />
                ))}
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Contact section */}
          <View style={styles.section}>
            <SectionHeader title='Contact' />
            <View style={styles.contactGrid}>
              {Object.values(EPK_DATA.contact).map((c) => (
                <View key={c.role} style={styles.contactItem}>
                  <Text style={styles.contactRole}>{c.role}</Text>
                  <Text style={styles.contactEmail}>{c.email}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            <Text style={styles.footerAccent}>linarex</Text>
            {'  ·  '}
            {EPK_DATA.website}
          </Text>
          <Text style={styles.footerText}>{EPK_DATA.spotify}</Text>
          <Text style={styles.footerText}>{EPK_DATA.instagram}</Text>
        </View>
      </Page>
    </Document>
  );
}
export default EPKDocument;
