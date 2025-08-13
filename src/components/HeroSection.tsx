import { heroContent } from "@/constants/HeroContent";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionsProps } from "@/types";

import { FileDown } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = ({ language }: SectionsProps) => {
  const { greeting, name, title, description } = heroContent[language];

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-around relative my-10 md:my-20 gap-4 md:gap-0"
    >
      {/* Content */}
      <div className="flex items-center justify-center w-full md:w-[52%] relative px-4 lg:px-0 text-center md:text-start">
        {/* Animated background gradient */}
        <div className="animate-fade-in-up">
          <p className="text-md md:text-xl text-foreground mb-2 ml-1">
            {greeting}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 py-2 bg-gradient-to-r from-brand via-accent to-brand-hover bg-clip-text text-transparent">
            {name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-row gap-4 justify-center md:justify-start items-center">
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10DG67PTk4vxMMFZXShJDIFLEu46-7Icu/view",
                  "_blank"
                )
              }
              className="bg-transparent hover:bg-brand-hover text-foreground hover:text-secondary border border-foreground hover:border-brand-hover px-8 py-3 text-md font-medium shadow-elegant transition-all duration-300 ease-in-out"
            >
              <FileDown />
              Descargar CV
            </Button>

            <div className="flex">
              <Link
                href={"https://www.linkedin.com/in/juan-ignacio-colli/"}
                target="_blank"
              >
                <Button variant="social" size={"icon"}>
                  <FaLinkedinIn className="text-xl" />
                </Button>
              </Link>
              <Link href={"https://github.com/JuanIgnacio25"} target="_blank">
                <Button variant="social" size={"icon"}>
                  <FaGithub />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Image */}
      <div className="w-full md:w-[48%] flex items-center justify-center py-8 md:py-0">
        {/* Contenedor principal con el borde de gradiente */}
        <div className="group relative w-72 md:w-90 h-72 md:h-90 p-1 rounded-full overflow-hidden shadow-xl bg-gradient-to-r from-brand-light to-accent transition-all duration-500 ease-in-out hover:shadow-2xl">
          {/* Contenedor interno para la imagen */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={"/juanIgnacioColliWOB.png"}
              alt="Personal Image Juan Ignacio Colli"
              width={600}
              height={600}
              // Puedes añadir una transición sutil a la imagen al hacer hover
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
