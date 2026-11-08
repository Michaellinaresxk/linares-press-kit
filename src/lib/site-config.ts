const spotifyArtistUrl =
  'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS';

export type VideoRef = {
  youtubeId: string;
  title: string;
};

export type SampleSetlist = {
  covers: string[];
  originals: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  venue: string;
};

export type Show = {
  date: string; // ISO date
  venue: string;
  city: string;
  url?: string;
};

export type LiveShowConfig = {
  name: string;
  subtitle: string;
  firstHeadlineShow: string;
  setLength: string;
  setLengthShort: string;
  musicians: string;
  instruments: string[];
  instrumentsDescription: string;
  expandableInstruments: string[];
  expandableInstrumentsDescription: string;
  repertoireLanguages: string[];
  repertoireLanguagesDescription: string;
  repertoireDescription: string;
  setDescription: string;
  eventTypes: string;
  bookingAvailability: string;
  currentLineup: string;
  description: string;
  technicalDetails: string;
  videoUrl: string;
  instagramVideoUrl: string;
  videoThumbnails: {
    youtube: string;
    instagram: string;
  };
  // Booker info (render only when present)
  video?: VideoRef;
  sampleSetlist?: SampleSetlist;
  techRiderUrl?: string;
  availability?: string;
  feeNote?: string;
  testimonials: Testimonial[];
};

export type Genres = {
  original: string[];
  live: string[];
};

