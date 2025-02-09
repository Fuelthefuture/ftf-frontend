// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Facebook, Linkedin, Mail, Lock, User } from "lucide-react";

// export function AuthPage() {
// 	const [isSignIn, setIsSignIn] = useState(true);

// const slideVariants = {
// 	enter: (direction) => ({
// 		x: direction > 0 ? 1000 : -1000,
// 		opacity: 0,
// 	}),
// 	center: {
// 		zIndex: 1,
// 		x: 0,
// 		opacity: 1,
// 	},
// 	exit: (direction) => ({
// 		zIndex: 0,
// 		x: direction < 0 ? 1000 : -1000,
// 		opacity: 0,
// 	}),
// };

// 	const backgroundVariants = {
// 		initial: {
// 			background: "linear-gradient(135deg, #4fd1c5 0%, #2c7a7b 100%)",
// 		},
// 		animate: {
// 			background: "linear-gradient(135deg, #2c7a7b 0%, #4fd1c5 100%)",
// 		},
// 	};

// 	return (
// 		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
// 			<div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden relative">
// 				<div className="absolute top-0 right-0 w-40 h-40 bg-red-400 rounded-full filter blur-3xl opacity-20 -z-1" />
// 				<div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400 rounded-full filter blur-3xl opacity-20 -z-1" />

// 				<div className="flex flex-col md:flex-row">
// 					<AnimatePresence mode="wait" initial={false}>
// 						<motion.div
// 							key={isSignIn ? "signin" : "signup"}
// 							className="w-full md:w-1/2 p-8"
// 							variants={slideVariants}
// 							initial="enter"
// 							animate="center"
// 							exit="exit"
// 							transition={{
// 								x: { type: "spring", stiffness: 300, damping: 30 },
// 								opacity: { duration: 0.2 },
// 							}}
// 						>
// 							<div className="w-full max-w-sm mx-auto space-y-8">
// 								<div className="flex items-center gap-2">
// 									<div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
// 										<Mail className="w-4 h-4 text-white" />
// 									</div>
// 									<span className="font-semibold text-xl text-gray-700">
// 										Diprella
// 									</span>
// 								</div>

// 								<div>
// 									<h2 className="text-3xl font-bold text-gray-800 mb-2">
// 										{isSignIn ? "Sign in to Diprella" : "Create Account"}
// 									</h2>
// 									<p className="text-gray-500">
// 										{isSignIn
// 											? "or use your email account:"
// 											: "or use your email for registration:"}
// 									</p>
// 								</div>

// 								<div className="flex gap-4 justify-center">
// 									<Button
// 										variant="outline"
// 										size="icon"
// 										className="rounded-full w-10 h-10"
// 									>
// 										<Facebook className="w-4 h-4" />
// 									</Button>
// 									<Button
// 										variant="outline"
// 										size="icon"
// 										className="rounded-full w-10 h-10"
// 									>
// 										<Linkedin className="w-4 h-4" />
// 									</Button>
// 								</div>

// 								<form className="space-y-4">
// 									{!isSignIn && (
// 										<div className="space-y-2">
// 											<div className="relative">
// 												<User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
// 												<Input placeholder="Name" className="pl-10" />
// 											</div>
// 										</div>
// 									)}
// 									<div className="space-y-2">
// 										<div className="relative">
// 											<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
// 											<Input
// 												type="email"
// 												placeholder="Email"
// 												className="pl-10"
// 											/>
// 										</div>
// 									</div>
// 									<div className="space-y-2">
// 										<div className="relative">
// 											<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
// 											<Input
// 												type="password"
// 												placeholder="Password"
// 												className="pl-10"
// 											/>
// 										</div>
// 									</div>
// 									{isSignIn && (
// 										<div className="text-right">
// 											<a
// 												href="#"
// 												className="text-sm text-teal-600 hover:underline"
// 											>
// 												Forgot your password?
// 											</a>
// 										</div>
// 									)}
// 									<Button
// 										className="w-full bg-teal-500 hover:bg-teal-600 text-white"
// 										size="lg"
// 									>
// 										{isSignIn ? "Sign In" : "Sign Up"}
// 									</Button>
// 								</form>
// 							</div>
// 						</motion.div>
// 					</AnimatePresence>

