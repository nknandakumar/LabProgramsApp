import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import AIFeatureCard from "../components/AIFeatureCard";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Home = () => {
	const features = [
		{
			name: "Ready-to-use Code Snippets",
			description: "Access clean, fully-functional code examples.",
		},
		{
			name: "Instant Live Output Previews",
			description:
				"See the results immediately with built-in previews for HTML, CSS, JavaScript, and Python programs.",
		},
	];
	const subjects = [
		{ name: `Computer Multi-Media Animation (CMA)`, path: `/programs/cma` },
		{ name: `Python`, path: `/programs/python` },
	];
	return (
		<div className="w-full  overflow-hidden">
			{/** Hero Section */}

			<div className="text-center mt-10 h-[100vh] overflow-hidden">
				{/* Hero Section with Gradient Background */}
				<div className="h-[70vh] md:h-[100vh] flex flex-col justify-start items-center p-5 md:p-20 bg-[url('/sm-HeroImg.avif')]  md:bg-[url('/HeroImg.avif')] rounded-2xl mx-3 md:mx-10 bg-cover">
					<h1 className="font-sans leading-[50px] md:leading-[120px] mt-10 md:mt-0 text-6xl sm:text-7xl md:text-9xl text-center font-bold text-white mb-8">
						Lab Set Programs
					</h1>

					<p className="font-mono text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-2xl">
						Access All Your Lab Programs in One Place. Say goodbye to messy PDFs
						and scattered files.
					</p>

					<Link to={`/subjects`}>
					<span className="border border-gray-300 hover:border-white hover:border-2  py-4 px-0.5 rounded-md ">
							<button className=" animate-border bg-gradient-to-r from-[#000]  via-[#36454F] to-[#0A0A0A] font-mono cursor-pointer text-white px-6 py-3  rounded-md">
								Click here for Lab Programs
							</button>
						</span>
					</Link>
				</div>

				{/* Code Editor Preview Section */}
				<div className="w-full max-w-4xl mx-auto -mt-[180px] sm:-mt-[100px] md:-mt-[300px] px-4">
					<img
						src="/CodeImg.avif"
						alt="Hero section Image"
						className="rounded-2xl bg-cover bg-center"
					/>
				</div>
			</div>

			<div className="text-center -mt-40 sm:mt-16 md:mt-20 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
				{/** Features Section */}
				<div className="mb-10 sm:mb-16">
					<h2 className="font-sans font-[800] text-[36px] sm:text-[42px] md:text-[52px] leading-[42px] sm:leading-[50px] md:leading-[58px] bg-gradient-to-b text-transparent from-white to-neutral-500 bg-clip-text">
						What You Get
					</h2>
					

					{/* Bento Grid Layout */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 sm:my-16 md:my-20">
						{/* First column with two features */}
						<div className="space-y-6 h-full">
							{features.map((feature, index) => (
								<div key={index} className="h-1/2">
									<FeatureCard feature={feature} />
								</div>
							))}
						</div>

						{/* AI Feature taking two columns */}
						<div className="md:col-span-2">
							<AIFeatureCard />
						</div>
					</div>
				</div>

				{/** Subjects Section */}
				<div className="flex flex-col pt-20 items-center">
					<h2 className="font-sans text-[36px] sm:text-[42px] md:text-[52px] leading-[42px] sm:leading-[50px] md:leading-[58px] bg-gradient-to-b text-transparent from-white to-neutral-500 bg-clip-text mb-6 sm:mb-8 md:mb-10">
						Subjects Covered
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20 my-6 sm:my-8 md:my-10 w-full">
						{subjects.map((subject, index) => (
							<div key={index} className="h-full pb-6  ">
								<div className="relative group rounded-xl p-[0.9px] transition-all duration-500 ease-in-out overflow-hidden h-full">
									{/* Gradient layer */}
									<div className="absolute inset-0 rounded-xl opacity-100 sm:opacity-0 sm:group-hover:opacity-100 animate-border bg-gradient-to-r bg-[url('/HeroImg.avif')] z-0"></div>

									{/* Card content */}
									<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-6 sm:p-8 md:p-10 w-full text-start h-full flex flex-col justify-between">
										<div>
											<h3 className="font-sans text-[28px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[42px] font-[800]">
												{subject.name}
											</h3>
										</div>
										<Link to={subject.path} className="mt-4 sm:mt-6">
											<button className="font-sans bg-gradient-to-r from-[#616C08] to-[#8A3251] text-white uppercase px-4 sm:px-6 py-2 font-[600] tracking-wide text-[12px] sm:text-[14px] cursor-pointer rounded-lg hover:from-[#8A3251] hover:to-[#616C08] transition-all duration-300 w-fit">
												View Programs
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/**  */}
				<div className="hero bg-[url('/HeroImg.avif')] py-8 rounded-lg bg-cover text-center flex flex-col items-center my-10 space-y-6">
					<span className="font-sans font-[600] text-[52px] leading-[58px] text-white">
						{" "}
						Learn Better. Code Smarter.
					</span>
					<p className="max-w-2xl">
						Whether you're preparing for lab exams or brushing up on concepts,
						LabSet makes learning programming simple and efficient.
					</p>
					<Link to={`/subjects`}>
					<span className="border border-gray-300 hover:border-white hover:border-2  py-4 px-0.5 rounded-md ">
							<button className=" animate-border bg-gradient-to-r from-[#000]  via-[#36454F] to-[#0A0A0A] font-mono cursor-pointer text-white px-6 py-3  rounded-md">
								Click here for Lab Programs
							</button>
						</span>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
