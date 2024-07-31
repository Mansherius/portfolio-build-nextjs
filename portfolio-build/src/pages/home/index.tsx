import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";

export default function Home() {
  return (
    <div>
      <div id="home"/>
      <Hero />
      <div id="about"/>
      <AboutBento />
    </div>
  );
}