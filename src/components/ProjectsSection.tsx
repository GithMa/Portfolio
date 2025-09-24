import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Redacted prosjekt",
    description: "Redacted prosjekt beskrivelse",
    image: "/images/projects/redacted.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Coming soon prosjekt",
    description: "Coming soon prosjekt beskrivelse",
    image: "/images/projects/ComingSoon.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Redacted prosjekt",
    description: "Redacted prosjekt beskrivelse",
    image: "/images/projects/redacted.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mine Prosjekter
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <button className="rounded-full border-2 border-[#597081] px-5 py-3 text-xl cursor-pointer">
          Alle
        </button>
        <button className="rounded-full border-2 border-slate-800 hover:border-white px-5 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md-gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
