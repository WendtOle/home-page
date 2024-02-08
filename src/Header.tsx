import React from "react";

export const Header = () => {
  const switchPerson = () => {
    document.querySelector("#app")?.classList.toggle("dark");
  };

  return (
    <div className="flex space-x-2 flex-col xl:flex-row group">
      <h1 className="text-blue-900 dark:text-yellow-200 text-9xl dark:text-8xl xl:text-5xl dark:xl:text-5xl font-mono tracking-widest ">
        <p className="dark:hidden">Ole Wendt</p>
        <p className="hidden dark:inline-flex">Andrey Delany</p>
      </h1>
      <div onClick={switchPerson} className="group-hover:underline">
        <p className="font-mono text-2xl xl:text-xs tracking-tighter dark:hidden">
          Software Developer
        </p>
        <div className="flex justify-end flex-col dark:flex-row items-end">
          <p className="font-mono text-2xl xl:text-xs tracking-tighter hidden dark:inline-flex dark:text-white">
            Musical Artist
          </p>
        </div>
      </div>
    </div>
  );
};
