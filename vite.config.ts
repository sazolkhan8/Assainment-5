import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  base: ProcessingInstruction.env.VITE_BASE_PATH || "/Assainment-5/blob/main/vite.config.ts",
})
