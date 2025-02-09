import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCarousel from "../../../components/TestimonialCarousel";

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	initial: {
		opacity: 0,
		scale: 0.95,
		y: 20,
	},
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	hover: {
		scale: 1.02,
		y: -5,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
};

const checkmarkVariants = {
	initial: { scale: 0 },
	animate: {
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 10,
		},
	},
};

const listItemVariants = {
	initial: { opacity: 0, x: -20 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export function TestimonialSection() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 px-8">
			{/* Hero Section */}
			<motion.section
				className="container mx-auto px-4 py-20 text-center"
				initial="initial"
				animate="animate"
				variants={stagger}
			>
				<motion.div className="relative mb-6" variants={fadeIn}>
					<motion.div
						className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"
						initial={{ width: 0 }}
						animate={{ width: "6rem" }}
						transition={{ duration: 0.8, delay: 0.2 }}
					/>
					<h1 className="text-5xl font-bold mb-6 text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Why Wait? Join FTF Today!
					</h1>
				</motion.div>

				<motion.p
					className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
					variants={fadeIn}
				>
					Join a thriving community of ambitious learners and experienced
					professionals. Whether you&apos;re starting your career journey or
					looking to share your expertise, FTF provides the platform for
					meaningful connections and growth.
				</motion.p>

				<motion.div className="flex gap-4 justify-center" variants={fadeIn}>
					<Button
						variant="default"
						size="lg"
						className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300"
					>
						Start Your Journey
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
					>
						Explore Mentorship
					</Button>
				</motion.div>
			</motion.section>

			{/* Updated Success Stories Section */}
			<TestimonialCarousel />

			{/* Ready to Fuel Your Future */}
			<motion.section
				className="container mx-auto px-4 py-16"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				variants={stagger}
			>
				<motion.div className="relative mb-12 text-center" variants={fadeIn}>
					<motion.div
						className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"
						initial={{ width: 0 }}
						animate={{ width: "6rem" }}
						transition={{ duration: 0.8, delay: 0.2 }}
					/>
					<h2 className="text-4xl font-bold text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Ready to Fuel Your Future?
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						viewport={{ once: true }}
					>
						<Card className="bg-gray-900 border-gray-700 backdrop-blur-sm bg-opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-semibold mb-6 text-gray-200 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
									For Students
								</h3>
								<motion.ul
									className="space-y-4 text-gray-400"
									variants={stagger}
									initial="initial"
									animate="animate"
								>
									{[
										"Access to industry professionals",
										"Personalized career guidance",
										"Enhance promotion prospects",
									].map((item, index) => (
										<motion.li
											key={index}
											className="flex items-center gap-3"
											variants={listItemVariants}
										>
											<motion.span
												variants={checkmarkVariants}
												className="flex-shrink-0"
											>
												<CheckIcon className="h-5 w-5 text-teal-400" />
											</motion.span>
											{item}
										</motion.li>
									))}
								</motion.ul>
								<Button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300">
									Get Started
								</Button>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						variants={cardVariants}
						whileHover="hover"
						viewport={{ once: true }}
					>
						<Card className="bg-gray-900 border-gray-700 backdrop-blur-sm bg-opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-semibold mb-6 text-gray-200 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
									For Mentors
								</h3>
								<motion.ul
									className="space-y-4 text-gray-400"
									variants={stagger}
									initial="initial"
									animate="animate"
								>
									{[
										"Share your expertise",
										"Build your professional network",
										"Make a meaningful impact",
									].map((item, index) => (
										<motion.li
											key={index}
											className="flex items-center gap-3"
											variants={listItemVariants}
										>
											<motion.span
												variants={checkmarkVariants}
												className="flex-shrink-0"
											>
												<CheckIcon className="h-5 w-5 text-teal-400" />
											</motion.span>
											{item}
										</motion.li>
									))}
								</motion.ul>
								<Button
									variant="outline"
									className="w-full mt-8 border-gray-700 text-gray-200 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
								>
									Become a Mentor
								</Button>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</motion.section>
		</div>
	);
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}
