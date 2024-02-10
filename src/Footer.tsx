import React from "react";

export const Footer = () => {
  return (
    <p className="font-mono text-2xl xl:text-xs dark:text-yellow-200 tracking-widest">
      <p className="dark:hidden">
        powered by tailwind, react, typescript and parcel
      </p>
      <p className="hidden dark:inline-flex">powered by my alter ego</p>
    </p>
  );
};
