import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AIButton from "../components/AIButton";
import ChatBot from "../components/ChatBot";

const Subjects = () => {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const navigate = useNavigate();
	const subjects = [
		{
			name: "Computer MultiMedia Animation (CMA)",
			description: "HTML CSS JavaScript",
			path: "/programs/cma",
		},
		{
			name: "Python",
			description: "",
			path: "/programs/python",
		},
	];

	return (
		<div className="w-full overflow-x-hidden">
			<div className="px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10 items-start justify-center">
				<Link to="/">
					<button className="bg-white font-mono text-black font-bold text-start py-2 px-4 rounded">
						Back
					</button>
				</Link>
				<h2 className="md:text-center font-sans text-3xl sm:text-4xl font-bold">
					Subjects
				</h2>
				<p className=" font-mono text-base sm:text-lg font-normal max-w-2xl">
					Select subjects below to explore the available lab programs and start
					learning.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center justify-center w-full">
					{subjects.map((subject, index) => (
						<div key={index} className="h-full">
							<div className="relative group rounded-xl p-[0.9px] transition-all duration-500 ease-in-out overflow-hidden h-full">
								{/* Gradient layer */}
								<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border bg-gradient-to-r from-[#616C08] via-[#8A3251] to-blue-500 z-0"></div>

								{/* Card content */}
								<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-6 sm:p-8 md:p-10 w-full text-start h-full flex flex-col justify-between">
									<div>
										<h3 className="font-sans text-[24px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[42px] font-[800]">
											{subject.name}
										</h3>
										<p className="mt-4 sm:mt-6 font-mono text-base sm:text-lg leading-relaxed font-[400] text-[#A3B3B3]">
											{subject.description}
										</p>
									</div>
									<div className="mt-6 sm:mt-8">
										<Button
											onClick={() => navigate(subject.path)}
											name="View Programs"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* AI Assistant */}
			<AIButton onClick={() => setIsChatOpen(true)} />
			<ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
		</div>
	);
};

export default Subjects;
