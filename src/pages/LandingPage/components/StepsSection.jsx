// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import {
// 	UserCircle,
// 	Target,
// 	Users,
// 	Calendar,
// 	BarChartIcon as ChartBar,
// 	Trophy,
// } from "lucide-react";
// import { CareerCards } from "../../../components/CareerCards";
// import { MentorCards } from "../../../components/MentorCards";

// export function StepsSection() {
// 	const ref = useRef(null);
// 	const isInView = useInView(ref, { once: true, margin: "-100px" });

// 	const containerVariants = {
// 		hidden: { opacity: 0 },
// 		visible: {
// 			opacity: 1,
// 			transition: {
// 				staggerChildren: 0.2,
// 				delayChildren: 0.3,
// 			},
// 		},
// 	};

// 	const cardVariants = {
// 		hidden: {
// 			opacity: 0,
// 			y: 20,
// 		},
// 		visible: {
// 			opacity: 1,
// 			y: 0,
// 			transition: {
// 				duration: 0.5,
// 				ease: "easeOut",
// 			},
// 		},
// 	};

// 	return (
// 		<section className="py-20 bg-black text-white">
// 			<div className="container mx-auto px-4">
// 				<motion.h2
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
// 					transition={{ duration: 0.5 }}
// 					className="text-3xl md:text-4xl font-bold text-center mb-12"
// 				>
// 					Your Path to Career Success
// 				</motion.h2>

// 				<motion.div
// 					ref={ref}
// 					variants={containerVariants}
// 					initial="hidden"
// 					animate={isInView ? "visible" : "hidden"}
// 					className="grid grid-cols-1 md:grid-cols-2 gap-6"
// 				>
// 					{steps.map((step, index) => (
// 						<motion.div
// 							key={index}
// 							variants={cardVariants}
// 							whileHover={{ scale: 1.02 }}
// 							className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800
//                 ${step.fullWidth ? "md:col-span-2" : ""}
//                 relative overflow-hidden group`}
// 						>
// 							<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

// 							<div className="relative z-10">
// 								<div className="flex items-center gap-4 mb-4">
// 									<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
// 										<step.icon className="w-6 h-6 text-gray-300" />
// 									</div>
// 									<div className="flex items-center gap-2">
// 										<span className="text-sm text-gray-400">
// 											Step {step.step}
// 										</span>
// 										<div className="w-2 h-2 rounded-full bg-gray-700" />
// 										<h3 className="text-xl font-semibold">{step.title}</h3>
// 									</div>
// 								</div>

// 								<div className="space-y-4">
// 									<div>
// 										<p className="text-gray-300">{step.description}</p>
// 									</div>
// 									<div>
// 										<h4 className="font-semibold mb-1 text-gray-200">
// 											Why It&apos;s Important:
// 										</h4>
// 										<p className="text-gray-400">{step.why}</p>
// 									</div>
// 									<div>
// 										<h4 className="font-semibold mb-1 text-gray-200">
// 											Outcome:
// 										</h4>
// 										<p className="text-gray-400">{step.outcome}</p>
// 									</div>
// 								</div>
// 							</div>

// 							{step.customContent && (
// 								<div className="mt-6">{step.customContent}</div>
// 							)}
// 						</motion.div>
// 					))}
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// }

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
	UserCircle,
	Target,
	Users,
	Calendar,
	BarChartIcon as ChartBar,
	Trophy,
} from "lucide-react";
import { CareerCards } from "../../../components/CareerCards";
import { MentorCards } from "../../../components/MentorCards";

const steps = [
	{
		icon: UserCircle,
		step: 1,
		title: "Create Your Profile",
		description:
			"Set up your detailed profile with academic background and interests.",
		why: "Helps match you with the right mentors and opportunities.",
		outcome: "A comprehensive profile that represents your aspirations.",
	},
	{
		icon: Target,
		step: 2,
		title: "Define Your Goals",
		description:
			"Specify the type of guidance you're seeking—career advice, skill-building, internship prep, or project insights.",
		why: "Clarifies your expectations and ensures the guidance you receive is relevant and impactful.",
		outcome:
			"Clear pathways to connect with the right mentors or professors who align with your goals.",
	},
	{
		icon: Users,
		step: 3,
		title: "Match & Connect",
		description: "Get matched with relevant mentors and experts.",
		why: "Ensures you learn from the right professionals.",
		outcome: "Valuable industry connections and insights.",
		fullWidth: true,
		customContent: (
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-gray-800/50 rounded-xl p-6">
					<h4 className="text-lg font-semibold mb-4">Explore Career Paths</h4>
					<CareerCards />
				</div>
				<div className="bg-gray-800/50 rounded-xl p-6">
					<h4 className="text-lg font-semibold mb-4">Connect with Mentors</h4>
					<MentorCards />
				</div>
			</div>
		),
	},
	{
		icon: Calendar,
		step: 4,
		title: "Book Sessions & Access Resources",
		description: "Schedule 1:1 sessions with your selected mentors.",
		why: "Combines direct mentorship with self-driven learning to accelerate your progress.",
		outcome:
			"Gain clarity, build skills, and develop a competitive edge in your career.",
	},
	{
		icon: ChartBar,
		step: 5,
		title: "Track Your Progress",
		description:
			"Monitor your milestones, review completed sessions, and update your goals as needed.",
		why: "Keeps you focused and accountable ensuring consistent progress toward your career ambitions.",
		outcome: "A clear roadmap to success.",
	},
	{
		icon: Trophy,
		step: 6,
		title: "Achieve Milestones",
		description: "Complete goals and track your progress.",
		why: "Celebrate your growth and achievements.",
		outcome: "Tangible career advancement.",
		fullWidth: true,
	},
];

export function StepsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12,
				duration: 0.6,
			},
		},
	};

	const iconVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 15,
			},
		},
	};

	return (
		<section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white px-8">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-center mb-12"
				>
					<motion.div
						className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6 rounded-full"
						initial={{ width: 0 }}
						animate={{ width: "6rem" }}
						transition={{ duration: 0.8, delay: 0.2 }}
					/>
					<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Your Path to Career Success
					</h2>
				</motion.div>

				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{steps.map((step, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
							className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 
                ${step.fullWidth ? "md:col-span-2" : ""} 
                relative overflow-hidden group`}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="relative z-10">
								<div className="flex items-center gap-6 mb-6">
									<motion.div
										variants={iconVariants}
										className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center shadow-lg"
									>
										<step.icon className="w-7 h-7 text-teal-400" />
									</motion.div>
									<div className="space-y-1">
										<div className="flex items-center gap-3">
											<span className="text-sm text-teal-400 font-medium">
												Step {step.step}
											</span>
											<div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
											<h3 className="text-xl font-semibold text-gray-100">
												{step.title}
											</h3>
										</div>
									</div>
								</div>

								<div className="space-y-6 pl-20">
									<p className="text-gray-300 leading-relaxed">
										{step.description}
									</p>
									<div className="space-y-4">
										<div>
											<h4 className="font-semibold mb-2 text-gray-200">
												Why It's Important:
											</h4>
											<p className="text-gray-400">{step.why}</p>
										</div>
										<div>
											<h4 className="font-semibold mb-2 text-gray-200">
												Outcome:
											</h4>
											<p className="text-gray-400">{step.outcome}</p>
										</div>
									</div>
								</div>
							</div>

							{step.customContent && (
								<motion.div
									className="mt-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
								>
									{step.customContent}
								</motion.div>
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
