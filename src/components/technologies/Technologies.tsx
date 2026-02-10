import { SectionsProps } from "@/types";
import { technologiesContent } from "@/constants/TechnologiesContent";
import { techs } from "@/constants/TechnologiesIcons";

import TechnologiesCarousel from "./TechnologiesCarousel";
import TechnologiesCards from "./TechnologiesCards";

const Technologies = ({ language }: SectionsProps) => {
  const { title } = technologiesContent[language];

  return (
    <section
      id="technologies"
      className="flex flex-col justify-center items-center w-full py-20 gap-4"
    >
      <div className="flex w-full justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <div className="flex flex-col relative max-w-6xl justify-center items-center">
        <div className="flex flex-col w-[90vw] gap-2">
          <TechnologiesCarousel items={techs} />
          <TechnologiesCarousel items={techs} reverse />
        </div>
      </div>
      <div className="flex flex-row w-full p-3">
        <TechnologiesCards language={language}/>
      </div>
    </section>
  );
};

export default Technologies;
