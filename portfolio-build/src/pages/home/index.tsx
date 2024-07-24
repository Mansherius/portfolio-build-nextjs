import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ProjectBento from "@/components/ProjectBento";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansher | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-100vh">
        <HeroHighlight containerClassName="min-h-screen flex flex-col">
          <Hero />
          <About />
          <ProjectBento />
        </HeroHighlight>
      </div>
    </div>
  );
}