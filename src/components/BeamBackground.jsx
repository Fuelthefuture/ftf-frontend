// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// const BeamBackground = React.memo(
// 	({ children, className, containerClassName }) => {
// 		// Generate beam paths
// 		const generatePaths = (count = 50, startY = -600, endY = 500) => {
// 			const paths = [];
// 			const step = 8;

// 			for (let i = 0; i < count; i++) {
// 				const offsetY = i * step;
// 				paths.push(
// 					`M${-380 + i * 7} ${startY + offsetY}C${-380 + i * 7} ${
// 						startY + offsetY
// 					} ${-312 + i * 7} ${216 + offsetY} ${152 + i * 7} ${343 + offsetY}C${
// 						616 + i * 7
// 					} ${470 + offsetY} ${684 + i * 7} ${endY + offsetY} ${684 + i * 7} ${
// 						endY + offsetY
// 					}`
// 				);
// 			}
// 			return paths;
// 		};

// 		const paths = generatePaths();

// 		return (
// 			<div className={cn("relative w-full h-full", containerClassName)}>
// 				{children}
// 				<div
// 					className={cn(
// 						"absolute inset-0 w-full h-full overflow-hidden [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center pointer-events-none",
// 						className
// 					)}
// 				>
// 					<svg
// 						className="absolute w-full h-full"
// 						width="100%"
// 						height="100%"
// 						viewBox="0 0 696 316"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
// 							stroke="url(#paint0_radial_242_278)"
// 							strokeOpacity="0.05"
// 							strokeWidth="0.5"
// 						/>

// 						{paths.map((path, index) => (
// 							<motion.path
// 								key={`path-${index}`}
// 								d={path}
// 								stroke={`url(#linearGradient-${index})`}
// 								strokeOpacity="0.4"
// 								strokeWidth="0.5"
// 							/>
// 						))}

// 						<defs>
// 							{paths.map((_, index) => (
// 								<motion.linearGradient
// 									id={`linearGradient-${index}`}
// 									key={`gradient-${index}`}
// 									initial={{
// 										x1: "0%",
// 										x2: "0%",
// 										y1: "0%",
// 										y2: "0%",
// 									}}
// 									animate={{
// 										x1: ["0%", "100%"],
// 										x2: ["0%", "95%"],
// 										y1: ["0%", "100%"],
// 										y2: ["0%", `${93 + Math.random() * 8}%`],
// 									}}
// 									transition={{
// 										duration: Math.random() * 10 + 10,
// 										ease: "easeInOut",
// 										repeat: Infinity,
// 										delay: Math.random() * 10,
// 									}}
// 								>
// 									<stop stopColor="#18CCFC" stopOpacity="0" />
// 									<stop stopColor="#18CCFC" />
// 									<stop offset="32.5%" stopColor="#6344F5" />
// 									<stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
// 								</motion.linearGradient>
// 							))}

// 							<radialGradient
// 								id="paint0_radial_242_278"
// 								cx="0"
// 								cy="0"
// 								r="1"
// 								gradientUnits="userSpaceOnUse"
// 								gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
// 							>
// 								<stop offset="0.0666667" stopColor="var(--neutral-300)" />
// 								<stop offset="0.243243" stopColor="var(--neutral-300)" />
// 								<stop offset="0.43594" stopColor="white" stopOpacity="0" />
// 							</radialGradient>
// 						</defs>
// 					</svg>
// 				</div>
// 			</div>
// 		);
// 	}
// );

// BeamBackground.displayName = "BeamBackground";

// export default BeamBackground;

// BeamBackground.jsx
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// const BeamBackground = React.memo(
// 	({
// 		children,
// 		className,
// 		containerClassName,
// 		density = 20, // Reduced default density for better performance
// 		speed = 10,
// 	}) => {
// 		// Generate diagonal paths
// 		const generateDiagonalPaths = (count = Math.floor(density * 0.4)) => {
// 			return Array.from({ length: count }, (_, i) => ({
// 				path: `M${-380 + i * 15} -189 C${-380 + i * 15} -189 ${
// 					-312 + i * 15
// 				} 216 ${152 + i * 15} 343 C${616 + i * 15} 470 ${684 + i * 15} 875 ${
// 					684 + i * 15
// 				} 875`,
// 				type: "diagonal",
// 			}));
// 		};

