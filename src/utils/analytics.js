import ReactGA from "react-ga4";

// Initialize GA4 with your measurement ID
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 measurement ID
const initializeGA = () => {
	console.log("Initializing Google Analytics with ID: G-9LCT1RDHCC");
	ReactGA.initialize("G-9LCT1RDHCC", {
		debug: true, // Enable debug mode
		testMode: false, // Set to true only for testing
	});
	console.log("Google Analytics initialized");
};

// Track page views
const trackPageView = (path) => {
	console.log("Tracking page view:", path);
	ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
const trackEvent = (category, action, label) => {
	console.log("Tracking event:", { category, action, label });
	ReactGA.event({
		category: category,
		action: action,
		label: label,
	});
};

export { initializeGA, trackPageView, trackEvent };
