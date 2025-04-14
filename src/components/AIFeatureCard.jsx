import React, { useState, useEffect } from "react";

const AIFeatureCard = () => {
	const [displayText, setDisplayText] = useState("");
	const [codeDisplay, setCodeDisplay] = useState("");
	const [featureDisplay, setFeatureDisplay] = useState("");
	const words = [
		"This loop iterates through each element of the array 'arr':",
		"Let's break down how it works:",
		"It's a fundamental programming concept!",
	];
	const codeWords = [
		`// AI Explaining a For Loop
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,
		`// This is a basic loop
// It helps you process arrays`,
		`// Try it yourself!
// Change the array and see what happens`,
	];
	const featureWords = [
		"• Line-by-line code explanations in simple language",
		"• Highlighted key concepts and programming patterns",
		"• Real-world applications and use cases",
	];

	// Typewriter effect for the explanation text
	useEffect(() => {
		let i = 0;
		let j = 0;
		let isDeleting = false;
		let timeout;

		const typeText = () => {
			const currentWord = words[i];

			if (isDeleting) {
				setDisplayText(currentWord.substring(0, j - 1));
				j--;
				if (j === 0) {
					isDeleting = false;
					i++;
					if (i === words.length) {
						i = 0;
					}
				}
			} else {
				setDisplayText(currentWord.substring(0, j + 1));
				j++;
				if (j === currentWord.length) {
					isDeleting = true;
				}
			}

			timeout = setTimeout(typeText, 100);
		};

		typeText();

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	}, []);

	// Typewriter effect for the code
	useEffect(() => {
		let i = 0;
		let j = 0;
		let isDeleting = false;
		let timeout;

		const typeCode = () => {
			const currentWord = codeWords[i];

			if (isDeleting) {
				setCodeDisplay(currentWord.substring(0, j - 1));
				j--;
				if (j === 0) {
					isDeleting = false;
					i++;
					if (i === codeWords.length) {
						i = 0;
					}
				}
			} else {
				setCodeDisplay(currentWord.substring(0, j + 1));
				j++;
				if (j === currentWord.length) {
					isDeleting = true;
				}
			}

			timeout = setTimeout(typeCode, 100);
		};

		typeCode();

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	}, []);

	// Typewriter effect for features
	useEffect(() => {
		let i = 0;
		let j = 0;
		let isDeleting = false;
		let timeout;

		const typeFeature = () => {
			const currentWord = featureWords[i];

			if (isDeleting) {
				setFeatureDisplay(currentWord.substring(0, j - 1));
				j--;
				if (j === 0) {
					isDeleting = false;
					i++;
					if (i === featureWords.length) {
						i = 0;
					}
				}
			} else {
				setFeatureDisplay(currentWord.substring(0, j + 1));
				j++;
				if (j === currentWord.length) {
					isDeleting = true;
				}
			}

			timeout = setTimeout(typeFeature, 100);
		};

		typeFeature();

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	}, []);

	return (
		<div className="relative mt-10 md:mt-0 group rounded-xl p-[0.9px]  transition-all duration-500 ease-in-out overflow-hidden col-span-1 md:col-span-2">
			{/* Gradient layer */}
			<div className="absolute inset-0 rounded-xl opacity-100 sm:opacity-0 sm:group-hover:opacity-100 animate-border hero bg-[url('/hero-Img.webp')] z-0"></div>

			{/* Card content */}
			<div className="relative z-10 bg-[#0C0C0C] rounded-xl p-4 sm:p-6 md:p-10 w-full text-start">
				<h3 className="font-sans text-[28px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[42px] font-[800] mb-2 sm:mb-4">
					🤖 Let AI Explain It for You
				</h3>
				<p className="mt-2 sm:mt-4 md:mt-6 font-mono text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-[400] text-[#A3B3B3] mb-4 sm:mb-6">
					Stuck on how a program works? Our built-in AI Explainer breaks down
					every line of code, explains the logic, and helps you understand
					faster — like a personal tutor!
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
					<div>
						<h4 className="font-sans text-lg sm:text-xl font-bold mb-2">
							Key Features
						</h4>
						<div className="font-mono text-[14px] sm:text-[16px] space-y-1 sm:space-y-2">
							<p className="min-h-[20px]">{featureDisplay}</p>
						</div>
					</div>
					<div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg">
						<h4 className="font-sans text-lg sm:text-xl font-bold mb-2">
							Example
						</h4>
						<div className="h-[80px] sm:h-[100px] overflow-hidden">
							<pre className="font-mono text-[12px] sm:text-[14px] text-[#f1fa8c] overflow-x-auto">
								<code>{codeDisplay}</code>
							</pre>
						</div>
						<div className="h-[20px] sm:h-[24px] overflow-hidden">
							<p className="font-mono text-[12px] sm:text-[14px]">
								{displayText}
							</p>
						</div>
						<ul className="font-mono text-[12px] sm:text-[14px] space-y-1 mt-1">
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
