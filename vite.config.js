import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Genera chunks más pequeños y cacheables por separado
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Umbral de warning de chunk (en kB)
    chunkSizeWarningLimit: 600,
    // Assets pequeños se inline en el HTML en lugar de archivos separados
    assetsInlineLimit: 4096,
    // Minificación con esbuild (más rápido que terser, igual de efectivo)
    minify: 'esbuild',
    // Activa CSS code splitting
    cssCodeSplit: true,
    // Source maps OFF en producción (menos peso)
    sourcemap: false,
    // Target moderno = bundles más pequeños
    target: 'es2020',
  },
})

