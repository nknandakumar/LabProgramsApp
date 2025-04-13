import React, { useState, useEffect } from "react";

const AIFeatureCard = () => {
	const [displayText, setDisplayText] = useState("");
	const fullText =
		"This loop iterates through each element of the array 'arr':";
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < fullText.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + fullText[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, 50);
			return () => clearTimeout(timeout);
		}
	}, [currentIndex, fullText]);

	return (
		<div className="relative group rounded-xl p-[0.9px] transition-all duration-500 ease-in-out overflow-hidden col-span-2">
			{/* Gradient layer */}
			<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 animate-border  hero bg-[url('/hero-Img.webp')] z-0"></div>

			{/* Card content */}
			<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-10 w-full text-start">
				<h3 className="font-sans text-[36px] leading-[42px] font-[800] mb-4">
					🤖 Let AI Explain It for You
				</h3>
				<p className="mt-6 font-mono text-[18px] leading-[24px] font-[400] text-[#A3B3B3] mb-6">
					Stuck on how a program works? Our built-in AI Explainer breaks down
					every line of code, explains the logic, and helps you understand
					faster — like a personal tutor!
				</p>

				<div className="grid grid-cols-2 gap-6 mb-6">
					<div>
						<h4 className="font-sans text-xl font-bold mb-2">Key Features</h4>
						<ul className="font-mono text-[16px] space-y-2">
							<li>• Line-by-line code explanations in simple language</li>
							<li>• Highlighted key concepts and programming patterns</li>
							<li>• Real-world applications and use cases</li>
						</ul>
					</div>
					<div className="bg-[#1E1E1E] p-4 rounded-lg">
						<h4 className="font-sans text-xl font-bold mb-2">Example</h4>
						<pre className="font-mono text-[14px] text-[#f1fa8c]">
							<code>{`// AI Explaining a For Loop
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`}</code>
						</pre>
						<p className="font-mono text-[14px] mt-2">{displayText}</p>
						<ul className="font-mono text-[14px] space-y-1 mt-1">
							<li>• i = 0: Initializes the counter variable</li>
							<li>
								• i &lt; arr.length: Continues while i is less than array length
							</li>
							<li>• i++: Increments i after each iteration</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AIFeatureCard;
