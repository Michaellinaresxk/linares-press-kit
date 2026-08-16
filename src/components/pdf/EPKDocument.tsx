/**
 * EPKDocument.tsx
 *
 * Electronic Press Kit (EPK) PDF for Linarex — rediseño a DOS páginas.
 * Se genera server-side vía /api/epk con @react-pdf/renderer.
 *
 *   import { EPKDocument } from '@/components/pdf/EPKDocument';
 *   const stream = await renderToStream(<EPKDocument />);
 *
 * ── Decisiones de arquitectura ────────────────────────────────────────────────
 * 1. DOS <Page> explícitas en vez de una que hace wrap.
 *    Controlas exactamente qué va en cada hoja → nada "se cae" solo a la 2ª
 *    página y evitas el bug de la página en blanco por completo.
 *
 * 2. <PhotoFrame> es la pieza clave que arregla tus imágenes.
 *    El problema NO era objectFit: en react-pdf una <Image> con borderRadius NO
 *    recorta su contenido a las esquinas redondeadas — la foto "se desborda"
 *    por dentro del marco. Solución: un <View> contenedor con
 *    { borderRadius, overflow: 'hidden' } que SÍ recorta, y la <Image> rellena
 *    ese view al 100% con objectFit: 'cover'. Así el recorte es siempre limpio.
 *
 * 3. objectPosition controla QUÉ zona de la foto se conserva al recortar
 *    ('50% 15%' = arriba, para no cortar la cara). Se pasa por foto.
 *
 * 4. Footer con { position:'absolute', bottom:0 } + prop `fixed` → se repite
 *    fijado abajo en ambas páginas. Page.paddingBottom reserva su altura para
 *    que el contenido nunca lo pise.
 *
 * ── Gotchas de react-pdf que se respetan aquí ────────────────────────────────
 *   - <Link> solo envuelve <Text> (nunca <View>/<Image>).
 *   - Un objeto de estilo plano por nodo (nada de style={[a, b]}).
 *   - Solo URLs absolutas en <Image> (las rutas relativas /img/... rompen en SSR).
 *   - Nada de flex:1 en el body (reservaba toda la página y empujaba el bloque).
 */

import type { Style } from '@react-pdf/types';
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
} as const;

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: COLORS.bg,
    color: COLORS.white,
    paddingBottom: 46, // reserva la altura del footer fijo
  },
  linkReset: { textDecoration: 'none' },

  // ── HERO ──
  hero: {
    position: 'relative',
    height: 210,
    backgroundColor: COLORS.surface,
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
  heroContent: { position: 'absolute', bottom: 30, left: 40, right: 40 },
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
    color: COLORS.textHi,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  heroSubtitle: {
    fontSize: 10.5,
    color: COLORS.text,
    marginTop: 7,
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
  body: { paddingHorizontal: 40, paddingTop: 22 },
  bodyPage2: { paddingHorizontal: 40, paddingTop: 34 },

  // ── Section ──
  section: { marginBottom: 18 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
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

  // ── PhotoFrame (el <View> recorta; la <Image> rellena) ──
  frame: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
    backgroundColor: COLORS.surface,
  },
  frameImg: { width: '100%', height: '100%', objectFit: 'cover' },
  portraitFrame: { width: '100%', height: 300 },

  // ── Stats strip ──
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
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
    fontSize: 19,
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

  // ── Two-column (página 1) ──
  twoCol: { flexDirection: 'row', gap: 22 },
  colLeft: { flex: 1 },
  colRight: { flex: 1.05 },

  bioText: { fontSize: 10, color: COLORS.text, lineHeight: 1.7 },
  quoteBlock: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.blue,
    borderStyle: 'solid',
    paddingLeft: 14,
    marginTop: 4,
  },
  quoteText: {
    fontSize: 9.5,
    fontFamily: 'Times-Roman',
    color: COLORS.text,
    lineHeight: 1.65,
  },

  // ── Gallery (mosaico editorial) ──
  galleryRow: { flexDirection: 'row', gap: 8, height: 190 },
  galleryBig: { flex: 1.5, height: '100%' },
  galleryStack: { flex: 1, gap: 8 },
  gallerySmall: { flex: 1 },
  galleryScrim: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'rgba(6,12,20,0.55)',
  },
  galleryCaption: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    color: COLORS.textHi,
    textTransform: 'uppercase',
  },

  // ── Discography ──
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 8,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'solid',
  },
  trackCoverFrame: { width: 44, height: 44, borderRadius: 6, marginRight: 10 },
  trackInfo: { flex: 1 },
  trackTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textHi,
    marginBottom: 2,
    textDecoration: 'none',
  },
  trackMeta: { fontSize: 6.8, color: COLORS.textMute, lineHeight: 1.4 },
  trackRight: { alignItems: 'flex-end', marginLeft: 6 },
  trackYear: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: COLORS.blue },
  trackDuration: { fontSize: 6.5, color: COLORS.textFaint, marginTop: 2 },

  // ── Platforms ──
  platformsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  platformBadge: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
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

  divider: { height: 1, backgroundColor: COLORS.border, marginBottom: 18 },

  // ── Footer (fixed, se repite en ambas páginas) ──
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Release {
  title: string;
  artist: string;
  genre: string;
  producer: string;
  duration: string;
  year: string;
  cover: string;
  spotify: string;
}

