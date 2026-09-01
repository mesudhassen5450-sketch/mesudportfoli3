export const projectsConfig = {
  title: "Featured Work & Repositories",
  description: "Selected open-source projects, AI/GIS spatial systems, and full-stack applications created by Mesud Hassen.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "Amanuel Hospital Management System",
      description: "A healthcare information system tailored for medical records, patient check-ins, EHR doctor workflows, lab/pharmacy operations, and hospital management.",
      href: "http://amanuelhospital.com.et",
      repoUrl: "https://github.com/mesudhassen5450-sketch/Amanuel-Hospital",
      imageUrl: "/aman1.png",
      tags: ["Full-Stack", "Healthcare Tech", "JavaScript", "Database", "Supabase", "React"]
    },
    {
      title: "Sile Qelbachin - Islamic Educational Platform",
      description: "A comprehensive Islamic educational platform with kitab library, audio ders, muhadara lectures, videos, Qur'an & Hadith resources, and AI-assisted navigation. Features multilingual support (Amharic, Arabic, English).",
      href: "https://sileqelbachin1.netlify.app/",
      repoUrl: "https://github.com/mesudhassen5450-sketch/Sile_qelbachin1",
      imageUrl: "/Home logo1.png",
      tags: ["Next.js", "TypeScript", "AI Assistant", "Multilingual", "Audio Player", "React"]
    },
    {
      title: "Haramaya Land Management AI-Map & GIS",
      description: "An advanced AI-powered spatial geographic information system (GIS) and interactive mapping solution for property tax and land management.",
      href: "https://haramayalandmanagement.netlify.app/",
      repoUrl: "https://github.com/mesudhassen5450-sketch/haramaya_land_management_AI-Map",
      imageUrl: "/land1.png",
      tags: ["TypeScript", "GIS", "AI", "Mapping", "React", "Geospatial"]
    }
  ]
} as const; 