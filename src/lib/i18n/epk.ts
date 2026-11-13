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
      'Shaped by more than 20 years on stage, {name} is a composer of musical concepts. Each song is an emotional journey through the human experience, written to slow you down and to move you beyond the confines of yourself.\n\nOn stage, those journeys become energy: poetic words, delivered with passion and good vibes, that bring people together.',
    listenLabel: 'Listen',
    musicTitle: 'Music',
    featuredSingle: 'Featured single',
    listenOnSpotify: 'Listen on Spotify',
    forBookersLabel: 'For bookers',
    liveTitle: 'The live show',
    liveBody:
      '{showName} is a night to enjoy, to dance and to feel. Songs with meaning, poetic lyrics and good vibes, delivered with energy, style and the confidence of more than 20 years on stage. Linarex leads it all from behind the kit, turning every show into a shared moment people take home with them.',
    musiciansOnStage: 'Musicians on stage',
    setLength: 'Set length',
    repertoire: 'Repertoire',
    firstHeadlineShow: 'First headline show',
    liveSetTitle: 'Live Set — Full Room',
    liveSetLabel: 'Watch on YouTube',
    liveSetAlt: 'Full room watching Linarex Experience perform live',
    crowdTitle: 'The Crowd — In Motion',
    crowdLabel: 'Watch on YouTube',
    crowdAlt: 'Crowd dancing at a Linarex Experience show',
    getInTouch: 'Get in touch',
    contactTitle: 'Press & booking contact',
    openProposal: 'Explore the {showName} proposal',
    liveShowSubtitle: 'with Jacke Matheus',
    langSwitcherAria: 'Language selection',
  },
  // Tłumaczenie PL — wierna kopia wersji EN (zweryfikuj z native speakerem).
  pl: {
    metadata: {
      title: 'Linarex – Electronic Press Kit',
      description:
        'Press kit Linarex: bio, muzyka autorska, koncert na żywo, zdjęcia i kontakt w sprawie rezerwacji. Kompozytor i perkusista z Dominikany, mieszkający w Warszawie.',
    },
    eyebrow: 'Electronic Press Kit',
    pitch:
      'Kompozytor, perkusista i producent wykonawczy z Dominikany, mieszkający w Warszawie. Utwory, które zaczynają się od uczucia, a kończą salą poruszającą się razem.',
    bookingButton: 'Kontakt w sprawie rezerwacji',
    downloadPdf: 'Pobierz EPK',
    spotifyCatalog: 'Posłuchaj muzyki',
    contactCta: 'Kontakt / rezerwacja',
    quickFacts: 'W skrócie',
    originLabel: 'Pochodzenie',
    basedInLabel: 'Baza',
    experienceLabel: 'Doświadczenie',
    theArtist: 'Artysta',
    aboutTitle: 'O Linarexie',
    aboutText:
      'Ukształtowany przez ponad 20 lat na scenie, {name} jest kompozytorem muzycznych koncepcji. Każda piosenka to emocjonalna podróż przez ludzkie doświadczenie — napisana po to, by cię spowolnić i poruszyć poza granice samego siebie.\n\nNa scenie te podróże stają się energią: poetyckie słowa, przekazywane z pasją i dobrymi wibracjami, które łączą ludzi.',
    listenLabel: 'Posłuchaj',
    musicTitle: 'Muzyka',
    featuredSingle: 'Najnowszy singiel',
    listenOnSpotify: 'Posłuchaj na Spotify',
    forBookersLabel: 'Dla bookerów',
    liveTitle: 'Koncert na żywo',
    liveBody:
      '{showName} to wieczór pełen radości, tańca i emocji. Piosenki z przesłaniem, poetyckie teksty i dobre wibracje, przekazywane z energią, stylem i pewnością wynikającą z ponad 20 lat na scenie. Linarex prowadzi całość zza perkusji, zamieniając każdy koncert we wspólne przeżycie, które ludzie zabierają ze sobą do domu.',
    musiciansOnStage: 'Muzycy na scenie',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    firstHeadlineShow: 'Pierwszy koncert jako headliner',
    liveSetTitle: 'Koncert na żywo — pełna sala',
    liveSetLabel: 'Obejrzyj na YouTube',
    liveSetAlt: 'Pełna sala podczas koncertu Linarex Experience',
    crowdTitle: 'Publiczność w ruchu',
    crowdLabel: 'Obejrzyj na YouTube',
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
