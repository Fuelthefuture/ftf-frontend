import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
	return (
		<div className="container mx-auto px-4 py-16 text-center">
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="text-xl mb-8">
				Sorry, the page you are looking for doesn't exist.
			</p>
			<Link to="/">
				<Button variant="default">Go to Home</Button>
			</Link>
		</div>
	);
}
