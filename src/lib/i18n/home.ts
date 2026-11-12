export type HomeLocale = 'en' | 'pl';

export type ContactFormCopy = {
  title: string;
  description: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  subjects: {
    booking: string;
    collaboration: string;
    press: string;
    technical: string;
    other: string;
  };
  message: string;
  messagePlaceholder: string;
  eventDate: string;
  city: string;
  cityPlaceholder: string;
  eventType: string;
  eventTypePlaceholder: string;
  eventTypes: {
    corporate: string;
    wedding: string;
    festival: string;
    club: string;
    other: string;
  };
  budget: string;
  budgetPlaceholder: string;
  sending: string;
  send: string;
  successTitle: string;
  successBody: string;
  sendAnother: string;
  hint: string;
  requiredError: string;
};

export type HomeCopy = {
  hero: {
    badge: string;
    statLabel: string;
    memoriesCta: string;
    bookerCta: string;
    eventCta: string;
  };
  music: {
    badge: string;
    title: string;
  };
  about: {
    quote: string;
    fromOriginToLocation: string;
    bornAndNow: string;
    latestSingle: string;
    getInTouch: string;
  };
  collaborations: {
    title: string;
    subtitle: string;
    openTo: string;
    openToCopy: string;
    getInTouch: string;
  };
  experience: {
    label: string;
    title: string;
    copy: string;
    explore: string;
    subtitle: string;
  };
  links: {
    title: string;
    copy: string;
    streaming: string;
    social: string;
  };
  contact: {
    title: string;
    copy: string;
    privacy: string;
    success: string;
    form: ContactFormCopy;
  };
  gallery: {
    live: string;
    liveCopy: string;
    artist: string;
    artistCopy: string;
    artistSectionLabel: string;
  };
};

