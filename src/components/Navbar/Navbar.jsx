// // import * as React from "react";
// // import { Button } from "@/components/ui/button";
// // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // import { Menu } from "lucide-react";

// // import { Link } from "react-router-dom";

// // const routes = [
// // 	{
// // 		href: "/",
// // 		label: "Home",
// // 	},
// // 	{
// // 		href: "/how-it-works",
// // 		label: "How It Works",
// // 	},
// // 	{
// // 		href: "/success-stories",
// // 		label: "Success Stories",
// // 	},
// // 	{
// // 		href: "/about",
// // 		label: "About",
// // 	},
// // ];

// // export function Navbar() {
// // 	const [isOpen, setIsOpen] = React.useState(false);

// // 	return (
// // 		<header className="sticky top-0 z-50 w-full border-b bg-background bg-white">
// // 			<div className="container flex h-16 items-center">
// // 				<div className="md:hidden">
// // 					<Sheet open={isOpen} onOpenChange={setIsOpen}>
// // 						<SheetTrigger asChild>
// // 							<Button variant="ghost" size="icon" className="md:hidden">
// // 								<Menu className="h-5 w-5" />
// // 								<span className="sr-only">Toggle menu</span>
// // 							</Button>
// // 						</SheetTrigger>
// // 						<SheetContent side="left" className="bg-white">
// // 							<nav className="flex flex-col gap-4">
// // 								{routes.map((route) => (
// // 									<a
// // 										key={route.href}
// // 										href={route.href}
// // 										className="text-sm font-medium transition-colors hover:text-primary"
// // 										onClick={() => setIsOpen(false)}
// // 									>
// // 										{route.label}
// // 									</a>
// // 								))}
// // 							</nav>
// // 						</SheetContent>
// // 					</Sheet>
// // 				</div>
// // 				<nav className="hidden md:flex md:gap-6 md:items-center">
// // 					{routes.map((route) => (
// // 						<a
// // 							key={route.href}
// // 							href={route.href}
// // 							className="text-sm font-medium transition-colors hover:text-primary"
// // 						>
// // 							{route.label}
// // 						</a>
// // 					))}
// // 				</nav>
// // 				<div className="ml-auto flex items-center gap-4">
// // 					{/* <Button variant="ghost" className="hidden md:inline-flex">
// // 						Sign In
// // 					</Button> */}
// // 					<Link to="/login">
// // 						<Button className="bg-black text-white hover:bg-black/90">
// // 							Get Started
// // 						</Button>
// // 					</Link>
// // 				</div>
// // 			</div>
// // 		</header>
// // 	);
// // }

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { Link } from "react-router-dom";

// const routes = [
// 	{
// 		href: "/",
// 		label: "Home",
// 	},
// 	{
// 		href: "/how-it-works",
// 		label: "How It Works",
// 	},
// 	{
// 		href: "/success-stories",
// 		label: "Success Stories",
// 	},
// 	{
// 		href: "/about",
// 		label: "About",
// 	},
// ];

// export function Navbar() {
// 	const [isOpen, setIsOpen] = React.useState(false);

// 	return (
// 		<header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900  px-8">
// 			<div className="container flex h-16 items-center">
// 				<div className="md:hidden">
// 					<Sheet open={isOpen} onOpenChange={setIsOpen}>
// 						<SheetTrigger asChild>
// 							<Button
// 								variant="ghost"
// 								size="icon"
// 								className="md:hidden text-gray-200 hover:text-white hover:bg-gray-800"
// 							>
// 								<Menu className="h-5 w-5" />
// 								<span className="sr-only">Toggle menu</span>
// 							</Button>
// 						</SheetTrigger>
// 						<SheetContent side="left" className="bg-gray-900 border-gray-800">
// 							<nav className="flex flex-col gap-4">
// 								{routes.map((route) => (
// 									<a
// 										key={route.href}
// 										href={route.href}
// 										className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400"
// 										onClick={() => setIsOpen(false)}
// 									>
// 										{route.label}
// 									</a>
// 								))}
// 							</nav>
// 						</SheetContent>
// 					</Sheet>
// 				</div>
// 				<nav className="hidden md:flex md:gap-6 md:items-center">
// 					{routes.map((route) => (
// 						<a
// 							key={route.href}
// 							href={route.href}
// 							className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400"
// 						>
// 							{route.label}
// 						</a>
// 					))}
// 				</nav>
// 				<div className="ml-auto flex items-center gap-4">
// 					<Link to="/login">
// 						<Button className="bg-teal-500 text-white hover:bg-teal-600">
// 							Get Started
// 						</Button>
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }

// export default Navbar;

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const routes = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/how-it-works",
		label: "How It Works",
	},
	{
		href: "/success-stories",
		label: "Success Stories",
	},
	{
		href: "/about",
		label: "About",
	},
];

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gradient-to-r from-black via-gray-900 to-black text-white px-8">
			<div className="container flex h-16 items-center">
				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden text-gray-200 hover:text-gray-100 hover:bg-gray-800"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="bg-gray-900 border-gray-700">
							<nav className="flex flex-col gap-4">
								{routes.map((route) => (
									<a
										key={route.href}
										href={route.href}
										className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400"
										onClick={() => setIsOpen(false)}
									>
										{route.label}
									</a>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex md:gap-6 md:items-center">
					{routes.map((route) => (
						<a
							key={route.href}
							href={route.href}
							className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400"
						>
							{route.label}
						</a>
					))}
				</nav>

				{/* Action Buttons */}
				<div className="ml-auto flex items-center gap-4">
					<Link to="/login">
						<Button className="bg-teal-500 hover:bg-teal-600 text-white">
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
