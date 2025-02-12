import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Ensure Netlify is publishing the right folder
    rollupOptions: {
      output: {
        manualChunks: {
          pdfjs: ["pdfjs-dist"],
        },
      },
    },
  },
});




