import React from "react";
import { Link } from "react-router-dom";

const Card = ({ program: { id, program_name, focused_on }, subject }) => {
	return (
		<Link to={`/programs/${subject}/${id}`}>
			<div className="relative group rounded-xl p-[0.9px]   transition-all duration-500 ease-in-out overflow-hidden">
				{/* Gradient layer */}
				<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border hero bg-[url('/hero-Img.webp')]  z-0"></div>

				{/* Card content */}
				<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-4 sm:p-6 md:p-10 w-full text-start">
					<span className="font-mono text-xs sm:text-sm">Program {id}</span>
					<h3 className="font-sans text-lg sm:text-xl md:text-2xl hover:underline leading-tight sm:leading-normal md:leading-[42px] font-[800] group-hover:underline">
						{program_name}
					</h3>
					<p className="mt-2 sm:mt-4 md:mt-6 font-mono text-sm sm:text-base md:text-lg leading-tight sm:leading-normal md:leading-[24px] font-[400] text-[#A3B3B3]">
						{focused_on}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
