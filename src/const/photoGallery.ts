export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  venue: string;
  location?: string;
  photographer?: string;
}

export const artistGallery: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1771093990/linarex/black_un2msx.jpg',
    alt: 'Portrait of Linarex in dark clothing',
    venue: 'Artist portrait',
  },
  {
    id: 2,
    src: '/img/Singin.png',
    alt: 'Linarex singing on stage with a guitarist during a live show',
    venue: 'Live performance',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170735/linarex/standing_wicdur.jpg',
    alt: 'Full-length portrait of Linarex standing outdoors',
    venue: 'Artist portrait',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1780170739/linarex/trenes_lj3rfh.jpg',
    alt: 'Linarex photographed near railway tracks',
    venue: 'On the road',
  },
  {
    id: 5,
    src: '/img/train.jpg',
    alt: 'Portrait of Linarex beside railway tracks at sunset',
    venue: 'On the road',
  },
  {
    id: 6,
    src: '/img/DSC00047.jpg',
    alt: 'Linarex playing drums during a live performance',
    venue: 'Live performance',
  },
  {
    id: 7,
    src: '/img/perfil-2.jpg',
    alt: 'Artist portrait of Linarex in profile view',
    venue: 'Artist portrait',
  },
];

export const liveGallery: GalleryPhoto[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319383/linarex/DSC00116_cp0rkp.jpg',
    alt: 'Linarex Experience live performance photo 1: Linarex and the band on stage',
    venue: 'Linarex Experience',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319376/linarex/DSC00109_fijgbd.jpg',
    alt: 'Linarex Experience live performance photo 2: the band performing',
    venue: 'Linarex Experience',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319514/linarex/DSC00061_bpqysl.jpg',
    alt: 'Linarex Experience live performance photo 3: musicians on stage',
    venue: 'Linarex Experience',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319419/linarex/0eb41175-d28d-4001-b413-18d404c2dba1_fioj6n.jpg',
    alt: 'Linarex Experience live performance photo 4: a moment from the show',
    venue: 'Linarex Experience',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789319423/linarex/05bf0525-1382-4cf6-bd98-5d2c2384b27c_nvnklg.jpg',
    alt: 'Linarex Experience live performance photo 5: the band on stage',
    venue: 'Linarex Experience',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/michaelxk-com/image/upload/v1789321463/linarex/duo_zgnh28.png',
    alt: 'Two musicians performing together during the Linarex Experience',
    venue: 'Linarex Experience',
  },
];

export const photoGallery = artistGallery;
