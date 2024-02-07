import React from "react";

export const Header = () => {
  return (
    <div className="flex space-x-2 flex-col md:flex-row">
      <h1 className="text-blue-900 text-9xl md:text-5xl font-mono">
        Ole Wendt
      </h1>
      <p className="font-mono text-2xl md:text-xs">Software Developer</p>
    </div>
  );
};
