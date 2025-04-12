import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
	return (
		<div>
			<div className="text-center overflow-hidden ">
				<div className="  h-screen  hero bg-[url('/hero-Img.webp')] p-20 m-10 rounded-2xl bg-cover space-y-4">
					<h1 className="font-sans leading-[127px] text-[154px] text-center font-[700]">
						Lab Set Programs
					</h1>
					<p className="font-mono text-[22px] leading-[27px] font-[400] text-center ">
						Access All Your Lab Programs in One Place. Say goodbye to messy PDFs
						and scattered files.
					</p>
				<Link to={`/subjects`} >
                <span className="border px-1 py-5 rounded-lg ">
						<button className="font-sans bg-black text-white uppercase px-4 py-0.5 font-[600]  tracking-wide leading-[50px] text-[16px] cursor-pointer rounded-lg">
							Click here for Lab Programs
						</button>
					</span></Link>
				</div>
				<h2 className="font-sans font-[600] text-[52px] leading-[58px] bg-gradient-to-b text-transparent from-white to-neutral-500 bg-clip-text  ">
					Features
				</h2>
				<p className="font-mono font-[400] leading-[27px] text-[22px] ">
					productive, Cursor is the best way to code with AI.
				</p>

				<div className="grid grid-cols-3 gap-10 mx-[112px] my-20  ">
					<div className="relative group rounded-xl p-[0.9px]  transition-all duration-500 ease-in-out overflow-hidden">
						{/* Gradient layer */}
						<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border bg-gradient-to-r from-[#616C08] via-[#8A3251] to-blue-500 z-0"></div>

						{/* Card content */}
						<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-10 w-full text-start">
							<h3 className="font-sans text-[36px] leading-[42px] font-[800]">
								Live Preview
							</h3>
							<p className="mt-6 font-mono text-[18px] leading-[24px] font-[400] text-[#A3B3B3]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
								ipsum, dolor sit amet consectetur adipisicing elit
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
