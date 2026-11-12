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
  firstHeadlineShow: string;
  experienceLabel: string;
  experienceTitle: string;
  experienceLead: string;
  experienceBody1: string;
  experienceBody2: string;
  energyLabel: string;
  energyTitle: string;
  energyLead: string;
  energyBody: string;
  liveRepertoireLabel: string;
  originalMusicLabel: string;
  stageLabel: string;
  stageTitle: string;
  watchYoutube: string;
  watchInstagram: string;
  liveSetTitle: string;
  crowdTitle: string;
  liveSetAlt: string;
  crowdAlt: string;
  peopleLabel: string;
  peopleTitle: string;
  glanceLabel: string;
  glanceTitle: string;
  onStage: string;
  expandable: string;
  setLength: string;
  repertoire: string;
  availability: string;
  askDates: string;
  idealFor: string;
  photosAria: string;
  quote: string;
  bookingLabel: string;
  bookingTitle: string;
  bookingBody: string;
  openEpk: string;
  listenSpotify: string;
};

export const proposalCopy: Record<ProposalLocale, ProposalCopy> = {
  en: {
    metaTitle: 'Linarex Experience – Live Band in Warsaw | with Jacke Matheus',
    metaDescription:
      'Warsaw live band Linarex Experience with Jacke Matheus: original songs and the hits everyone knows, for bars, venues, festivals and city events.',
    ogAlt: 'Linarex Experience live show with Jacke Matheus',
    langSwitcherAria: 'Language selection',
    eyebrow: 'Live music · Warsaw, Poland',
    heroPitch: 'The band that turns any night into the one people talk about.',
    heroCta: 'Ask about booking',
    heroPdf: 'Download proposal PDF',
    firstHeadlineShow: 'First headline show',
    experienceLabel: 'The experience',
    experienceTitle: 'The party is the point.',
    experienceLead:
      'Linarex Experience is a live band built to do one thing: turn your venue into the best night of the week.',
    experienceBody1:
      'Two artists, one from Colombia and one from the Dominican Republic, with their own songs and years on stage, backed by Warsaw-based professionals. They play the hits everyone knows and originals that hit just as hard.',
    experienceBody2:
      'Not a jukebox or background music: a real act that fills the floor, keeps the room moving and gives your crowd a reason to stay. Made for {eventTypes}.',
    energyLabel: 'What happens',
    energyTitle: 'From the first song to the last.',
    energyLead: 'Dance. Jump. Sing every word.',
    energyBody:
      'Hits from every corner of the map, with originals woven in that land just as hard. The floor fills up, and nobody checks the time.',
    liveRepertoireLabel: 'Live repertoire',
    originalMusicLabel: 'Original music',
    stageLabel: 'See it live',
    stageTitle: 'Don’t take our word for it.',
    watchYoutube: 'Watch on YouTube',
    watchInstagram: 'Watch on Instagram',
    liveSetTitle: 'Live Set — Full Room',
    crowdTitle: 'The Crowd — In Motion',
    liveSetAlt: 'Full room watching Linarex Experience perform live',
    crowdAlt: 'Crowd dancing at a Linarex Experience show',
    peopleLabel: 'The people',
    peopleTitle: 'Two countries, one stage.',
    glanceLabel: 'At a glance',
    glanceTitle: 'What to expect',
    onStage: 'On stage',
    expandable: 'Expandable for larger stages',
    setLength: 'Set length',
    repertoire: 'Repertoire',
    availability: 'Availability',
    askDates: 'Ask about dates',
    idealFor: 'Ideal for',
    photosAria: 'Live show photos',
    quote: 'Nobody came to sit down.',
    bookingLabel: 'Bring the show to your room',
    bookingTitle: 'Let’s make it happen.',
    bookingBody:
      'Tell us your date, your city and your crowd. We’ll bring {showName}.',
    openEpk: 'Open the EPK',
    listenSpotify: 'Listen on Spotify',
  },
  // Review by native speaker
  pl: {
    metaTitle:
      'Zespół na żywo Warszawa | Linarex Experience – muzyka na żywo na imprezy i do klubów',
    metaDescription:
      'Linarex Experience z Jacke Matheusem: zespół na żywo z Warszawy. Własne utwory i znane hity po angielsku, hiszpańsku i polsku. 60–90 minut. Zapytaj o termin.',
    ogAlt: 'Linarex Experience — koncert na żywo z Jacke Matheusem',
    langSwitcherAria: 'Wybór języka',
    eyebrow: 'Muzyka na żywo · Warszawa, Polska',
    heroPitch:
      'Zespół, który zamienia każdy wieczór w ten, o którym mówi się najdłużej.',
    heroCta: 'Zapytaj o rezerwację',
    heroPdf: 'Pobierz ofertę PDF',
    firstHeadlineShow: 'Pierwszy koncert jako headliner',
    experienceLabel: 'Klimat',
    experienceTitle: 'Liczy się dobra zabawa.',
    experienceLead:
      'Linarex Experience to zespół na żywo stworzony po to, by zamienić Twój lokal w najlepszy wieczór tygodnia.',
    experienceBody1:
      'Dwóch artystów, z Kolumbii i z Dominikany, z własnymi piosenkami i wieloletnim doświadczeniem scenicznym, wspieranych przez warszawskich profesjonalistów. Grają hity, które znają wszyscy, i autorskie utwory, które wchodzą równie mocno.',
    experienceBody2:
      'To nie szafa grająca ani muzyka w tle: to prawdziwy zespół, który zapełnia parkiet, utrzymuje energię i daje gościom powód, by zostać. Stworzony z myślą o: {eventTypes}.',
    energyLabel: 'Co się dzieje',
    energyTitle: 'Od pierwszej do ostatniej piosenki.',
    energyLead: 'Tańcz. Skacz. Śpiewaj każde słowo.',
    energyBody:
      'Hity z każdego zakątka świata, przeplatane autorskimi utworami, które wchodzą równie mocno. Parkiet się zapełnia, a nikt nie patrzy na zegarek.',
    liveRepertoireLabel: 'Repertuar koncertowy',
    originalMusicLabel: 'Muzyka autorska',
    stageLabel: 'Zobacz na żywo',
    stageTitle: 'Nie musisz wierzyć nam na słowo.',
    watchYoutube: 'Obejrzyj na YouTube',
    watchInstagram: 'Obejrzyj na Instagramie',
    liveSetTitle: 'Koncert na żywo — pełna sala',
    crowdTitle: 'Publiczność w ruchu',
    liveSetAlt: 'Pełna sala podczas koncertu Linarex Experience',
    crowdAlt: 'Tańcząca publiczność na koncercie Linarex Experience',
    peopleLabel: 'Ludzie',
    peopleTitle: 'Dwa kraje, jedna scena.',
    glanceLabel: 'W skrócie',
    glanceTitle: 'Czego się spodziewać',
    onStage: 'Na scenie',
    expandable: 'Możliwość rozszerzenia składu na większe sceny',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    availability: 'Dostępność',
    askDates: 'Zapytaj o termin',
    idealFor: 'Idealne na',
    photosAria: 'Zdjęcia z koncertów na żywo',
    quote: 'Nikt nie przyszedł tu siedzieć.',
    bookingLabel: 'Sprowadź show do swojego lokalu',
    bookingTitle: 'Zróbmy to.',
    bookingBody:
      'Podaj datę, miasto i opowiedz nam o swoich gościach. Resztę zrobi {showName}.',
    openEpk: 'Otwórz EPK',
    listenSpotify: 'Posłuchaj na Spotify',
  },
};

export function withVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
