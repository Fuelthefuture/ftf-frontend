import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ColorfulText from "../../../components/ColorfulText";
import BeamBackground from "../../../components/BeamBackground";

export function HeroSection() {
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

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		tap: {
			scale: 0.95,
		},
	};

	return (
		<BeamBackground density={60} speed={10}>
			<section className="h-screen w-full bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
				{/* Background Circles */}
				{/* <motion.div
					className="absolute -top-40 -right-40 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.1 }}
					transition={{ duration: 1, delay: 0.5 }}
				/> */}
				<div className="container mx-auto px-4 py-20 h-[90vh] flex items-center justify-center">
					{/* Centered Content */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="space-y-8 max-w-3xl text-center"
					>
						<motion.h1
							variants={itemVariants}
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight"
						>
							<ColorfulText text="Fuel Your Future" /> with Expert Guidance and
							Opportunities
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-lg text-gray-400 max-w-2xl mx-auto"
						>
							Connect with industry experts, top professors, and mentors to
							shape your career, amplify your skills, and unlock exclusive
							opportunities—all in one platform.
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-4 justify-center"
						>
							<motion.div
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6">
									Book Career Guidance
								</Button>
							</motion.div>
							<motion.div
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<Button
									variant="outline"
									className="text-lg px-8 py-6 border-gray-700 text-gray-200 hover:bg-gray-800"
								>
									Join as a Mentor
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>
			{/* <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 px-8">
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
			</section> */}
		</BeamBackground>
	);
}
