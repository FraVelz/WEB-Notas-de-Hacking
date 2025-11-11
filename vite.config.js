import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  base: process.env.NODE_ENV === 'production' ? '/WEB-Notas-de-Hacking/' : '/',

  server: {
    historyApiFallback: true
  },

   build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Vite se encargará de dividir automáticamente
      },
    },
  },
});
