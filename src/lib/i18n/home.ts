export type HomeLocale = 'en' | 'pl';

export type HomeCopy = {
  hero: {
    badge: string;
    statLabel: string;
    listenCta: string;
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
  };
  gallery: {
    live: string;
    liveCopy: string;
    artist: string;
    artistCopy: string;
  };
};

export const homeCopy: Record<HomeLocale, HomeCopy> = {
  en: {
    hero: {
      badge: 'DOMINICAN-BORN · WARSAW-BASED',
      statLabel: 'Years on stage',
      listenCta: 'Listen to {title} on Spotify',
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
        'Born in the {origin} and now based in {location}, {name} builds music from the instruments he knows firsthand: guitar, piano and drums. His sound is rooted in rock, progressive rock, jazz, funk and reggae.',
      latestSingle:
        'From those roots comes music led by rhythm and feeling, including the latest single, {title}.',
      getInTouch: 'Get In Touch',
    },
    collaborations: {
      title: 'COLLABORATIONS',
      subtitle:
        'Musical partnerships that transcend boundaries. Each collaboration brings unique perspectives and creates something greater than the sum of its parts.',
      openTo: 'Open to New Collaborations',
      openToCopy:
        'Always looking for talented artists to create something unique together.',
      getInTouch: 'Get in Touch',
    },
    experience: {
      label: 'The live show',
      title: '{liveShow}',
      copy: 'A live band led from the drums: original songs and covers, stories shared on stage, and a connection that brings the crowd into the moment.',
      explore: 'Explore the live show',
      subtitle: 'with Jacke Matheus',
    },
    links: {
      title: 'Connect & Stream',
      copy: 'Follow Linarex across all platforms for the latest music, behind-the-scenes content, and direct interaction with the artist and community.',
      streaming: 'Streaming Platforms',
      social: 'Social Media',
    },
    contact: {
      title: 'Contact',
      copy: 'Professional inquiries, booking requests, and collaboration opportunities.',
    },
    gallery: {
      live: 'Live Gallery',
      liveCopy: 'Live moments from {liveShow}: connection, energy and music on stage.',
      artist: 'Gallery',
      artistCopy: 'Portraits, live moments and images from Linarex’s creative world.',
    },
  },
  // Review by native speaker
  pl: {
    hero: {
      badge: 'URODZONY NA DOMINIKANIE · MIESZKAJĄCY W WARSAWIE',
      statLabel: 'Lat na scenie',
      listenCta: 'Posłuchaj na Spotify — {title}',
    },
    music: {
      badge: 'SŁUCHAJ',
      title: 'NOWY SINGEL',
    },
    about: {
      quote:
        'Tworzę muzyczne koncepcje podążając za jednym pytaniem: brzmi to uczucie inaczej?',
      fromOriginToLocation: 'Od {origin} do {location}',
      bornAndNow:
        '{name} urodził się w {origin} i mieszka w {location}. Tworzy muzykę z instrumentów, zna na własność: gitara, pianina i perkusja. Jego brzmienie wywodzi się z rocka, progresywnego rocka, jazzu, funku i reggae.',
      latestSingle:
        'Z tych korzeni pochodzi muzyka kierowana rytmem i uczuciem, w tym najnowszy singel, {title}.',
      getInTouch: 'Skontaktuj się',
    },
    collaborations: {
      title: 'KOLABORACJE',
      subtitle:
        'Muzyczne partnerstwa, które przekraczają granice. Każda kolaboracja wnosi wyjątkowe perspektywy i tworzy coś większego niż suma części.',
      openTo: 'Otoczenie otwarte na nowe kolaboracje',
      openToCopy:
        'Zawsze szukam utalentowanych artystów, żeby stworzyć coś wyjątkowego.',
      getInTouch: 'Skontaktuj się',
    },
    experience: {
      label: 'Koncert na żywo',
      title: '{liveShow}',
      copy: 'Zespół na żywo prowadzony z perkusji: własne utwory i covery, historie opowiedziane na scenie oraz połączenie, które wciąga publiczność.',
      explore: 'Zobacz koncert na żywo',
      subtitle: 'z Jacke Matheusa',
    },
    links: {
      title: 'Łącz i streamuj',
      copy: 'Śledź Linarexa na wszystkich platformach: najnowsza muzyka, treści zza kulis oraz bezpośrednia interakcja z artystą i społecznością.',
      streaming: 'Platformy streamingowe',
      social: 'Media społecznościowe',
    },
    contact: {
      title: 'Kontakt',
      copy: 'Zapytania prasowe, rezerwacje i możliwości współpracy.',
    },
    gallery: {
      live: 'Galeria live',
      liveCopy: 'Momenty na żywo z {liveShow}: połączenie, energia i muzyka na scenie.',
      artist: 'Galeria',
      artistCopy: 'Zdjęcia portretów, na żywo i obrazy z linii Linarexa.',
    },
  },
};

export function withHomeVars(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
