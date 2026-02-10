import { heroContent } from "@/constants/HeroContent";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionsProps } from "@/types";

import { FileDown, ChevronDown } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HeroSection = ({ language }: SectionsProps) => {
  const { greeting, name, title, description } = heroContent[language];

  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse items-center justify-center w-full px-4 overflow-hidden md:flex-row md:justify-around h-[calc(100vh-4rem)] md:px-12 lg:px-24"
    >
      {/* Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-start z-10">
        <div className="animate-fade-in-up">
          <p className="mb-1 ml-1 text-sm md:text-lg text-foreground">
            {greeting}
          </p>

          <h1 className="py-1 text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-brand via-accent to-brand-hover bg-clip-text text-transparent">
            {name}
          </h1>

          <h2 className="mb-4 text-xl font-semibold md:text-2xl text-foreground">
            {title}
          </h2>

          <p className="max-w-xl mx-auto mb-6 text-base leading-relaxed md:mx-0 md:text-lg text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:justify-start">
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10DG67PTk4vxMMFZXShJDIFLEu46-7Icu/view",
                  "_blank"
                )
              }
              className="px-6 py-2 transition-all duration-300 ease-in-out bg-transparent border border-foreground text-foreground hover:bg-brand-hover hover:text-secondary hover:border-brand-hover text-md font-medium shadow-elegant"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>

            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/juan-ignacio-colli/"
                target="_blank"
              >
                <Button variant="social" size="icon">
                  <FaLinkedinIn className="text-xl" />
                </Button>
              </Link>
              <Link href="https://github.com/JuanIgnacio25" target="_blank">
                <Button variant="social" size="icon">
                  <FaGithub className="text-xl" />
                </Button>
              </Link>
              <Link href="https://wa.me/5493471670274" target="_blank">
                <Button variant="social" size="icon">
                  <FaWhatsapp className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <div className="group relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-100 xl:h-100 p-1 rounded-full bg-gradient-to-r from-brand-light to-accent shadow-xl transition-all duration-500 hover:shadow-2xl">
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              src="/juanIgnacioColliWOB.png"
              alt="Juan Ignacio Colli"
              fill
              priority
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator - Solo visible si hay espacio */}
      <div className="absolute hidden bottom-4 left-1/2 -translate-x-1/2 md:block animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
