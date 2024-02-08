import React from "react";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";

export function App() {
  return (
    <div className="flex flex-col h-svh space-between">
      <div className="flex items-center justify-center basis-1/2 xl:basis-5/8">
        <Header />
      </div>
      <div className="flex basis-1/2 xl:basis-3/8">
        <Content />
      </div>
      <div className="flex justify-end p-2 flex-col items-center xl:items-end">
        <Footer />
      </div>
    </div>
  );
}
