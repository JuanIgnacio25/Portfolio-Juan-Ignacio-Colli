import { Language, ProjectsContent } from "@/types";

import { projectsItemsContent } from "./ProjecstItemsContent";

export const projectsContent: Record<Language, ProjectsContent> = { 
  es: {
    title: "Proyectos",
    webSite: "Sitio Web",
    sourceCode: "Código",
    projects: projectsItemsContent.map((item) => item.translations.es),
  },
  en: {
    title: "Projects",
    webSite: "Web Site",
    sourceCode: "Source code",
    projects: projectsItemsContent.map((item) => item.translations.en),
  },
};
