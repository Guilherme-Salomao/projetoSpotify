import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/projetoSpotify/", // **<<< ajuste aqui**
  plugins: [react()],
});
