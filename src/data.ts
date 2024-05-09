export interface Project {
  name: string;
  hrefApp: string;
  hrefSource?: string;
  description?: string;
  techStack?: string;
  highlights?: string;
  status?: string;
  info: Partial<Record<Categories, string>>;
}

export enum Categories {
  DESCRIPTION = "description",
  TECH_STACK = "techStack",
  HIGHLIGHTS = "highlights",
  STATUS = "status",
}

export const projects: Project[] = [
  {
    name: "daily-spending-limit",
    hrefApp: "https://dsl.ole-wendt.com",
    info: {
      description:
        "application for quickly calculating the daily spending limit.",
      techStack: "react, typescript, nextJS, tailwind, chartJS",
      status: "prototyping (May 2024)",
    },
    hrefSource: "https://github.com/WendtOle/daily-spending-limit",
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
    hrefApp: "https://massage-dates.ow-ad.dev/",
    info: {
      description: "eases the search for a massage appointment",
      techStack: "react, material-ui, typescript, serverless",
      highlights: "serverless backend",
    },
    //hrefSource: "https://github.com/WendtOle/vabali-scraper" // there are still some occurences of the word "vabali" - I should remove them before publishing
  },
];