interface GalleryItem {
  src: string;
  caption: string;
  /** Zona de la foto a conservar al recortar, ej. '50% 20%' (arriba). */
  objectPosition: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const EPK_DATA = {
  artist: 'LINAREX',
  tagline: 'Drummer · Composer · Producer',
  genre: 'Rock / Funk / Fusion',
  year: '2026',

  bio: 'Linarex is a Dominican drummer, composer and producer based in Warsaw, Poland. With more than 20 years behind the drum kit and writing songs — much of it composing for other voices — his work is built on collaboration: he writes and produces each track, and guest vocalists bring the songs to life.',
  bioP2:
    'Since his 2025 debut, Linarex has moved across rock, funk, afrobeat and folk, guided by one question: what does this emotion sound like?',
  quote:
    'Each song is an emotional journey through the human experience. May it slow you down — and may it also move you beyond the confines of yourself.',

  stats: [
    { number: '20+', label: 'Years drumming & composing' },
    { number: '3', label: 'Singles as Linarex' },
    { number: '2025', label: 'Debut single' },
  ],

  // ── Fotos ──
  heroImage:
    'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
  portraitImage:
    'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',

  // ── Galería (mosaico) ──
  // TODO(Linarex): idealmente 3 fotos DISTINTAS (live / studio / backstage).
  // De momento sembradas con las que tienes; ajusta objectPosition por foto.
  gallery: [
    {
      src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg',
      caption: 'Live',
      objectPosition: '50% 35%',
    },
    {
      src: 'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763903688/bg_ijmkc7.jpg',
      caption: 'On stage',
      objectPosition: '50% 50%',
    },
    {
      src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
      caption: 'Studio',
      objectPosition: '50% 20%',
    },
  ] as GalleryItem[],

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
  ] as Release[],

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
  ],

  contact: {
    booking: { role: 'Booking & Management', email: 'linarexinfo@gmail.com' },
  },

  website: 'linares-press-kit.vercel.app',
  websiteUrl: 'https://linares-press-kit.vercel.app',
  spotify: 'open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
  spotifyUrl:
    'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS?si=6-KHEpmPQ3mTHwnLdw2iDg',
  instagram: 'instagram.com/_linarex',
  instagramUrl: 'https://www.instagram.com/_linarex',
};

// ─── Primitivas reutilizables ─────────────────────────────────────────────────

interface PhotoFrameProps {
  src: string;
  /** Estilo del marco (tamaño/posición). Se fusiona con styles.frame. */
  frameStyle?: Style;
  /** Zona de la foto a conservar, ej. '50% 15%'. Default centrado. */
  objectPosition?: string;
  /** Si se pasa, dibuja un scrim + caption abajo a la izquierda. */
  caption?: string;
}

/**
 * Foto recortada limpia: el <View> recorta (overflow:hidden + borderRadius),
 * la <Image> rellena al 100% con object-fit cover. Nada se desborda.
 */
function PhotoFrame({
  src,
  frameStyle,
  objectPosition = '50% 50%',
  caption,
}: PhotoFrameProps) {
  return (
    <View
      style={frameStyle ? { ...styles.frame, ...frameStyle } : styles.frame}
    >
      <Image src={src} style={{ ...styles.frameImg, objectPosition }} />
      {caption ? <View style={styles.galleryScrim} /> : null}
      {caption ? <Text style={styles.galleryCaption}>{caption}</Text> : null}
    </View>
  );
}

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

/** Mosaico: una foto grande a la izquierda + dos apiladas a la derecha. */
function Gallery() {
  const [big, ...rest] = EPK_DATA.gallery;
  return (
    <View style={styles.galleryRow}>
      <PhotoFrame
        src={big.src}
        frameStyle={styles.galleryBig}
        objectPosition={big.objectPosition}
        caption={big.caption}
      />
      <View style={styles.galleryStack}>
        {rest.map((g) => (
          <PhotoFrame
            key={g.caption}
            src={g.src}
            frameStyle={styles.gallerySmall}
            objectPosition={g.objectPosition}
            caption={g.caption}
          />
        ))}
      </View>
    </View>
  );
}

function TrackCard({ track }: { track: Release }) {
  return (
    <View style={styles.trackCard}>
      <PhotoFrame src={track.cover} frameStyle={styles.trackCoverFrame} />
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

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
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
  );
}

// ─── Documento ────────────────────────────────────────────────────────────────

export function EPKDocument() {
  return (
    <Document
      title={`Linarex — Electronic Press Kit ${EPK_DATA.year}`}
      author='Linarex'
      subject='Electronic Press Kit'
      keywords='linarex, drummer, composer, rock, funk, fusion, producer'
      creator='Linarex Press Kit'
    >
      {/* ── PÁGINA 1 — Identidad e historia ── */}
      <Page size='A4' style={styles.page}>
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

        <View style={styles.body}>
          <StatStrip />

          <View style={styles.twoCol}>
            <View style={styles.colLeft}>
              <PhotoFrame
                src={EPK_DATA.portraitImage}
                frameStyle={styles.portraitFrame}
                objectPosition='50% 15%'
              />
            </View>
            <View style={styles.colRight}>
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
          </View>
        </View>

        <PageFooter />
      </Page>

      {/* ── PÁGINA 2 — Música y contacto ── */}
      <Page size='A4' style={styles.page}>
        <View style={styles.bodyPage2}>
          <View style={styles.section}>
            <SectionHeader title='Gallery' />
            <Gallery />
          </View>

          <View style={styles.section}>
            <SectionHeader title='Discography' />
            {EPK_DATA.releases.map((t) => (
              <TrackCard key={t.title} track={t} />
            ))}
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

          <View style={styles.divider} />

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

        <PageFooter />
      </Page>
    </Document>
  );
}

export default EPKDocument;
