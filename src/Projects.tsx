import React from "react";
import { projects } from "./data";
import { ProjectInformationModal } from "./ProjectInformationModal";

export const Projects = () => {
  return (
    <div>
      <p className="font-mono text-3xl xl:text-xs">projects:</p>
      <div className="flex flex-col mx-8 xl:mx-2">
        {projects.map((project) => {
          return (
            <>
              <button
                key={project.name}
                className="font-mono text-3xl xl:text-xs hover:text-gray-400 leading-relaxed text-left"
                popovertarget={project.name}
              >
                {project.name}
              </button>
              <ProjectInformationModal project={project} />
            </>
          );
        })}
      </div>
    </div>
  );
};
