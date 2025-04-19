import React, { useState } from "react";

const NameCollectionModal = ({ isOpen, onClose, onNameSubmit }) => {
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setError("Please enter your name");
			return;
		}
		onNameSubmit(name.trim());
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
			<div className="bg-[#1e1e1e] p-8 rounded-lg w-[90%] max-w-[500px] relative shadow-lg animate-slideDown">
				<button
					className="absolute top-4 right-4 bg-transparent border-none text-2xl cursor-pointer text-gray-400 hover:text-white"
					onClick={onClose}
				>
					×
				</button>
				<h2 className="mt-0 font-sans text-white text-2xl font-bold">Enter your Name</h2>
                <p className="text-gray-400 text-sm my-4">Just for interactivity</p>
				<form onSubmit={handleSubmit}>
					<div className="my-6">
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter your name"
							required
							className="w-full p-3 bg-[#2a2a2a] border border-gray-600 rounded text-base text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25"
						/>
						{error && (
							<span className="text-red-500 text-sm mt-2 block">{error}</span>
						)}
					</div>
					<button
						type="submit"
						className="w-full p-3 bg-blue-500 text-white border-none rounded text-base cursor-pointer transition-colors hover:bg-blue-600"
					>
						Continue
					</button>
				</form>
			</div>
		</div>
	);
};

export default NameCollectionModal;
