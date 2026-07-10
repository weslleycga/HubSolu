# Regras do Projeto HubSolu

- **Documentação de Mudanças:** Sempre adicione as mudanças que estão sendo feitas diretamente no arquivo `README.md` (na seção de Últimas Atualizações), além de qualquer outro local pertinente. O usuário gosta de acompanhar o progresso no README principal.
- **Data e Hora nas Mudanças:** Sempre que for adicionar alguma coisa no `README.md`, a data e a hora devem ser registradas de forma **individual para cada mudança** (ex: `- [DD/MM/AAAA HH:MM] Descrição`), e não apenas no título da seção.

## Padrões de Design e UI (Design System)

- **Layout Mobile-First (480px):** Todas as páginas da aplicação devem respeitar a arquitetura mobile-first. O conteúdo principal deve estar centralizado na tela com um container de fundo escuro (`bg-black` na div pai), e o wrapper principal da tela deve usar as classes `w-full max-w-[480px] shadow-2xl relative min-h-screen` para restringir o layout simulando a proporção de um smartphone. Telas não devem expandir para a largura total do monitor.
- **Tipografia e Tokens (Tailwind):** A tipografia deve seguir a hierarquia do sistema de tokens: `.font-headline` para títulos e `.font-body` para parágrafos. Utilize as cores semânticas configuradas (como `bg-surface`, `text-on-surface`, `text-primary`, etc.) ao invés de cores hexadecimais arbitrárias.
- **Botões e Modais:** Manter os botões com bordas arredondadas (`rounded-xl` ou `rounded-pill`) e adicionar micro-interações (ex: `hover:scale-[1.02] active:scale-[0.98] transition-all`). Pop-ups e modais devem ser centralizados na tela ou exibidos como gavetas (drawers) amigáveis ao toque, geralmente acompanhados de `backdrop-blur-sm`.
- **Tema Escuro/Claro:** O projeto suporta a alternância de temas por meio de variáveis CSS (`index.css`). Mantenha os contrastes acessíveis.
