# 🚀 HubSolu - Hubcontrole

Este repositório é destinado para o projeto de interface da plataforma **HubSolu (Hubcontrole)**. O projeto consiste em um protótipo funcional de Front-End, com foco em uma ótima experiência de usuário (UX), interfaces responsivas e aplicação prática de Design System.

## 📋 Visão Geral

O projeto possui um fluxo completo de apresentação e cadastro do usuário, dividido nas seguintes telas:

- 🏠 **`index.html` (Landing Page)**: Página inicial de apresentação do produto e conversão.
- 📝 **`cadastro.html` (Cadastro)**: Formulário de criação de conta com validações dinâmicas (ex: formatação automática de celular e validação HTML5).
- 🏪 **`selecao_negocio.html` (Seleção de Negócio)**: Etapa de personalização, onde o usuário seleciona as categorias que melhor descrevem a sua empresa.
- 💳 **`escolha_plano.html` (Planos)**: Tela de precificação com os planos oferecidos pela plataforma.
- 👤 **`perfil_usuario.html` (Perfil)**: Painel de gestão de dados pessoais, informações do negócio e do plano atual.
- 🎨 **`demo_delivery_ui.html` (Bônus: Psicologia das Cores)**: Um miniapp interativo de demonstração criado para ilustrar como a teoria e a psicologia das cores (Fast Food, Vegano, Dark Mode) impactam aplicativos de delivery.

## 🛠 Tecnologias Utilizadas

- **Node.js & Vite**: Ferramentas modernas de build e servidor de desenvolvimento para otimizar os assets e entregar alta performance.
- **HTML5**: Estruturação semântica e acessível.
- **Tailwind CSS**: Framework utilitário configurado localmente via Node.js para estilização rápida, responsiva e alinhada ao design system moderno (com CSS compilado e otimizado).
- **Vanilla JavaScript**: Lógica de interface, formatação de máscaras de input e alternância dinâmica de temas.

## 🚀 Como Executar Localmente

Este projeto utiliza Node.js e Vite para gerenciar dependências e servir as páginas com recarregamento instantâneo.

1. Clone este repositório:
   ```bash
   git clone https://github.com/weslleycga/HubSolu.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd HubSolu
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173/`).

Para gerar a versão otimizada de produção, utilize `npm run build`.

## 📝 Últimas Atualizações e Changelog

**Últimas modificações:**

- [08/07/2026 11:13] Transformação do carrinho de compras em drawer (pop-up interativo) na MarketplaceStore, adição de interatividade nos itens/filtros, e conversão das páginas MarketplaceHome e MarketplaceCategory para o Modo Claro.
- [08/07/2026 10:13] Implementação do motor de temas customizáveis (`ThemeSelectorPage`) e aplicação dinâmica de cores nas lojas do Marketplace via CSS Variables e Tailwind.
- [08/07/2026 08:30] Criação de três novas telas para o Marketplace (`MarketplaceHome`, `MarketplaceCategory`, `MarketplaceStore`) conforme referências solicitadas, com design moderno e premium utilizando TailwindCSS e React.
- [03/07/2026 08:43] Criação do arquivo `tecnologias_e_roteiro_de_estudos.md` detalhando as tecnologias utilizadas e contendo um roteiro de estudos passo a passo.
- [02/07/2026 16:30] Migração das páginas HTML legadas para componentes React (SPA) com arquitetura mobile-first, incluindo a interface de demonstração de delivery.
- [01/07/2026 14:00] Adição de interatividade à interface de delivery (categorias, cabeçalho e navegação) e correção de layouts de formulários.
- [01/07/2026 10:00] Refatoração da estrutura do projeto (migração de páginas para a pasta `src`), atualização de configurações do Tailwind e correção de assets/imagens.
- [30/06/2026 11:55] Refatoração do projeto para utilizar Node.js, Vite e TailwindCSS local, substituindo o uso de CDN por um fluxo de build profissional.
- [30/06/2026 10:00] Adição de sub-telas interativas (Endereços, Pagamentos e Pedidos) na aba de Perfil em `demo_delivery_ui.html`.
- [30/06/2026 09:50] Atualização da tela `demo_delivery_ui.html` para incluir navegação por abas com uma visão interativa de Perfil.
- [30/06/2026 09:37] Criação da tela `perfil_usuario.html` com layout em Dark Mode e formulários de gestão.
- [30/06/2026 08:45] Adição de pasta `images/` com imagens estáticas locais.
- [30/06/2026 09:11] Atualização da tela `demo_delivery_ui.html` para utilizar imagens locais de produtos (Fast Food, Vegan, e BBQ) ao invés de placeholders online.
- [30/06/2026 09:13] Definição do tema "BBQ Dark Mode" como o padrão principal para a UI de demonstração.

Consulte o arquivo [CHANGELOG.md](./CHANGELOG.md) para ver o histórico detalhado de todas as alterações, melhorias e correções feitas neste projeto.
