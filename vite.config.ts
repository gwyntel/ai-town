import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    proxy: {
      '/ws': {
        target: process.env.VITE_CONVEX_WS_URL || 'wss://flippant-opossum-882.convex.cloud',
        ws: true,
        secure: true,
        changeOrigin: true
      }
    }
  },
  base: '/'
});
