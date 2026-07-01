import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cadastro: resolve(__dirname, 'src/pages/cadastro.html'),
        escolha_plano: resolve(__dirname, 'src/pages/escolha_plano.html'),
        selecao_negocio: resolve(__dirname, 'src/pages/selecao_negocio.html'),
        demo_delivery_ui: resolve(__dirname, 'src/pages/demo_delivery_ui.html'),
        perfil_usuario: resolve(__dirname, 'src/pages/perfil_usuario.html'),
      },
    },
  },
});
