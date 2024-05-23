import React from "react";
import { Categories, Project } from "./data";

const categoryTitle: Record<Categories, string> = {
  [Categories.DESCRIPTION]: "what it does",
  [Categories.TECH_STACK]: "what it uses",
  [Categories.HIGHLIGHTS]: "what makes it special",
  [Categories.STATUS]: "what is the status",
};

export const ProjectInformationModal = ({ project }: { project: Project }) => {
  return (
    <div
      popover="auto"
      id={project.name}
      className="dialog p-8 drop-shadow-xl rounded-lg w-11/12 h-fit xl:w-fit"
    >
      <div className="flex justify-end">
        <button
          className="uppercase p-2 font-thin hover:text-slate-500 text-2xl xl:text-base"
          popovertarget={project.name}
          popovertargetaction="hide"
        >
          Close
        </button>
      </div>
      <div className="flex space-x-8 flex-row">
        <div>
          <h1 className="text-5xl xl:text-xl font-mono">{project.name}</h1>
          {Object.entries(categoryTitle).map(([key, title]) => {
            const content = project.info[key as Categories];
            return (
              content && (
                <div key={key} className="xl:max-w-60">
                  <p className="font-mono text-3xl xl:text-xs pt-4 xl: pt-2 text-gray-500">
                    {title}
                  </p>
                  <p className="font-mono text-3xl xl:text-xs pb-4 pl-8 xl:pl-4 xl:pb-2">
                    {content}
                  </p>
                </div>
              )
            );
          })}
          {project.hrefApp && (
            <p className="font-mono text-3xl xl:text-xs">
              go to{" "}
              <a className="underline" target="_blank" href={project.hrefApp}>
                {project.name}
              </a>
            </p>
          )}
          {project.hrefSource && (
            <p className="font-mono text-3xl xl:text-xs">
              go to{" "}
              <a
                className="underline"
                target="_blank"
                href={project.hrefSource}
              >
                source code
              </a>
            </p>
          )}
        </div>
        {project.imagePath && (
          <div className="m-auto">
            <img
              className="xl:max-h-96 xl:max-w-96 drop-shadow-lg"
              src={project.imagePath}
            />
          </div>
        )}
      </div>
    </div>
  );
};
