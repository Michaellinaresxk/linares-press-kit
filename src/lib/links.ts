/**
 * Canonical external links (D1). No tracking/playback query params.
 * TODO(003): Replace Memories/Renacer Spotify URLs with track links when track IDs are confirmed.
 */

const cleanUrl = (url: string) => url.split('?')[0];

export const links = {
  profiles: {
    spotifyArtist: cleanUrl(
      'https://open.spotify.com/artist/4GIlGL9p0s5IgGFu212QUS',
    ),
    youtube: cleanUrl('https://www.youtube.com/@linarexmusic'),
    instagram: cleanUrl('https://www.instagram.com/_linarex'),
    tiktok: cleanUrl('https://www.tiktok.com/@linarex59'),
    appleMusic: null as string | null,
  },
  contact: {
    email: 'linarexinfo@gmail.com',
    bookingEmail: 'mailto:linarexinfo@gmail.com',
  },
  tracks: {
    // TODO(003): confirm Spotify track IDs for Memories and Renacer
    memories:
      'https://open.spotify.com/album/57gkaRLcx11qK4Ok1PYdyW',
    renacer:
      'https://open.spotify.com/album/5JVDDkvNP77b5yz235Qu0R',
    vaiven: cleanUrl(
      'https://open.spotify.com/intl-es/track/77R8ciAdBDoVzHsL3GAjDB?autoplay_ok=1',
    ),
  },
  videos: {
    liveSet: 'https://www.youtube.com/shorts/jqD3Qzr_MPY',
    crowdInMotion: 'https://www.youtube.com/watch?v=UGQpFUqNYTU',
  },
} as const;

export type CanonicalLinks = typeof links;
