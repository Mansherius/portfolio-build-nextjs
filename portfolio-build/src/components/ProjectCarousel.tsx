"use client";
import React from "react";
import { Card, Carousel } from '@/components/ui/CardCarousel';

export default function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
      <h1 className="sm:text-4xl md:text-5xl tracking-wider font-bold text-neutral-200 font-sans px-4"> Some of my <span className=" text-green-4">Projects</span></h1>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Encryption and Security",
    title: "Encrypted Password Manager",
    src: "/passwordManagerBG.jpg",
    content: <DummyContent />,
  },
  {
    category: "Natural Language Processing",
    title: "Music Rec & Playlist Generator (Ongoing)",
    src: "/musicGenBG.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Travel Planner website (Ongoing)",
    src: "/travelPlannerSS.png",
    content: <DummyContent />,
  },

  {
    category: "ML and prediction",
    title: "Stock Prediction Tool",
    src: "/stocksBG.jpg",
    content: <DummyContent />,
  },
];
