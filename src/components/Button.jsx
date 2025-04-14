import React from "react";

const Button = ({ onClick, name }) => {
	return (
		<span className="border pt-3 pb-4 px-1 md:py-5 rounded-lg group">
			<button
				onClick={onClick}
				className="font-sans bg-white font-bold text-black uppercase px-2 md:px-4 font-[600] tracking-wide leading-[40px] md:leading-[50px] text-[14px] sm:text-[16px] md:text-[16px] cursor-pointer rounded-lg group-hover:underline"
			>
				{name}
			</button>
		</span>
	);
};

export default Button;
