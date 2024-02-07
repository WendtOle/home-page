import React from "react";
import { Link } from "./Link";

export const Projects = () => {
  return (
    <>
      <p className="font-mono text-xs">projects:</p>
      <div className="flex flex-col mx-2">
        <Link href="https://toodles-seven.vercel.app/" name="toodles" />
        <Link href="https://bet-it.vercel.app/" name="bet-it" />
        <Link href="https://kv-scheduler.vercel.app/" name="kv-scheduler" />
        <Link href="https://abstract-ten.vercel.app/" name="abstract" />
        <Link href="https://massage-dates.ow-ad.dev/" name="massage-dates" />
        <Link
          href="https://melodic-companion.vercel.app/"
          name="melodic-companion"
        />
        <Link href="https://synceval.com" name="synceval (in progress)" />
      </div>
    </>
  );
};
