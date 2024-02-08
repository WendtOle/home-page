import React from "react";
import { Modal } from "./Modal";
import { Categories, Project } from "./data";

const categoryTitle: Record<Categories, string> = {
  [Categories.DESCRIPTION]: "what it does",
  [Categories.TECH_STACK]: "what it uses",
  [Categories.HIGHLIGHTS]: "what makes it special",
  [Categories.STATUS]: "what is the status",
};

export const ProjectInformationModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <h1 className="text-5xl xl:text-xl font-mono">{project.name}</h1>
        {Object.entries(categoryTitle).map(([key, title]) => {
          const content = project.info[key as Categories];
          return (
            content && (
              <div key={key}>
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
        <p className="font-mono text-3xl xl:text-xs">
          go to{" "}
          <a className="underline" target="_blank" href={project.hrefApp}>
            {project.name}
          </a>
        </p>
        {project.hrefSource && (
          <p className="font-mono text-3xl xl:text-xs">
            go to{" "}
            <a className="underline" target="_blank" href={project.hrefSource}>
              source code
            </a>
          </p>
        )}
      </div>
    </Modal>
  );
};
