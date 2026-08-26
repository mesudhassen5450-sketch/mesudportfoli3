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
      title: "Haramaya Land Management AI-Map & GIS",
      description: "An advanced AI-powered spatial geographic information system (GIS) and interactive mapping solution for property tax and land management.",
      href: "https://haramayalandmanagement.netlify.app/",
      repoUrl: "https://github.com/mesudhassen5450-sketch/haramaya_land_management_AI-Map",
      imageUrl: "/land1.png",
      tags: ["TypeScript", "GIS", "AI", "Mapping", "React", "Geospatial"]
    },
    {
      title: "AccessGuide AI",
      description: "Intelligent accessibility guide system powered by AI to enhance navigation, spatial guidance, and web accessibility standards.",
      href: "https://github.com/mesudhassen5450-sketch/access-guide-ai",
      repoUrl: "https://github.com/mesudhassen5450-sketch/access-guide-ai",
      imageUrl: "/assets/images/projects/project3.png",
      tags: ["TypeScript", "AI", "Accessibility", "Full-Stack", "Web App"]
    },
    {
      title: "Information Retrieval & Topic Modeling System",
      description: "An NLP machine learning framework for topic discovery and document retrieval from complex datasets using Python.",
      href: "https://github.com/mesudhassen5450-sketch/Information-Retrival-Topic-Modeling-",
      repoUrl: "https://github.com/mesudhassen5450-sketch/Information-Retrival-Topic-Modeling-",
      imageUrl: "/assets/images/projects/project4.jpg",
      tags: ["Python", "NLP", "Machine Learning", "Topic Modeling", "Data Science"]
    }
  ]
} as const; 