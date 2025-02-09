// import { motion } from "framer-motion";
// import { Users, GraduationCap, Briefcase, BarChart } from "lucide-react";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// const features = [
// 	{
// 		icon: Users,
// 		title: "Expert Connect",
// 		description:
// 			"Network with industry professionals and get real-world insights into your dream career.",
// 	},
// 	{
// 		icon: GraduationCap,
// 		title: "Academic Guidance",
// 		description:
// 			"Get valuable advice from experienced professors to make informed career decisions.",
// 	},
// 	{
// 		icon: Briefcase,
// 		title: "Career Prep",
// 		description:
// 			"Master interview techniques and build professional skills with expert guidance.",
// 	},
// 	{
// 		icon: BarChart,
// 		title: "Skill Development",
// 		description:
// 			"Access curated resources and tools to enhance your professional growth.",
// 	},
// ];

// export function FeaturesSection() {
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

// 	const iconVariants = {
// 		hover: {
// 			scale: 1.1,
// 			rotate: 5,
// 			transition: {
// 				duration: 0.2,
// 				ease: "easeInOut",
// 			},
// 		},
// 	};

// 	return (
// 		<section className="py-20 bg-gray-50">
// 			<div className="container mx-auto px-4">
// 				<motion.h2
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
// 					transition={{ duration: 0.5 }}
// 					className="text-3xl md:text-4xl font-bold text-center mb-12"
// 				>
// 					Platform Features
// 				</motion.h2>

// 				<motion.div
// 					ref={ref}
// 					variants={containerVariants}
// 					initial="hidden"
// 					animate={isInView ? "visible" : "hidden"}
// 					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
// 				>
// 					{features.map((feature, index) => (
// 						<motion.div
// 							key={index}
// 							variants={cardVariants}
// 							whileHover={{ y: -5 }}
// 							className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
// 						>
// 							<motion.div
// 								variants={iconVariants}
// 								whileHover="hover"
// 								className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4"
// 							>
// 								<feature.icon className="w-6 h-6 text-gray-600" />
// 							</motion.div>
// 							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// 							<p className="text-gray-600 text-sm leading-relaxed">
// 								{feature.description}
// 							</p>
// 						</motion.div>
// 					))}
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// }

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, BarChart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
	{
		icon: Users,
		title: "Expert Connect",
		description:
			"Network with industry professionals and get real-world insights into your dream career.",
	},
	{
		icon: GraduationCap,
		title: "Academic Guidance",
		description:
			"Get valuable advice from experienced professors to make informed career decisions.",
	},
	{
		icon: Briefcase,
		title: "Career Prep",
		description:
			"Master interview techniques and build professional skills with expert guidance.",
	},
	{
		icon: BarChart,
		title: "Skill Development",
		description:
			"Access curated resources and tools to enhance your professional growth.",
	},
];

export function FeaturesSection() {
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
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const iconVariants = {
		hover: {
			scale: 1.1,
			rotate: 5,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	};

	return (
		<section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 px-8">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100"
				>
					Platform Features
				</motion.h2>

				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -5 }}
							className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
						>
							<motion.div
								variants={iconVariants}
								whileHover="hover"
								className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4"
							>
								<feature.icon className="w-6 h-6 text-teal-400" />
							</motion.div>
							<h3 className="text-xl font-semibold mb-2 text-gray-200">
								{feature.title}
							</h3>
							<p className="text-gray-400 text-sm leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
