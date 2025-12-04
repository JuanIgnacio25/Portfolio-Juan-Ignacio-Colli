"use client"

import { useAppStore } from "@/store/useAppStore";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import Technologies from "@/components/technologies/Technologies";

const Home = () => {
  const { language } = useAppStore();

 /*  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; */

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeroSection language={language}/>
      <ProjectsSection language={language}/>
      <Technologies language={language}/>
    </div>
  );
};

export default Home;
