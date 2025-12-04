import { Language, TechnologiesCardsContent } from "@/types";

import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiMongodb,
  SiTypescript,
  SiJest,
  SiMongoose,
  SiPrisma,
  SiJsonwebtokens,
  SiNotion,
  SiPassport,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

export const technologiesCardsContent: Record<
  Language,
  TechnologiesCardsContent[]
> = {
  es: [
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/fronteEnd_Image_bupmjq.svg",
      title: "Frontend",
      description:
        "Construyo interfaces modernas, accesibles y optimizadas para una experiencia rápida y fluida.",
      techList: [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiShadcnui, name: "Shadcn" },
        { name: "Zustand" },
        { name: "Zod" },
      ],
    },
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/serverImage_yhbd03.svg",
      title: "Backend",
      description:
        "Creo APIs seguras, eficientes y escalables con arquitectura limpia y modular.",
      techList: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiMongoose, name: "Mongoose" },
        { icon: BiLogoPostgresql, name: "PostgreSQL" },
        { icon: SiPrisma, name: "Prisma" },
        { icon: SiPassport, name: "Passport.js" },
      ],
    },
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/flowImage_q7ttyi.svg",
      title: "Tools & Workflow",
      description:
        "Utilizo automatización, testing y organización para un proceso de desarrollo sólido.",
      techList: [
        { icon: FaGitAlt, name: "Git" },
        { icon: SiJest, name: "Jest" },
        { icon: FaDocker, name: "Docker" },
        { icon: SiJsonwebtokens, name: "JWT" },
        { icon: IoLogoVercel, name: "Vercel" },
        { icon: SiNotion, name: "Notion" },
      ],
    },
  ],
  en: [
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/fronteEnd_Image_bupmjq.svg",
      title: "Frontend",
      description:
        "I build modern, accessible, and optimized interfaces for a fast and seamless user experience.",
      techList: [
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiShadcnui, name: "Shadcn" },
        { name: "Zustand" },
        { name: "Zod" },
      ],
    },
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/serverImage_yhbd03.svg",
      title: "Backend",
      description:
        "I develop secure, efficient, and scalable APIs with clean and modular architecture.",
      techList: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiMongoose, name: "Mongoose" },
        { icon: BiLogoPostgresql, name: "PostgreSQL" },
        { icon: SiPrisma, name: "Prisma" },
        { icon: SiPassport, name: "Passport.js" },
      ],
    },
    {
      iconSrc: "https://res.cloudinary.com/dzvwrmykh/image/upload/v1764850762/flowImage_q7ttyi.svg",
      title: "Tools & Workflow",
      description:
        "I apply automation, testing, and structured workflows to ensure a solid development process.",
      techList: [
        { icon: FaGitAlt, name: "Git" },
        { icon: SiJest, name: "Jest" },
        { icon: FaDocker, name: "Docker" },
        { icon: SiJsonwebtokens, name: "JWT" },
        { icon: IoLogoVercel, name: "Vercel" },
        { icon: SiNotion, name: "Notion" },
      ],
    },
  ],
};
