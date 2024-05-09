import { fileURLToPath, URL } from 'node:url'
import million from "million/compiler"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // '@js': fileURLToPath(new URL('./resources/js', import.meta.url)),
            // '@css': fileURLToPath(new URL('./resources/css', import.meta.url)),
            // '@images': fileURLToPath(new URL('./resources/images', import.meta.url)),
            // '@node_modules': fileURLToPath(new URL('./node_modules', import.meta.url)),
            // '@src': fileURLToPath(new URL('./resources/src', import.meta.url)),
            // '@svg': fileURLToPath(new URL('./resources/svg', import.meta.url)),
            // '@views': fileURLToPath(new URL('./resources/views', import.meta.url))
        },
    }
})
