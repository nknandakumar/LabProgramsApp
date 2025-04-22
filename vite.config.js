import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		allowedHosts: ["fd07-122-167-169-216.ngrok-free.app"],
		proxy: {
			"/api": {
				target: "https://labset-backend.onrender.com",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, "/api"),
				configure: (proxy) => {
					proxy.on("error", (err) => {
						console.log("proxy error", err);
					});
					proxy.on("proxyReq", (proxyReq) => {
						console.log("Sending Request to the Target:", proxyReq.path);
					});
					proxy.on("proxyRes", (proxyRes) => {
						console.log(
							"Received Response from the Target:",
							proxyRes.statusCode
						);
					});
				},
			},
		},
	},
	resolve: {
		alias: {
			// Add aliases to handle case sensitivity issues
			"./formatMessage.jsx": "./FormatMessage.jsx",
		},
	},
});
