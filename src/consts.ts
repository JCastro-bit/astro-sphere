import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "casttro.mx",
  DESCRIPTION: "Bienvenido a mi portafolio, un espacio dedicado a mostrar mis trabajos y experiencias como desarrollador web.",
  AUTHOR: "Javier Castro",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Lugares donde he trabajado y proyectos en los que he colaborado.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Artículos y escritos sobre temas que me apasionan en el mundo del desarrollo y diseño web.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he trabajado, mostrando una amplia gama de habilidades y soluciones innovadoras.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Busca todos los posts y proyectos por palabras clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Experiencia", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]


// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "javiercastro27@outlook.es",
    HREF: "mailto:javiercastro27@outlook.es",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "JCastro-bit",
    HREF: "https://github.com/JCastro-bit"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "j-castro27",
    HREF: "https://www.linkedin.com/in/j-castro27/",
  },
  { 
    NAME: "Twitter", // Si tienes Twitter, reemplaza 'markhorn_dev' con tu usuario.
    ICON: "twitter-x",
    TEXT: "jcastro_dev", // Suponiendo que este es tu usuario de Twitter.
    HREF: "https://twitter.com/jcastro_dev",
  },
]


