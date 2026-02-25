export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "npm"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Continuous Learning"]
  }
];
