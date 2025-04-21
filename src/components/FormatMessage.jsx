import React from "react";
 import ReactMarkdown from "react-markdown";
 import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

 const FormatMessage = ({ content }) => {
 	if (!content) return null;
 
 	return (
 		<div className="prose prose-invert max-w-none">
 			<ReactMarkdown
 				components={{
 					code({ node, inline, className, children, ...props }) {
 						const match = /language-(\w+)/.exec(className || "");
 						return !inline && match ? (
 							<SyntaxHighlighter
 								style={dracula}
 								language={match[1]}
 								PreTag="div"
 								{...props}
 							>
 								{String(children).replace(/\n$/, "")}
 							</SyntaxHighlighter>
 						) : (
 							<code
 								className="bg-gray-700 px-1 py-0.5 rounded text-pink-300"
 								{...props}
 							>
 								{children}
 							</code>
 						);
 					},
 					p: ({ children }) => <p className="text-gray-200">{children}</p>,
 					a: ({ children, href }) => (
 						<a
 							className="text-blue-400 underline"
 							href={href}
 							target="_blank"
 							rel="noopener noreferrer"
 						>
 							{children}
 						</a>
 					),
 					strong: ({ children }) => (
 						<strong className="text-yellow-300">{children}</strong>
 					),
 					em: ({ children }) => (
 						<em className="italic text-pink-300">{children}</em>
 					),
 				}}
 			>
 				{content}
 			</ReactMarkdown>
 		</div>
 	);
 };
 
 export default FormatMessage;