// 		// Generate vertical paths (top to bottom)
// 		const generateVerticalPaths = (count = Math.floor(density * 0.3)) => {
// 			return Array.from({ length: count }, (_, i) => {
// 				const x = (696 / count) * i; // Distribute evenly across width
// 				const controlPoint1 = x + (Math.random() * 50 - 25);
// 				const controlPoint2 = x + (Math.random() * 50 - 25);
// 				return {
// 					path: `M${x} -50 C ${controlPoint1} 100, ${controlPoint2} 200, ${x} 350`,
// 					type: "vertical",
// 				};
// 			});
// 		};

// 		// Generate right to bottom paths
// 		const generateRightPaths = (count = Math.floor(density * 0.3)) => {
// 			return Array.from({ length: count }, (_, i) => {
// 				const y = (300 / count) * i;
// 				return {
// 					path: `M696 ${y} C 550 ${y + 50}, 400 ${y + 100}, 250 316`,
// 					type: "right",
// 				};
// 			});
// 		};

// 		// Combine all paths
// 		const allPaths = [
// 			...generateDiagonalPaths(),
// 			// ...generateVerticalPaths(),
// 			...generateRightPaths(),
// 		];

// 		const getAnimation = (type) => {
// 			const baseTransition = {
// 				duration: speed,
// 				repeat: Infinity,
// 				ease: "linear",
// 			};

// 			switch (type) {
// 				case "vertical":
// 					return {
// 						animate: {
// 							strokeDashoffset: [0, -1000],
// 						},
// 						transition: baseTransition,
// 						style: {
// 							strokeDasharray: "1000 1000",
// 						},
// 					};
// 				case "right":
// 					return {
// 						animate: {
// 							strokeDashoffset: [1000, 0],
// 						},
// 						transition: baseTransition,
// 						style: {
// 							strokeDasharray: "1000 1000",
// 						},
// 					};
// 				default: // diagonal
// 					return {
// 						animate: {
// 							pathLength: [0, 1],
// 							pathOffset: [0, 1],
// 						},
// 						transition: {
// 							...baseTransition,
// 							duration: speed * 1.5,
// 						},
// 						style: {},
// 					};
// 			}
// 		};

// 		return (
// 			<div
// 				className={cn(
// 					"relative w-full h-full overflow-hidden",
// 					containerClassName
// 				)}
// 			>
// 				{children}
// 				<div
// 					className={cn(
// 						"absolute inset-0 w-full h-full [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center pointer-events-none",
// 						className
// 					)}
// 				>
// 					<svg
// 						className="absolute w-full h-full"
// 						viewBox="0 0 696 316"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 						preserveAspectRatio="xMidYMid slice"
// 					>
// 						{allPaths.map((pathData, index) => {
// 							const animation = getAnimation(pathData.type);
// 							return (
// 								<motion.path
// 									key={`path-${index}`}
// 									d={pathData.path}
// 									stroke={`url(#gradient-${index})`}
// 									strokeWidth="1"
// 									strokeOpacity="0.4"
// 									fill="none"
// 									{...animation}
// 								/>
// 							);
// 						})}

// 						<defs>
// 							{allPaths.map((_, index) => (
// 								<linearGradient
// 									key={`gradient-${index}`}
// 									id={`gradient-${index}`}
// 									gradientUnits="userSpaceOnUse"
// 									x1="0%"
// 									y1="0%"
// 									x2="100%"
// 									y2="100%"
// 								>
// 									<stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
// 									<stop offset="20%" stopColor="#18CCFC" />
// 									<stop offset="50%" stopColor="#6344F5" />
// 									<stop offset="80%" stopColor="#AE48FF" />
// 									<stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
// 								</linearGradient>
// 							))}
// 						</defs>
// 					</svg>
// 				</div>
// 			</div>
// 		);
// 	}
// );

