import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // relative paths so the build works on GitHub Pages / itch.io
  build: {
    chunkSizeWarningLimit: 1600, // Phaser alone is ~1.2 MB; silence the warning
  },
});
