import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPrograms } from "../data/programs";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import AIButton from "../components/AIButton";
import ChatBot from "../components/ChatBot";

const ProgramListPage = () => {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const { subject = "" } = useParams();
	const programs = getAllPrograms(subject);
	console.log(programs);
	const subjectTitle = subject === "cma" ? "CMA Programs" : "Python Programs";

	const subjectDescription =
		subject === "cma"
			? "HTML, CSS, and JavaScript examples with interactive demos"
			: "Python programming examples from basic to advanced concepts";
	return (
		<div className="px-4 sm:px-8 md:px-16 lg:px-[112px] min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-10 items-start justify-start py-4 sm:py-6 md:py-8">
			<Link to={`/subjects`}>
				<button className="mt-4 sm:mt-6 md:mt-8 cursor-pointer font-mono bg-amber-50 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
					Back
				</button>
			</Link>
			<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 md:gap-8 justify-between w-full">
				<div className="flex flex-col justify-start gap-2 sm:gap-4 md:gap-6 items-start">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4">
						{subjectTitle}
					</h2>
					<p className="text-sm sm:text-base md:text-lg">
						{subjectDescription}
					</p>
				</div>
		
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
				{programs.map((program) => (
					<Card key={program.id} program={program} subject={subject} />
				))}
			</div>
				{/* AI Assistant */}
				<AIButton onClick={() => setIsChatOpen(true)} />
				<ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
		</div>
	);
};

export default ProgramListPage;
