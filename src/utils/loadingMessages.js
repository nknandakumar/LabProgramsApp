const loadingMessages = [
	"Thinking...",
	"Processing your request...",
	"Analyzing the code...",
	"Computing response...",
	"Let me check that for you...",
	"Working on it...",
	"Almost there...",
	"Gathering information...",
	"Loading response...",
	"Please wait a moment...",
];

export const getRandomLoadingMessage = () => {
	return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
};
