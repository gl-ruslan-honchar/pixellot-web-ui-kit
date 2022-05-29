import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: ["vue"],
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main-lib.ts"),
      name: "pixellot-web-ui-kit",
      fileName: (format) => `pixellot-web-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  plugins: [vue()],
});
