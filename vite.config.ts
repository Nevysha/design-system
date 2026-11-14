/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const src = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": src } },
  build: {
    lib: {
      entry: { index: "src/index.ts", tokens: "src/tokens/index.ts" },
      formats: ["es"],
      cssFileName: "styles",
    },
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^radix-ui/, "class-variance-authority", "clsx", "tailwind-merge", "lucide-react"],
    },
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    css: false,
  },
});