// BeamBackground.displayName = "BeamBackground";

// export default BeamBackground;

// BeamBackground.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BeamBackground = React.memo(
	({ children, className, containerClassName, density = 20, speed = 10 }) => {
		// Generate diagonal beams
		const generateDiagonalPaths = (count = Math.floor(density * 0.4)) => {
			return Array.from({ length: count }, (_, i) => ({
				path: `M${-380 + i * 15} -189 Q ${-150 + i * 15} 216, ${
					152 + i * 15
				} 343 T ${684 + i * 15} 875`,
				type: "diagonal",
			}));
		};

		// Generate vertical beams
		const generateVerticalPaths = (count = Math.floor(density * 0.3)) => {
			return Array.from({ length: count }, (_, i) => {
				const x = (696 / count) * i;
				const controlX1 = x + Math.sin(i) * 50;
				const controlX2 = x - Math.sin(i) * 50;
				return {
					path: `M${x} -50 C ${controlX1} 100, ${controlX2} 200, ${x} 350`,
					type: "vertical",
				};
			});
		};

		// Generate right to bottom beams
		const generateRightPaths = (count = Math.floor(density * 0.3)) => {
			return Array.from({ length: count }, (_, i) => {
				const y = (200 / count) * i;
				const controlY = 150 + y * 0.5;
				return {
					path: `M696 ${y} C 600 ${y + 50}, 450 ${controlY}, 250 316`,
					type: "right",
				};
			});
		};

		const allPaths = [
			...generateDiagonalPaths(),
			// ...generateVerticalPaths(),
			...generateRightPaths(),
		];

		return (
			<div
				className={cn(
					"relative w-full h-full overflow-hidden",
					containerClassName
				)}
			>
				{children}
				<div
					className={cn(
						"absolute inset-0 w-full h-full [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center pointer-events-none",
						className
					)}
				>
					<svg
						className="absolute w-full h-full"
						viewBox="0 0 696 316"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
					>
						{allPaths.map((pathData, index) => (
							<g key={`beam-group-${index}`}>
								<motion.path
									d={pathData.path}
									stroke={`url(#gradient-${index})`}
									strokeWidth="8"
									strokeLinecap="round"
									strokeOpacity="0.15"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: [0, 1],
										opacity: [0, 1, 1, 0],
									}}
									transition={{
										duration: speed,
										repeat: Infinity,
										ease: "linear",
										times: [0, 0.2, 0.8, 1],
										delay: index * (speed / allPaths.length),
									}}
								/>
								<motion.path
									d={pathData.path}
									stroke={`url(#gradient-${index})`}
									strokeWidth="2"
									strokeLinecap="round"
									strokeOpacity="0.3"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: [0, 1],
										opacity: [0, 1, 1, 0],
									}}
									transition={{
										duration: speed * 1.2,
										repeat: Infinity,
										ease: "linear",
										times: [0, 0.2, 0.8, 1],
										delay: index * (speed / allPaths.length) + speed * 0.2,
									}}
								/>
							</g>
						))}

						<defs>
							{allPaths.map((_, index) => (
								<linearGradient
									key={`gradient-${index}`}
									id={`gradient-${index}`}
									gradientUnits="userSpaceOnUse"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
									<stop offset="20%" stopColor="#18CCFC" stopOpacity="0.8" />
									<stop offset="50%" stopColor="#6344F5" stopOpacity="1" />
									<stop offset="80%" stopColor="#AE48FF" stopOpacity="0.8" />
									<stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
								</linearGradient>
							))}

							<filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
								<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
								<feColorMatrix
									type="matrix"
									values="
                  0 0 0 0 0
                  0 0 0 0 0.5
                  0 0 0 0 1
                  0 0 0 1 0
                "
								/>
							</filter>
						</defs>
					</svg>
				</div>
			</div>
		);
	}
);

BeamBackground.displayName = "BeamBackground";

export default BeamBackground;
