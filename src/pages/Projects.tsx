import ScreenContainer from "../components/ScreenContainer";
import { projectsData } from "../data/data";
import Title from "../components/Title";
import React from "react";

// type Props = {};

export default function Projects() {
  return (
    <ScreenContainer className=" flex flex-col max-w-7xl px-10  py-20 mx-auto items-center">
      <Title
        className="text-2xl font-bold whitespace-nowrap py-3"
        sectionNumber="04-"
        title="Projects"
      />
      <div>
        {projectsData.map((item) => (
          <React.Fragment key={item.title}>
            <Project {...item} />
          </React.Fragment>
        ))}
      </div>
    </ScreenContainer>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  demoUrl,
  sourceCodeUrl,
  imageUrl,
}: ProjectProps) {
  return (
    <div className=" bg-[#e6e7e8] max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 flex flex-col h-auto ">
      <img
        src={imageUrl}
        alt="project"
        className="hidden md:block md:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hover:-translate-x-3 hover:trans-y-3 hover:-rotate-2 transition hover:scale-[1.04]"
      />
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="hidden md:flex space-x-2 pt-2">
          {tags.map((i) => (
            <span className="skillsIcon">{i}</span>
          ))}
        </div>
        <p className=" leading-relaxed text-gray-700 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4831d4] bg-opacity-60 px-6 py-3 text-[0.7rem] uppercase tracking-wider text-slate-950 font-semibold rounded-full hover:scale-[1.04] transition"
          >
            See Demo
          </a>
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4831d4] bg-opacity-60 px-6 py-3 text-[0.7rem] uppercase tracking-wider text-slate-950 font-semibold rounded-full hover:scale-[1.04] transition"
          >
            Source Code
          </a>
        </div>
        <img
          src={imageUrl}
          alt="project"
          className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-full"
        />
      </div>
    </div>
  );
}
