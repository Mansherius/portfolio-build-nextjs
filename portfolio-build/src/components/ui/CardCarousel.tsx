"use client";
import React, {
	useEffect,
	useRef,
	useState,
	createContext,
	useContext,
} from "react";
import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconX,
} from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/components/hooks/useOutsideClick";
import { FaLocationArrow } from "react-icons/fa6";

interface CarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
}

type Card = {
	src: string;
	title: string;
	category: string;
	content: React.ReactNode;
	githubLink?: string;
};

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
			setCurrentIndex(index);
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	return (
		<CarouselContext.Provider
			value={{ onCardClose: handleCardClose, currentIndex }}
		>
			<div className="relative w-full">
				<div className="flex justify-end gap-2 px-4">
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-green-4 flex items-center justify-center disabled:opacity-50"
						onClick={scrollLeft}
						disabled={!canScrollLeft}
					>
						<IconArrowNarrowLeft className="h-7 w-7 text-black-100" />
					</button>
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-green-4 flex items-center justify-center disabled:opacity-50"
						onClick={scrollRight}
						disabled={!canScrollRight}
					>
						<IconArrowNarrowRight className="h-7 w-7 text-black-100" />
					</button>
				</div>
				<div
					className="flex w-full overflow-x-scroll overscroll-x-auto pb-10 scroll-smooth [scrollbar-width:none]"
					ref={carouselRef}
					onScroll={checkScrollability}
				>
					<div
						className={cn(
							"absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
						)}
					></div>

					<div className={cn("flex flex-row justify-start gap-4 pl-4", "")}>
						{items.map((item, index) => (
							<motion.div
								initial={{
									opacity: 0,
									y: 20,
								}}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: "easeOut",
										once: true,
									},
								}}
								key={"card" + index}
								className="rounded-3xl"
							>
								{item}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</CarouselContext.Provider>
	);
};

export const Card = ({
	card,
	index,
	layout = false,
}: {
	card: Card;
	index: number;
	layout?: boolean;
}) => {
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const { onCardClose, currentIndex } = useContext(CarouselContext);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				handleClose();
			}
		}

		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	useOutsideClick(containerRef, () => handleClose());

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		onCardClose(index);
	};

	return (
		<>
			<AnimatePresence>
				{open && (
					<div className="fixed inset-0 h-full z-50 overflow-auto pt-40">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							ref={containerRef}
							layoutId={layout ? `card-${card.title}` : undefined}
							className="max-w-5xl mx-auto items-center h-fit z-[60] pt-20 mb-10 p-4 md:p-10 rounded-3xl font-sans relative"
						>
							<button
								className="sticky top-4 h-10 w-10 right-0 ml-auto bg-green-4 rounded-full flex items-center justify-center"
								onClick={handleClose}
							>
								<IconX className="h-7 w-7 text-black-100" />
							</button>
							<motion.p
								layoutId={layout ? `category-${card.title}` : undefined}
								className="text-base font-medium dark:text-white"
							>
								{card.category}
							</motion.p>
							<motion.p
								layoutId={layout ? `title-${card.title}` : undefined}
								className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
							>
								{card.title}
							</motion.p>
							<div className="py-10">{card.content}</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<motion.button
				layoutId={layout ? `card-${card.title}` : undefined}
				onClick={handleOpen}
				className="rounded-3xl dark:bg-neutral-900 h-80 w-56 md:h-[30rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
			>
				<div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
				<div className="relative z-40 p-8">
					<motion.p
						layoutId={layout ? `category-${card.category}` : undefined}
						className="text-white text-sm md:text-base font-medium font-sans text-left"
					>
						{card.category}
					</motion.p>
					<motion.p
						layoutId={layout ? `title-${card.title}` : undefined}
						className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
					>
						{card.title}
					</motion.p>
				</div>
				<BlurImage
					src={card.src}
					alt={card.title}
					fill
					className="object-cover absolute z-10 inset-0"
				/>
				<div className="absolute z-20 bottom-0 left-0 right-0 p-4">
  <motion.a
    href={card.githubLink} // Dynamic GitHub link per project
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8BC34A_0%,#393BB2_50%,#8BC34A_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-green-3 backdrop-blur-3xl">
      GitHub Repo
      <FaLocationArrow className="inline-block ml-2" size={18} />
    </span>
  </motion.a>
</div>
			</motion.button>
		</>
	);
};

export const BlurImage = ({
	height,
	width,
	src,
	className,
	alt,
	...rest
}: ImageProps) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<Image
			className={cn(
				"transition duration-300",
				isLoading ? "blur-sm" : "blur-0",
				className
			)}
			onLoad={() => setLoading(false)}
			src={src}
			width={width}
			height={height}
			loading="lazy"
			decoding="async"
			blurDataURL={typeof src === "string" ? src : undefined}
			alt={alt ? alt : "Background of a beautiful view"}
			{...rest}
		/>
	);
};
