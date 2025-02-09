import { cn } from "@/lib/utils";
import { createContext, useContext, useRef, useState } from "react";

const MouseEnterContext = createContext({});

export const CardContainer = ({ children, className, containerClassName }) => {
	const containerRef = useRef(null);
	const [isMouseEntered, setIsMouseEntered] = useState(false);

	const handleMouseMove = (e) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = (e.clientX - left) / width;
		const y = (e.clientY - top) / height;
		const multiplier = 20;
		const xRotation = (y - 0.5) * multiplier;
		const yRotation = (x - 0.5) * -multiplier;

		containerRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
	};

	const handleMouseEnter = () => {
		setIsMouseEntered(true);
		if (!containerRef.current) return;
		containerRef.current.style.transition = "transform 0.2s";
	};

	const handleMouseLeave = () => {
		setIsMouseEntered(false);
		if (!containerRef.current) return;
		containerRef.current.style.transform =
			"perspective(1000px) rotateX(0deg) rotateY(0deg)";
		containerRef.current.style.transition = "transform 0.5s";
	};

	return (
		<MouseEnterContext.Provider value={{ isMouseEntered }}>
			<div
				className={cn("flex items-center justify-center", containerClassName)}
				style={{
					perspective: "1000px",
				}}
			>
				<div
					ref={containerRef}
					onMouseMove={handleMouseMove}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={cn(
						"relative transition-transform ease-out duration-500",
						className
					)}
				>
					{children}
				</div>
			</div>
		</MouseEnterContext.Provider>
	);
};

export const CardBody = ({ children, className }) => {
	return <div className={cn("relative", className)}>{children}</div>;
};

export const CardItem = ({
	as: Component = "div",
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	...rest
}) => {
	const { isMouseEntered } = useContext(MouseEnterContext);

	return (
		<Component
			className={cn("transition-transform ease-out duration-500", className)}
			style={{
				transform: isMouseEntered
					? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`
					: "translate3d(0, 0, 0)",
			}}
			{...rest}
		>
			{children}
		</Component>
	);
};
