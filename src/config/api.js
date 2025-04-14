// API Configuration
// OAuth 2 credentials
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

// API endpoints
export const GEMINI_API_ENDPOINT =
	"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// Helper function to get headers with OAuth token
export const getApiHeaders = () => {
	// For OAuth 2, we need to include the access token in the Authorization header
	// This is a placeholder - you'll need to implement the OAuth flow to get a real token
	const accessToken = localStorage.getItem("google_access_token");

	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${accessToken}`,
	};
};

// Function to initiate OAuth flow
export const initiateOAuthFlow = () => {
	// Get the current origin (protocol + hostname + port)
	const origin = window.location.origin;

	// Use the exact redirect URI that's registered in Google Cloud Console
	// This should match exactly what you've configured in the Google Cloud Console
	const redirectUri = `${origin}/oauth-callback`;

	// Log the redirect URI for debugging
	console.log("Redirect URI:", redirectUri);

	const scope = "https://www.googleapis.com/auth/cloud-platform";
	const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
		redirectUri
	)}&response_type=token&scope=${encodeURIComponent(scope)}`;

	window.location.href = authUrl;
};

// Function to handle OAuth callback
export const handleOAuthCallback = () => {
	// Extract token from URL hash
	const hash = window.location.hash.substring(1);
	const params = new URLSearchParams(hash);
	const accessToken = params.get("access_token");

	if (accessToken) {
		// Store the token
		localStorage.setItem("google_access_token", accessToken);
		return true;
	}

	return false;
};
