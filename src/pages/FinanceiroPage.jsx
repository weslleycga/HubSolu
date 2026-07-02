import React from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, FileText, Calendar, Filter, MoreVertical } from 'lucide-react';

export default function FinanceiroPage() {
  const transacoes = [
    { id: 1, tipo: 'entrada', descricao: 'Venda de Balcão (Dinheiro)', data: 'Hoje, 14:32', valor: '45,90' },
    { id: 2, tipo: 'saida', descricao: 'Fornecedor (Bebidas)', data: 'Hoje, 11:15', valor: '120,00' },
    { id: 3, tipo: 'entrada', descricao: 'Ifood (PIX)', data: 'Ontem, 20:45', valor: '89,90' },
    { id: 4, tipo: 'saida', descricao: 'Conta de Luz', data: 'Ontem, 10:00', valor: '350,00' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-[#0e0e11] border-b border-outline-variant/10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-on-surface font-headline font-bold text-2xl">Financeiro</h1>
          <button className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant flex items-center justify-center">
            <Calendar size={18} />
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-surface-container-high to-surface rounded-2xl p-5 border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-xs font-medium mb-1">Saldo Atual</p>
              <h2 className="text-on-surface text-3xl font-extrabold tracking-tight">R$ 12.450,00</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign size={20} />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1 bg-surface-container rounded-xl p-3 border border-outline-variant/5">
              <div className="flex items-center gap-1 text-[10px] text-on-surface-variant mb-1">
                <ArrowUpRight size={12} className="text-primary" />
                Receitas (Mês)
              </div>
              <p className="text-sm font-bold text-primary">R$ 15.300</p>
            </div>
            <div className="flex-1 bg-surface-container rounded-xl p-3 border border-outline-variant/5">
              <div className="flex items-center gap-1 text-[10px] text-on-surface-variant mb-1">
                <ArrowDownRight size={12} className="text-error" />
                Despesas (Mês)
              </div>
              <p className="text-sm font-bold text-error">R$ 2.850</p>
            </div>
          </div>
        </div>
      </header>

      {/* Transactions List */}
      <div className="px-6 py-6 pb-24">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-on-surface font-headline font-bold">Transações Recentes</h3>
          <button className="text-on-surface-variant flex items-center gap-1 text-sm font-medium">
            <Filter size={14} /> Filtros
          </button>
        </div>

        <div className="space-y-3">
          {transacoes.map(trans => (
            <div key={trans.id} className="flex items-center justify-between p-4 rounded-xl bg-surface-container border border-outline-variant/5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  trans.tipo === 'entrada' ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'
                }`}>
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-on-surface line-clamp-1">{trans.descricao}</h4>
                  <p className="text-[11px] text-on-surface-variant">{trans.data}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-sm font-bold ${
                  trans.tipo === 'entrada' ? 'text-primary' : 'text-on-surface'
                }`}>
                  {trans.tipo === 'entrada' ? '+' : '-'} R$ {trans.valor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
