import dsl from "./daily-spending-limit.png";
import dsl2 from "./dsl-2.jpg";
import syncival from "./syncival.png";
import melodicCompanion from "./melodic-companion.png";
import icodethis1 from "./i-code-this-1.png";
import icodethis2 from "./i-code-this-2.png";
import favouriteArtists from "./favourite-artists.jpeg";
import forestShuffle01 from "./img/forestshuffle-automata-01.png";
import forestShuffle02 from "./img/forestshuffle-automata-02.png";
import budgetier01 from "./img/budgetier-01.png";

export interface Project {
  name: string;
  hrefApp?: string;
  hrefSource?: string;
  description?: string;
  techStack?: string;
  highlights?: string;
  status?: string;
  info: Partial<Record<Categories, string>>;
  imagePath?: string | string[];
}

export interface Challenge {
  name: string;
  hrefApp: string;
  description: string;
  imagePaths: string[];
}

export enum Categories {
  DESCRIPTION = "description",
  TECH_STACK = "techStack",
  HIGHLIGHTS = "highlights",
  STATUS = "status",
}

export const projects: Project[] = [
  {
    name: "ForestShuffle Automata",
    hrefApp: "https://forestshuffle-automata.ole-wendt.com",
    info: {
      description: "Automata card deck for the game forest shuffle.",
      techStack: "svelte, sveltekit, typescript",
      status: "completed for now (Oktober 2024)",
    },
    hrefSource: "https://github.com/WendtOle/forestshuffle-automata",
    imagePath: [forestShuffle01, forestShuffle02],
  },
  {
    name: "budgetier",
    hrefApp: "https://budgetier.ole-wendt.com",
    info: {
      description: "application for planning monthly budget.",
      techStack: "svelte, sveltekit, typescript, nextJS, tailwind",
      status: "prototyping (September 2024)",
    },
    imagePath: [budgetier01],
  },
  {
    name: "daily-spending-limit",
    hrefApp: "https://dsl.ole-wendt.com",
    info: {
      description:
        "application for quickly calculating the daily spending limit.",
      techStack: "react, typescript, nextJS, tailwind",
      status: "completed for now (Oktober 2024)",
    },
    hrefSource: "https://github.com/WendtOle/daily-spending-limit",
    imagePath: [dsl, dsl2],
  },
  {
    name: "favorite-artists",
    hrefApp: "https://favourite-artists.vercel.app/",
    info: {
      description:
        "application for checking your top spotify artists and tracks.",
      techStack: "react, typescript, nextJS, tailwind",
      status: "prototyping (July 2024)",
    },
    hrefSource: "https://github.com/WendtOle/favourite-artists",
    imagePath: favouriteArtists,
  },
  {
    name: "syncival",
    hrefApp: "https://syncival.com",
    info: {
      description:
        "app that harmonizes your Spotify faves with sizzling festival lineups",
      techStack: "react, material-ui, typescript, express, jotai",
      status: "rebuilding whole application with nextJS (May 2024)",
      highlights: "put a lot of effort in design and user experience",
    },
    hrefSource: "https://github.com/WendtOle/syncival",
    imagePath: syncival,
  },
  {
    name: "my-home-page",
    info: { description: "is this home page" },
    hrefSource: "https://github.com/WendtOle/home-page",
  },
  {
    name: "melodic-companion",
    hrefApp: "https://melodic-companion.vercel.app/",
    info: {
      description:
        "app where forms glide, leaving colorful trails that linger like echoes in motion",
      techStack: "typescript, parcel",
    },
    hrefSource: "https://github.com/WendtOle/moving-companion",
    imagePath: melodicCompanion,
  },
  {
    name: "abstract",
    hrefApp: "https://abstract-ten.vercel.app/",
    info: {
      description:
        "Experience beats pulsating at the core, surrounded by swirling dots that explode with bursts of color, igniting a chain reaction of visual delight",
      highlights: "as barebone as it gets, does not use any libraries",
    },
    //hrefSource: "https://github.com/WendtOle/abstract", //I partially copied some code I should mention the source before I link my code
  },
  {
    name: "toodles",
    hrefApp: "https://toodles-seven.vercel.app/",
    hrefSource: "https://github.com/WendtOle/toodles",
    info: {
      description: "pushes you to do you're chores",
      techStack:
        "react, tailwind, material-ui, cypress, konva, typescript, firebase",
      highlights:
        "implements own state management tool, features login via firebase",
    },
  },
  {
    name: "bet-it",
    hrefApp: "https://bet-it.vercel.app/",
    info: {
      description: "enables betting on tournaments with friends",
      techStack: "react, material-ui, typescript",
    },
  },
  {
    name: "kv-scheduler",
    hrefApp: "https://kv-scheduler.vercel.app/",
    info: {
      description: "eases the use of the appropriate doctor close to you",
      highlights: "as barebone as it gets, includes crawler for data",
    },
  },

  {
    name: "massage-dates",
    hrefApp: "https://massage-dates.ole-wendt.com/",
    info: {
      description: "eases the search for a massage appointment",
      techStack: "react, material-ui, typescript, serverless",
      highlights: "serverless backend",
    },
    //hrefSource: "https://github.com/WendtOle/vabali-scraper" // there are still some occurences of the word "vabali" - I should remove them before publishing
  },
];

export const contributions: Challenge[] = [
  {
    name: "icodethis",
    description: "took a few challenges",
    hrefApp: "https://icodethis.com/WendtOle",
    imagePaths: [icodethis1, icodethis2],
  },
  {
    name: "adventofcode-24",
    description: "trying my best",
    hrefApp: "https://github.com/WendtOle/advent-of-code-24",
    imagePaths: []
  },
];
