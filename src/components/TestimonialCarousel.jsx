// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { useMediaQuery } from "@/hooks/use-media-query";

// const testimonials = [
// 	{
// 		name: "Sarah Chen",
// 		title: "Software Engineer at Google",
// 		quote:
// 			"FTF helped me connect with my tech mentors. Their support was invaluable in landing my dream job.",
// 	},
// 	{
// 		name: "Marcus Johnson",
// 		title: "Product Manager at Amazon",
// 		quote:
// 			"The mentorship and guidance I received helped me plot my career and grow professionally.",
// 	},
// 	{
// 		name: "Emma Wilson",
// 		title: "Data Scientist at Microsoft",
// 		quote:
// 			"FTF's platform provided me with connections that helped shape my career. The community support was incredible.",
// 	},
// 	{
// 		name: "Alex Thompson",
// 		title: "UX Designer at Apple",
// 		quote:
// 			"The mentorship program helped me transition into UX design seamlessly. Forever grateful for the guidance.",
// 	},
// 	{
// 		name: "David Kim",
// 		title: "Frontend Developer at Meta",
// 		quote:
// 			"Found my passion for web development through FTF's community. The journey has been amazing.",
// 	},
// 	{
// 		name: "Lisa Rodriguez",
// 		title: "Cloud Architect at AWS",
// 		quote:
// 			"The technical mentorship I received was instrumental in my career growth. Highly recommend!",
// 	},
// 	{
// 		name: "James Wilson",
// 		title: "Data Engineer at Netflix",
// 		quote:
// 			"FTF's platform connected me with the right mentors who helped shape my career path.",
// 	},
// 	{
// 		name: "Michelle Chang",
// 		title: "Product Designer at Spotify",
// 		quote:
// 			"The design community here is incredible. I learned so much from experienced mentors.",
// 	},
// 	{
// 		name: "Ryan Martinez",
// 		title: "Backend Developer at Twitter",
// 		quote:
// 			"The technical insights and career guidance I received were invaluable to my growth.",
// 	},
// 	{
// 		name: "Sophie Anderson",
// 		title: "ML Engineer at OpenAI",
// 		quote:
// 			"Found my way into AI through FTF's mentorship. The community support is unmatched.",
// 	},
// ];

// export default function TestimonialCarousel() {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const isDesktop = useMediaQuery("(min-width: 1024px)");

// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
// 		}, 5000); // Change cards every 5 seconds

// 		return () => clearInterval(timer);
// 	}, []);

// 	const visibleTestimonials = isDesktop
// 		? [
// 				testimonials[currentIndex % testimonials.length],
// 				testimonials[(currentIndex + 1) % testimonials.length],
// 				testimonials[(currentIndex + 2) % testimonials.length],
// 		  ]
// 		: [testimonials[currentIndex]];

// 	return (
// 		<div className="relative overflow-hidden py-12">
// 			<div className="container mx-auto px-4">
// 				<h2 className="text-3xl font-bold text-center mb-12">
// 					Success Stories
// 				</h2>
// 				<div className="relative flex justify-center items-center h-[300px]">
// 					<AnimatePresence initial={false}>
// 						{visibleTestimonials.map((testimonial, index) => (
// 							<motion.div
// 								key={`${currentIndex}-${index}`}
// 								className="absolute w-full max-w-sm lg:max-w-[30%] mx-2"
// 								initial={
// 									isDesktop
// 										? { opacity: 0, scale: 0.8 }
// 										: { opacity: 0, x: 300 }
// 								}
// 								animate={
// 									isDesktop
// 										? { opacity: 1, scale: 1, x: `${(index - 1) * 110}%` }
// 										: { opacity: 1, x: 0 }
// 								}
// 								exit={
// 									isDesktop
// 										? index === 0
// 											? {
// 													opacity: 0,
// 													scale: 0.8,
// 													transition: { duration: 0.3 },
// 											  }
// 											: { x: "-110%", transition: { duration: 0.3 } }
// 										: { opacity: 0, x: -300 }
// 								}
// 								transition={{
// 									type: "spring",
// 									stiffness: 300,
// 									damping: 30,
// 								}}
// 							>
// 								<Card className="h-[300px] shadow-lg">
// 									<CardContent className="p-6 flex flex-col justify-between h-full">
// 										<div>
// 											<div className="flex items-center gap-4 mb-4">
// 												<img
// 													src={`https://v0.dev/placeholder.svg?height=40&width=40`}
// 													alt=""
// 													className="rounded-full w-10 h-10"
// 												/>
// 												<div>
// 													<h3 className="font-semibold">{testimonial.name}</h3>
// 													<p className="text-sm text-gray-500">
// 														{testimonial.title}
// 													</p>
// 												</div>
// 											</div>
// 											<p className="text-gray-600">{testimonial.quote}</p>
// 										</div>
// 									</CardContent>
// 								</Card>
// 							</motion.div>
// 						))}
// 					</AnimatePresence>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";

