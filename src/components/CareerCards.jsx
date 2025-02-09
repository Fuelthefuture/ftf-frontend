import { CardStack } from "./ui/card-stack";

const CAREER_CARDS = [
	{
		id: 1,
		name: "Data Science",
		designation: "Career Path",
		content:
			"Learn Python, Statistics, Machine Learning, and Data Visualization",
	},
	{
		id: 2,
		name: "AI Engineer",
		designation: "Career Path",
		content: "Master Deep Learning, Neural Networks, and AI Applications",
	},
	{
		id: 3,
		name: "MERN Stack",
		designation: "Career Path",
		content: "Build with MongoDB, Express.js, React, and Node.js",
	},
	{
		id: 4,
		name: "Blockchain",
		designation: "Career Path",
		content: "Develop Smart Contracts and Decentralized Applications",
	},
	{
		id: 5,
		name: "Cloud Computing",
		designation: "Career Path",
		content: "Work with AWS, Azure, or Google Cloud Platform",
	},
];

export function CareerCards() {
	return (
		<div className="h-[300px] flex items-center justify-center w-full">
			<CardStack items={CAREER_CARDS} />
		</div>
	);
}
