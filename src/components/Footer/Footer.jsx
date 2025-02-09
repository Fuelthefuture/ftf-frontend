// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Twitter, Linkedin, Instagram } from "lucide-react";

// const quickLinks = [
// 	{ href: "/about-us", label: "About Us" },
// 	{ href: "/how-it-works", label: "How It Works" },
// 	{ href: "/success-stories", label: "Success Stories" },
// 	{ href: "/contact", label: "Contact" },
// ];

// const resources = [
// 	{ href: "/blog", label: "Blog" },
// 	{ href: "/career-guide", label: "Career Guide" },
// 	{ href: "/mentorship", label: "Mentorship" },
// 	{ href: "/faqs", label: "FAQs" },
// ];

// const socialLinks = [
// 	{ href: "https://twitter.com", icon: Twitter, label: "Twitter" },
// 	{ href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
// 	{ href: "https://instagram.com", icon: Instagram, label: "Instagram" },
// ];

// export function Footer() {
// 	return (
// 		<footer className="bg-black text-gray-300 py-12">
// 			<div className="container mx-auto px-4">
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// 					{/* Mission Statement */}
// 					<div className="space-y-4">
// 						<p className="text-sm leading-relaxed">
// 							Empowering the next generation of professionals through meaningful
// 							connections and guidance.
// 						</p>
// 					</div>

// 					{/* Quick Links */}
// 					<div>
// 						<h3 className="text-white font-semibold mb-4">Quick Links</h3>
// 						<ul className="space-y-2">
// 							{quickLinks.map((link) => (
// 								<li key={link.href}>
// 									<a
// 										href={link.href}
// 										className="text-sm hover:text-white transition-colors"
// 									>
// 										{link.label}
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 					</div>

// 					{/* Resources */}
// 					<div>
// 						<h3 className="text-white font-semibold mb-4">Resources</h3>
// 						<ul className="space-y-2">
// 							{resources.map((link) => (
// 								<li key={link.href}>
// 									<a
// 										href={link.href}
// 										className="text-sm hover:text-white transition-colors"
// 									>
// 										{link.label}
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 					</div>

// 					{/* Stay Connected */}
// 					<div>
// 						<h3 className="text-white font-semibold mb-4">Stay Connected</h3>
// 						<div className="space-y-4">
// 							<div className="flex gap-2">
// 								<Input
// 									type="email"
// 									placeholder="Enter your email"
// 									className="bg-gray-800 border-gray-700 text-white"
// 								/>
// 								<Button className="bg-yellow-500 text-black hover:bg-yellow-400">
// 									Subscribe
// 								</Button>
// 							</div>
// 							<div className="flex gap-4">
// 								{socialLinks.map((social) => (
// 									<a
// 										key={social.label}
// 										href={social.href}
// 										className="text-gray-400 hover:text-white transition-colors"
// 										aria-label={social.label}
// 									>
// 										<social.icon className="h-5 w-5" />
// 									</a>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Copyright */}
// 				<div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
// 					<p>© 2024 FTF: Fuel the Future. All rights reserved.</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
	{ href: "/about-us", label: "About Us" },
	{ href: "/how-it-works", label: "How It Works" },
	{ href: "/success-stories", label: "Success Stories" },
	{ href: "/contact", label: "Contact" },
];

const resources = [
	{ href: "/blog", label: "Blog" },
	{ href: "/career-guide", label: "Career Guide" },
	{ href: "/mentorship", label: "Mentorship" },
	{ href: "/faqs", label: "FAQs" },
];

const socialLinks = [
	{ href: "https://twitter.com", icon: Twitter, label: "Twitter" },
	{ href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
	{ href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export function Footer() {
	return (
		<footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-12 px-4">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Mission Statement */}
					<div className="space-y-4">
						<p className="text-sm leading-relaxed text-gray-400">
							Empowering the next generation of professionals through meaningful
							connections and guidance.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-gray-100 font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="text-gray-100 font-semibold mb-4">Resources</h3>
						<ul className="space-y-2">
							{resources.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Stay Connected */}
					<div>
						<h3 className="text-gray-100 font-semibold mb-4">Stay Connected</h3>
						<div className="space-y-4">
							<div className="flex gap-2">
								<Input
									type="email"
									placeholder="Enter your email"
									className="bg-gray-800 border-gray-700 text-gray-100"
								/>
								<Button className="bg-teal-500 text-white hover:bg-teal-600">
									Subscribe
								</Button>
							</div>
							<div className="flex gap-4">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										className="text-gray-400 hover:text-teal-400 transition-colors"
										aria-label={social.label}
									>
										<social.icon className="h-5 w-5" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 text-center text-sm text-gray-400">
					<p>© 2024 FTF: Fuel the Future. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
