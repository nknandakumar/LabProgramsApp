import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import ProgramListPage from "./pages/ProgramListPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";

import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<Router>
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