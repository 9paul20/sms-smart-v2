import { URL, fileURLToPath } from 'node:url';
import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';
import { defineConfig } from 'vite';
import oxlintPlugin from 'vite-plugin-oxlint';

// https://vitejs.dev/config/
const _plugins = [
  million.vite({
    auto: true,
  }),
  react(),
  oxlintPlugin({
    path: 'src',
  }),
];
// _plugins.unshift(MillionLint.vite())
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: _plugins,
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
  },
});
