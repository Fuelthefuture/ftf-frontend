// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const ColorfulText = ({ text = "components" }) => {
// 	const colors = [
// 		"rgb(131, 179, 32)",
// 		"rgb(47, 195, 106)",
// 		"rgb(42, 169, 210)",
// 		"rgb(4, 112, 202)",
// 		"rgb(107, 10, 255)",
// 		"rgb(183, 0, 218)",
// 		"rgb(218, 0, 171)",
// 		"rgb(230, 64, 92)",
// 		"rgb(232, 98, 63)",
// 		"rgb(249, 129, 47)",
// 	];

// 	const [currentColors, setCurrentColors] = useState(colors);
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			const shuffled = [...colors].sort(() => Math.random() - 0.5);
// 			setCurrentColors(shuffled);
// 			setCount((prev) => prev + 1);
// 		}, 5000);
// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<span className="inline-block">
// 			{text.split("").map((char, index) => (
// 				<motion.span
// 					key={`${char}-${count}-${index}`}
// 					initial={{ y: 0 }}
// 					animate={{
// 						color: currentColors[index % currentColors.length],
// 						y: [0, -3, 0],
// 						scale: [1, 1.01, 1],
// 						filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
// 						opacity: [1, 0.8, 1],
// 					}}
// 					transition={{
// 						duration: 0.5,
// 						delay: index * 0.05,
// 					}}
// 					className="inline-block whitespace-pre font-sans tracking-tight"
// 				>
// 					{char}
// 				</motion.span>
// 			))}
// 		</span>
// 	);
// };

// export default ColorfulText;

import { motion } from "framer-motion";

const ColorfulText = ({ text = "components" }) => {
	return (
		<span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
			{text.split("").map((char, index) => (
				<motion.span
					key={`${char}-${index}`}
					initial={{ y: 0 }}
					animate={{
						y: [0, -3, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 0.5,
						delay: index * 0.05,
						ease: "easeInOut",
						repeat: Infinity,
						repeatDelay: 2,
					}}
					className="inline-block whitespace-pre font-sans tracking-tight"
				>
					{char}
				</motion.span>
			))}
		</span>
	);
};

export default ColorfulText;
