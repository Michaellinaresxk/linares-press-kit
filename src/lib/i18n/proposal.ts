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
  forBookersLabel: string;
  forBookersTitle: string;
};

export const proposalCopy: Record<ProposalLocale, ProposalCopy> = {
  en: {
    metaTitle: 'Linarex Experience – Live Band in Warsaw | with Jacke Matheus',
    metaDescription:
      'Linarex Experience with Jacke Matheus: a Warsaw-based live band with original songs, familiar covers, audience connection and booking details for venues and events.',
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
      'Two artists — Colombia and the Dominican Republic — with their own music and years on stage, backed by a lineup of Warsaw-based professionals. They play the hits everyone knows and their own songs that hit just as hard: funk, pop, rock, Latin pop and afrobeat.',
    experienceBody2:
      'Not a jukebox or background music: a real act that fills the floor, keeps the room moving and gives your crowd a reason to stay. Made for {eventTypes}.',
    energyLabel: 'What happens',
    energyTitle: 'The energy',
    energyLead: 'Dance. Jump. Sing every word.',
    energyBody:
      'Hit after hit, country after country — with original songs woven in that land just as hard. The crowd doesn’t sit still. From the first song to the last, the room stays alive.',
    liveRepertoireLabel: 'Live repertoire',
    originalMusicLabel: 'Original music',
    stageLabel: 'See it live',
    stageTitle: 'See Linarex Experience on stage.',
    watchYoutube: 'Watch on YouTube',
    watchInstagram: 'Watch on Instagram',
    liveSetTitle: 'Live Set — Full Room',
    crowdTitle: 'The Crowd — In Motion',
    liveSetAlt: 'Linarex Experience live show with Jacke Matheus',
    crowdAlt: 'Linarex Experience live show with Jacke Matheus',
    peopleLabel: 'The people',
    peopleTitle: 'Who’s playing',
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
    bookingBody: 'Ask about dates, event details and booking {showName}.',
    openEpk: 'Open the EPK',
    listenSpotify: 'Listen on Spotify',
    forBookersLabel: 'For bookers',
    forBookersTitle: 'Everything you need to book',
  },
  // Review by native speaker
  pl: {
    metaTitle:
      'Zespół na żywo Warszawa | Linarex Experience – muzyka na żywo na imprezy i do klubów',
    metaDescription:
      'Linarex Experience z Jacke Matheus: zespół na żywo z Warszawy. Własne utwory i znane hity po angielsku, hiszpańsku i polsku. 60–90 minut. Zapytaj o termin.',
    ogAlt: 'Linarex Experience — koncert na żywo z Jacke Matheus',
    langSwitcherAria: 'Wybór języka',
    eyebrow: 'Muzyka na żywo · Warszawa, Polska',
    heroPitch:
      'Zespół, który zamienia każdy wieczór w ten, o którym mówi się najdłużej.',
    heroCta: 'Zapytaj o rezerwację',
    heroPdf: 'Pobierz ofertę PDF',
    firstHeadlineShow: 'Pierwszy koncert headline',
    experienceLabel: 'Doświadczenie',
    experienceTitle: 'Liczy się dobra zabawa.',
    experienceLead:
      'Linarex Experience to zespół na żywo stworzony po to, by zamienić Twój lokal w najlepszy wieczór tygodnia.',
    experienceBody1:
      'Dwóch artystów — z Kolumbii i Dominikany — z własną muzyką i wieloletnim doświadczeniem scenicznym, wspieranych przez skład warszawskich profesjonalistów. Grają hity, które znają wszyscy, oraz własne utwory, które brzmią równie mocno: funk, pop, rock, latin pop i afrobeat.',
    experienceBody2:
      'To nie szafa grająca ani muzyka w tle: to prawdziwy zespół na imprezę, który zapełnia parkiet, utrzymuje energię i daje gościom powód, by zostać. Muzyka na żywo na koncerty w klubie i barze oraz eventy miejskie i plenerowe: {eventTypes}.',
    energyLabel: 'Co się dzieje',
    energyTitle: 'Energia',
    energyLead: 'Tańcz. Skacz. Śpiewaj każde słowo.',
    energyBody:
      'Hit za hitem, kraj za krajem — z autorskimi utworami, które wchodzą równie mocno. Nikt nie siedzi w miejscu. Od pierwszej do ostatniej piosenki sala żyje.',
    liveRepertoireLabel: 'Repertuar koncertowy',
    originalMusicLabel: 'Muzyka autorska',
    stageLabel: 'Zobacz na żywo',
    stageTitle: 'Zobacz Linarex Experience na scenie.',
    watchYoutube: 'Obejrzyj na YouTube',
    watchInstagram: 'Obejrzyj na Instagramie',
    liveSetTitle: 'Koncert na żywo — pełna sala',
    crowdTitle: 'Publiczność w ruchu',
    liveSetAlt: 'Linarex Experience — koncert na żywo z Jacke Matheus',
    crowdAlt: 'Linarex Experience — koncert na żywo z Jacke Matheus',
    peopleLabel: 'Ludzie',
    peopleTitle: 'Kto gra',
    glanceLabel: 'W skrócie',
    glanceTitle: 'Czego się spodziewać',
    onStage: 'Na scenie',
    expandable: 'Możliwość rozszerzenia na większe sceny',
    setLength: 'Długość setu',
    repertoire: 'Repertuar',
    availability: 'Dostępność',
    askDates: 'Zapytaj o termin',
    idealFor: 'Idealne na',
    photosAria: 'Zdjęcia z koncertów na żywo',
    quote: 'Nikt nie przyszedł tu siedzieć.',
    bookingLabel: 'Zaprosimy show do Twojego lokalu',
    bookingTitle: 'Zróbmy to.',
    bookingBody:
      'Zapytaj o termin, szczegóły wydarzenia i rezerwację: {showName}.',
    openEpk: 'Otwórz EPK',
    listenSpotify: 'Posłuchaj na Spotify',
    forBookersLabel: 'Dla bookerów',
    forBookersTitle: 'Wszystko, czego potrzebujesz do rezerwacji',
  },
};

export function withVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
