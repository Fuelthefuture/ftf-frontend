import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "src"), // Use process.cwd() for ESM support
		},
	},
	server: {
		port: process.env.PORT || 5173,
		host: true,
	}
});
