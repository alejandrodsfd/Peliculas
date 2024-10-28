import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: "/Peliculas",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html', // Ubicación de tu archivo 404.html
          dest: '.' // Copiar a la raíz de `dist`
        }
      ]
    })
  ],
})