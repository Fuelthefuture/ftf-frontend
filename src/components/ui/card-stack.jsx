// import { motion } from "framer-motion";
// import { useState } from "react";

// export const CardStack = ({ items, offset = 2, scaleFactor = 0.06 }) => {
// 	const [cards, setCards] = useState(items);

// 	const moveToEnd = (array) => {
// 		const newArray = [...array];
// 		const firstItem = newArray.shift();
// 		newArray.push(firstItem);
// 		return newArray;
// 	};

// 	return (
// 		<div className="relative h-60">
// 			{cards.map((card, index) => (
// 				<motion.div
// 					key={card.id}
// 					layoutId={`${card.id}`}
// 					style={{
// 						transformOrigin: "top center",
// 						position: "absolute",
// 						width: "100%",
// 					}}
// 					animate={{
// 						top: index * offset,
// 						scale: 1 - index * scaleFactor,
// 						zIndex: cards.length - index,
// 					}}
// 					transition={{
// 						duration: 0.3,
// 						ease: "easeInOut",
// 					}}
// 					onClick={() => setCards(moveToEnd(cards))}
// 					className="bg-white dark:bg-black cursor-pointer rounded-xl p-4 shadow-xl dark:shadow-2xl dark:shadow-white/[0.1] border border-black/[0.1] dark:border-white/[0.1]"
// 				>
// 					<h3 className="font-bold text-lg dark:text-white">{card.name}</h3>
// 					<p className="text-sm text-gray-500 dark:text-gray-400">
// 						{card.designation}
// 					</p>
// 					<div className="mt-2 dark:text-white">{card.content}</div>
// 				</motion.div>
// 			))}
// 		</div>
// 	);
// };

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CardStack({ items }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const slideVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			y: 0,
			opacity: 0,
			scale: 0.8,
			rotateY: direction > 0 ? 45 : -45,
			zIndex: 0,
		}),
		center: {
			x: 0,
			y: 0,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			zIndex: 1,
			transition: {
				duration: 0.8,
				type: "spring",
				bounce: 0.4,
			},
		},
		exit: (direction) => ({
			x: direction < 0 ? 1000 : -1000,
			y: 0,
			opacity: 0,
			scale: 0.8,
			rotateY: direction < 0 ? 45 : -45,
			zIndex: 0,
			transition: {
				duration: 0.5,
			},
		}),
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + items.length) % items.length
		);
	};

	const renderBackgroundCards = () => {
		const cards = [];
		const totalBackground = Math.min(items.length - 1, 2);

		for (let i = 1; i <= totalBackground; i++) {
			const index = (currentIndex + i) % items.length;
			cards.push(
				<motion.div
					key={`background-${i}`}
					className="absolute"
					initial={{ scale: 1 - i * 0.05, y: i * 10, opacity: 0.6 - i * 0.2 }}
					animate={{ scale: 1 - i * 0.05, y: i * 10, opacity: 0.6 - i * 0.2 }}
					style={{
						zIndex: -i,
						filter: `blur(${i * 2}px)`,
					}}
				>
					<Card className="w-full bg-gray-800/50 backdrop-blur-sm border-gray-700">
						<CardContent className="p-6 opacity-0">
							<div className="h-[150px]" />
						</CardContent>
					</Card>
				</motion.div>
			);
		}
		return cards;
	};

	return (
		<div className="relative w-full max-w-md mx-auto h-[200px]">
			{renderBackgroundCards()}

			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentIndex}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					className="absolute w-full"
				>
					<Card className="w-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="text-lg font-semibold text-gray-100">
											{items[currentIndex].name}
										</h3>
										<p className="text-sm text-teal-400">
											{items[currentIndex].designation}
										</p>
									</div>
									<div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 flex items-center justify-center">
										<span className="text-white text-sm font-semibold">
											{currentIndex + 1}/{items.length}
										</span>
									</div>
								</div>
								<p className="text-gray-300">{items[currentIndex].content}</p>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</AnimatePresence>

			<div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
				<button
					onClick={handlePrev}
					className="flex items-center justify-center p-2 w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
				>
					{/* ← */}
					<ChevronLeft className="w-6 h-6 hover:text-teal-400" />
				</button>
				<button
					onClick={handleNext}
					className="p-2 w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
				>
					{/* → */}
					<ChevronRight className="w-6 h-6 hover:text-teal-400" />
				</button>
			</div>
		</div>
	);
}
