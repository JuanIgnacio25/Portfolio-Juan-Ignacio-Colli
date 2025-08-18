import { SectionsProps } from "@/types";

import { projectsContent } from "@/constants/ProjectsContent";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ language }: SectionsProps) => {
  const { title, subtitle, technologies, webSite, sourceCode, projects } =
    projectsContent[language];

    useEffect(() => { console.log(projects);
    }, [])

  return (
    <section id="projects" className="w-full py-20 relative bg-gradient-2">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-1 opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
            return <ProjectCard project={project} technologies={technologies} webSite={webSite} sourceCode={sourceCode} key={index}/>
          })}
          {/* Main project */}

          {/* Placeholder for future project */}
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center min-h-[400px] hover:border-brand/50 transition-colors duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-muted-foreground font-medium">
                Mas Proyectos Proximamente...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
