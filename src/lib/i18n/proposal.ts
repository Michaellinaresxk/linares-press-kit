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
    videoTitle: 'One night. Great energy. A room that refused to sit down.',
    embeddedVideoLabel: 'Linarex Experience: a night of great energy, live',
    experienceLabel: 'The experience',
    experienceTitle: 'A real show, built for your room.',
    experienceLead:
      'Linarex Experience is a live band built to do one thing: turn your venue into the best night of the week.',
    experienceBody:
      'Not a jukebox or background music. Two artists, one from Colombia and one from the Dominican Republic, backed by Warsaw-based professionals, bring familiar hits and originals that connect with the room. The floor fills up, the energy stays high, and your crowd gets a reason to stay.',
    trajectory: '',
    liveShowLabel: 'Live show',
    liveShowTitle: 'The live show',
    liveShowBody:
      'Led from the drums by Linarex, the show moves between danceable moments, songs with meaning and real connection with the audience. It is a shared experience designed to fit your night, not a one-size-fits-all playlist.',
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
      'Share your date, city, and crowd — we’ll bring {showName}.',
    openEpk: 'Open the EPK',
    whatsapp: 'WhatsApp',
  },
  // Zweryfikuj z native speakerem
  pl: {
    metaTitle:
      'Linarex Experience – zespół na żywo w Warszawie | z Jacke Matheusem',
    metaDescription:
      'Linarex Experience z Jacke Matheusem: warszawski zespół na żywo. Autorskie utwory i znane hity na bary, kluby, festiwale oraz eventy prywatne i firmowe.',
    ogAlt: 'Linarex Experience — koncert na żywo z Jacke Matheusem',
    langSwitcherAria: 'Wybór języka',
    eyebrow: 'Muzyka na żywo · Warszawa, Polska',
    heroPitch:
      'Zespół, który zamienia każdy wieczór w ten, o którym mówi się najdłużej.',
    heroCta: 'Zapytaj o rezerwację',
    heroPdf: 'Pobierz ofertę PDF',
    videoLabel: 'Zobacz na żywo',
    videoTitle: 'Jedna noc. Świetna energia. Sala, która nie chciała zwalniać.',
    embeddedVideoLabel:
      'Linarex Experience: wieczór pełen energii na żywo',
    experienceLabel: 'Doświadczenie',
    experienceTitle: 'Prawdziwy show dopasowany do Twojego miejsca.',
    experienceLead:
      'Linarex Experience to zespół na żywo stworzony po to, by zamienić Twój lokal w najlepszy wieczór tygodnia.',
    experienceBody:
      'To nie szafa grająca ani muzyka w tle. Dwóch artystów — z Kolumbii i z Dominikany — wspieranych przez warszawskich muzyków łączy znane utwory z autorskim brzmieniem. Parkiet się zapełnia, energia rośnie, a goście mają powód, by zostać dłużej.',
    trajectory: '',
    liveShowLabel: 'Na żywo',
    liveShowTitle: 'Koncert na żywo',
    liveShowBody:
      'Prowadzony zza perkusji przez Linarexa koncert łączy taneczne momenty, utwory z przesłaniem i prawdziwy kontakt z publicznością. To wspólne przeżycie dopasowane do charakteru Twojego wydarzenia, a nie gotowa playlista.',
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
    galleryPhrase: 'Nikt nie przyszedł tu po to, żeby siedzieć.',
    bookingLabel: 'Rezerwacja',
    bookingTitle: 'Zróbmy to.',
    bookingBody:
      'Podaj datę, miasto i orientacyjną liczbę gości — resztę dopracujemy razem z {showName}.',
    openEpk: 'Otwórz EPK',
    whatsapp: 'WhatsApp',
  },
};

export function withVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
