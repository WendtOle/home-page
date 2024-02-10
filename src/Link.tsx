import React from "react";

export const Link = (props: { href: string; name: string }) => {
  return (
    <a
      className="font-mono text-3xl xl:text-xs leading-relaxed dark:text-yellow-200 tracking-widest"
      href={props.href}
      target="_blank"
    >
      {props.name}
    </a>
  );
};
