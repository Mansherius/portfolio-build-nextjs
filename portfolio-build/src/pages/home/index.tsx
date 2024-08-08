import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <div>
      <div id="home"/>
      <Hero />
      <div id="about"/>
      <AboutBento />
      <div className="pt-10" id="projects"/>
      <ProjectCarousel />
      <div id="resume"/>
      <div id="Contact"/>
    </div>
  );
}