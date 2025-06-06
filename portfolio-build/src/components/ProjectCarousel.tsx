"use client";
import React from "react";
import { Card, Carousel } from "@/components/ui/CardCarousel";
import PassData from "@/components/Projects/passwordManager";
import StockData from "@/components/Projects/stockTool";
import MusicData from "./Projects/MusicGen";
import TravelData from "./Projects/TravelPlanner";
import TrackerData from "./Projects/FittTracker";
import FoodKGProject from "./Projects/Capstone";

export default function ProjectCarousel() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full">
			<div className="flex justify-center pt-20 pb-10">
				<h1 className="sm:text-4xl md:text-5xl tracking-wider font-bold text-neutral-200 text-center font-sans px-4">
					Some of my <span className=" text-green-4">Projects</span>
				</h1>
			</div>
			<p className="sm:text-xl md:text-2xl tracking-wide font-semibold text-neutral-400 font-sans p-2 text-center">
					Click on the cards to view project details!
				</p>
			<Carousel items={cards}/>
		</div>
	);
}

const data = [
	{
		category: "App Development",
		title: "FittTracker",
		src: "/fitt_tracker_bg.png",
		content: <TrackerData />,
		githubLink: "https://github.com/Mansherius/fitnessTracker",
	},
	{
		category: "Capstone - Knowledge Graph",
		title: "Food Knowledge Graph",
		src: "/capstoneBG.png",
		content: <FoodKGProject />,
		githubLink: "https://github.com/Mansherius/CapstoneProject",
	},
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