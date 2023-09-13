export const dropdownList = [
  {
    id: 1,
    title: "Product",
    active: false,
    items: [
      {
        id: 1,
        item: "Overview",
      },
      {
        id: 2,
        item: "Pricing",
      },
      {
        id: 3,
        item: "Marketplace",
      },
      {
        id: 4,
        item: "Features",
      },
      {
        id: 5,
        item: "Integrations",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    active: false,
    items: [
      {
        id: 1,
        item: "About",
      },
      {
        id: 2,
        item: "Team",
      },
      {
        id: 3,
        item: "Blog",
      },
      {
        id: 4,
        item: "Careers",
      },
    ],
  },
  {
    id: 3,
    title: "Connect",
    active: false,
    items: [
      {
        id: 1,
        item: "Contact",
      },
      {
        id: 2,
        item: "Newsletter",
      },
      {
        id: 3,
        item: "LinkedIn",
      },
    ],
  },
];

export type menuDropdownProps = {
  id: number;
  title: string;
  active: boolean;
  items: {
    id: number;
    item: string;
  }[];
}[];

export const editorSection = [
  {
    id: 1,
    title: "Introducing an extensible editor",
    desc: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  },
  {
    id: 2,
    title: "Robust content management",
    desc: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality you're in full control.",
  },
];

export const laptopSection = [
  {
    id: 1,
    title: "Free, open, simple",
    desc: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as a code syntax highlighting, RSS, feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  },
  {
    id: 2,
    title: "Powerful tooling",
    desc: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
  },
];
