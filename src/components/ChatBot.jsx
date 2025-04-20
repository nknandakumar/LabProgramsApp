import React, { useState, useEffect, useRef } from "react";
import { getAllPrograms } from "../data/programs.js";
import FormatMessage from "./formatMessage.jsx";
import { getPersonalizedMessage } from "../utils/userUtils";
import { getRandomLoadingMessage } from "../utils/loadingMessages";

const STORAGE_KEY = "chat_messages";
const MAX_MESSAGES = 50; // Limit number of stored messages
const TYPING_SPEED = 30; // milliseconds per character (reduced from 30ms to 30ms)

const ChatBot = ({ isOpen, onClose, initialProgram }) => {
	const [messages, setMessages] = useState(() => {
		// Initialize messages from local storage
		const savedMessages = localStorage.getItem(STORAGE_KEY);
		return savedMessages
			? JSON.parse(savedMessages)
			: [
					{
						type: "bot",
						content: getPersonalizedMessage(
							"Hi [Name]! I'm your AI assistant. Select a program category and specific program to discuss, or ask me anything about programming.",
							"Hello! I'm your AI assistant. Select a program category and specific program to discuss, or ask me anything about programming."
						),
						timestamp: "Just now",
					},
				];
	});
	const [inputMessage, setInputMessage] = useState("");
	const [selectedSubject, setSelectedSubject] = useState(null);
	const [showPrograms, setShowPrograms] = useState(false);
	const [loading, setLoading] = useState(false);
	const [typingMessage, setTypingMessage] = useState("");
	const [loadingMessage, setLoadingMessage] = useState(
		getRandomLoadingMessage()
	);
	const chatEndRef = useRef(null);
	const typingTimeoutRef = useRef(null);
	const typingIndexRef = useRef(0);
	const currentMessageRef = useRef("");

	// Auto scroll to bottom when messages change
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, typingMessage]);

	// Save messages to local storage whenever they change
	useEffect(() => {
		if (messages.length > 0) {
			// Keep only the last MAX_MESSAGES
			const messagesToStore = messages.slice(-MAX_MESSAGES);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToStore));
		}
	}, [messages]);

	// Handle initialProgram prop
	useEffect(() => {
		if (initialProgram && isOpen) {
			const programMessage = `Please explain this program: ${initialProgram.title}\n\nCode:\n${initialProgram.code}`;
			setInputMessage(programMessage);
			handleSendMessage({ preventDefault: () => {} });
		}
	}, [initialProgram, isOpen]);

	// Update loading message every 3 seconds when loading
	useEffect(() => {
		let interval;
		if (loading) {
			interval = setInterval(() => {
				setLoadingMessage(getRandomLoadingMessage());
			}, 3000);
		}
		return () => clearInterval(interval);
	}, [loading]);

	const typeMessage = (message) => {
		currentMessageRef.current = message;
		typingIndexRef.current = 0;
		setTypingMessage("");
		startTyping();
	};

	const startTyping = () => {
		if (typingIndexRef.current < currentMessageRef.current.length) {
			setTypingMessage(
				currentMessageRef.current.substring(0, typingIndexRef.current + 1)
			);
			typingIndexRef.current++;
			typingTimeoutRef.current = setTimeout(startTyping, TYPING_SPEED);
		} else {
			setTypingMessage("");
			setMessages((prevMessages) => [
				...prevMessages,
				{
					type: "bot",
					content: currentMessageRef.current,
					timestamp: new Date().toLocaleTimeString([], {
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
					}),
				},
			]);
		}
	};

	const handleSubjectClick = (subject) => {
		setSelectedSubject(subject);
		setShowPrograms(true);
	};

	const handleProgramSelect = (program) => {
		const fullMessage = `Program: ${program.title}\nFocus: ${Array.isArray(program.focused_on) ? program.focused_on.join(", ") : program.focused_on}\n\nCode:\n${program.code}`;
		setInputMessage(fullMessage);
		setShowPrograms(false);
		setSelectedSubject(null);
	};

	const handleCancel = () => {
		setShowPrograms(false);
		setSelectedSubject(null);
	};

	const clearChatHistory = () => {
		localStorage.removeItem(STORAGE_KEY);
		setMessages([
			{
				type: "bot",
				content: getPersonalizedMessage(
					"Hi [Name]! I'm your AI assistant. Select a program category and specific program to discuss, or ask me anything about programming.",
					"Hello! I'm your AI assistant. Select a program category and specific program to discuss, or ask me anything about programming."
				),
				timestamp: "Just now",
			},
		]);
	};

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (!inputMessage.trim()) return;

		const userMessage = inputMessage.trim();
		setInputMessage("");
		setMessages((prevMessages) => [
			...prevMessages,
			{
				type: "user",
				content: userMessage,
				timestamp: new Date().toLocaleTimeString([], {
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				}),
			},
		]);

		setLoading(true);

		try {
			// Send only the code to the backend
			const requestBody = {
				code: userMessage,
			};

			console.log("Sending request to server:", requestBody);

			const response = await fetch("http://localhost:3001/api/explain", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(requestBody),
			});

			console.log("Response status:", response.status);
			console.log(
				"Response headers:",
				Object.fromEntries([...response.headers])
			);

			if (!response.ok) {
				let errorMessage = "Failed to get response from server";
				try {
					const errorData = await response.json();
					console.log("Error data:", errorData);
					errorMessage = errorData.message || errorMessage;
				} catch {
					// If parsing JSON fails, try to get the text content
					const textError = await response.text();
					console.log("Error text:", textError);
					errorMessage = textError || errorMessage;
				}
				throw new Error(errorMessage);
			}

			const data = await response.json();
			console.log("Received response from server:", data);

			// Ensure we're passing a string to typeMessage
			let messageContent = "";
			if (typeof data === "string") {
				messageContent = data;
			} else if (data.message) {
				messageContent = data.message;
			} else if (data.response) {
				messageContent = data.response;
			} else if (data.explanation) {
				messageContent = data.explanation;
			} else {
				// If we can't find a string property, convert the object to a string
				messageContent = JSON.stringify(data);
			}

			typeMessage(messageContent);
		} catch (error) {
			console.error("Error in chat:", error);
			typeMessage(
				getPersonalizedMessage(
					"Sorry, I'm having trouble connecting to the server. Please try again later.",
					"Sorry, I'm having trouble connecting to the server. Please try again later."
				)
			);
		} finally {
			setLoading(false);
		}
	};

	// Cleanup typing timeout on unmount
	useEffect(() => {
		return () => {
			if (typingTimeoutRef.current) {
				clearTimeout(typingTimeoutRef.current);
			}
		};
	}, []);

	if (!isOpen) return null;

	const programsList = selectedSubject ? getAllPrograms(selectedSubject) : [];

	return (
		<div className="fixed  inset-0 bg-[#0C0C0C] z-50 flex flex-col w-full h-full shadow-[inset_0_-4px_10px_rgba(255,255,255,0.3)]">
			{/* Header */}
			<div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-800 bg-[#1C1C1C] shadow-lg">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#616C08] to-[#8A3251] flex items-center justify-center shadow-lg">
						<span className="text-white font-semibold">AI</span>
					</div>
					<h2 className="text-white text-base sm:text-lg font-medium">
						AI Assistant
					</h2>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={clearChatHistory}
						className="text-gray-400 hover:text-gray-200 p-1.5 sm:p-2 rounded-full hover:bg-[#2A2A2A] transition-colors"
						title="Clear chat history"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 sm:h-5 sm:w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-200 p-1.5 sm:p-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 sm:h-6 sm:w-6"
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
			</div>

			{/* Chat Area */}
			<div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-none">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`flex ${
							message.type === "user" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
								message.type === "user"
									? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white rounded-br-none shadow-lg"
									: "bg-[#1C1C1C] text-white rounded-bl-none shadow-lg"
							}`}
						>
							<div className="whitespace-pre-wrap font-sans text-sm sm:text-base break-words">
								<FormatMessage content={message.content} />
							</div>
							<div className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 flex items-center gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-2.5 w-2.5 sm:h-3 sm:w-3"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clipRule="evenodd"
									/>
								</svg>
								{message.timestamp}
							</div>
						</div>
					</div>
				))}
				{typingMessage && (
					<div className="flex justify-start">
						<div className="max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 bg-[#1C1C1C] text-white rounded-bl-none shadow-lg">
							<div className="whitespace-pre-wrap font-sans text-sm sm:text-base break-words">
								<FormatMessage content={typingMessage} />
							</div>
							<div className="flex items-center gap-2 mt-2">
								<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#616C08] animate-pulse"></div>
								<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8A3251] animate-pulse delay-100"></div>
								<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#616C08] animate-pulse delay-200"></div>
							</div>
						</div>
					</div>
				)}
				{loading && !typingMessage && (
					<div className="flex justify-start">
						<div className="max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 bg-[#1C1C1C] text-white rounded-bl-none shadow-lg">
							<p className="text-xs sm:text-sm">{loadingMessage}</p>
						</div>
					</div>
				)}
				<div ref={chatEndRef} />
			</div>

			{/* Program Selection */}
			{showPrograms && (
				<div className="absolute bottom-[80px] left-0 right-0 bg-[#1C1C1C] border-t border-gray-800 max-h-[40vh] overflow-y-auto shadow-lg">
					<div className="p-3 sm:p-4">
						<div className="flex justify-between items-center mb-3">
							<h3 className="text-white text-base sm:text-lg font-medium">
								{selectedSubject === "cma" ? "CMA Programs" : "Python Programs"}
							</h3>
							<button
								onClick={handleCancel}
								className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#2A2A2A] transition-colors"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 sm:h-5 sm:w-5"
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
										className="w-full text-left p-2 sm:p-3 hover:bg-[#2A2A2A] text-white rounded-lg transition-colors"
									>
										<div className="font-medium text-sm sm:text-base">
											{program.program_name}
										</div>
										{program.focused_on && (
											<div className="text-xs sm:text-sm text-gray-400">
												{Array.isArray(program.focused_on)
													? program.focused_on.join(", ")
													: program.focused_on}
											</div>
										)}
									</button>
								))}
							</div>
						) : (
							<div className="text-center py-3 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 text-gray-500"
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
								<p className="text-base sm:text-lg font-medium">
									No Programs Available
								</p>
								<p className="text-xs sm:text-sm mb-4">
									There are currently no programs for this category.
								</p>
								<button
									onClick={handleCancel}
									className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A] transition-colors"
								>
									Go Back
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Input Area */}
			<div className="border-t border-gray-800 p-3 sm:p-4 shadow-lg">
				<form
					onSubmit={handleSendMessage}
					className="flex flex-col items-center gap-3 sm:gap-4 max-w-2xl mx-auto"
				>
					<textarea
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						placeholder={getPersonalizedMessage(
							"Ask me anything, [Name]...",
							"Ask me anything..."
						)}
						className="w-full bg-[#1C1C1C] text-white px-3 sm:px-4 py-2 rounded-xl border-0 outline-0 min-h-[80px] sm:min-h-[100px] max-h-[120px] sm:max-h-[150px] resize-y shadow-inner text-sm sm:text-base"
						disabled={loading}
					/>
					<div className="flex items-center gap-3 sm:gap-4 w-full">
						<div className="flex gap-2 flex-1 justify-start">
							<button
								type="button"
								onClick={() => handleSubjectClick("cma")}
								className={`px-3 py-1.5 rounded-xl cursor-pointer text-xs sm:text-sm transition-all ${
									selectedSubject === "cma"
										? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white shadow-lg"
										: "bg-[#1C1C1C] text-gray-300 hover:bg-[#2A2A2A] shadow-md"
								}`}
							>
								CMA
							</button>
							<button
								type="button"
								onClick={() => handleSubjectClick("python")}
								className={`px-3 py-1.5 rounded-xl cursor-pointer text-xs sm:text-sm transition-all ${
									selectedSubject === "python"
										? "bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white shadow-lg"
										: "bg-[#1C1C1C] text-gray-300 hover:bg-[#2A2A2A] shadow-md"
								}`}
							>
								Python
							</button>
						</div>
						<button
							type="submit"
							className="p-2 h-9 sm:h-10 rounded-full bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white hover:from-[#8A3251] hover:to-[#616C08] transition-all shadow-lg disabled:opacity-50"
							disabled={loading}
						>
							{loading ? (
								<svg
									className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-4 h-4 sm:w-5 sm:h-5"
								>
									<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
								</svg>
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChatBot;
