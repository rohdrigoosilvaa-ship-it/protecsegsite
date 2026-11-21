import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const page = (p: string) => fileURLToPath(new URL(p, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        pgr: page('./pgr-pcmso-sao-paulo/index.html'),
        nr01: page('./nr-01-riscos-psicossociais/index.html'),
        gestao: page('./gestao-sst-esocial/index.html'),
      },
    },
  },
})
