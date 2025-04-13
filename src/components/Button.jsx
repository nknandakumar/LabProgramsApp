import React from "react";
import { Link } from "react-router-dom";
const Button = ({ path, name }) => {
	return (
		<Link to={path} className="mt-6">
			<span className=" border px-1 py-5 rounded-lg group">
				<button className="font-sans bg-white font-bold text-black uppercase px-4 py- font-[600]  tracking-wide leading-[50px] text-[16px] cursor-pointer rounded-lg group-hover:underline">
					{name}
				</button>
			</span>
		</Link>
	);
};

export default Button;
