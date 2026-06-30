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

- **HTML5**: Estruturação semântica e acessível.
- **Tailwind CSS**: Framework utilitário utilizado via CDN e scripts de configuração customizados (`tailwind.config.js`) para estilização rápida, responsiva e alinhada ao design system moderno.
- **Vanilla JavaScript**: Lógica de interface, formatação de máscaras de input e alternância dinâmica de temas, sem a necessidade de frameworks pesados adicionais.

## 🚀 Como Executar Localmente

Este projeto é estático e não requer configurações complexas de backend para a visualização inicial.

1. Clone este repositório:
   ```bash
   git clone https://github.com/weslleycga/HubSolu.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd HubSolu
   ```
3. Inicie um servidor local simples (recomendado para carregar scripts externos e módulos corretamente). Se tiver o Python instalado, você pode usar:
   ```bash
   python -m http.server 8080
   ```
4. Abra o navegador e acesse: `http://localhost:8080/`

## 📝 Últimas Atualizações e Changelog

**Últimas modificações:** 
- [30/06/2026 09:50] Atualização da tela `demo_delivery_ui.html` para incluir navegação por abas com uma visão interativa de Perfil.
- [30/06/2026 09:37] Criação da tela `perfil_usuario.html` com layout em Dark Mode e formulários de gestão.
- [30/06/2026 08:45] Adição de pasta `images/` com imagens estáticas locais.
- [30/06/2026 09:11] Atualização da tela `demo_delivery_ui.html` para utilizar imagens locais de produtos (Fast Food, Vegan, e BBQ) ao invés de placeholders online.
- [30/06/2026 09:13] Definição do tema "BBQ Dark Mode" como o padrão principal para a UI de demonstração.

Consulte o arquivo [CHANGELOG.md](./CHANGELOG.md) para ver o histórico detalhado de todas as alterações, melhorias e correções feitas neste projeto.
