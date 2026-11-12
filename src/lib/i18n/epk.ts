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
  /** Paragraphs are separated by "\n\n". Render with `whitespace-pre-line` or split on "\n\n". */
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
        'Linarex press kit: bio, original music, live show, photos and booking contact. Dominican-born composer and drummer based in Warsaw.',
    },
    eyebrow: 'Electronic Press Kit',
    pitch:
      'Dominican-born, Warsaw-based composer, drummer and executive producer. Songs that start with a feeling and end with a room moving together.',
    bookingButton: 'Contact for bookings',
    downloadPdf: 'Download EPK',
    spotifyCatalog: 'Listen to the music',
    contactCta: 'Contact / booking',
    quickFacts: 'Quick facts',
    originLabel: 'Origin',
    basedInLabel: 'Based in',
    experienceLabel: 'Experience',
    theArtist: 'The artist',
    aboutTitle: 'About Linarex',
    aboutText:
      '{name} writes from one question: what does this emotion sound like?\n\nBorn in the {origin} and based in {location}, he has spent {yearsOnStage} years on stage, from summer seasons in Jurata with Rongo Rongo to backing artists across Warsaw’s venues. Rock, progressive rock, jazz, funk and reggae shaped his ear; guitar, piano and drums are where his songs begin.\n\nEvery release finds its own sound. “Vaivén” (2025) opened the door with sun-soaked afro-latin pop. “Renacer” (2026) moved into funk-pop with a Daft Punk-style groove. “Memories” (2026, feat. Jacke Matheus) is atmospheric indie rock woven with real voices of family and friends, because some memories keep the light on.\n\nNew music is on the way.',
    listenLabel: 'Listen',
    musicTitle: 'Music',
    featuredSingle: 'Featured single',
    listenOnSpotify: 'Listen on Spotify',
    forBookersLabel: 'For bookers',
    liveTitle: 'The live show',
    liveBody:
      'Live, Linarex leads {showName} from behind the kit, with Jacke Matheus up front: original songs, the hits everyone knows, and a band that reads the room and keeps people on their feet.',
    musiciansOnStage: 'Musicians on stage',
    setLength: 'Set length',
    repertoire: 'Repertoire',
    firstHeadlineShow: 'First headline show',
    liveSetTitle: 'Live Set — Full Room',
    liveSetLabel: 'Watch on YouTube',
    liveSetAlt: 'Full room watching Linarex Experience perform live',
    crowdTitle: 'The Crowd — In Motion',
    crowdLabel: 'Watch on Instagram',
    crowdAlt: 'Crowd dancing at a Linarex Experience show',
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
        'Press kit Linarex: biografia, muzyka autorska, koncert na żywo, zdjęcia i kontakt w sprawie rezerwacji. Kompozytor i perkusista z Dominikany, mieszkający w Warszawie.',
    },
    eyebrow: 'Electronic Press Kit',
    pitch:
      'Kompozytor, perkusista i producent wykonawczy z Dominikany, mieszkający w Warszawie. Piosenki, które zaczynają się od emocji, a kończą salą w ruchu.',
    bookingButton: 'Kontakt w sprawie rezerwacji',
    downloadPdf: 'Pobierz EPK',
    spotifyCatalog: 'Posłuchaj muzyki',
    contactCta: 'Kontakt / rezerwacja',
    quickFacts: 'W skrócie',
    originLabel: 'Pochodzenie',
    basedInLabel: 'Baza',
    experienceLabel: 'Doświadczenie',
    theArtist: 'Artysta',
    aboutTitle: 'Kim jest Linarex',
    // Polish needs grammatical cases, so place names are written out instead of using {origin}/{location}.
    aboutText:
      '{name} tworzy, kierując się jednym pytaniem: jak brzmi ta emocja?\n\nUrodzony na Dominikanie, mieszka w Warszawie. Na scenie od {yearsOnStage} lat: od letnich sezonów w Juracie z zespołem Rongo Rongo po koncerty u boku innych artystów na warszawskich scenach. Rock, rock progresywny, jazz, funk i reggae ukształtowały jego słuch; jego piosenki rodzą się przy gitarze, pianinie i perkusji.\n\nKażde wydawnictwo ma własne brzmienie. „Vaivén” (2025) otworzył drzwi słonecznym afro-latin popem. „Renacer” (2026) wszedł w funk-pop z groove’em w stylu Daft Punk. „Memories” (2026, feat. Jacke Matheus) to atmosferyczny indie rock, w który wplecione są prawdziwe głosy rodziny i przyjaciół, bo niektóre wspomnienia nie pozwalają zgasnąć światłu.\n\nNowa muzyka jest w drodze.',
    listenLabel: 'Słuchaj',
    musicTitle: 'Muzyka',
    featuredSingle: 'Najnowszy singiel',
    listenOnSpotify: 'Posłuchaj na Spotify',
    forBookersLabel: 'Dla bookerów',
    liveTitle: 'Koncert na żywo',
    liveBody:
      'Na żywo Linarex prowadzi {showName} zza perkusji, a z przodu sceny stoi Jacke Matheus: autorskie utwory, hity, które znają wszyscy, i zespół, który wyczuwa salę i nie pozwala nikomu usiąść.',
    musiciansOnStage: 'Muzycy na scenie',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    firstHeadlineShow: 'Pierwszy koncert jako headliner',
    liveSetTitle: 'Koncert na żywo — pełna sala',
    liveSetLabel: 'Obejrzyj na YouTube',
    liveSetAlt: 'Pełna sala podczas koncertu Linarex Experience',
    crowdTitle: 'Publiczność w ruchu',
    crowdLabel: 'Obejrzyj na Instagramie',
    crowdAlt: 'Tańcząca publiczność na koncercie Linarex Experience',
    getInTouch: 'Skontaktuj się',
    contactTitle: 'Kontakt prasowy i rezerwacje',
    openProposal: 'Zobacz ofertę {showName}',
    liveShowSubtitle: 'z Jacke Matheusem',
    langSwitcherAria: 'Wybór języka',
  },
};

export function withEpkVars(text: string, vars: Record<string, string>) {
  return withVars(text, vars);
}
