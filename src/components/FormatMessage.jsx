import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const formatMessage = (content) => {
	const lines = content.split("\n");
	let codeLines = [];
	let formattedElements = [];

	lines.forEach((line, index) => {
		if (line.startsWith("Program:") || line.startsWith("Focus:") || line.startsWith("Code:")) {
			if (codeLines.length) {
				formattedElements.push(
					<SyntaxHighlighter key={`code-${index}`} language="cpp" style={dracula}>
						{codeLines.join("\n")}
					</SyntaxHighlighter>
				);
				codeLines = [];
			}
			const className = line.startsWith("Program:") ? "font-semibold text-purple-400"
								: line.startsWith("Focus:") ? "text-gray-300"
								: "font-semibold text-purple-400 mt-2";
			formattedElements.push(<div key={index} className={className}>{line}</div>);
		} else if (line.trim() === "") {
			if (codeLines.length) {
				formattedElements.push(
					<SyntaxHighlighter key={`code-${index}`} language="cpp" style={dracula}>
						{codeLines.join("\n")}
					</SyntaxHighlighter>
				);
				codeLines = [];
			}
			formattedElements.push(<div key={index} className="h-2"></div>);
		} else {
			codeLines.push(line);
		}
	});

	if (codeLines.length) {
		formattedElements.push(
			<SyntaxHighlighter key="code-last" language="cpp" style={dracula}>
				{codeLines.join("\n")}
			</SyntaxHighlighter>
		);
	}

	return formattedElements;
};
