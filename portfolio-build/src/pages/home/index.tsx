import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansher | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-100vh justify-center text-center items-center">
        <Hero />
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
          <Spotlight className='-top-10 -left-30 h-80vh w-50vw' fill="purple"/>
          <Spotlight className='top-28 left-80 w-50vw h-80vh' fill="blue"/>
        </div>
      </div>
    </div>
  );
}