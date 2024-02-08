import React from "react";
import { Props } from "./Content";
import { projects } from "./data";

export const Projects = ({ setFocusedProject }: Props) => {
  return (
    <>
      <p className="font-mono text-3xl xl:text-xs">projects:</p>
      <div className="flex flex-col mx-8 xl:mx-2">
        {projects.map(({ name }) => {
          return (
            <p
              key={name}
              className="font-mono text-3xl xl:text-xs hover:text-gray-400 leading-relaxed"
              onClick={() => setFocusedProject(name)}
            >
              {name}
            </p>
          );
        })}
      </div>
    </>
  );
};
