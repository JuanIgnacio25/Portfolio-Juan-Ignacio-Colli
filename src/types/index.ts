export type Language = "es" | "en";

/* Content Interfaces */

/* Not Found */

export interface NotFoundContent {
  title: string;
  message: string;
  button: string;
}

/* NavBAR */

export interface NavBarContent {
  links: string[];
}

/* Hero */

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  cta: string;
  contact: string;
}

/* Projects */

export interface ProjectsItemContent {
  imgSrc: string[];
  title: string;
  description: string;
  technologies: string[];
  webSite: string,
  sourceCode: string
}

export interface ProjectTranslations {
  es: ProjectsItemContent;
  en: ProjectsItemContent;
}

export interface ProjectItem {
  id: string;
  translations: ProjectTranslations;
}

export interface ProjectsContent {
  title: string;
  webSite: string;
  sourceCode: string;
  projects: ProjectsItemContent[];
}

/* Props Interfaces */

/* Sections */
export interface SectionsProps {
  language: Language;
  /* scrollToSection: (sectionId: string) => void; */
}

/* NavBar */
export interface NavBarLinksProps {
  language: Language;
  scrollToSection: (sectionId: string) => void;
}

/* Project Card */
export interface ProjectCardProps {
  project: ProjectsItemContent;
  webSite: string;
  sourceCode: string;
}
