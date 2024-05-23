import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";
import logo from "./ad-logo.jpg";
import { Link } from "./Link";

export function App() {
  return (
    <div className="flex flex-col h-svh space-between relative dark:bg-gray-600 relative">
      <div className="flex items-center justify-center h-1/2">
        <Header />
      </div>
      <div className="flex h-1/2 justify-center items-center dark:items-start">
        <div className="dark:hidden">
          <Content />
        </div>
        <div className="flex justify-start items-center p-2 flex-col hidden dark:inline-flex h-full">
          <img className="rounded-full h-4/5" src={logo} />
          <Link href="https://soundcloud.com/andreydelany">Soundcloud</Link>
          <Link href="https://music-production-docs.vercel.app/">
            Documentation
          </Link>
        </div>
      </div>
      <div className="flex justify-end p-2 flex-col items-center xl:items-end">
        <Footer />
      </div>
    </div>
  );
}
