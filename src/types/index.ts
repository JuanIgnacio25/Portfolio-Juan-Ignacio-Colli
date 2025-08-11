export type Language = 'es' | 'en';


/* Content Interfaces */
export interface NotFoundContent {
  title: string,
  message: string,
  button: string
}

export interface NavBarContent {
  links: string[],
}

/* Props Interfaces */
export interface NavBarLinksProps {
  language: Language;
  scrollToSection: (sectionId: string) => void;
}