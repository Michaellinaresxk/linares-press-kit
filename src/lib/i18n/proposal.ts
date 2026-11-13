// Review by native speaker — Polish copy below should be checked by a native Polish speaker.
export type ProposalLocale = 'en' | 'pl';

type ProposalCopy = {
  metaTitle: string;
  metaDescription: string;
  ogAlt: string;
  langSwitcherAria: string;
  eyebrow: string;
  heroPitch: string;
  heroCta: string;
  heroPdf: string;
  videoLabel: string;
  videoTitle: string;
  embeddedVideoLabel: string;
  experienceLabel: string;
  experienceTitle: string;
  experienceLead: string;
  experienceBody: string;
  trajectory: string;
  liveShowLabel: string;
  liveShowTitle: string;
  liveShowBody: string;
  liveReferencesLabel: string;
  peopleLabel: string;
  peopleTitle: string;
  glanceLabel: string;
  glanceTitle: string;
  formats: string;
  setLength: string;
  repertoire: string;
  languages: string;
  idealFor: string;
  logistics: string;
  photosAria: string;
  galleryPhrase: string;
  bookingLabel: string;
  bookingTitle: string;
  bookingBody: string;
  openEpk: string;
  whatsapp: string;
};

export const proposalCopy: Record<ProposalLocale, ProposalCopy> = {
  en: {
    metaTitle: 'Linarex Experience – Live Band in Warsaw | with Jacke Matheus',
    metaDescription:
      'Warsaw live band Linarex Experience with Jacke Matheus: original songs and the hits everyone knows, for bars, venues, festivals, private and corporate events.',
    ogAlt: 'Linarex Experience live show with Jacke Matheus',
    langSwitcherAria: 'Language selection',
    eyebrow: 'Live music · Warsaw, Poland',
    heroPitch: 'The band that turns any night into the one people talk about.',
    heroCta: 'Ask about booking',
    heroPdf: 'Download proposal PDF',
    videoLabel: 'See it live',
    videoTitle: 'One night. Good vibes. A room that refused to sit down.',
    embeddedVideoLabel: 'Linarex Experience: a night of good vibes, live',
    experienceLabel: 'The experience',
    experienceTitle: 'A real show, built for your room.',
    experienceLead:
      'Linarex Experience is a live band built to do one thing: turn your venue into the best night of the week.',
    experienceBody:
      'Not a jukebox or background music. Two artists, one from Colombia and one from the Dominican Republic, backed by Warsaw-based professionals, play the hits everyone knows and originals that hit just as hard. The floor fills up, the room keeps moving, and your crowd gets a reason to stay.',
    trajectory:
      '20+ years on stage: from summer seasons in Jurata to backing artists across Warsaw.',
    liveShowLabel: 'Live show',
    liveShowTitle: 'The live show',
    liveShowBody:
      'Linarex Experience is a night to enjoy, to dance and to feel. Songs with meaning, poetic lyrics and good vibes, delivered with energy, style and the confidence of more than 20 years on stage. Linarex leads it all from behind the kit, turning every show into a shared moment people take home with them.',
    liveReferencesLabel: 'More live references',
    peopleLabel: 'The people',
    peopleTitle: 'Two countries, one stage.',
    glanceLabel: 'At a glance',
    glanceTitle: 'What to expect',
    formats: 'Formats',
    setLength: 'Set length',
    repertoire: 'Repertoire',
    languages: 'Languages',
    idealFor: 'Ideal for',
    logistics: 'Logistics',
    photosAria: 'Live show photos',
    galleryPhrase: 'Nobody came to sit down.',
    bookingLabel: 'Booking',
    bookingTitle: 'Let’s make it happen.',
    bookingBody:
      'Tell us your date, your city and your crowd. We’ll bring {showName}.',
    openEpk: 'Open the EPK',
    whatsapp: 'WhatsApp',
  },
  // Review by native speaker
  pl: {
    metaTitle:
      'Linarex Experience – zespół na żywo w Warszawie | z Jacke Matheusem',
    metaDescription:
      'Linarex Experience z Jacke Matheusem: zespół na żywo z Warszawy. Własne utwory i znane hity na bary, kluby, festiwale oraz eventy prywatne i firmowe.',
    ogAlt: 'Linarex Experience — koncert na żywo z Jacke Matheusem',
    langSwitcherAria: 'Wybór języka',
    eyebrow: 'Muzyka na żywo · Warszawa, Polska',
    heroPitch:
      'Zespół, który zamienia każdy wieczór w ten, o którym mówi się najdłużej.',
    heroCta: 'Zapytaj o rezerwację',
    heroPdf: 'Pobierz ofertę PDF',
    videoLabel: 'Zobacz na żywo',
    videoTitle: 'Jedna noc. Dobre wibracje. Pokój, który odmówił siadać.',
    embeddedVideoLabel:
      'Linarex Experience: jedna noc, dobre wibracje, na żywo',
    experienceLabel: 'Doświadczenie',
    experienceTitle: 'Prawdziwy show, stworzony dla Twojego miejsca.',
    experienceLead:
      'Linarex Experience to zespół na żywo stworzony po to, by zamienić Twój lokal w najlepszy wieczór tygodnia.',
    experienceBody:
      'To nie szafa grająca ani muzyka w tle. Dwóch artystów, z Kolumbii i z Dominikany, wspieranych przez warszawskich profesjonalistów, gra hity, które znają wszyscy, i autorskie utwory, które wchodzą równie mocno. Parkiet się zapełnia, sala zostaje w ruchu, a goście mają powód, by zostać.',
    trajectory:
      'Ponad 20 lat na scenie: od letnich sezonów w Juracie po współpracę z artystami w całej Warszawie.',
    liveShowLabel: 'Na żywo',
    liveShowTitle: 'Koncert na żywo',
    liveShowBody:
      'Linarex Experience to wieczór pełen radości, tańca i emocji. Piosenki z przesłaniem, poetyckie teksty i dobre wibracje, przekazywane z energią, stylem i pewnością wynikającą z ponad 20 lat na scenie. Linarex prowadzi całość zza perkusji, zamieniając każdy koncert we wspólne przeżycie, które ludzie zabierają ze sobą do domu.',
    liveReferencesLabel: 'Więcej nagrań na żywo',
    peopleLabel: 'Ludzie',
    peopleTitle: 'Dwa kraje, jedna scena.',
    glanceLabel: 'W skrócie',
    glanceTitle: 'Czego się spodziewać',
    formats: 'Formaty',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    languages: 'Języki',
    idealFor: 'Idealne na',
    logistics: 'Logistyka',
    photosAria: 'Zdjęcia z koncertów na żywo',
    galleryPhrase: 'Nikt nie przyszedł tu siedzieć.',
    bookingLabel: 'Rezerwacja',
    bookingTitle: 'Zróbmy to.',
    bookingBody:
      'Podaj datę, miasto i opowiedz nam o swoich gościach. Resztę zrobi {showName}.',
    openEpk: 'Otwórz EPK',
    whatsapp: 'WhatsApp',
  },
};

export function withVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
