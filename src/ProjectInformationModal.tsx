import React from "react";
import { Categories, Project } from "./data";
import { Modal } from "./Modal";

const categoryTitle: Record<Categories, string> = {
  [Categories.DESCRIPTION]: "what it does",
  [Categories.TECH_STACK]: "what it uses",
  [Categories.HIGHLIGHTS]: "what makes it special",
  [Categories.STATUS]: "what is the status",
};

export const ProjectInformationModal = ({ project }: { project: Project }) => {
  const paths = !project.imagePath
    ? []
    : Array.isArray(project.imagePath)
      ? project.imagePath
      : [project.imagePath];
  return (
    <Modal id={project.name}>
      <div className="flex space-x-8 flex-row">
        <div>
          <h1 className="text-5xl xl:text-xl font-mono">{project.name}</h1>
          {Object.entries(categoryTitle).map(([key, title], index) => {
            const content = project.info[key as Categories];
            return (
              <div key={key + index}>
                {content && (
                  <div className="xl:max-w-60">
                    <p className="font-mono text-3xl xl:text-xs pt-4 xl: pt-2 text-gray-500">
                      {title}
                    </p>
                    <p className="font-mono text-3xl xl:text-xs pb-4 pl-8 xl:pl-4 xl:pb-2">
                      {content}
                    </p>
                  </div>
                )}
              </div>
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
        {paths.map((path: string) => (
          <div className="m-auto" key={path}>
            <img
              className="xl:max-h-96 xl:max-w-96 drop-shadow-lg"
              src={path}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};
