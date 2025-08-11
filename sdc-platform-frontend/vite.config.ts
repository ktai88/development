import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {},
  server: {
    proxy: {
      "/sdc-platform-frontend": "http://localhost:4180",
    },
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
    },
  },
  resolve: {
    alias: {
      src: "/src", // required for absolute imports
    },
  },
});
