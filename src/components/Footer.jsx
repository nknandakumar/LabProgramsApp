import React from "react";
import { ExternalLink } from "lucide-react";
const Footer = () => {
	return (
		<div className="flex flex-col justify-center gap-4 items-center mx-4  my-20">
			<span className="flex items-center font-mono gap-2  text-sm">
				For Source code :{" "}
				<a
					href="https://github.com/nknandakumar/LabProgramsApp"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline text-blue-500 flex font-sans items-center gap-1 font-bold	"
				>
				Click Here <ExternalLink className=' w-4 h-4' />
				</a>
			</span>
			<a
				href="https://nandakumarm.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="font-mono text-sm group"
			>
				Design and Developed by <span className="underline">Nanda kumar M</span>
			</a>
		</div>
	);
};

export default Footer;