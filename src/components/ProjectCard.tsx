import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-sky-600 dark:text-slate-50 dark:group-hover:text-sky-400">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
        <Link
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400"
        >
          <span>Code</span>
          <span aria-hidden="true">↗</span>
        </Link>
        {project.live && project.live.trim().length > 0 && (
          <Link
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400"
          >
            <span>Live</span>
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}
