import React from "react";
import { workExperience } from "../../data";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
	return (
		<div className="py-20 p-12">
            <div className="flex justify-center">
			<h1 className="sm:text-4xl md:text-5xl tracking-wider font-bold text-neutral-200 font-sans px-4">
				My {" "}<span className=" text-green-4">Experience</span>
			</h1>
            </div>
            <div className="w-full pt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="2rem"
                        className="flex-1 text-white border-green-3"
                    >
                        <div className="flex lg:flex-row flex-col md:p-5 lg:p-10 p-3 py-6 items-center gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.title}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start font-semibold mt-3 text-white">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
		</div>
	);
};

export default Experience;
