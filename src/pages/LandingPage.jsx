import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Package, Wallet, Bot, Star, Check, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#0e0e11] font-body text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-[#0e0e11]/80 shadow-2xl shadow-[0_1px_0_0_rgba(189,157,255,0.1)] shadow-purple-900/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <a
            className="bg-gradient-to-r from-[#bd9dff] to-[#699cff] bg-clip-text font-headline text-2xl font-black tracking-tighter text-[#bd9dff] text-transparent"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Hubcontrole
          </a>
          <div className="hidden items-center space-x-8 md:flex">
            <a
              className="border-b-2 border-[#bd9dff] pb-1 font-headline font-bold text-[#bd9dff]"
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inicio');
              }}
            >
              Início
            </a>
            <a
              className="font-headline text-[#acaaae] transition-colors hover:text-[#f0edf1]"
              href="#funcionalidades"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('funcionalidades');
              }}
            >
              Funcionalidades
            </a>
            <a
              className="font-headline text-[#acaaae] transition-colors hover:text-[#f0edf1]"
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('planos');
              }}
            >
              Planos
            </a>
            <a
              className="font-headline text-[#acaaae] transition-colors hover:text-[#f0edf1]"
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('depoimentos');
              }}
            >
              Depoimentos
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className="hidden font-body text-sm text-[#acaaae] transition-colors hover:text-[#f0edf1] md:block"
              to="/cadastro"
            >
              Entrar
            </Link>
            <Link
              className="scale-95 rounded-xl bg-gradient-primary px-6 py-2 font-body text-sm font-semibold text-white transition-transform hover:shadow-[0_0_20px_rgba(189,157,255,0.4)] active:scale-90"
              to="/cadastro"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section
          className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:py-32"
          id="inicio"
        >
          {/* Decorative Glow Background */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>
          
          <h1 className="mb-6 max-w-4xl font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface lg:text-[4rem]">
            Controle seu negócio pelo <span className="text-gradient">celular</span>
          </h1>
          <p className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
            A gestão financeira e de estoque que cabe na palma da sua mão. Esqueça planilhas
            complexas, foque no que importa: fazer sua empresa crescer.
          </p>
          <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              className="rounded-xl bg-gradient-primary px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(189,157,255,0.3)] transition-transform hover:scale-105 active:scale-95"
              to="/cadastro"
            >
              Começar grátis agora
            </Link>
            <Link
              className="flex items-center gap-2 rounded-xl border border-outline-variant/20 px-8 py-4 text-lg font-semibold text-on-surface transition-all hover:border-outline-variant/40 hover:bg-surface-container"
              to="/demo-delivery"
            >
              <span className="material-symbols-outlined">play_circle</span>
              Ver Demonstração Delivery
            </Link>
          </div>
          
          {/* Stats/Social Proof */}
          <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 border-t border-outline-variant/10 pt-10 text-sm font-medium text-on-surface-variant md:flex-row mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" />
              Mais de 11 milhões em vendas geridas
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-primary" />
              Empreendedores em todo o Brasil
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-surface-container-low px-6 py-24" id="funcionalidades">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Tudo que você precisa,<br />nada que você não usa
              </h2>
              <p className="mx-auto max-w-2xl font-body text-on-surface-variant">
                Ferramentas essenciais projetadas para a realidade do pequeno empreendedor.
              </p>
            </div>
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="glass-card rounded-xl border border-outline-variant/10 p-8 transition-colors hover:border-primary/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Package size={24} />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                  Estoque Inteligente
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Acompanhe entradas e saídas em tempo real. Saiba exatamente o que vender e quando repor.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="glass-card relative overflow-hidden rounded-xl border border-outline-variant/10 p-8 transition-colors hover:border-primary/30">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Wallet size={24} />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                  Controle Financeiro
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Contas a pagar, receber e fluxo de caixa simplificados. Visão clara da saúde do seu negócio.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="glass-card rounded-xl border border-outline-variant/10 p-8 transition-colors hover:border-primary/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
                  <Bot size={24} />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                  Assistente com IA
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Insights automáticos sobre seus dados. Receba dicas personalizadas para otimizar suas vendas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative border-t border-outline-variant/10 px-6 py-24" id="depoimentos">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-on-surface">
              Quem já usa, aprova
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="glass-card rounded-xl border border-outline-variant/10 p-8">
                <div className="mb-4 flex gap-1 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 font-body text-sm leading-relaxed text-on-surface-variant">
                  "Antes eu usava caderno. Agora controlo tudo pelo celular em 5 minutos por dia."
                </p>
                <div>
                  <p className="text-sm font-bold text-on-surface">Ana Paula</p>
                  <p className="text-xs text-on-surface-variant">Food Truck - SP</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="glass-card rounded-xl border border-outline-variant/10 p-8">
                <div className="mb-4 flex gap-1 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 font-body text-sm leading-relaxed text-on-surface-variant">
                  "Parei de perder dinheiro com estoque furado. O Hubcontrole me avisou antes de acabar."
                </p>
                <div>
                  <p className="text-sm font-bold text-on-surface">Ricardo M.</p>
                  <p className="text-xs text-on-surface-variant">Depósito de Bebidas - RJ</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="glass-card rounded-xl border border-outline-variant/10 p-8">
                <div className="mb-4 flex gap-1 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 font-body text-sm leading-relaxed text-on-surface-variant">
                  "Super fácil de usar, mesmo sem experiência com tecnologia."
                </p>
                <div>
                  <p className="text-sm font-bold text-on-surface">Fernanda L.</p>
                  <p className="text-xs text-on-surface-variant">Cafeteria - BH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative border-t border-outline-variant/10 bg-[#0e0e11] px-6 py-24" id="planos">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Planos simples e honestos
              </h2>
              <p className="font-body text-on-surface-variant">
                Sem letras miúdas. Sem surpresas no boleto.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Free Plan */}
              <div className="glass-card flex flex-col rounded-xl border border-outline-variant/20 p-8">
                <h3 className="mb-2 font-headline text-xl font-bold text-on-surface">Gratuito</h3>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-on-surface">R$ 0</span>
                  <span className="text-sm text-on-surface-variant">/para sempre</span>
                </div>
                <ul class="mb-8 flex-1 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check size={16} className="text-outline-variant" />
                    Até 20 produtos
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check size={16} className="text-outline-variant" />
                    Controle básico de estoque
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check size={16} className="text-outline-variant" />
                    Registro de vendas
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check size={16} className="text-outline-variant" />
                    Dashboard simples
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check size={16} className="text-outline-variant" />
                    Acesso mobile
                  </li>
                </ul>
                <Link
                  className="w-full text-center rounded-lg border border-outline-variant/30 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container block"
                  to="/cadastro"
                >
                  Começar grátis
                </Link>
              </div>
              
              {/* Pro Plan */}
              <div className="relative flex flex-col rounded-xl border border-[#5d469f] bg-[#17102e] p-8 shadow-[0_0_40px_rgba(116,47,229,0.15)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#553bd1] px-4 py-1 text-xs font-bold tracking-wide text-white">
                  Mais popular
                </div>
                <h3 className="mb-2 font-headline text-xl font-bold text-white">Pro</h3>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">R$ 29</span>
                  <span className="text-sm text-white/70">/por mês</span>
                </div>
                <ul class="mb-8 flex-1 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Produtos ilimitados
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Alertas de estoque baixo
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Assistente com IA
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Relatórios avançados
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Gráficos de evolução
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#7b5cff]" />
                    Suporte prioritário
                  </li>
                </ul>
                <Link
                  className="w-full text-center rounded-lg bg-[#553bd1] py-3 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(85,59,209,0.39)] transition-all hover:bg-[#644aeb] block"
                  to="/cadastro"
                >
                  Assinar Pro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-32 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              Seu negócio merece organização
            </h2>
            <p className="mb-10 font-body text-lg text-on-surface-variant">
              Comece hoje. Grátis. Sem complicação.
            </p>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#553bd1] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(85,59,209,0.3)] transition-all hover:scale-105 hover:bg-[#644aeb] active:scale-95"
              to="/cadastro"
            >
              Criar minha conta grátis
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-outline-variant/10 bg-[#000000] bg-gradient-to-t from-[#131316] to-[#0e0e11] px-8 py-12 md:flex-row">
        <div className="font-headline text-xl font-bold tracking-tighter text-[#f0edf1]">Hubcontrole</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-['Inter'] text-sm text-[#acaaae] opacity-80 transition-colors hover:text-[#699cff] hover:opacity-100" href="#">Termos de Uso</a>
          <a className="font-['Inter'] text-sm text-[#acaaae] opacity-80 transition-colors hover:text-[#699cff] hover:opacity-100" href="#">Privacidade</a>
          <a className="font-['Inter'] text-sm text-[#acaaae] opacity-80 transition-colors hover:text-[#699cff] hover:opacity-100" href="#">Cookies</a>
          <a className="font-['Inter'] text-sm text-[#acaaae] opacity-80 transition-colors hover:text-[#699cff] hover:opacity-100" href="#">Contato</a>
        </div>
        <div className="font-['Inter'] text-sm text-[#acaaae]">
          © 2026 Hubcontrole. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
