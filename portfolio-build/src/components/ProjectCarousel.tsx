"use client";
import React from "react";
import { Card, Carousel } from "@/components/ui/CardCarousel";
import PassData from "@/components/Projects/passwordManager";
import StockData from "@/components/Projects/stockTool";
import MusicData from "./Projects/MusicGen";
import TravelData from "./Projects/TravelPlanner";

export default function ProjectCarousel() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full">
			<div className="flex justify-center">
				<h1 className="sm:text-4xl md:text-5xl tracking-wider font-bold text-neutral-200 font-sans px-4">
					{" "}
					Some of my <span className=" text-green-4">Projects</span>
				</h1>
			</div>
			<Carousel items={cards} />
		</div>
	);
}

const data = [
	{
		category: "Encryption and Security",
		title: "Encrypted Password Manager",
		src: "/passwordManagerBG.jpg",
		content: <PassData />,
		githubLink: "https://github.com/Mansherius/ComputerSec-and-Priv/tree/main/Project_CSP",
	},
	{
		category: "Natural Language Processing",
		title: "Music Rec & Playlist Generator (Ongoing)",
		src: "/musicGenBG.png",
		content: <MusicData />,
		githubLink: "https://github.com/Mansherius/NLP_G6/tree/main/FinalProject",
	},
	{
		category: "Product",
		title: "Travel Planner website (Ongoing)",
		src: "/travelPlannerSS.png",
		content: <TravelData />,
		githubLink: "https://github.com/Mansherius/travel-planner-zool/tree/main",
	},
	{
		category: "ML and prediction",
		title: "Stock Prediction Tool",
		src: "/stocksBG.jpg",
		content: <StockData />,
		githubLink: "https://github.com/Mansherius/IML-Final-Project",
	},
];