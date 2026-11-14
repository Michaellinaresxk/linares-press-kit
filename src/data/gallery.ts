export type GalleryLocale = 'en' | 'pl';

export type GalleryType = 'portrait' | 'live' | 'road';
export type GalleryOrientation = 'portrait' | 'landscape' | 'square';

export interface GalleryPhoto {
  id: string;
  src: string;
  srcHQ: string; // TODO(004): provide dedicated HQ press assets where available
  orientation: GalleryOrientation;
  type: GalleryType;
  alt: Record<GalleryLocale, string>;
  caption: Record<GalleryLocale, string>;
  credit: string; // TODO(004): confirm photographer credits
  inPressKit: boolean;
  location?: string;
}

export const gallery: GalleryPhoto[] = [
  {
    id: 'artist-portrait-dark',
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093990/linarex/black_un2msx.jpg',
    srcHQ:
      'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093990/linarex/black_un2msx.jpg',
    orientation: 'portrait',
    type: 'portrait',
    alt: {
      en: 'Portrait of Linarex in dark clothing',
      pl: 'Portret Linarex w ciemnej stylizacji',
    },
    caption: { en: 'Artist portrait', pl: 'Portret artysty' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'artist-singing-stage',
    src: '/img/Singin.png',
    srcHQ: '/img/Singin.png',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Linarex singing on stage with a guitarist during a live show',
      pl: 'Linarex śpiewający na scenie z gitarzystą podczas koncertu',
    },
    caption: { en: 'On stage with the band', pl: 'Na scenie z zespołem' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'artist-outdoor-full',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    orientation: 'portrait',
    type: 'portrait',
    alt: {
      en: 'Full-length portrait of Linarex standing outdoors',
      pl: 'Portret Linarex w pełnej postaci na świeżym powietrzu',
    },
    caption: { en: 'Outdoor portrait', pl: 'Portret plenerowy' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'artist-railway',
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
    srcHQ:
      'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
    orientation: 'landscape',
    type: 'road',
    alt: {
      en: 'Linarex photographed near railway tracks',
      pl: 'Linarex sfotografowany w pobliżu torów kolejowych',
    },
    caption: { en: 'On the road', pl: 'W drodze' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'artist-train-sunset',
    src: '/img/train.jpg',
    srcHQ: '/img/train.jpg',
    orientation: 'portrait',
    type: 'road',
    alt: {
      en: 'Portrait of Linarex beside railway tracks at sunset',
      pl: 'Portret Linarex przy torach kolejowych o zachodzie słońca',
    },
    caption: { en: 'Sunset portrait', pl: 'Portret o zachodzie słońca' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'artist-drums-live',
    src: '/img/DSC00047.jpg',
    srcHQ: '/img/DSC00047.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Linarex playing drums during a live performance',
      pl: 'Linarex grający na perkusji podczas koncertu',
    },
    caption: { en: 'Behind the kit', pl: 'Za perkusją' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'artist-profile',
    src: '/img/linarex.jpg',
    srcHQ: '/img/linarex.jpg',
    orientation: 'portrait',
    type: 'portrait',
    alt: {
      en: 'Artist portrait of Linarex in profile view',
      pl: 'Portret artystyczny Linarex z profilu',
    },
    caption: { en: 'Profile portrait', pl: 'Portret z profilu' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'live-band-01',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319383/linarex/DSC00116_cp0rkp.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319383/linarex/DSC00116_cp0rkp.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Linarex Experience live on stage with the full band',
      pl: 'Linarex Experience na scenie z całym zespołem',
    },
    caption: { en: 'Full band on stage', pl: 'Cały zespół na scenie' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'live-room-02',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319376/linarex/DSC00109_fijgbd.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319376/linarex/DSC00109_fijgbd.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'The band performing during Linarex Experience in front of a full room',
      pl: 'Zespół występujący podczas Linarex Experience przed pełną salą',
    },
    caption: { en: 'A full room moving', pl: 'Pełna sala w ruchu' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'live-musicians-03',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Musicians on stage during Linarex Experience',
      pl: 'Muzycy na scenie podczas Linarex Experience',
    },
    caption: { en: 'Live energy', pl: 'Energia koncertu' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'live-crowd-04',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319419/linarex/0eb41175-d28d-4001-b413-18d404c2dba1_fioj6n.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319419/linarex/0eb41175-d28d-4001-b413-18d404c2dba1_fioj6n.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'A live moment from Linarex Experience with the crowd engaged',
      pl: 'Moment koncertu Linarex Experience z zaangażowaną publicznością',
    },
    caption: { en: 'Crowd connection', pl: 'Kontakt z publicznością' },
    credit: 'TBD',
    inPressKit: true,
  },
  {
    id: 'live-band-05',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319423/linarex/05bf0525-1382-4cf6-bd98-5d2c2384b27c_nvnklg.jpg',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319423/linarex/05bf0525-1382-4cf6-bd98-5d2c2384b27c_nvnklg.jpg',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Linarex Experience band performing on stage',
      pl: 'Zespół Linarex Experience występujący na scenie',
    },
    caption: { en: 'On stage', pl: 'Na scenie' },
    credit: 'TBD',
    inPressKit: false,
  },
  {
    id: 'live-duo-06',
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321463/linarex/duo_zgnh28.png',
    srcHQ:
      'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321463/linarex/duo_zgnh28.png',
    orientation: 'landscape',
    type: 'live',
    alt: {
      en: 'Linarex and Jacke Matheus performing together during Linarex Experience',
      pl: 'Linarex i Jacke Matheus występujący razem podczas Linarex Experience',
    },
    caption: { en: 'Linarex & Jacke Matheus', pl: 'Linarex i Jacke Matheus' },
    credit: 'TBD',
    inPressKit: false,
  },
];

export const artistGallery = gallery.filter((photo) =>
  ['portrait', 'road'].includes(photo.type) || photo.id === 'artist-singing-stage' || photo.id === 'artist-drums-live',
);

export const liveGallery = gallery.filter((photo) => photo.type === 'live' && photo.id.startsWith('live-'));

export const pressKitPhotos = gallery.filter((photo) => photo.inPressKit);

// TODO(003): consolidate all gallery assets to a single source (Cloudinary account/folder or local) once decided.
