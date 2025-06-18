import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
    base: "/ConductorApp-HP",
    plugins: [
        react(),
        tailwindcss(),
        {
            // Resolve the problem that 404 page is shown when the user of the system using React Router reload.
            name: "copy-index-as-404-page",
            closeBundle() {
                const indexPath = resolve(__dirname, "build/index.html");
                const indexHtml = readFileSync(indexPath, "utf-8");
                writeFileSync(resolve(__dirname, "build/404.html"), indexHtml);
            },
        },
    ],
    build: {
        outDir: "build",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
});
