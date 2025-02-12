import React from "react";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import ProjectCarousel from "@/components/ProjectCarousel";
import Experience from "@/components/Experience";
import FooterPortfolio from "@/components/FooterPortfolio";

export default function Home() {
  return (
    <div>
      <div id="home"/>
      <Hero />
      <div id="about"/>
      <AboutBento />
      <div className="pt-16" id="projects"/>
      <ProjectCarousel />
      <div className="pt-10" id="experience"/>
      <Experience />
      <div className="" id="contact"/>
      <FooterPortfolio />
    </div>
  );
}