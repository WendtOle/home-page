import React, { useState } from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";
import { projects } from "./data";
import { ProjectInformationModal } from "./ProjectInformationModal";
import logo from "./ad-logo.jpg";
import { Link } from "./Link";

export function App() {
  const [focusedProjectName, setFocusedProject] = useState<string | null>(null);
  const focusedProject = projects.find(
    ({ name }) => name === focusedProjectName
  );

  return (
    <div className="flex flex-col h-svh space-between relative dark:bg-gray-600 relative">
      <div className="flex items-center justify-center h-1/2">
        <Header />
      </div>
      <div className="flex h-1/2 justify-center items-center dark:items-start">
        <div className="dark:hidden">
          <Content
            focusedProject={focusedProjectName}
            setFocusedProject={setFocusedProject}
          />
        </div>
        <div className="flex justify-start items-center p-2 flex-col hidden dark:inline-flex h-full">
          <img className="rounded-full h-4/5" src={logo} />
          <Link href="https://soundcloud.com/andreydelany" name="Soundcloud" />
        </div>
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
