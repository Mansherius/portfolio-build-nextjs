import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/card3D";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<div className="w-full flex justify-evenly">
			<CardContainer className="">
				<CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.3] dark:bg-black dark:border-teal-500/[0.3] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white"
					>
						<h1>About <span className="text-teal-500">me</span></h1>
					</CardItem>
					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
					>
						Hover over this card to unleash the power of CSS perspective
					</CardItem>
          <div className="flex gap-2">
					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui modi optio et nostrum quos est corrupti consequuntur itaque perferendis libero deserunt magnam adipisci dolores recusandae nihil, dolorum consectetur hic?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sapiente dicta perferendis unde reprehenderit autem necessitatibus doloremque voluptatum sit dolor debitis at impedit id qui quam earum, ratione voluptas facere.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur beatae totam impedit saepe et qui eaque nesciunt nobis! Eius provident nulla possimus molestias, quibusdam quis corrupti odio velit quae magni.
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
            <Image
              src="/logoLeo.png"
              alt="me3"
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
							className="px-4 py-2 mt-16 rounded-xl text-xs font-normal dark:text-white"
						>
							<button 
                className="bg-teal-500 text-white rounded-lg p-2 hover:bg-teal-600"
                href="/"
                >Check out my latest Projects</button>
						</CardItem>
				</CardBody>
			</CardContainer>

		</div>
	);
};

export default About;
