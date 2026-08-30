import Image from "next/image";
import Link from "next/link";
import { homeConfig } from "@/config/home";
import { projectsConfig } from "@/config/projects";

export default function HomeContent() {
  return (
    <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-24">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-3/5 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 rounded-full border border-indigo-200 dark:border-indigo-800">
            <span>✦</span>
            <span>{homeConfig.role}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {homeConfig.greeting}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-medium">
            {homeConfig.description}
          </p>

          <div className="p-4 rounded-xl bg-neutral-100/80 dark:bg-neutral-900/60 border-l-4 border-indigo-600 dark:border-indigo-400 italic text-sm text-neutral-700 dark:text-neutral-300">
            {homeConfig.motto}
          </div>

          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {homeConfig.overview}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-transform duration-200 hover:scale-105 shadow-md"
            >
              <span>{homeConfig.buttons.viewProjects}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-transform duration-200 hover:scale-105 shadow-sm"
            >
              <span>{homeConfig.buttons.contact}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>

            <a
              href="https://github.com/mesudhassen5450-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <span>{homeConfig.buttons.github}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/mesudfull2.jpg"
              alt="Mesud Hassen Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CORE TECHNICAL EXPERTISE */}
      <section className="space-y-8 pt-6">
        <div className="text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Core Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Combining spatial analytics, machine learning frameworks, and modern web development to deliver impactful software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeConfig.expertise.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK & REPOSITORIES */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-left space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              Featured Work & Repositories
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Selected open-source projects created by Mesud Hassen.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsConfig.items.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-400 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  {'repoUrl' in project && (
                    <a
                      href={(project as any).repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {'tags' in project && Array.isArray((project as any).tags) && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {((project as any).tags).map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                {'repoUrl' in project && (
                  <a
                    href={(project as any).repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <span>Repository</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {project.href && project.href !== (project as any).repoUrl && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Live Site</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLES & INSIGHTS */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-left space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              Articles & Insights
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Perspectives on GIS spatial mapping, machine learning topic modeling, and software design.
            </p>
          </div>
          <Link
            href="/posts"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>Read All Posts</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Link
            href="/posts/from-proposal-to-deployment"
            className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">August 17, 2026 · Mesud Hassen</span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                🚀 From Proposal to Deployment — My Web Development Journey
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I’m happy to share a milestone in my software development journey: from project proposal to UI/UX design, full-stack development, database architecture, security authorization, testing, domain setup, and live web deployment.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["Proposal", "UI/UX", "Full-Stack", "Database", "Security", "Testing", "Git & Deployment"].map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* INTERACTIVE RESUME & SKILLS PREVIEW */}
      <section className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-8">
        <div className="space-y-2 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Interactive Resume & Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Detailed breakdown of technical proficiency and practical work experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Frontend & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {homeConfig.skills.frontend.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              AI, GIS & Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {homeConfig.skills.ai_backend.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Software Engineer & AI/GIS Developer
              </h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Full Stack & Spatial Technologies — Remote / Ethiopia
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-800 w-fit">
              2024-01-01 — Present
            </span>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Specializing in full-stack web applications, AI-driven GIS spatial solutions, and machine learning topic modeling systems.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {["TypeScript", "Python", "GIS", "React", "AI/ML", "Tailwind CSS", "Next.js"].map((tag, tIdx) => (
              <span key={tIdx} className="px-2.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 