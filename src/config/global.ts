export const globalConfig = {
  site: {
    name: "Mesud Hassen | Portfolio",
    author: "Mesud Hassen",
    description: "Personal Portfolio of Mesud Hassen - IT Student, Full-Stack Developer & Networking Enthusiast",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Mesud Hassen. All rights reserved",
    social: {
      linkedin: "https://www.linkedin.com/in/mesud-mesman-837466413",
      github: "https://github.com/mesudhassen5450-sketch",
      email: "mailto:mesudhassen5450@gmail.com"
    }
  }
} as const;