import Image from "next/image";
import { aboutConfig } from "@/config/about";

export default function AboutContent() {
  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-28 mb-16 px-6 lg:px-0">
      {/* Header & Bio */}
      <div className="relative z-20 w-full">
        <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-950/50 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-800">
          {aboutConfig.headline}
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {aboutConfig.title}
        </h2>
        
        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
          {aboutConfig.description}
        </p>

        {/* Quick Personal Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-medium">University</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{aboutConfig.personalInfo.university}</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-medium">College & Field</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{aboutConfig.personalInfo.field}</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-medium">Location</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{aboutConfig.personalInfo.location}</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-medium">Languages</span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{aboutConfig.personalInfo.languages.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
          Technical Skills & Tooling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutConfig.skillCategories.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        <div className="lg:col-span-2">
          <h3 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {aboutConfig.experience.title}
          </h3>
          <div className="py-2">
            {aboutConfig.experience.items.map((item, index) => (
              <div key={index} className="pb-8 border-l-2 border-neutral-200 dark:border-neutral-800 last:border-l-0">
                <div className="relative flex flex-col justify-start pl-8">
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center -translate-x-1/2 bg-white dark:bg-neutral-950 border-2 rounded-full w-8 h-8 border-indigo-600 dark:border-indigo-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                  <span className="text-xs uppercase text-indigo-600 dark:text-indigo-400 font-bold tracking-wider">{item.period}</span>
                  <h4 className="my-1 text-base font-bold text-neutral-900 dark:text-neutral-100">{item.role}</h4>
                  <p className="mb-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300">{item.company}</p>
                  <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Box */}
        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 h-fit">
          <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-100">{aboutConfig.connect.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6">
            {aboutConfig.connect.description}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={aboutConfig.connect.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <span>LinkedIn Profile</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href={aboutConfig.connect.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm"
            >
              <span>GitHub Profile</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href={aboutConfig.connect.links.email.url}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <span>Send Direct Email</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Certificates Section */}
      {'certificates' in aboutConfig && Array.isArray((aboutConfig as { certificates?: any[] }).certificates) && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Verified Certificates & Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {((aboutConfig as any).certificates).map((cert: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">{cert.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{cert.description}</p>
                </div>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mt-2"
                >
                  <span>View Certificate PDF</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 