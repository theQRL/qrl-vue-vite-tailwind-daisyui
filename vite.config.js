import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      // Cally ships the calendar as web components; Vue must not treat them as
      // unresolved Vue components.
      template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('calendar-') } },
    }),
  ],
});
