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
      <div className="flex flex-col">
        <Link href="https://github.com/WendtOle" name="my github profile" />
        <Link
          href="https://github.com/WendtOle/home-page"
          name="source code for this page"
        />
        <Projects {...props} />
      </div>
    </div>
  );
};
