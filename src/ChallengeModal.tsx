import React from "react";
import { Challenge } from "./data";
import { Modal } from "./Modal";

export const ChallengeModal = ({ challenge }: { challenge: Challenge }) => {
  const { name, imagePaths, hrefApp, description } = challenge;
  return (
    <Modal id={name}>
      <div className="flex space-y-4 flex-col">
        <h1 className="text-5xl xl:text-xl font-mono">{name}</h1>
        <p className="font-mono text-3xl xl:text-xs pb-4 pl-8 xl:pl-4 xl:pb-2">
          {description}
        </p>
        {imagePaths.map((path) => {
          return (
            <img
              className="xl:max-h-96 xl:max-w-96 drop-shadow-lg"
              src={path}
            />
          );
        })}
        {hrefApp && (
          <p className="font-mono text-3xl xl:text-xs">
            go to{" "}
            <a className="underline" target="_blank" href={hrefApp}>
              {name}
            </a>
          </p>
        )}
      </div>
    </Modal>
  );
};
