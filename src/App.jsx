import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import ProgramListPage from "./pages/ProgramListPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import NotFound from "./pages/NotFound";
import { initializeGA, trackPageView } from "./utils/analytics";

// Initialize GA on app load
initializeGA();

// Component to track page views
const PageTracker = () => {
	const location = useLocation();

	useEffect(() => {
		trackPageView(location.pathname);
	}, [location]);

	return null;
};

const App = () => {
	return (
		<Router>
			<PageTracker />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/subjects" element={<Subjects />} />
				<Route path="/programs/:subject" element={<ProgramListPage />} />
				<Route path="/programs/:subject/:id" element={<ProgramDetailPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
