import React, { useState } from "react";
import { getAllPrograms } from "../data/programs.js";

const ChatBot = ({ isOpen, onClose }) => {
	const [messages, setMessages] = useState([
		{
			type: "bot",
			content:
				"Hello! I'm your AI assistant. Select a program category and specific program to discuss, or ask me anything about programming.",
			timestamp: "Just now",
		},
	]);
	const [inputMessage, setInputMessage] = useState("");
	const [selectedSubject, setSelectedSubject] = useState(null);
	const [showPrograms, setShowPrograms] = useState(false);

	const handleSubjectClick = (subject) => {
		setSelectedSubject(subject);
		setShowPrograms(true);
	};

	const handleProgramSelect = (program) => {
		const fullMessage = `Program: ${program.program_name}\nFocus: ${program.focused_on}\n\nCode:\n${program.code}`;
		setInputMessage(fullMessage);
		setShowPrograms(false);
		setSelectedSubject(null);
	};

	const handleCancel = () => {
		setShowPrograms(false);
		setSelectedSubject(null);
	};

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!inputMessage.trim()) return;

		setMessages([
			...messages,
			{
				type: "user",
				content: inputMessage,
				timestamp: "Just now",
			},
		]);
		setInputMessage("");
	};

	if (!isOpen) return null;

	const programsList = selectedSubject ? getAllPrograms(selectedSubject) : [];

	return (
		<div className="fixed inset-0 bg-[#1E1E1E] z-50 flex flex-col w-full h-full">
			{/* Header */}
			<div className="flex items-center justify-between p-4 border-b border-gray-800">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
						<span className="text-white font-semibold">AI</span>
					</div>
					<h2 className="text-white text-lg font-medium">AI Assistant</h2>
				</div>
				<button onClick={onClose} className="text-gray-400 hover:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			{/* Chat Area */}
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`flex ${
							message.type === "user" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-[80%] rounded-2xl px-4 py-2 ${
								message.type === "user"
									? "bg-purple-500 text-white rounded-br-none"
									: "bg-[#2A2A2A] text-white rounded-bl-none"
							}`}
						>
							<pre className="whitespace-pre-wrap font-sans">
								{message.content}
							</pre>
						</div>
					</div>
				))}
			</div>

			{/* Program Selection */}
			{showPrograms && (
				<div className="absolute bottom-[80px] left-0 right-0 bg-[#2A2A2A] border-t border-gray-800 max-h-[40vh] overflow-y-auto">
					<div className="p-4">
						<div className="flex justify-between items-center mb-3">
							<h3 className="text-white text-lg font-medium">
								{selectedSubject === "cma" ? "CMA Programs" : "Python Programs"}
							</h3>
							<button
								onClick={handleCancel}
								className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#3A3A3A] transition-colors"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
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
						</div>
						{programsList.length > 0 ? (
							<div className="space-y-2">
								{programsList.map((program) => (
									<button
										key={program.id}
										onClick={() => handleProgramSelect(program)}
										className="w-full text-left p-3 hover:bg-[#3A3A3A] text-white rounded-lg transition-colors"
									>
										<div className="font-medium">{program.program_name}</div>
										{program.focused_on && (
											<div className="text-sm text-gray-400">
												{program.focused_on}
											</div>
										)}
									</button>
								))}
							</div>
						) : (
							<div className="text-center py-3 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 mx-auto mb-3 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
									/>
								</svg>
								<p className="text-lg font-medium">No Programs Available</p>
								<p className="text-sm mb-4">
									There are currently no programs for this category.
								</p>
								<button
									onClick={handleCancel}
									className="px-4 py-2 bg-[#3A3A3A] text-white rounded-lg hover:bg-[#4A4A4A] transition-colors"
								>
									Go Back
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Input Area */}
			<div className="border-t border-gray-800 p-4 bg-[#1E1E1E]">
				<div className="flex items-center gap-2">
					{/* Subject Selection Buttons */}
					<div className="flex gap-2">
						<button
							onClick={() => handleSubjectClick("cma")}
							className={`px-3 py-1.5 rounded-full text-sm ${
								selectedSubject === "cma"
									? "bg-purple-500 text-white"
									: "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
							}`}
						>
							CMA
						</button>
						<button
							onClick={() => handleSubjectClick("python")}
							className={`px-3 py-1.5 rounded-full text-sm ${
								selectedSubject === "python"
									? "bg-purple-500 text-white"
									: "bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]"
							}`}
						>
							Python
						</button>
					</div>
				</div>

				<form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
					<textarea
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						placeholder="Message AI Assistant..."
						className="flex-1 bg-[#2A2A2A] text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 min-h-[100px] max-h-[200px] resize-y"
					/>
					<button
						type="submit"
						className="p-2 h-10 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors self-end"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
						</svg>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatBot;
