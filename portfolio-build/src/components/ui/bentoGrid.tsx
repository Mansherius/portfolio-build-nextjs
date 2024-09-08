import { cn } from "@/utils/cn";
import { slugs } from "../../../data/index";
import { VelocityScroll } from "./VelocityScroll";
import { useState } from "react"; // Import useState for managing button text state
import IconCloud from "./iconCloud";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-6 gap-4 lg:gap-8 mx-auto p-12",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	id,
	className,
	title,
	descriptionTop,
	descriptionBottom,
	descriptionBottom2,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	title?: string | React.ReactNode;
	descriptionTop?: string | React.ReactNode;
	descriptionBottom?: string | React.ReactNode;
	descriptionBottom2?: string | React.ReactNode;
	header?: React.ReactNode;
	id: number;
	imgClassName?: string;
	titleClassName?: string;
	img?: string;
	spareImg?: string;
}) => {
	const [buttonText, setButtonText] = useState("My Email Address"); // State for button text

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("mansherius@gmail.com");
		setButtonText("Email copied!");
		setTimeout(() => setButtonText("My Email Address"), 3000); // Reset button text after 3 seconds
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background:
					"linear-gradient(153deg, rgba(0,3,25,1) 35%, rgba(2,115,51,1) 76%)",
			}}
		>
			<div className={`${id === 5 && 'flex justify-center'} h-full`}>
				<div className="w-full h-full absolute" id="Image">
					{img && (
						<img
							src={img}
							alt="bento Image"
							className={cn(imgClassName, "object-cover, object-center")}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					}`}
					id="spareImg"
				>
					{spareImg && (
						<img
							src={spareImg}
							alt="bento Image"
							className={"object-cover, object-center w-full h-full"}
						/>
					)}
				</div>
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					{id === 1 && (
              <div className="absolute -top-7 right-10 w-[30%] md:w-[60%] lg:w-[80%]">
                <IconCloud iconSlugs={slugs} />
              </div>
          )}
          {id === 1 && (
            <VelocityScroll
            text="React.js | Next.js | Tailwind CSS | Bootstrap | Node.js | Express.js | C | Python3 | JavaScript | TypeScript | Scala | Firebase | "
            default_velocity={1}
            className="font-display text-center text-2xl font-bold tracking-wider text-neutral-300 md:text-black md:text-3xl lg:text-5xl md:leading-[5rem]"
          />
          )}
					<div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
						{descriptionTop}
					</div>
					<div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
						{title}
					</div>
					{descriptionBottom && (
						<div className="font-sans font-normal text-[#ffffff] text-sm md:text-xs lg:text-base z-10 py-8">
							{descriptionBottom}
						</div>
					)}
					{descriptionBottom2 && (
						<div className="font-sans font-normal text-[#ffffff] text-sm md:text-xs lg:text-base z-10">
							{descriptionBottom2}
						</div>
					)}
          {id === 5 && (
            <div className="flex justify-center items-center py-4 space-x-4">
              <button
                onClick={handleCopyEmail}
                className="bg-green-3 text-white font-bold py-2 px-4 rounded"
              >
                {buttonText}
              </button>
            </div>
          )}
				</div>
			</div>
		</div>
	);
};
