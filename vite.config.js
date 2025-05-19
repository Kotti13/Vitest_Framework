import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows using `describe`, `it`, etc. without imports
    environment: "jsdom", // needed for DOM APIs like document, window
    setupFiles: "./setupTests.js", // optional: for global setups like extending expect
    reporters: ["default", "json"],
    outputFile: "test-report.json",
  },
});
