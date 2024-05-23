import React from "react";

export const Modal = ({ children, id }: { children: any; id: string }) => {
  return (
    <div
      popover="auto"
      id={id}
      className="dialog p-8 shadow-xl rounded-lg w-11/12 h-fit xl:w-fit"
    >
      <div className="flex justify-end">
        <button
          className="uppercase p-2 font-thin hover:text-slate-500 text-2xl xl:text-base"
          popovertarget={id}
          popovertargetaction="hide"
        >
          Close
        </button>
      </div>
      {children}
    </div>
  );
};
