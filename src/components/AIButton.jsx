import React from "react";

const AIButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] text-white rounded hover:bg-[#2C2C2C] transition-colors z-40"
		>
			<div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-sm">
				AI
			</div>
			<span>AI Assistant</span>
		</button>
	);
};

export default AIButton;