export const siteConfig = {
  name: 'Linarex',
  role: 'Composer, Drummer & Executive Producer',
  genres: {
    original: ['Indie Rock', 'Indie Pop', 'Afro Pop Fusion', 'Funk Pop'],
    live: [
      'Funk & Afrobeat',
      'Pop Anthems',
      'Rock Classics',
      'Latin Pop Hits',
      'Original Songs',
    ],
  } satisfies Genres,
  location: 'Warsaw, Poland',
  origin: 'Dominican Republic',
  yearsOnStage: '20+',
  email: 'linarexinfo@gmail.com',
  contact: {
    // TODO Michael: add WhatsApp number in international format without +, e.g. '48123456789'
    whatsapp: undefined as string | undefined,
  },
  url: 'https://linares-press-kit.vercel.app',
  ogImage: '/og-image.jpg',
  seo: {
    homeTitle: 'Linarex | Composer & Drummer in Warsaw – New Single "Memories"',
    description:
      'Dominican-born composer and drummer based in Warsaw. Listen to the new single "Memories" and book the Linarex Experience live show with Jacke Matheus.',
    epkTitle: 'Linarex – Electronic Press Kit | Linarex Experience',
    epkDescription:
      'Meet Linarex and the Linarex Experience live show with Jacke Matheus: music, photos, performance clips and booking contact.',
    proposalTitle:
      'Linarex Experience – Live Band in Warsaw | with Jacke Matheus',
    proposalDescription:
      'Linarex Experience with Jacke Matheus: a Warsaw-based live band with original songs, familiar covers, audience connection and booking details for venues and events.',
  },
  profiles: {
    spotify: spotifyArtistUrl,
    youtube: 'https://www.youtube.com/@linarexmusic',
    instagram: 'https://www.instagram.com/_linarex',
    tiktok: 'https://www.tiktok.com/@linarex59',
    appleMusic: null,
  },

  live: {
    artists: [
      {
        name: 'Linarex',
        role: 'Composer, Drummer & Executive Producer',
        origin: 'Dominican Republic',
        image:
          'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg',
        imageAlt: 'Linarex, Dominican-born composer and drummer',
        description:
          'Dominican-born and Warsaw-based, Linarex is a composer and multi-instrumentalist who leads the band from the drums and sings selected parts.',
      },
      {
        name: 'Jacke Matheus',
        role: 'Vocalist & Guitarist',
        origin: 'Colombia',
        image: '/img/jacke.png',
        imageAlt: 'Jacke Matheus, Colombian vocalist and guitarist',
        description:
          'Colombian vocalist and guitarist whose stage presence draws the audience into the performance.',
      },
    ],
  },
  liveShow: {
    name: 'Linarex Experience',
    subtitle: 'with Jacke Matheus',
    firstHeadlineShow: 'Deski, Warsaw',
    setLength: '60–90 minutes',
    setLengthShort: '60–90 min',
    musicians: '4 musicians',
    instruments: ['Drums', 'Guitar', 'Bass', 'Keys'],
    instrumentsDescription: 'Drums, guitar, bass & keys.',
    expandableInstruments: ['Brass', 'Percussion'],
    expandableInstrumentsDescription:
      'Expandable to include brass and percussion for larger stages.',
    repertoireLanguages: ['English', 'Spanish', 'Polish'],
    repertoireLanguagesDescription: 'English, Spanish & Polish',
    repertoireDescription: 'Hits from every era, original songs included.',
    setDescription: 'Adaptable to your programming needs.',
    eventTypes: 'venues, bars, festivals and city or park events',
    bookingAvailability:
      'Available for venues, bars, festivals and city or park events.',
    currentLineup:
      'Linarex leads a four-piece band from the drums, with Jacke Matheus on vocals and guitar.',
    description:
      'Linarex leads the band from the drums, sings selected parts, shares stories and brings the crowd into the show. Together with Colombian vocalist and guitarist Jacke Matheus, the band moves between original songs and covers, creating energy, good vibes and real emotion.',
    technicalDetails: 'Full setlist and technical rider available on request.',
    videoUrl: 'https://www.youtube.com/shorts/jqD3Qzr_MPY',
    instagramVideoUrl: 'https://www.instagram.com/p/Dcs35--NXNG/',
    videoThumbnails: {
      youtube:
        'https://res.cloudinary.com/michaelxk-com/image/upload/v1789322425/linarex/DSC00064_ydfxra.jpg',
      instagram:
        'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321136/linarex/Screenshot_2026-09-13_at_7.38.47_PM_hdjwin.png',
    },
    // Booker info
    video: {
      youtubeId: 'jqD3Qzr_MPY',
      title: 'Linarex Experience live show with Jacke Matheus',
    },
    sampleSetlist: {
      covers: [], // TODO Michael: add 6–8 cover titles
      originals: ['Memories', 'Renacer', 'Vaivén'],
    },
    techRiderUrl: undefined as string | undefined, // TODO Michael: add file in /public and set path, e.g. '/linarex-tech-rider.pdf'
    availability:
      'Based in Warsaw, available across Poland.', // TODO Michael: confirm if also available across Europe
    feeNote: 'Fee on request — formats for bars, events and festivals.',
    testimonials: [] as Testimonial[], // TODO Michael: add a real quote only (quote, name, venue)
  } satisfies LiveShowConfig,
  shows: [] as Show[], // TODO Michael: add upcoming dates { date (ISO), venue, city, url? }
  releases: [
    {
      id: 'memories',
      title: 'Memories',
      year: '2026',
      durationSeconds: 243,
      durationLabel: '4:03',
      collaborator: 'Jacke Matheus',
      spotifyUrl: 'https://open.spotify.com/album/57gkaRLcx11qK4Ok1PYdyW',
      coverImage:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1786661039/bg_qvvlw9.jpg',
      audioUrl: '/audio/Memories.wav',
      description: "When you can't turn off the dark, you turn on a memory.",
    },
    {
      id: 'renacer',
      title: 'Renacer',
      year: '2026',
      durationSeconds: 196,
      durationLabel: '3:16',
      collaborator: 'Skiwa',
      spotifyUrl: 'https://open.spotify.com/album/5JVDDkvNP77b5yz235Qu0R',
      coverImage:
        'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093920/linarex/2026_ssgfrp.jpg',
      audioUrl: '/audio/Renacer.wav',
      description: 'A new beginning, featuring Skiwa.',
    },
    {
      id: 'vaiven',
      title: 'Vaivén',
      year: '2025',
      durationSeconds: 193,
      durationLabel: '3:13',
      collaborator: 'Daniel Rivero',
      spotifyUrl:
        'https://open.spotify.com/intl-es/track/77R8ciAdBDoVzHsL3GAjDB?autoplay_ok=1',
      coverImage:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
      audioUrl: '/audio/vaiven.mp3',
      description: 'Featuring Daniel Rivero.',
    },
  ],
};

export const siteGenresOriginal = siteConfig.genres.original.join(' · ');
export const siteGenresLive = siteConfig.genres.live.join(' · ');
/** @deprecated Prefer labeled "Original music:" / "Live repertoire:" display. Kept for compatibility. */
export const siteGenres = siteGenresOriginal;
export const bookingEmail = `mailto:${siteConfig.email}`;

export type SiteRelease = (typeof siteConfig.releases)[number];
