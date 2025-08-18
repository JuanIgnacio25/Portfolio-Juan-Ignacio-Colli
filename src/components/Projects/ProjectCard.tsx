"use client";

import { useState } from "react";
import { ProjectCardProps } from "@/types";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({
  project,
  webSite,
  sourceCode,
}: ProjectCardProps) => {
  // Estado para imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(project.imgSrc[0]);

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-2xl transition-all duration-300 group">
      {/* Contenedor imágenes */}
      <div className="flex flex-row items-center w-full py-2 pl-2 pr-4 gap-2">
        {/* Miniaturas */}
        <div className="flex flex-col gap-1">
          {project.imgSrc.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`h-12 w-12 p-1 rounded-lg transition border 
                ${
                  selectedImage === img
                    ? "border-brand shadow-glow"
                    : "border-transparent hover:border-brand"
                }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx}`}
                width={1000}
                height={1000}
                className="w-full h-full object-contain rounded-lg"
              />
            </button>
          ))}
        </div>

        {/* Imagen principal */}
        <div className="flex-1 h-56 flex items-center justify-center py-3">
          <Image
            src={selectedImage}
            alt="Project Image"
            width={1000}
            height={1000}
            quality={80}
            priority
            className="w-auto h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Texto y botones */}
      <div className="p-4 md:p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {project.title}
        </h3>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3">
          <Link href={project.webSite} target="_blank">
            <Button className="bg-brand hover:bg-brand-hover text-neutral-text dark:text-secondary flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              {webSite}
            </Button>
          </Link>

          <Link href={project.sourceCode} target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              {sourceCode}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
