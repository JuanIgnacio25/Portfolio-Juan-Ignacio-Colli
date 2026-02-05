import { IconType } from "react-icons";

export type Language = "es" | "en";

/* Content Interfaces */

/* Not Found */

export interface NotFoundContent {
  title: string;
  message: string;
  button: string;
}

/* NavBar */

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

/* Technologies */
export interface TechnologiesContent {
  title: string;
}

export interface TechnologiesCardsContent {
  iconSrc: string;
  title: string;
  description: string;
  techList: TechIcons[];
}

export interface TechIcons {
  icon? : IconType;
  name: string;
}

/* Contact */
export interface ContactContent {
  title: string;
}

export interface ContactFormContent {
  fullName: string;
  email: string;
  message: string;
  buttonText: string;
}

export interface ContactSocialMediaContent {
  title: string;
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

/* TechoCarousel */
export interface TechCarouselProps {
  items: TechIcons[];
  reverse?: boolean;
  speed?: number;
}
