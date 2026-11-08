const spotifyArtistUrl =
  'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS';

export const siteConfig = {
  name: 'Linarex',
  role: 'Composer, Drummer & Executive Producer',
  genres: ['Indie Rock', 'Indie Pop', 'Afro Pop Fusion', 'Funk Pop'],
  location: 'Warsaw, Poland',
  origin: 'Dominican Republic',
  yearsOnStage: '20+',
  email: 'linarexinfo@gmail.com',
  liveShow: 'Linarex Experience',
  url: 'https://linares-press-kit.vercel.app',
  ogImage: '/og-image.jpg',
  seo: {
    homeTitle: 'Linarex | Composer & Drummer in Warsaw – New Single "Memories"',
    description:
      'Dominican-born composer and drummer based in Warsaw. Listen to the new single "Memories" and book the Linarex Experience live show.',
    epkTitle: 'Linarex – Electronic Press Kit | Linarex Experience Live Show',
    epkDescription:
      'Meet Linarex and the Linarex Experience: live music led from the drums, original songs and covers, music, photos and booking contact.',
    proposalTitle:
      'Linarex & Jacke Matheus | Linarex Experience Live Show',
    proposalDescription:
      'Meet Linarex and Jacke Matheus: a Warsaw-based live band with original songs, familiar covers, audience connection and booking details for venues and events.',
  },
  profiles: {
    spotify: spotifyArtistUrl,
    youtube: 'https://www.youtube.com/@linarexmusic',
    instagram: 'https://www.instagram.com/_linarex',
    tiktok: 'https://www.tiktok.com/@linarex59',
    appleMusic: null,
  },
  appleMusicTodo:
    'TODO: Add the verified Apple Music profile URL with its numeric artist ID.',
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
    repertoireDescription:
      'Hits from every era, original songs included.',
    setDescription: 'Adaptable to your programming needs.',
    availability: 'Contact us to check current date availability.',
    eventTypes: 'venues, bars, festivals and city or park events',
    bookingAvailability:
      'Available for venues, bars, festivals and city or park events.',
    currentLineup:
      'Linarex leads a four-piece band from the drums, with Jacke Matheus on vocals and guitar.',
    description:
      'Linarex leads the band from the drums, sings selected parts, shares stories and brings the crowd into the show. Together with Colombian vocalist and guitarist Jacke Matheus, the band moves between original songs and covers, creating energy, good vibes and real emotion.',
    technicalDetails:
      'Full setlist and technical rider available on request.',
    videoUrl: 'https://www.youtube.com/shorts/jqD3Qzr_MPY',
    instagramVideoUrl: 'https://www.instagram.com/p/Dcs35--NXNG/',
    videoThumbnails: {
      youtube:
        'https://res.cloudinary.com/michaelxk-com/image/upload/v1789322425/linarex/DSC00064_ydfxra.jpg',
      instagram:
        'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321136/linarex/Screenshot_2026-09-13_at_7.38.47_PM_hdjwin.png',
    },
  },
  releases: [
    {
      id: 'memories',
      title: 'Memories',
      year: '2026',
      durationSeconds: 243,
      durationLabel: '4:03',
      collaborator: 'Jacke Matheus',
      spotifyUrl:
        'https://open.spotify.com/album/57gkaRLcx11qK4Ok1PYdyW',
      coverImage:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1786661039/bg_qvvlw9.jpg',
      audioUrl: '/audio/Memories.wav',
      description:
        'When you can’t turn off the dark, you turn on a memory.',
    },
    {
      id: 'renacer',
      title: 'Renacer',
      year: '2026',
      durationSeconds: 196,
      durationLabel: '3:16',
      collaborator: 'Skiwa',
      spotifyUrl:
        'https://open.spotify.com/album/5JVDDkvNP77b5yz235Qu0R',
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
      spotifyUrl: spotifyArtistUrl,
      coverImage:
        'https://res.cloudinary.com/dwgzffsgl/image/upload/v1763300435/504381421_17858001459453136_3713166365445180538_n_wdmog2.jpg',
      audioUrl: '/audio/vaiven.mp3',
      description: 'Featuring Daniel Rivero.',
    },
  ],
} as const;

export const siteGenres = siteConfig.genres.join(' · ');
export const bookingEmail = `mailto:${siteConfig.email}`;

export type SiteRelease = (typeof siteConfig.releases)[number];
