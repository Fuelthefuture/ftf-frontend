import React from "react";
import { cn } from "@/lib/utils";

const GridBackground = ({
	children,
	className,
	containerClassName,
	isDarkMode = false,
	gridOpacity = 0.2,
	fadePercentage = 20,
	containerHeight = "h-full",
}) => {
	const getGridColorClass = () => {
		if (typeof isDarkMode === "undefined") {
			return "dark:bg-grid-white/[var(--grid-opacity)] bg-grid-black/[var(--grid-opacity)]";
		}
		return isDarkMode
			? "bg-grid-white/[var(--grid-opacity)]"
			: "bg-grid-black/[var(--grid-opacity)]";
	};

	const getBackgroundColorClass = () => {
		if (typeof isDarkMode === "undefined") {
			return "dark:bg-black bg-white";
		}
		return isDarkMode ? "bg-black" : "bg-white";
	};

	const gridStyle = { "--grid-opacity": gridOpacity };

	return (
		<div
			className={cn(
				containerHeight,
				"w-full relative flex items-center justify-center",
				getBackgroundColorClass(),
				getGridColorClass(),
				containerClassName
			)}
			style={gridStyle}
		>
			{/* Radial gradient overlay */}
			<div
				className={cn(
					"absolute pointer-events-none inset-0 flex items-center justify-center",
					getBackgroundColorClass()
				)}
				style={{
					maskImage: `radial-gradient(ellipse at center, transparent ${fadePercentage}%, black)`,
					WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadePercentage}%, black)`,
				}}
			/>

			{/* Content container with relative positioning */}
			<div className={cn("relative z-20", className)}>{children}</div>
		</div>
	);
};

export default GridBackground;
