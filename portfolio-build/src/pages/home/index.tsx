import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansher | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Hero />
          <AboutBento />
      </div>
    </div>
  );
}