export const homeCopy: Record<HomeLocale, HomeCopy> = {
  en: {
    hero: {
      badge: 'CARIBBEAN ROOTS · WARSAW NIGHTS',
      statLabel: 'Years on stage',
      memoriesCta: 'Listen to Memories',
      bookerCta: 'Press kit',
      eventCta: 'Book the Linarex Experience',
    },
    music: {
      badge: 'LISTEN',
      title: 'NEW SINGLE',
    },
    about: {
      quote:
        'I create musical concepts guided by one question: what does this emotion sound like?',
      fromOriginToLocation: 'From {origin} to {location}',
      bornAndNow:
        'Born in the {origin} and shaped by more than 20 years on stage, from summer seasons in Jurata to backing artists across Warsaw, {name} now writes from {location}. His songs begin on guitar, piano and drums; rock, progressive rock, jazz, funk and reggae are the records that raised him.',
      latestSingle:
        'Every release sounds different because every one starts from a different feeling. The latest is {title}.',
      getInTouch: 'Write to me',
    },
    collaborations: {
      title: 'COLLABORATIONS',
      subtitle:
        'Some songs need more than one voice. These were written in the space between two worlds, two languages and two ways of feeling the same thing.',
      openTo: 'Got a voice for the next one?',
      openToCopy:
        'If you sing, play or write, and something here moved you, let’s find out what we sound like together.',
      getInTouch: 'Let’s talk',
    },
    experience: {
      label: 'The live show',
      title: '{liveShow}',
      copy: 'A live band led from the drums. Original songs next to the hits everyone knows, a frontman who never lets the room sit still, and a night that ends with strangers singing the same chorus.',
      explore: 'Explore the live show',
      subtitle: 'with Jacke Matheus',
    },
    links: {
      title: 'Find the music',
      copy: 'New songs, live clips and everything that happens in between. Pick your platform.',
      streaming: 'Listen',
      social: 'Follow',
    },
    contact: {
      title: 'Let’s talk',
      copy: 'A show, a collaboration, a press request, or a song idea that won’t leave you alone. Write. I read every message.',
      privacy: 'Your details are used only to reply to your message.',
      success:
        'Message sent! Thanks for reaching out. I’ll get back to you soon.',
      form: {
        title: 'Send a message',
        description:
          'Tell me what you have in mind: a show, a song, a project.',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone (optional)',
        phonePlaceholder: '+48 123 456 789',
        subject: 'Subject',
        subjectPlaceholder: 'What is it about?',
        subjects: {
          booking: 'Booking request',
          collaboration: 'Collaboration',
          press: 'Press / Media',
          technical: 'Technical',
          other: 'Other',
        },
        message: 'Message',
        messagePlaceholder: 'Tell me about your idea, event or project...',
        eventDate: 'Event date',
        city: 'City',
        cityPlaceholder: 'Where is it happening?',
        eventType: 'Event type',
        eventTypePlaceholder: 'Select event type',
        eventTypes: {
          corporate: 'Corporate',
          wedding: 'Wedding',
          festival: 'Festival',
          club: 'Club / Bar',
          other: 'Other',
        },
        budget: 'Approximate budget',
        budgetPlaceholder: 'Budget in EUR',
        sending: 'Sending...',
        send: 'Send message',
        successTitle: 'Message sent!',
        successBody: 'Thanks for reaching out. I’ll get back to you soon.',
        sendAnother: 'Send another message',
        hint: 'The more details you share, the faster I can reply.',
        requiredError: 'Please fill in all required fields before sending.',
      },
    },
    gallery: {
      live: 'Live gallery',
      liveCopy: 'Sweat, lights and a room that refused to sit down.',
      artist: 'Gallery',
      artistCopy: 'Portraits, stages and the roads in between.',
      artistSectionLabel: 'Artist & press photos',
    },
  },
  // Review by native speaker
  pl: {
    hero: {
      badge: 'KARAIBSKIE KORZENIE · WARSZAWSKIE NOCE',
      statLabel: 'Lat na scenie',
      memoriesCta: 'Posłuchaj „Memories”',
      bookerCta: 'Press kit',
      eventCta: 'Zarezerwuj Linarex Experience',
    },
    music: {
      badge: 'SŁUCHAJ',
      title: 'NOWY SINGIEL',
    },
    about: {
      quote:
        'Tworzę muzyczne koncepcje, kierując się jednym pytaniem: jak brzmi ta emocja?',
      // Polish needs grammatical cases, so place names are written out instead of using {origin}/{location}.
      fromOriginToLocation: 'Z Dominikany do Warszawy',
      bornAndNow:
        'Urodzony na Dominikanie i ukształtowany przez ponad 20 lat na scenie, od letnich sezonów w Juracie po warszawskie sceny u boku innych artystów, {name} tworzy dziś w Warszawie. Jego piosenki rodzą się przy gitarze, pianinie i perkusji; rock, rock progresywny, jazz, funk i reggae to płyty, na których się wychował.',
      latestSingle:
        'Każde wydawnictwo brzmi inaczej, bo każde zaczyna się od innej emocji. Najnowsze to {title}.',
      getInTouch: 'Napisz do mnie',
    },
    collaborations: {
      title: 'WSPÓŁPRACE',
      subtitle:
        'Niektóre piosenki potrzebują więcej niż jednego głosu. Te powstały pomiędzy dwoma światami, dwoma językami i dwoma sposobami odczuwania tego samego.',
      openTo: 'Masz głos do następnej?',
      openToCopy:
        'Jeśli śpiewasz, grasz albo piszesz i coś tutaj cię poruszyło, sprawdźmy, jak brzmimy razem.',
      getInTouch: 'Porozmawiajmy',
    },
    experience: {
      label: 'Koncert na żywo',
      title: '{liveShow}',
      copy: 'Zespół prowadzony zza perkusji. Własne piosenki obok hitów, które wszyscy znają, frontman, który nie pozwala nikomu usiedzieć w miejscu, i noc, która kończy się wspólnym śpiewaniem refrenu z zupełnie obcymi ludźmi.',
      explore: 'Zobacz koncert',
      subtitle: 'z Jacke Matheusem',
    },
    links: {
      title: 'Znajdź muzykę',
      copy: 'Nowe piosenki, klipy z koncertów i wszystko, co dzieje się pomiędzy. Wybierz swoją platformę.',
      streaming: 'Słuchaj',
      social: 'Obserwuj',
    },
    contact: {
      title: 'Porozmawiajmy',
      copy: 'Koncert, współpraca, zapytanie prasowe albo pomysł na piosenkę, który nie daje ci spokoju. Napisz. Czytam każdą wiadomość.',
      privacy:
        'Twoje dane wykorzystuję wyłącznie po to, aby odpowiedzieć na Twoją wiadomość.',
      success: 'Wiadomość wysłana! Dzięki za kontakt. Odezwę się wkrótce.',
      form: {
        title: 'Napisz wiadomość',
        description: 'Opowiedz, co masz na myśli: koncert, piosenkę, projekt.',
        name: 'Imię',
        namePlaceholder: 'Twoje imię',
        email: 'E-mail',
        emailPlaceholder: 'twoj@email.com',
        phone: 'Telefon (opcjonalnie)',
        phonePlaceholder: '+48 123 456 789',
        subject: 'Temat',
        subjectPlaceholder: 'Czego dotyczy wiadomość?',
        subjects: {
          booking: 'Rezerwacja koncertu',
          collaboration: 'Współpraca',
          press: 'Prasa / media',
          technical: 'Sprawy techniczne',
          other: 'Inne',
        },
        message: 'Wiadomość',
        messagePlaceholder:
          'Opowiedz o swoim pomyśle, wydarzeniu lub projekcie...',
        eventDate: 'Data wydarzenia',
        city: 'Miasto',
        cityPlaceholder: 'Gdzie odbędzie się wydarzenie?',
        eventType: 'Rodzaj wydarzenia',
        eventTypePlaceholder: 'Wybierz rodzaj wydarzenia',
        eventTypes: {
          corporate: 'Wydarzenie firmowe',
          wedding: 'Wesele',
          festival: 'Festiwal',
          club: 'Klub / bar',
          other: 'Inne',
        },
        budget: 'Budżet (orientacyjny)',
        budgetPlaceholder: 'Budżet w EUR',
        sending: 'Wysyłanie...',
        send: 'Wyślij wiadomość',
        successTitle: 'Wiadomość wysłana!',
        successBody:
          'Dzięki za kontakt. Odezwę się najszybciej, jak to możliwe.',
        sendAnother: 'Wyślij kolejną wiadomość',
        hint: 'Im więcej szczegółów podasz, tym szybciej odpowiem.',
        requiredError: 'Uzupełnij wszystkie wymagane pola przed wysłaniem.',
      },
    },
    gallery: {
      live: 'Galeria z koncertów',
      liveCopy: 'Pot, światła i publiczność, która nie chciała usiąść.',
      artist: 'Galeria',
      artistCopy: 'Portrety, sceny i drogi pomiędzy nimi.',
      artistSectionLabel: 'Zdjęcia artysty i prasowe',
    },
  },
};

export function withHomeVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
