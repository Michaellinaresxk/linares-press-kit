import {
  artistGallery as canonicalArtistGallery,
  liveGallery as canonicalLiveGallery,
  type GalleryLocale,
  type GalleryPhoto as CanonicalGalleryPhoto,
} from '@/data/gallery';

export type { GalleryLocale };

export interface GalleryPhoto {
  id: string | number;
  src: string;
  srcHQ?: string;
  alt: Record<GalleryLocale, string>;
  venue: Record<GalleryLocale, string>;
  caption?: Record<GalleryLocale, string>;
  credit?: string;
  location?: string;
  photographer?: string;
  type?: CanonicalGalleryPhoto['type'];
  inPressKit?: boolean;
}

function toLegacy(photo: CanonicalGalleryPhoto): GalleryPhoto {
  return {
    id: photo.id,
    src: photo.src,
    srcHQ: photo.srcHQ,
    alt: photo.alt,
    venue: photo.caption,
    caption: photo.caption,
    credit: photo.credit,
    photographer: photo.credit && photo.credit !== 'TBD' ? photo.credit : undefined,
    type: photo.type,
    inPressKit: photo.inPressKit,
    location: photo.location,
  };
}

export const artistGallery: GalleryPhoto[] = canonicalArtistGallery.map(toLegacy);
export const liveGallery: GalleryPhoto[] = canonicalLiveGallery.map(toLegacy);

export const photoGallery = artistGallery;
