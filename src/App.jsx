import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/LandingPage/Home";
import { AuthPage } from "./components/Login/login";
import { About } from "./pages/About/About";
import { HowItWorks } from "./pages/HowItWorks/HowItWorks";
import { SuccessStories } from "./pages/SuccessStories/SuccessStories";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="how-it-works" element={<HowItWorks />} />
					<Route path="success-stories" element={<SuccessStories />} />
				</Route>
				<Route path="/login" element={<AuthPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
