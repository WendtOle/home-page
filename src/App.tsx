import React, { useState } from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";
import { projects } from "./data";
import { ProjectInformationModal } from "./ProjectInformationModal";

export function App() {
  const [focusedProjectName, setFocusedProject] = useState<string | null>(null);
  const focusedProject = projects.find(
    ({ name }) => name === focusedProjectName
  );

  return (
    <div className="flex flex-col h-svh space-between relative">
      <div className="flex items-center justify-center basis-1/2 xl:basis-5/8">
        <Header />
      </div>
      <div className="flex basis-1/2 xl:basis-3/8">
        <Content
          focusedProject={focusedProjectName}
          setFocusedProject={setFocusedProject}
        />
      </div>
      <div className="flex justify-end p-2 flex-col items-center xl:items-end">
        <Footer />
      </div>
      {focusedProject !== undefined && (
        <ProjectInformationModal
          onClose={() => setFocusedProject(null)}
          project={focusedProject}
        />
      )}
    </div>
  );
}
