// ProgramDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProgram } from "../data/programs.js";
import { Link } from "react-router-dom";
import TabButton from "./../components/TabButton";
import ChatBot from "../components/ChatBot";
import AIButton from "../components/AIButton";

const ProgramDetailPage = () => {
	const { subject = "", id } = useParams();
	const [activeTab, setActiveTab] = useState("code");
	const [copySuccess, setCopySuccess] = useState(false);
	const [isChatOpen, setIsChatOpen] = useState(false);

	const cleanId = id ? id.replace(/\D/g, "") : "";
	const program = getProgram(subject, Number(cleanId));

	useEffect(() => {
		if (window.Prism) {
			window.Prism.highlightAll();
		}
	}, [activeTab]);

	const handleCopyCode = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	if (!program) {
		return (
			<div className="p-4 text-center">
				<h1 className="text-xl font-bold mb-2">Program not found</h1>
				<p className="text-gray-600">
					The program you are looking for does not exist.
				</p>
			</div>
		);
	}

	const { program_name, focused_on, code } = program;

	const formatCode = (code) => {
		// Basic indentation for HTML
		let formattedCode = code
			.replace(/</g, "\n<")
			.replace(/>/g, ">\n")
			.replace(/\n\s*\n/g, "\n")
			.split("\n")
			.map((line) => {
				if (line.trim().startsWith("</")) {
					return "  " + line;
				}
				return line;
			})
			.join("\n");
		return formattedCode;
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case "code":
				return (
					<div className="w-full bg-[#0C0C0C] p-2 sm:p-4 overflow-x-auto relative">
						<div className="flex justify-end mb-2">
							<button
								onClick={handleCopyCode}
								className="flex items-center gap-2 px-3 py-1.5 bg-[#1C1C1C] text-gray-300 hover:text-white rounded text-sm"
							>
								{copySuccess ? (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
											<path
												fillRule="evenodd"
												d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										Copied!
									</>
								) : (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
											<path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H6zm3 0a1 1 0 000 2h3a1 1 0 100-2H9zm3 0a1 1 0 000 2h.01a1 1 0 100-2H12zm0 3a1 1 0 000 2h.01a1 1 0 100-2H12zm-3 0a1 1 0 000 2h3a1 1 0 100-2H9zm-3 0a1 1 0 000 2h.01a1 1 0 100-2H6z" />
										</svg>
										Copy code
									</>
								)}
							</button>
						</div>
						<pre className="line-numbers language-html text-xs sm:text-sm">
							<code className="language-html">{formatCode(code)}</code>
						</pre>
					</div>
				);
			case "preview":
				return (
					<div className="w-full h-full bg-gray-400">
						<iframe
							srcDoc={code}
							title="preview"
							className="w-full h-[calc(100vh-300px)] min-h-[500px] border-0"
							sandbox="allow-scripts"
						/>
					</div>
				);
			case "explain":
				return (
					<div className="w-full bg-[#0C0C0C] p-2 sm:p-4 overflow-x-auto">
						<div className="text-white">
							<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
								Program Explanation
							</h3>
							<p className="mb-2 sm:mb-4 text-sm sm:text-base">
								This program{" "}
								{focused_on
									? `focuses on ${focused_on}`
									: "demonstrates key programming concepts"}
								. It showcases important techniques that are essential for
								understanding {program_name}.
							</p>
							<div className="bg-gray-800 p-2 sm:p-4 rounded-lg">
								<h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
									Key Components:
								</h4>
								<ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
									<li>
										The program structure follows best practices for{" "}
										{subject === "cma"
											? "web development"
											: "Python programming"}
									</li>
									<li>
										{focused_on
											? `It showcases proper implementation of ${focused_on}`
											: "It implements core programming concepts effectively"}
									</li>
									<li>
										The code is organized for readability and maintainability
									</li>
								</ul>
							</div>
							<div className="mt-4 sm:mt-6">
								<h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
									How It Works:
								</h4>
								<p className="text-sm sm:text-base">
									The program executes in a sequential manner, with each section
									building upon previous functionality. This creates a cohesive
									solution that addresses the requirements of {program_name}.
								</p>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="w-full overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8">
			<div className="flex flex-col items-start justify-start pt-4 sm:pt-6 md:pt-10 space-y-4 sm:space-y-6 mb-6 sm:mb-10">
				<Link to={`/programs/${subject}`}>
					<button className="cursor-pointer font-mono bg-amber-50 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
						Back
					</button>
				</Link>
				<div className="space-y-1 sm:space-y-2">
					<p className="font-mono text-gray-400 text-sm sm:text-base">
						Program {id}
					</p>
					<h2 className="text-lg font-sans sm:text-xl md:text-3xl font-bold">
						{program_name}
					</h2>
					<p className="text-gray-500 font-mono text-sm sm:text-base">
						{focused_on}
					</p>
				</div>

				<div className="w-full border border-gray-800 rounded-lg overflow-hidden">
					<div className="sticky top-0 z-10 bg-[#0C0C0C] border-b border-gray-800 p-2 sm:p-4">
						<div className="flex flex-wrap gap-1 sm:gap-2">
							<TabButton
								name="Code"
								conditionValue="code"
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							<TabButton
								name="Live preview"
								conditionValue="preview"
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							<TabButton
								name="Explain Me"
								conditionValue="explain"
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
						</div>
					</div>
					<div className="overflow-auto h-[calc(100vh-300px)] p-2 sm:p-4">
						{renderTabContent()}
					</div>
				</div>
			</div>

			{/* AI Assistant */}
			<AIButton onClick={() => setIsChatOpen(true)} />
			<ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
		</div>
	);
};

export default ProgramDetailPage;
