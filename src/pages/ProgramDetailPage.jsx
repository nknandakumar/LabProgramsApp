// ProgramDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProgram } from "../data/programs.js";
import { Link } from "react-router-dom";
import TabButton from "./../components/TabButton";
import ChatBot from "../components/ChatBot";
import AIButton from "../components/AIButton";
import NameCollectionModal from "../components/NameCollectionModal";
import {
	getUserName,
	setUserName,
	getPersonalizedMessage,
} from "../utils/userUtils";

const ProgramDetailPage = () => {
	const { subject = "", id } = useParams();
	const [activeTab, setActiveTab] = useState("code");
	const [activeCodeTab, setActiveCodeTab] = useState("html");
	const [isEditing, setIsEditing] = useState(false);
	const [editedCode, setEditedCode] = useState({
		html: "",
		css: "",
		js: "",
	});
	const [copySuccess, setCopySuccess] = useState(false);
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [programForChat, setProgramForChat] = useState(null);
	const [showNameModal, setShowNameModal] = useState(false);

	const cleanId = id ? id.replace(/\D/g, "") : "";
	const program = getProgram(subject, Number(cleanId));

	useEffect(() => {
		if (!getUserName()) {
			setShowNameModal(true);
		}
	}, []);

	useEffect(() => {
		if (window.Prism) {
			// Add a small delay to ensure the DOM is updated before highlighting
			setTimeout(() => {
				window.Prism.highlightAll();
			}, 100);
		}
	}, [activeTab, activeCodeTab, editedCode]);

	useEffect(() => {
		if (program) {
			// Extract HTML, CSS, and JS from the program code
			const htmlContent = program.code || "";
			const cssContent = program.external_css || "";
			const jsContent = program.external_js || "";

			// Set the edited code state
			setEditedCode({
				html: htmlContent,
				css: cssContent,
				js: jsContent,
			});
		}
	}, [program]);

	const handleNameSubmit = (name) => {
		setUserName(name);
		setShowNameModal(false);
	};

	const handleCopyCode = async () => {
		try {
			const codeToCopy = editedCode[activeCodeTab];
			await navigator.clipboard.writeText(codeToCopy);
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	const handleTabChange = (tab) => {
		if (tab === "explain" && program) {
			setProgramForChat(program);
			setIsChatOpen(true);
		} else {
			setActiveTab(tab);
		}
	};

	const handleCodeTabChange = (tab) => {
		setActiveCodeTab(tab);
	};

	const toggleEditMode = () => {
		setIsEditing(!isEditing);
	};

	const handleCodeChange = (e) => {
		setEditedCode({
			...editedCode,
			[activeCodeTab]: e.target.value,
		});
	};

	if (!program) {
		return (
			<div className="p-4 text-center">
				<h1 className="text-xl font-bold mb-2">Program not found</h1>
				<p className="text-gray-600">
					{getPersonalizedMessage(
						"Sorry [Name], this program doesn't exist.",
						"This program doesn't exist."
					)}
				</p>
			</div>
		);
	}

	const { program_name, focused_on } = program;

	// Create a combined HTML document with CSS and JS for preview
	const combinedHtml = `
		<!DOCTYPE html>
		<html>
		<head>
			<style>${editedCode.css || ""}</style>
		</head>
		<body>
			${editedCode.html || ""}
			<script>${editedCode.js || ""}</script>
		</body>
		</html>
	`;

	const renderCodeTabContent = () => {
		const codeContent = editedCode[activeCodeTab];
		const language =
			activeCodeTab === "html"
				? "html"
				: activeCodeTab === "css"
					? "css"
					: "javascript";

		if (isEditing) {
			return (
				<textarea
					value={codeContent}
					onChange={handleCodeChange}
					className="w-full h-[calc(100vh-400px)] bg-[#1C1C1C] text-white p-4 font-mono text-sm resize-none focus:outline-none"
					spellCheck="false"
				/>
			);
		} else {
			return (
				<div className="overflow-auto">
					<pre className="line-numbers language-html text-xs sm:text-sm">
						<code className={`language-${language}`}>{codeContent}</code>
					</pre>
				</div>
			);
		}
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case "code":
				return (
					<div className="w-full bg-[#0C0C0C] p-2 sm:p-4 overflow-x-auto relative">
						<div className="flex justify-between items-center mb-4">
							<div className="flex space-x-2">
								<button
									onClick={() => handleCodeTabChange("html")}
									className={`px-3 py-1.5 rounded text-sm ${
										activeCodeTab === "html"
											? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white"
											: "bg-[#1C1C1C] text-gray-300 hover:text-white"
									}`}
								>
									HTML
								</button>
								<button
									onClick={() => handleCodeTabChange("css")}
									className={`px-3 py-1.5 rounded text-sm ${
										activeCodeTab === "css"
											? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white"
											: "bg-[#1C1C1C] text-gray-300 hover:text-white"
									}`}
								>
									CSS
								</button>
								<button
									onClick={() => handleCodeTabChange("js")}
									className={`px-3 py-1.5 rounded text-sm ${
										activeCodeTab === "js"
											? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white"
											: "bg-[#1C1C1C] text-gray-300 hover:text-white"
									}`}
								>
									JS
								</button>
							</div>
							<div className="flex items-center gap-2">
								{isEditing ? (
									<button
										onClick={toggleEditMode}
										className="p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
										title="Cancel editing"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								) : (
									<button
										onClick={toggleEditMode}
										className="p-1.5 bg-[#1C1C1C] text-gray-300 hover:text-white rounded-full hover:bg-[#2A2A2A] transition-colors"
										title="Edit code"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
										</svg>
									</button>
								)}
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
											{getPersonalizedMessage("Copied, [Name]!", "Copied!")}
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
						</div>
						{renderCodeTabContent()}
					</div>
				);
			case "preview":
				return (
					<div className="w-full h-full bg-gray-400">
						<iframe
							srcDoc={combinedHtml}
							title="preview"
							className="w-full h-[calc(100vh-300px)] min-h-[500px] border-0"
							sandbox="allow-scripts"
						/>
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
				<div className="space-y-4 sm:space-y-2">
					<p className="font-mono text-gray-400 text-sm sm:text-base">
						Program {id}
					</p>
					<h4 className="text-sm  font-sans sm:text-xl md:text-3xl font-bold">
						{program_name}
					</h4>
					
	               <div className="flex md:my-6 gap-2 flex-wrap">
				   {focused_on.map((name,index)=>(
							<span key={index} className="text-black bg-gray-300 block px-2 py-1 rounded-md font-mono text-[10px] sm:text-base">
								{name}
							</span>
						)) }
				   </div>
				
				</div>

				<div className="w-full border border-gray-800 rounded-lg overflow-hidden">
					<div className="sticky top-0 z-10 bg-[#0C0C0C] border-b border-gray-800 p-2 sm:p-4">
						<div className="flex flex-wrap gap-1 sm:gap-2">
							<TabButton
								name="Code"
								conditionValue="code"
								activeTab={activeTab}
								setActiveTab={handleTabChange}
							/>
							<TabButton
								name="Live preview"
								conditionValue="preview"
								activeTab={activeTab}
								setActiveTab={handleTabChange}
							/>
							<TabButton
								name="Explain Me"
								conditionValue="explain"
								activeTab={activeTab}
								setActiveTab={handleTabChange}
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
			<ChatBot
				isOpen={isChatOpen}
				onClose={() => {
					setIsChatOpen(false);
					setActiveTab("code"); // Return to code tab when chatbot is closed
				}}
				initialProgram={programForChat}
			/>

			{/* Name Collection Modal */}
			<NameCollectionModal
				isOpen={showNameModal}
				onClose={() => setShowNameModal(false)}
				onNameSubmit={handleNameSubmit}
			/>
		</div>
	);
};

export default ProgramDetailPage;
