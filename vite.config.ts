import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
});
