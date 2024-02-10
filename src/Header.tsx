import React from "react";

export const Header = () => {
  const switchPerson = () => {
    document.querySelector("#app")?.classList.toggle("dark");
  };

  return (
    <div className="flex space-x-2 flex-col xl:flex-row">
      <h1 className="dark:text-yellow-200 text-8xl xl:text-5xl dark:xl:text-5xl font-mono tracking-widest ">
        <p className="dark:hidden">Ole Wendt</p>
        <p className="hidden dark:inline-flex">Andrey Delany</p>
      </h1>
      <div
        onClick={switchPerson}
        className="flex justify-between items-center xl:flex-col xl:items-start"
      >
        <p className="font-mono text-2xl xl:text-xs tracking-tighter dark:text-gray-400">
          Software Developer
        </p>
        <p className="font-mono text-2xl xl:text-xs tracking-tighter text-gray-400 dark:text-yellow-200">
          Musical Artist
        </p>
      </div>
    </div>
  );
};
