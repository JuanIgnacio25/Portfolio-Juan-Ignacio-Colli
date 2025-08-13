import { Language, HeroContent } from "@/types";


export const heroContent: Record<Language, HeroContent> = {
  es: {
      greeting: "Hola, soy",
      name: "Juan Ignacio Colli",
      title: "Desarrollador Full Stack Jr.",
      description: "Apasionado por crear experiencias web modernas y funcionales. Especializado en React, Node.js y tecnologías modernas.",
      cta: "Ver mis proyectos",
      contact: "Contactame"
    },
    en: {
      greeting: "Hi, I'm",
      name: "Juan Ignacio Colli",
      title: "Full Stack Jr. Developer",
      description: "Passionate about creating modern and functional web experiences. Specialized in React, Node.js and modern technologies.",
      cta: "View my projects",
      contact: "Contact me"
    }
}