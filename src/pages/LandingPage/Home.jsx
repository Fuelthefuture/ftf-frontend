// import React from "react";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/Features";
import { StepsSection } from "./components/StepsSection";
import { TestimonialSection } from "./components/TestimonialSection";
import GridBackground from "../../components/GridBackground";

export const Home = () => {
	return (
		<>
			<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 w-full">
				<HeroSection />
				<FeaturesSection />
				<StepsSection />
				<TestimonialSection />
			</div>
		</>
	);
};
