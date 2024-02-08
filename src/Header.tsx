import React from "react";

export const Header = () => {
  return (
    <div className="flex space-x-2 flex-col xl:flex-row">
      <h1 className="text-blue-900 text-9xl xl:text-5xl font-mono tracking-widest">
        Ole Wendt
      </h1>
      <p className="font-mono text-2xl xl:text-xs tracking-tighter">
        Software Developer
      </p>
    </div>
  );
};
