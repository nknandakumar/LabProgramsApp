import React from "react";

const FeatureCard = ({ feature }) => {
	return (
		<div className="relative group rounded-xl p-[0.9px] transition-all duration-500 ease-in-out overflow-hidden h-full">
			{/* Gradient layer */}
			<div className="absolute inset-0 rounded-xl opacity-100 sm:opacity-0 sm:group-hover:opacity-100 animate-border hero bg-[url('/hero-Img.webp')] z-0"></div>

			{/* Card content */}
			<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-6 w-full text-start h-full flex flex-col">
				<h3 className="font-sans text-[24px] leading-[32px] font-[800] mb-4">
					{feature.name}
				</h3>
				<p className="mt-2 font-mono text-[16px] leading-[24px] font-[400] text-[#A3B3B3]">
					{feature.description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
