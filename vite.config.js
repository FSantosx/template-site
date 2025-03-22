import { defineConfig, transformWithEsbuild } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if(!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader:"jsx",
          jsx:"automatic"
        });
      }
    },
    tailwindcss(),
    react()
  ],
  server: {
    port : 3000
  },
  optmizeDeps: {
    loader: {
      ".js":"jsx"
    }
  }
});
