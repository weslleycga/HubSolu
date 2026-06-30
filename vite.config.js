import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cadastro: resolve(__dirname, 'cadastro.html'),
        escolha_plano: resolve(__dirname, 'escolha_plano.html'),
        selecao_negocio: resolve(__dirname, 'selecao_negocio.html'),
        demo_delivery_ui: resolve(__dirname, 'demo_delivery_ui.html'),
        perfil_usuario: resolve(__dirname, 'perfil_usuario.html'),
      },
    },
  },
});
