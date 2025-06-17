import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lotro_delivery_frontend/",
  plugins: [react()],
});