// 					<motion.div
// 						className="w-full md:w-1/2 bg-teal-500 p-8 md:p-16 flex items-center justify-center text-white"
// 						variants={backgroundVariants}
// 						initial="initial"
// 						animate="animate"
// 						transition={{
// 							duration: 0.5,
// 							ease: "easeInOut",
// 						}}
// 					>
// 						<div className="max-w-md text-center">
// 							<motion.div
// 								key={isSignIn ? "welcome" : "hello"}
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{ opacity: 1, y: 0 }}
// 								exit={{ opacity: 0, y: -20 }}
// 								transition={{ duration: 0.5 }}
// 							>
// 								<h2 className="text-4xl font-bold mb-6">
// 									{isSignIn ? "Hello, Friend!" : "Welcome Back!"}
// 								</h2>
// 								<p className="mb-8">
// 									{isSignIn
// 										? "Enter your personal details and start journey with us"
// 										: "To keep connected with us please login with your personal info"}
// 								</p>
// 								<Button
// 									variant="outline"
// 									className="border-2 border-white text-white hover:bg-white hover:text-teal-500 transition-colors"
// 									onClick={() => setIsSignIn(!isSignIn)}
// 								>
// 									{isSignIn ? "Sign Up" : "Sign In"}
// 								</Button>
// 							</motion.div>
// 						</div>
// 					</motion.div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function AuthPage() {
	const [isSignIn, setIsSignIn] = useState(true);
	const [isMentor, setIsMentor] = useState(false);

	const slideVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	const backgroundVariants = {
		initial: {
			background: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
		},
		animate: {
			background: "linear-gradient(135deg, #115e59 0%, #0d9488 100%)",
		},
	};

	return (
		<div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
			<div className="w-full max-w-6xl bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative">
				<div className="absolute top-0 right-0 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-10 -z-1" />
				<div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-10 -z-1" />

				<div className="flex flex-col md:flex-row">
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={isSignIn ? "signin" : "signup"}
							className="w-full md:w-1/2 p-8"
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 },
							}}
						>
							<div className="w-full max-w-sm mx-auto space-y-8">
								<div className="flex items-center gap-2">
									<div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
										<Mail className="w-4 h-4 text-white" />
									</div>
									<span className="font-semibold text-xl text-gray-200">
										Fuel The Future
									</span>
								</div>

								<div>
									<h2 className="text-3xl font-bold text-gray-100 mb-2">
										{isSignIn ? "Sign in to FTF" : "Create Account"}
									</h2>
									<p className="text-gray-400">
										{isSignIn
											? "Sign in using your email account"
											: "Create your account using email"}
									</p>
								</div>

								<form className="space-y-4">
									{!isSignIn && (
										<div className="flex gap-4">
											<div className="relative flex-1">
												<User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
												<Input
													placeholder="First Name"
													className="pl-10 bg-gray-800 border-gray-700 text-gray-100"
												/>
											</div>
											<div className="relative flex-1">
												<Input
													placeholder="Last Name"
													className="bg-gray-800 border-gray-700 text-gray-100"
												/>
											</div>
										</div>
									)}
									<div className="space-y-2">
										<div className="relative">
											<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
											<Input
												type="email"
												placeholder="Email"
												className="pl-10 bg-gray-800 border-gray-700 text-gray-100"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<div className="relative">
											<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
											<Input
												type="password"
												placeholder="Password"
												className="pl-10 bg-gray-800 border-gray-700 text-gray-100"
											/>
										</div>
									</div>

									{/* Switch for Mentor/Student */}
									{!isSignIn && (
										<div className="flex items-center space-x-2">
											<Switch
												id="role-mode"
												checked={isMentor}
												onCheckedChange={setIsMentor}
												// className="bg-gray-600 data-[state=checked]:bg-teal-400"
												className={`bg-gray-100 data-[state=checked]:bg-teal-100 ${
													isMentor
														? "data-[state=checked]:bg-teal-500"
														: "data-[state=unchecked]:bg-gray-100"
												}`}
												
											>
												<Switch.Thumb className="bg-white" />
											</Switch>
											<Label
												htmlFor="role-mode"
												className={`text-sm ${
													isMentor ? "text-teal-400" : "text-gray-300"
												}`}
											>
												{isMentor ? "Mentor" : "Student"}
											</Label>
										</div>
									)}

									{isSignIn && (
										<div className="text-right">
											<a
												href="#"
												className="text-sm text-teal-400 hover:underline"
											>
												Forgot your password?
											</a>
										</div>
									)}
									<Button
										className="w-full bg-teal-500 hover:bg-teal-600 text-white"
										size="lg"
									>
										{isSignIn ? "Sign In" : "Sign Up"}
									</Button>
								</form>
							</div>
						</motion.div>
					</AnimatePresence>

					<motion.div
						className="w-full md:w-1/2 bg-teal-600 p-8 md:p-16 flex items-center justify-center text-white"
						variants={backgroundVariants}
						initial="initial"
						animate="animate"
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<div className="max-w-md text-center">
							<motion.div
								key={isSignIn ? "welcome" : "hello"}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
							>
								<h2 className="text-4xl font-bold mb-6">
									{isSignIn ? "Hello, Friend!" : "Welcome Back!"}
								</h2>
								<p className="mb-8">
									{isSignIn
										? "Enter your personal details and start journey with us"
										: "To keep connected with us please login with your personal info"}
								</p>
								<Button
									variant="outline"
									className="border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-colors"
									onClick={() => setIsSignIn(!isSignIn)}
								>
									{isSignIn ? "Sign Up" : "Sign In"}
								</Button>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
