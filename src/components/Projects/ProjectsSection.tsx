import { SectionsProps } from "@/types";
import { projectsContent } from "@/constants/ProjectsContent";
import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = ({ language }: SectionsProps) => {
  const { title, webSite, sourceCode, projects } = projectsContent[language];

  return (
    <section
      id="projects"
      className="w-full h-[100vh] flex flex-col bg-gradient-2 relative overflow-hidden scroll-mt-12"
    >
      {/* Contenedor principal: h-full y justify-around para repartir el aire arriba y abajo */}
      <div className="flex flex-col h-full max-w-7xl mx-auto p-8 w-full justify-around items-center">
        {/* Título: shrink-0 asegura que no se comprima */}
        <div className="text-center shrink-0">
          <h2 className="inline-block text-3xl md:text-5xl font-bold py-2 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="w-full flex-1 flex items-center justify-center">
          {/* MODO CAROUSEL: < 1280px */}
          <div className="xl:hidden w-full max-w-[75vw] lg:max-w-3xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 h-full">
                      <ProjectCard
                        project={project}
                        webSite={webSite}
                        sourceCode={sourceCode}
                      />
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem>
                  <div className="h-full border-2 border-dashed border-border/50 rounded-2xl flex items-center justify-center bg-card/20 min-h-[300px] md:min-h-[400px]">
                    <p className="text-muted-foreground italic text-center px-4">
                      🚀 Mas Proyectos Proximamente...
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-9 md:-left-12" />
              <CarouselNext className="-right-49md:-right-12" />
            </Carousel>
          </div>

          {/* MODO GRID: >= 1280px */}
          {/* h-full y items-stretch para que las cards se repartan bien el alto */}
          <div className="hidden xl:grid grid-cols-2 gap-8 w-full">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard
                project={project}
                webSite={webSite}
                sourceCode={sourceCode}
                key={index}
              />
            ))}
            {projects.length < 2 && (
              <div className="bg-card/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center hover:border-brand/50 transition-colors duration-300">
                <p className="text-muted-foreground">
                  🚀 Mas Proyectos Proximamente...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
