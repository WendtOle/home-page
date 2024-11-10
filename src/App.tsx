import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";
import logo from "./ad-logo.jpg";
import { Link } from "./Link";

export function App() {
  return (
    <div className="flex flex-col h-svh space-between relative dark:bg-gray-600 relative">
      <div className="flex flex-col items-center justify-end h-1/4">
        <Header />
      </div>
      <div className="flex h-3/4 justify-center items-center dark:items-start">
        <div className="dark:hidden">
          <Content />
        </div>
        <div className="flex justify-center items-center p-2 flex-col hidden dark:inline-flex h-full">
          <img className="rounded-full h-1/2" src={logo} />
          <div className="flex flex-col items-center gap-4 my-8">
            <Link href="https://soundcloud.com/andreydelany">Tracks (Soundcloud)</Link>
            <Link href="https://www.youtube.com/playlist?list=PL-b43E3nNxKCYNcCHdJe6_336K-rEwROI">Improvisations (Youtube)</Link>
            <Link href="https://www.youtube.com/playlist?list=PL-b43E3nNxKD7jLbOn6glN26ZsGlaQiIW">Sessions (Youtube)</Link>
            <Link href="https://music-production-docs.vercel.app/">
              My music production, improvisation and streaming wiki
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-2 flex-col items-center xl:items-end">
        <Footer />
      </div>
    </div>
  );
}
