import { CardStack } from "./ui/card-stack";

const MENTOR_CARDS = [
	{
		id: 1,
		name: "Sarah Johnson",
		designation: "Senior Data Scientist",
		content: "10+ years experience in AI and Machine Learning",
	},
	{
		id: 2,
		name: "Michael Chen",
		designation: "Tech Lead",
		content: "Full-stack development expert with focus on MERN stack",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		designation: "Blockchain Developer",
		content: "Specialized in DeFi and Smart Contract development",
	},
	{
		id: 4,
		name: "David Kim",
		designation: "Cloud Architect",
		content: "AWS certified professional with enterprise experience",
	},
	{
		id: 5,
		name: "Lisa Patel",
		designation: "Product Manager",
		content: "Helping engineers transition to product roles",
	},
];

export function MentorCards() {
	return (
		<div className="h-[300px] flex items-center justify-center w-full">
			<CardStack items={MENTOR_CARDS} />
		</div>
	);
}
