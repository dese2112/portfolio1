"use client";
import * as React from "react";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import About from "./about";
import { Services } from "./Services";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Project } from "./Project";
export default function Portfolio() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="w-full bg-black min-h-[screen]">
        <div className="px-16 mx-auto max-w-[1920px] max-md:px-10 max-sm:px-5">
          <Navigation />
          <Hero />
        <About/>
        <Services/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
      </main>
    </>
  );
}
