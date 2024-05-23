import React from "react";
import { Link } from "./Link";
import { Projects } from "./Projects";

export interface Props {
  focusedProject: string | null;
  setFocusedProject: (value: string) => void;
}

export const Content = (props: Props) => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="flex flex-col space-y-1">
        <Link href="https://github.com/WendtOle">
          my <span className="uppercase underline">github</span> profile
        </Link>
        <Projects {...props} />
      </div>
    </div>
  );
};
