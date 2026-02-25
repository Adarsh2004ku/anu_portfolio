"use client";

import Link from "next/link";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

const GITHUB_URL = "https://github.com/krianuradha";
const LINKEDIN_URL = ""; // TODO: add LinkedIn URL here when available
const EMAIL = "mailto:your-email@example.com"; // TODO: replace with real email

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="#hero" prefetch={false} className="font-semibold tracking-tight">
            <span className="text-slate-900 dark:text-slate-50">
              Anuradha
            </span>
            <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
              / Web Developer
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex">
              <Link href="#about" prefetch={false} className="hover:text-sky-600 dark:hover:text-sky-400">
                About
              </Link>
              <Link href="#skills" prefetch={false} className="hover:text-sky-600 dark:hover:text-sky-400">
                Skills
              </Link>
              <Link href="#projects" prefetch={false} className="hover:text-sky-600 dark:hover:text-sky-400">
                Projects
              </Link>
              <Link href="#contact" prefetch={false} className="hover:text-sky-600 dark:hover:text-sky-400">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 py-10 sm:py-12">
        <Section id="hero">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Portfolio
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-600 to-violet-500 bg-clip-text text-transparent">
                  Kumari Anuradha
                </span>
              </h1>
              <p className="max-w-xl text-balance text-slate-600 dark:text-slate-300">
                <span className="font-medium text-slate-900 dark:text-slate-50">
                  Fresher Web Developer
                </span>{" "}
                focused on building clean, responsive interfaces and learning
                modern web technologies like React, Next.js, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  prefetch={false}
                  className="rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 hover:shadow-md dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  prefetch={false}
                  className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about" title="About">
          <div className="space-y-3 text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m a{" "}
              <span className="font-medium text-slate-900 dark:text-slate-50">
                fresher web developer
              </span>{" "}
              who enjoys turning ideas into simple, user-friendly web
              experiences. I love experimenting with new tools, improving my
              code, and learning by building real projects.
            </p>
            <p>
              Recently, I&apos;ve been focusing on{" "}
              <span className="font-medium">HTML, CSS, JavaScript</span>, and
              exploring frameworks like{" "}
              <span className="font-medium">React and Next.js</span>. I&apos;m
              comfortable working with layouts, components, and basic
              interactivity, and I&apos;m excited to grow into a full-time web
              developer role.
            </p>
            <p>
              I&apos;m looking for opportunities where I can{" "}
              <span className="font-medium">
                learn from experienced developers
              </span>{" "}
              and contribute to real-world projects, especially in frontend or
              full-stack roles.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
              >
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 transition group-hover:bg-sky-50 group-hover:text-sky-700 dark:bg-slate-800 dark:text-slate-100 dark:group-hover:bg-sky-950 dark:group-hover:text-sky-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            A selection of projects I&apos;ve built while learning web
            development. You can find more details and code on my GitHub.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m currently open to{" "}
              <span className="font-medium">internships, trainee roles</span>,
              or entry-level web development positions. Feel free to reach out
              if you think I could be a good fit for your team.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={EMAIL}
                className="rounded-full bg-sky-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 hover:shadow-md dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Email
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
                aria-disabled={!LINKEDIN_URL}
              >
                LinkedIn (coming soon)
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/80 py-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">Kumari Anuradha</span>. All rights
            reserved.
          </p>
          <p className="flex gap-3">
            <Link
              href={GITHUB_URL}
              target="_blank"
              prefetch={false}
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              GitHub
            </Link>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span>Built with Next.js & Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
