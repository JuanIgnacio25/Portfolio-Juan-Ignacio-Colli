"use client"

import { useAppStore } from "@/store/useAppStore";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  const { language } = useAppStore();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container flex items-center justify-center">
      <HeroSection language={language}/>
    </div>
  );
};

export default Home;
