import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/card3D";
import Image from "next/image";
import Link from "next/link";
import IconCloud from "./ui/IconCloud";
import { useState, useEffect } from "react";

const About = () => {
	const slugs = [
		"typescript",
		"javascript",
		"react",
		"html5",
		"css3",
		"nodedotjs",
		"apple",
		"bandlab",
		"bootstrap",
		"tailwindcss",
		"c",
		"python",
		"pytorch",
		"nextdotjs",
		"vercel",
		"cypress",
		"git",
		"github",
		"gitlab",
		"visualstudiocode",
	];

	const [divClasses, setDivClasses] = useState("");

	useEffect(() => {
		const updateClasses = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth < 640) {
				setDivClasses("flex flex-col-reverse mx-auto");
			} else if (screenWidth >= 640 && screenWidth <= 1160) {
				setDivClasses("flex flex-col-reverse");
			} else {
				setDivClasses("flex gap-4 mx-auto justify-center");
			}
		};

		// Initial class setting
		updateClasses();

		// Add event listener
		window.addEventListener("resize", updateClasses);

		// Clean up event listener
		return () => {
			window.removeEventListener("resize", updateClasses);
		};
	}, []);

	return (
		<div className={divClasses}>
			<CardContainer className="">
				<CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.3] dark:bg-[#04091e] dark:border-teal-500/[0.3] sm:w-[30rem] md:w-[40rem] sm:h-[60rem] md:h-auto rounded-xl p-6 border-teal-500 border">
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white"
					>
						<h1>
							About <span className="text-teal-500">me</span>
						</h1>
					</CardItem>
					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex justify-center"
					>
						Hover for a surpise!
					</CardItem>
					<div className="flex gap-2">
						<CardItem
							as="p"
							translateZ="60"
							className="text-neutral-500 text-sm text-left max-w-sm mt-2 dark:text-neutral-300"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							qui modi optio et nostrum quos est corrupti consequuntur itaque
							perferendis libero deserunt magnam adipisci dolores recusandae
							nihil, dolorum consectetur hic? Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Iure sapiente dicta perferendis unde
							reprehenderit autem necessitatibus doloremque voluptatum sit dolor
							debitis at impedit id qui quam earum, ratione voluptas facere.
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
							beatae totam impedit saepe et qui eaque nesciunt nobis! Eius
							provident nulla possimus molestias, quibusdam quis corrupti odio
							velit quae magni.
						</CardItem>
						<CardItem
							translateZ="100"
							className="rounded-lg object-cover flex flex-col"
						>
							<Image
								src="/neonWavesbg.avif"
								alt="me"
								width={300}
								height={200}
								className="rounded-lg py-2"
							/>
							<Image
								src="/vibrantLoop.jpg"
								alt="me2"
								width={300}
								height={200}
								className="rounded-lg py-2"
							/>
						</CardItem>
					</div>
					<CardItem
						translateZ={20}
						as={Link}
						href="/"
						className="px-4 py-2 mt-16"
					>
						<button className="p-[3px] relative">
							<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
							<div className="px-8 py-2 bg-black rounded-[6px] text-sm relative group transition duration-20 hover:bg-current">
								Check out my Latest Projects
							</div>
						</button>
					</CardItem>
				</CardBody>
			</CardContainer>
			<div className="my-auto">
				<IconCloud iconSlugs={slugs} />
			</div>
		</div>
	);
};

export default About;
