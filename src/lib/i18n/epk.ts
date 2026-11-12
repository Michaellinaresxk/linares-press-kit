import { withVars, type ProposalLocale } from './proposal';

export type EpkLocale = ProposalLocale;

type EpkCopy = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  pitch: string;
  bookingButton: string;
  downloadPdf: string;
  spotifyCatalog: string;
  contactCta: string;
  quickFacts: string;
  originLabel: string;
  basedInLabel: string;
  experienceLabel: string;
  theArtist: string;
  aboutTitle: string;
  aboutText: string;
  listenLabel: string;
  musicTitle: string;
  featuredSingle: string;
  listenOnSpotify: string;
  forBookersLabel: string;
  liveTitle: string;
  liveBody: string;
  musiciansOnStage: string;
  setLength: string;
  repertoire: string;
  firstHeadlineShow: string;
  liveSetTitle: string;
  liveSetLabel: string;
  liveSetAlt: string;
  crowdTitle: string;
  crowdLabel: string;
  crowdAlt: string;
  getInTouch: string;
  contactTitle: string;
  openProposal: string;
  liveShowSubtitle: string;
  langSwitcherAria: string;
};

export const epkCopy: Record<EpkLocale, EpkCopy> = {
  en: {
    metadata: {
      title: 'Linarex – Electronic Press Kit',
      description:
        'Electronic press kit for Linarex: artist bio, original music, photos, and contact for press and bookings.',
    },
    eyebrow: 'Electronic Press Kit',
    pitch:
      'Original music from a Dominican-born, Warsaw-based composer and drummer.',
    bookingButton: 'Contact for bookings',
    downloadPdf: 'Download EPK',
    spotifyCatalog: 'View Spotify catalog',
    contactCta: 'Contact / booking',
    quickFacts: 'Quick facts',
    originLabel: 'Origin',
    basedInLabel: 'Based in',
    experienceLabel: 'Experience',
    theArtist: 'The artist',
    aboutTitle: 'About Linarex',
    aboutText:
      '{name} was born in the {origin} and is based in {location}. A multi-instrumentalist, {name} composes on guitar, piano and drums. With {yearsOnStage} years on stage, his musical roots span rock and progressive rock, jazz, funk and reggae.',
    listenLabel: 'Listen',
    musicTitle: 'Music',
    featuredSingle: 'Featured single',
    listenOnSpotify: 'Listen on Spotify',
    forBookersLabel: 'For bookers',
    liveTitle: 'The live show',
    liveBody:
      '{showName} is the live show: Linarex and the band, featuring Jacke Matheus.',
    musiciansOnStage: 'Musicians on stage',
    setLength: 'Set length',
    repertoire: 'Repertoire',
    firstHeadlineShow: 'First headline show',
    liveSetTitle: 'Live Set — Full Room',
    liveSetLabel: 'Watch on YouTube',
    liveSetAlt: 'Linarex Experience live show with Jacke Matheus',
    crowdTitle: 'The Crowd — In Motion',
    crowdLabel: 'Watch on Instagram',
    crowdAlt: 'The audience watching the Linarex Experience live show',
    getInTouch: 'Get in touch',
    contactTitle: 'Press & booking contact',
    openProposal: 'Explore the {showName} proposal',
    liveShowSubtitle: 'with Jacke Matheus',
    langSwitcherAria: 'Language selection',
  },
  // Review by native speaker
  pl: {
    metadata: {
      title: 'Linarex – Electronic Press Kit',
      description:
        'Electronic press kit Linarex: bio artysty, muzyka, zdjęcia i kontakt dla prasy oraz rezerwacji.',
    },
    eyebrow: 'Electronic Press Kit',
    pitch:
      'Własne utwory kompozytora i perkusisty z Dominikany, mieszkającego w Warszawie.',
    bookingButton: 'Kontakt w sprawie rezerwacji',
    downloadPdf: 'Pobierz EPK',
    spotifyCatalog: 'Zobacz katalog Spotify',
    contactCta: 'Kontakt / rezerwacja',
    quickFacts: 'Szybkie informacje',
    originLabel: 'Pochodzenie',
    basedInLabel: 'Baza',
    experienceLabel: 'Doświadczenie',
    theArtist: 'O twórcy',
    aboutTitle: 'O Linarex',
    aboutText:
      '{name} urodził się na {origin} i mieszka w {location}. {name} to multiinstrumentalista, kompozytor gitary, pianiny i perkusji. Ma {yearsOnStage} lat doświadczenia na scenie, a jego muzyczne korzenie sięgają rocka, progresywnego rocka, jazzu, funku i reggae.',
    listenLabel: 'Słuchaj',
    musicTitle: 'Muzyka',
    featuredSingle: 'Singiel',
    listenOnSpotify: 'Posłuchaj na Spotify',
    forBookersLabel: 'Dla bookerów',
    liveTitle: 'Koncert na żywo',
    liveBody:
      '{showName} to koncert na żywo: Linarex i zespół, z udziałem Jacke Matheusa.',
    musiciansOnStage: 'Muzycy na scenie',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    firstHeadlineShow: 'Pierwszy koncert headline',
    liveSetTitle: 'Koncert na żywo — pełna sala',
    liveSetLabel: 'Obejrzyj na YouTube',
    liveSetAlt: 'Linarex Experience — koncert na żywo z Jacke Matheusem',
    crowdTitle: 'Publiczność — w ruchu',
    crowdLabel: 'Obejrzyj na Instagramie',
    crowdAlt:
      'Publiczność oglądająca koncert Linarex Experience z Jacke Matheusa',
    getInTouch: 'Skontaktuj się',
    contactTitle: 'Kontakt prasowy i rezerwacyjny',
    openProposal: 'Zobacz ofertę {showName}',
    liveShowSubtitle: 'z Jacke Matheusem',
    langSwitcherAria: 'Wybór języka',
  },
};

export function withEpkVars(text: string, vars: Record<string, string>) {
  return withVars(text, vars);
}
