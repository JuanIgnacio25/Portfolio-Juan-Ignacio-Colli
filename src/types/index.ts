export type Language = "es" | "en";

/* Content Interfaces */
export interface NotFoundContent {
  title: string;
  message: string;
  button: string;
}

export interface NavBarContent {
  links: string[];
}

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  cta: string;
  contact: string;
}

/* Props Interfaces */
export interface NavBarLinksProps {
  language: Language;
  scrollToSection: (sectionId: string) => void;
}

export interface SectionsProps {
  language: Language;
  /* scrollToSection: (sectionId: string) => void; */
}