const testimonials = [
	{
		name: "Sarah Chen",
		title: "Software Engineer at Google",
		quote:
			"FTF helped me connect with my tech mentors. Their support was invaluable in landing my dream job.",
	},
	{
		name: "Marcus Johnson",
		title: "Product Manager at Amazon",
		quote:
			"The mentorship and guidance I received helped me plot my career and grow professionally.",
	},
	{
		name: "Emma Wilson",
		title: "Data Scientist at Microsoft",
		quote:
			"FTF's platform provided me with connections that helped shape my career. The community support was incredible.",
	},
	{
		name: "Alex Thompson",
		title: "UX Designer at Apple",
		quote:
			"The mentorship program helped me transition into UX design seamlessly. Forever grateful for the guidance.",
	},
	{
		name: "David Kim",
		title: "Frontend Developer at Meta",
		quote:
			"Found my passion for web development through FTF's community. The journey has been amazing.",
	},
	{
		name: "Lisa Rodriguez",
		title: "Cloud Architect at AWS",
		quote:
			"The technical mentorship I received was instrumental in my career growth. Highly recommend!",
	},
	{
		name: "James Wilson",
		title: "Data Engineer at Netflix",
		quote:
			"FTF's platform connected me with the right mentors who helped shape my career path.",
	},
	{
		name: "Michelle Chang",
		title: "Product Designer at Spotify",
		quote:
			"The design community here is incredible. I learned so much from experienced mentors.",
	},
	{
		name: "Ryan Martinez",
		title: "Backend Developer at Twitter",
		quote:
			"The technical insights and career guidance I received were invaluable to my growth.",
	},
	{
		name: "Sophie Anderson",
		title: "ML Engineer at OpenAI",
		quote:
			"Found my way into AI through FTF's mentorship. The community support is unmatched.",
	},
];

const cardVariants = {
	enter: (direction) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.5,
		rotateY: direction > 0 ? 45 : -45,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		rotateY: 0,
		transition: {
			duration: 0.8,
			type: "spring",
			stiffness: 300,
			damping: 30,
		},
	},
	exit: (direction) => ({
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.5,
		rotateY: direction < 0 ? 45 : -45,
		transition: {
			duration: 0.5,
		},
	}),
};

export default function TestimonialCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const visibleTestimonials = isDesktop
		? [
				testimonials[currentIndex % testimonials.length],
				testimonials[(currentIndex + 1) % testimonials.length],
				testimonials[(currentIndex + 2) % testimonials.length],
		  ]
		: [testimonials[currentIndex]];

	return (
		<div className="relative overflow-hidden py-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
			<div className="container mx-auto px-4">
				<motion.div
					className="relative mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"
						initial={{ width: 0 }}
						animate={{ width: "6rem" }}
						transition={{ duration: 0.8, delay: 0.2 }}
					/>
					<h2 className="text-4xl font-bold text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Success Stories
					</h2>
				</motion.div>

				<div className="relative flex justify-center items-center h-[400px]">
					<AnimatePresence initial={false} custom={direction}>
						{visibleTestimonials.map((testimonial, index) => (
							<motion.div
								key={`${currentIndex}-${index}`}
								className="absolute w-full max-w-sm lg:max-w-[30%] mx-2"
								custom={direction}
								variants={cardVariants}
								initial="enter"
								animate="center"
								exit="exit"
								whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							>
								<Card className="h-[350px] bg-gray-900 border-gray-700 backdrop-blur-sm bg-opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300">
									<CardContent className="p-8 flex flex-col justify-between h-full">
										<div className="space-y-6">
											<div className="flex items-center gap-4">
												<div className="relative">
													<div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full blur-sm" />
													<img
														src={`https://v0.dev/placeholder.svg?height=40&width=40`}
														alt=""
														className="relative rounded-full w-12 h-12 border-2 border-gray-700"
													/>
												</div>
												<div>
													<h3 className="font-semibold text-gray-100">
														{testimonial.name}
													</h3>
													<p className="text-sm text-teal-400">
														{testimonial.title}
													</p>
												</div>
											</div>
											<div className="relative">
												<div className="absolute -left-2 -top-2 text-4xl text-teal-500 opacity-30">
													"
												</div>
												<p className="text-gray-300 leading-relaxed relative z-10 pl-4">
													{testimonial.quote}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				<div className="flex justify-center gap-4 mt-8">
					<button
						onClick={handlePrev}
						className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
					>
						←
					</button>
					<button
						onClick={handleNext}
						className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
					>
						→
					</button>
				</div>
			</div>
		</div>
	);
}
