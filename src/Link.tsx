import React from "react";

export const Link = (props: { href: string; name: string }) => {
  return (
    <a
      className="font-mono text-xs hover:text-gray-400"
      href={props.href}
      target="_blank"
    >
      {props.name}
    </a>
  );
};
