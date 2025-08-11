import type { Language , NavBarContent} from "@/types";

export const navBarContent: Record<Language, NavBarContent> = {
  es: {
    links: ['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'],
  },
  en: {
    links: ['Home', 'About', 'Projects', 'Contact'],
  },
}