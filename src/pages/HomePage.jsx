import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-[#0e0e11] rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <p className="text-on-surface-variant text-sm font-medium">Olá, João 👋</p>
            <h1 className="text-on-surface font-headline font-bold text-xl">Seu Negócio</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-xl">store</span>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-primary rounded-2xl p-5 shadow-[0_10px_30px_rgba(189,157,255,0.2)] relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <p className="text-on-primary-fixed/80 text-sm font-medium mb-1">Saldo em Caixa</p>
          <div className="flex items-end gap-2 mb-4">
            <h2 className="text-on-primary-fixed text-3xl font-extrabold tracking-tight">R$ 12.450<span className="text-xl">,00</span></h2>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-on-primary-fixed text-xs font-semibold bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
              <ArrowUpRight size={14} />
              <span>+15% mês</span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h3 className="text-on-surface font-headline font-bold mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-primary shadow-sm">
              <ArrowUpRight size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface">Receber</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-error shadow-sm">
              <ArrowDownRight size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface">Pagar</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-tertiary shadow-sm">
              <Package size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface">Produto</span>
          </button>
          <Link to="/estoque" className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">more_horiz</span>
            </div>
            <span className="text-xs font-medium text-on-surface">Mais</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 pb-24">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-on-surface font-headline font-bold">Últimas Movimentações</h3>
          <button className="text-primary text-sm font-semibold flex items-center">
            Ver todas <ChevronRight size={16} />
          </button>
        </div>

        <div className="space-y-3">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container border border-outline-variant/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Wallet size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Venda PDV</p>
                <p className="text-xs text-on-surface-variant">Hoje, 14:32</p>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">+ R$ 150,00</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container border border-outline-variant/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                <Package size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Fornecedor</p>
                <p className="text-xs text-on-surface-variant">Ontem, 09:15</p>
              </div>
            </div>
            <span className="text-sm font-bold text-on-surface">- R$ 450,00</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container border border-outline-variant/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Venda Online</p>
                <p className="text-xs text-on-surface-variant">Ontem, 16:45</p>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">+ R$ 89,90</span>
          </div>
        </div>
      </div>
    </div>
  );
}
