import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts'],
      name: 'react-components-hmatoba',
      formats: ['cjs', 'es'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
