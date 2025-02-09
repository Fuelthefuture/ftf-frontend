import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export function Layout() {
	const pageVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<AnimatePresence mode="wait">
				<motion.main
					className="flex-1"
					initial="initial"
					animate="animate"
					exit="exit"
					variants={pageVariants}
				>
					<Outlet />
				</motion.main>
			</AnimatePresence>
			<Footer />
		</div>
	);
}
