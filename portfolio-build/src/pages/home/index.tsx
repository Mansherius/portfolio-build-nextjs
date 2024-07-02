import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansher | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-100vh justify-center text-center">
      <h1>Home hello there</h1>
      </div>
    </div>
  );
}