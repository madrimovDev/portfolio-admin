import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "src/pages"),
			"@app": path.resolve(__dirname, "src/app"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@entities": path.resolve(__dirname, "src/entities"),
		},
	},
});



