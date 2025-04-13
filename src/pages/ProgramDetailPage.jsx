// ProgramDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProgram } from "../data/programs.js";
import {Link} from "react-router-dom"
import TabButton from './../components/TabButton';
const ProgramDetailPage = () => {
	const { subject = "", id } = useParams();
	const [activeTab, setActiveTab] = useState("code");

	const cleanId = id ? id.replace(/\D/g, "") : "";
	const program = getProgram(subject, Number(cleanId));

	useEffect(() => {
		if (window.Prism) {
			window.Prism.highlightAll();
		}
	}, [activeTab]);

	if (!program) {
		return (
			<div>
				<h1>Program not found</h1>
				<p>The program you are looking for does not exist.</p>
			</div>
		);
	}

	const { program_name, focused_on, code } = program;

	const formatCode = (code) => {
		// Basic indentation for HTML
		let formattedCode = code
			.replace(/</g, "\n<")
			.replace(/>/g, ">\n")
			.replace(/\n\s*\n/g, "\n")
			.split("\n")
			.map((line) => {
				if (line.trim().startsWith("</")) {
					return "  " + line;
				}
				return line;
			})
			.join("\n");
		return formattedCode;
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case "code":
				return (
					<div className="w-full bg-[#1E1E1E] rounded-b-md rounded-r-md   p-4 overflow-x-auto">
						<pre className="line-numbers language-html ">
							<code className="language-html  ">{formatCode(code)}</code>
						</pre>
					</div>
				);
			case "preview":
				return (
					<div className="w-full bg-gray-400 rounded-md p-4">
						<iframe
							srcDoc={code}
							title="preview"
							className="w-full h-[500px] border-0"
							sandbox="allow-scripts"
						/>
					</div>
				);
			case "explain":
				return (
					<div className="w-full bg-[#1E1E1E] rounded-md  p-4">
						<p className="font-mono text-gray-300">
							This program demonstrates {focused_on}. The code above shows how
							to implement this concept using HTML, CSS, and JavaScript.
						</p>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="mx-[112px] flex flex-col items-start justify-start pt-10 space-y-6 mb-10 ">
           <Link to={`/programs/${subject}`} ><button className=" cursor-pointer font-mono bg-amber-50 text-black px-4 py-2 rounded-md ">Back</button></Link>
			<div className="space-y-2">
				<p className="font-mono text-gray-400">Program {id}</p>
				<h2 className="text-3xl font-bold">{program_name}</h2>
				<p className="text-gray-500 font-mono">{focused_on}</p>
			</div>

			<div className="w-full border border-gray-800 rounded-lg overflow-hidden p-4">
				<div className="flex ">
                    <TabButton name="Code" conditionValue="code" activeTab={activeTab} setActiveTab={setActiveTab}  />
                    <TabButton name="Live preview" conditionValue="preview"  activeTab={activeTab} setActiveTab={setActiveTab}  />
                    <TabButton name="Explain Me" conditionValue="explain"  activeTab={activeTab} setActiveTab={setActiveTab}  />
				</div>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default ProgramDetailPage;
