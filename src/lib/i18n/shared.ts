export type SharedLocale = 'en' | 'pl';

export type SharedCopy = {
  brand: {
    tagline: string;
  };
  footer: {
    description: string;
  };
  about: {
    short: {
      p1: string;
      p2: string;
    };
    long: {
      p1: string;
      p2: string;
      p3: string;
    };
  };
  live: {
    intro: string;
  };
  people: {
    linarex: {
      role: string;
      bio: string;
    };
  };
  music: {
    memories: { tagline: string };
    renacer: { tagline: string };
    vaiven: { tagline: string };
  };
};

export const sharedCopy: Record<SharedLocale, SharedCopy> = {
  en: {
    brand: {
      tagline: 'Caribbean roots · Warsaw nights',
    },
    footer: {
      description:
        'Original music with Caribbean roots and a live show that gets the room moving.',
    },
    about: {
      short: {
        p1: 'Linarex grew up between Caribbean rhythm and rock, and has spent more than 20 years on stage.',
        p2: 'He writes from guitar, piano and drums — songs that start with a real emotion and end with a room moving together.',
      },
      long: {
        p1: 'Linarex grew up between Caribbean rhythm and rock. Born in the Dominican Republic and based in Warsaw, he has spent more than 20 years on stage — from summers in Jurata with Rongo Rongo to backing artists across Warsaw’s venues — absorbing rock, progressive rock, jazz, funk and reggae.',
        p2: 'A multi-instrumentalist, he writes from guitar, piano and drums, turning real emotions into songs with groove and meaning, and shapes every release as Executive Producer.',
        p3: 'The result carries his roots without boxing them in: indie rock melancholy, funk you can dance to, and Caribbean warmth in every groove.',
      },
    },
    live: {
      intro:
        'Linarex Experience is a night to dance, feel and connect. Linarex leads the band from behind the drum kit — counting in, singing parts, telling the stories behind the songs and pulling the crowd into every chorus. Originals meet hand-picked covers in English, Spanish and Polish. Caribbean energy, rock power — and a room that ends up moving as one.',
    },
    people: {
      linarex: {
        role: 'Composer & Drummer',
        bio: 'Dominican-born composer and drummer who leads the band from behind the kit — bringing Caribbean groove, rock power and stories that pull the room in.',
      },
    },
    music: {
      memories: { tagline: 'Some memories keep the light on.' },
      renacer: {
        tagline: 'A new beginning — experimental funk pop with a hypnotic groove.',
      },
      vaiven: {
        tagline:
          'The first Linarex single — Afro-Latin pop with a beach-sunset vibe.',
      },
    },
  },
  pl: {
    brand: {
      tagline: 'Karaibskie korzenie · Warszawskie noce',
    },
    footer: {
      description:
        'Autorska muzyka z karaibskimi korzeniami i koncerty, które porywają salę.',
    },
    about: {
      short: {
        p1: 'Linarex dorastał między karaibskim rytmem a rockiem i ma za sobą ponad 20 lat na scenie.',
        p2: 'Komponuje na gitarze, pianinie i perkusji — piosenki, które zaczynają się od prawdziwej emocji, a kończą salą, która porusza się razem.',
      },
      long: {
        p1: 'Linarex dorastał między karaibskim rytmem a rockiem. Urodzony na Dominikanie, mieszka w Warszawie i ma za sobą ponad 20 lat na scenie — od letnich koncertów w Juracie z zespołem Rongo Rongo po granie z artystami w warszawskich klubach — chłonąc rock, rock progresywny, jazz, funk i reggae.',
        p2: 'Jako multiinstrumentalista komponuje na gitarze, pianinie i perkusji, zamieniając prawdziwe emocje w piosenki z groovem i znaczeniem, a jako Executive Producer czuwa nad każdym wydawnictwem.',
        p3: 'Efekt to muzyka, która niesie jego korzenie, nie zamykając się w nich: melancholia indie rocka, funk, przy którym się tańczy, i karaibskie ciepło w każdym groovie.',
      },
    },
    live: {
      intro:
        'Linarex Experience to wieczór, by tańczyć, czuć i być razem. Linarex prowadzi zespół zza perkusji — odlicza, śpiewa fragmenty, opowiada historie stojące za piosenkami i wciąga publiczność do każdego refrenu. Autorskie utwory spotykają starannie wybrane covery po angielsku, hiszpańsku i polsku. Karaibska energia, rockowa moc — i sala, która porusza się jak jedno.',
    },
    people: {
      linarex: {
        role: 'Kompozytor i perkusista',
        bio: 'Urodzony na Dominikanie kompozytor i perkusista, który prowadzi zespół zza perkusji — wnosi karaibski groove, rockową moc i historie, które wciągają salę.',
      },
    },
    music: {
      memories: { tagline: 'Niektóre wspomnienia nie pozwalają zgasnąć światłu.' },
      renacer: {
        tagline: 'Nowy początek — eksperymentalny funk pop z hipnotycznym groovem.',
      },
      vaiven: {
        tagline:
          'Pierwszy singiel Linarex — afro-latin pop z klimatem plaży o zachodzie słońca.',
      },
    },
  },
};

