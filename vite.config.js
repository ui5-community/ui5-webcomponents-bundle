// vite.config.js
import { defineConfig } from "vite";

export default defineConfig(async () => {
    return {
        build: {
            outDir: "dist/assets",
            lib: {
                entry: "src/playground/bundle.esm.js",
                formats: ["es"],
                fileName: () => "bundle.esm.js",
            },
        },
    };
});

/*
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[ext]/[name][extname]',
                chunkFileNames: 'assets/chunks/[name].[hash].js',
                entryFileNames: 'assets/bundle.esm.js'
            }
        }
    }
})
*/
