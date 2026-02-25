export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

const GITHUB_BASE = "https://github.com/krianuradha";

export const projects: Project[] = [
  {
    title: "Pizza-bill",
    description:
      "Java-based console application to calculate pizza bills with customizable toppings and sizes.",
    tech: ["Java"],
    github: `${GITHUB_BASE}/Pizza-bill`
  },
  {
    title: "Motivational Meme",
    description:
      "Fun motivational meme page built with web technologies to practice layouts and basic interactivity.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: `${GITHUB_BASE}/motivational-meme`,
    live: ""
  },
  {
    title: "Password Manager UI",
    description:
      "Simple password manager interface focused on clean layout and styling using modern CSS.",
    tech: ["HTML", "CSS"],
    github: `${GITHUB_BASE}/Passwordmanager`
  },
  {
    title: "To-Do List",
    description:
      "Interactive to-do list web app to add, complete, and remove daily tasks in the browser.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: `${GITHUB_BASE}/To_do_list`
  },
  {
    title: "Simple E-commerce Cart",
    description:
      "Minimal e-commerce cart demo showcasing add-to-cart, item quantity updates, and total calculation.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: `${GITHUB_BASE}/simple_E_commerce_cart`
  }
];
