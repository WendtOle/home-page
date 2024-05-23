import React from "react";
import { Link } from "./Link";
import { List } from "./List";
import { contributions, projects } from "./data";

export interface Props {}

export const Content = (props: Props) => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="flex flex-col space-y-1">
        <Link href="https://github.com/WendtOle">
          my <span className="uppercase underline">github</span> profile
        </Link>
        <List title="projects" entries={projects} />
        <List title="contributions" entries={contributions} />
      </div>
    </div>
  );
};
