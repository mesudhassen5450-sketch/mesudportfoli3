import Image from "next/image";
import { projectsConfig } from '@/config/projects';

export default function ProjectsContent() {
  return (
    <section className="relative z-20 max-w-5xl mx-auto mt-28 mb-16 px-6 lg:px-0">
      <div className="relative z-20 w-full">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {projectsConfig.title}
        </h2>
        <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
          {projectsConfig.description}
        </p>
      </div>

      <div className="z-50 grid items-stretch w-full grid-cols-1 md:grid-cols-2 my-10 gap-8">
        {projectsConfig.items.map((project, index) => (
          <a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col justify-between duration-300 ease-out p-5 group rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9] bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            {'tags' in project && Array.isArray((project as { tags?: readonly string[] }).tags) && (
              <div className="flex flex-wrap gap-1.5 mt-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                {((project as { tags: readonly string[] }).tags).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
} 