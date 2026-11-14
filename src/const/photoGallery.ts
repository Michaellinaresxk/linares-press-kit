export type GalleryLocale = 'en' | 'pl';

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: Record<GalleryLocale, string>;
  venue: Record<GalleryLocale, string>;
  location?: string;
  photographer?: string;
}

export const artistGallery: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093990/linarex/black_un2msx.jpg',
    alt: {
      en: 'Portrait of Linarex in dark clothing',
      pl: 'Portret Linarex w ciemnej stylizacji',
    },
    venue: { en: 'Artist portrait', pl: 'Portret' },
  },
  {
    id: 2,
    src: '/img/Singin.png',
    alt: {
      en: 'Linarex singing on stage with a guitarist during a live show',
      pl: 'Linarex śpiewający na scenie z gitarzystą podczas koncertu',
    },
    venue: { en: 'Live performance', pl: 'Na scenie' },
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    alt: {
      en: 'Full-length portrait of Linarex standing outdoors',
      pl: 'Portret Linarex w pełnej postaci na świeżym powietrzu',
    },
    venue: { en: 'Artist portrait', pl: 'Portret' },
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
    alt: {
      en: 'Linarex photographed near railway tracks',
      pl: 'Linarex sfotografowany w pobliżu torów kolejowych',
    },
    venue: { en: 'On the road', pl: 'W drodze' },
  },
  {
    id: 5,
    src: '/img/train.jpg',
    alt: {
      en: 'Portrait of Linarex beside railway tracks at sunset',
      pl: 'Portret Linarex przy torach kolejowych o zachodzie słońca',
    },
    venue: { en: 'On the road', pl: 'W drodze' },
  },
  {
    id: 6,
    src: '/img/DSC00047.jpg',
    alt: {
      en: 'Linarex playing drums during a live performance',
      pl: 'Linarex grający na perkusji podczas koncertu',
    },
    venue: { en: 'Live performance', pl: 'Na scenie' },
  },
  {
    id: 7,
    src: '/img/linarex.jpg',
    alt: {
      en: 'Artist portrait of Linarex in profile view',
      pl: 'Portret artystyczny Linarex z profilu',
    },
    venue: { en: 'Artist portrait', pl: 'Portret' },
  },
];

export const liveGallery: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319383/linarex/DSC00116_cp0rkp.jpg',
    alt: {
      en: 'Linarex Experience live on stage with the full band',
      pl: 'Linarex Experience na scenie z całym zespołem',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319376/linarex/DSC00109_fijgbd.jpg',
    alt: {
      en: 'The band performing during Linarex Experience in front of a full room',
      pl: 'Zespół występujący podczas Linarex Experience przed pełną salą',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    alt: {
      en: 'Musicians on stage during Linarex Experience',
      pl: 'Muzycy na scenie podczas Linarex Experience',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319419/linarex/0eb41175-d28d-4001-b413-18d404c2dba1_fioj6n.jpg',
    alt: {
      en: 'A live moment from Linarex Experience with the crowd engaged',
      pl: 'Moment koncertu Linarex Experience z zaangażowaną publicznością',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319423/linarex/05bf0525-1382-4cf6-bd98-5d2c2384b27c_nvnklg.jpg',
    alt: {
      en: 'Linarex Experience band performing on stage',
      pl: 'Zespół Linarex Experience występujący na scenie',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321463/linarex/duo_zgnh28.png',
    alt: {
      en: 'Linarex and Jacke Matheus performing together during Linarex Experience',
      pl: 'Linarex i Jacke Matheus występujący razem podczas Linarex Experience',
    },
    venue: { en: 'Linarex Experience', pl: 'Linarex Experience' },
  },
];

export const photoGallery = artistGallery;
