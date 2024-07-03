import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansher | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-100vh justify-center text-center items-center">
        <Hero />
      </div>
    </div>
  );
}