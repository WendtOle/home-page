import React from "react";
import { Project } from "./data";
import { ProjectInformationModal } from "./ProjectInformationModal";

interface ListProps {
  title: string;
  entries: Project[];
}

export const List = ({ entries, title }: ListProps) => {
  return (
    <div>
      <p className="font-mono text-3xl xl:text-xs">{title}:</p>
      <div className="flex flex-col mx-8 xl:mx-2">
        {entries.map((entry) => {
          return (
            <>
              <button
                key={entry.name}
                className="font-mono text-3xl xl:text-xs hover:text-gray-400 leading-relaxed text-left"
                popovertarget={entry.name}
              >
                {entry.name}
              </button>
              <ProjectInformationModal project={entry} />
            </>
          );
        })}
      </div>
    </div>
  );
};
