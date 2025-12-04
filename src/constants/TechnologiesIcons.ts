import { TechIcons } from "@/types";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui, 
  SiMongodb,
  SiTypescript,
  SiJest 
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

export const techs: TechIcons[] = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiNestjs, name: "NestJS"},
  { icon: SiExpress, name: "Express.js"},
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiShadcnui, name: "Shadcn" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiJest, name: "Jest" },
  { icon: FaGitAlt, name: "Git" },
];