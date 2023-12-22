import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/foode.PNG"
          title="Food Website"
          description="Viraj Foods Order food online for convenient doorstep delivery from local restaurants."
        />
        <ProjectCard
          src="/hospital.png"
          title="Hospital Website"
          description="Enhancing healthcare efficiency with digital tools for patient records, appointments, and administration."
        />
        <ProjectCard
          src="/s1.PNG"
          title="Stock Trend Predictor"
          description="
          Analyzing market data to forecast and track stock trends for informed investment decisions"
        />
      </div>
    </div>
  );
};

export default Projects;
