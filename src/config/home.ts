export const homeConfig = {
  name: "Mesud Hassen",
  greeting: "Hi, I'm Mesud Hassen",
  role: "Software Engineer | AI & GIS Specialist | Full-Stack Developer",
  location: "Ethiopia / Remote",
  motto: '"{patience, faith, and focus} — Be patient with beautiful patience"',
  description: "I build intelligent web applications, AI-driven spatial GIS mapping platforms, and NLP topic modeling tools with clean architecture and modern technology.",
  overview: "Passionate Software Engineer with hands-on experience designing full-stack web applications, AI spatial GIS mapping tools, and NLP topic modeling frameworks. Proven track record in TypeScript, Python, React, and spatial database management. Driven by continuous learning and creating elegant solutions to real-world problems.",
  profileImage: "/mesuimage.jpg",
  buttons: {
    viewProjects: "View Projects",
    contact: "Get in Touch",
    github: "GitHub Profile"
  },
  skills: {
    frontend: ["TypeScript", "React", "TanStack Start", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
    ai_backend: ["Python", "GIS / Leaflet", "NLP / Topic Modeling", "Node.js", "PostgreSQL / SQL", "REST APIs"]
  },
  expertise: [
    {
      title: "AI & GIS Spatial Systems",
      description: "Building interactive geographical mapping, spatial land analytics, and territorial tracking solutions with Leaflet, Mapbox, and TypeScript.",
      tags: ["GIS Mapping", "Spatial Analytics", "Geospatial AI"]
    },
    {
      title: "Full-Stack Web Development",
      description: "Architecting modern, responsive user interfaces and robust APIs using React, TypeScript, TanStack Start, Next.js, and Tailwind CSS.",
      tags: ["TypeScript", "React / TanStack", "Tailwind CSS"]
    },
    {
      title: "NLP & Topic Modeling",
      description: "Developing Machine Learning pipelines for topic extraction, latent semantic index discovery, and document retrieval in Python.",
      tags: ["Python", "NLP", "Information Retrieval"]
    }
  ]
} as const;
