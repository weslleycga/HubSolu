import React from 'react';
import { Package, Plus, Search, Filter, AlertCircle, ChevronRight, MoreVertical } from 'lucide-react';

export default function EstoquePage() {
  const produtos = [
    { id: 1, nome: 'Hambúrguer Artesanal', categoria: 'Lanches', preco: '24,90', qtd: 45, status: 'normal' },
    { id: 2, nome: 'Coca-Cola 350ml', categoria: 'Bebidas', preco: '6,00', qtd: 8, status: 'baixo' },
    { id: 3, nome: 'Batata Frita Média', categoria: 'Acompanhamentos', preco: '12,00', qtd: 120, status: 'normal' },
    { id: 4, nome: 'Maionese da Casa', categoria: 'Molhos', preco: '3,50', qtd: 2, status: 'critico' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-[#0e0e11] border-b border-outline-variant/10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-on-surface font-headline font-bold text-2xl">Estoque</h1>
          <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Plus size={20} />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline-variant">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Buscar produto..."
              className="w-full bg-surface-container border border-outline-variant/20 rounded-xl py-2.5 pl-10 pr-4 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50"
            />
          </div>
          <button className="w-11 h-11 bg-surface-container border border-outline-variant/20 rounded-xl flex items-center justify-center text-on-surface-variant">
            <Filter size={18} />
          </button>
        </div>
      </header>

      {/* Overview Cards */}
      <div className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
        <div className="min-w-[140px] bg-surface-container rounded-xl p-4 border border-outline-variant/10">
          <div className="flex items-center gap-2 mb-2">
            <Package size={16} className="text-primary" />
            <span className="text-xs font-medium text-on-surface-variant">Total Itens</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface">342</h3>
        </div>
        <div className="min-w-[140px] bg-error/10 rounded-xl p-4 border border-error/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={16} className="text-error" />
            <span className="text-xs font-medium text-error">Estoque Baixo</span>
          </div>
          <h3 className="text-xl font-bold text-error">12</h3>
        </div>
      </div>

      {/* Product List */}
      <div className="px-6 pb-6">
        <h3 className="text-on-surface font-headline font-bold mb-4">Seus Produtos</h3>
        
        <div className="space-y-3">
          {produtos.map(produto => (
            <div key={produto.id} className="flex items-center justify-between p-4 rounded-xl bg-surface-container border border-outline-variant/5">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  produto.status === 'critico' ? 'bg-error/20 text-error' :
                  produto.status === 'baixo' ? 'bg-[#eab308]/20 text-[#eab308]' :
                  'bg-surface-container-highest text-on-surface-variant'
                }`}>
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{produto.nome}</h4>
                  <p className="text-[11px] text-on-surface-variant">{produto.categoria}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-primary">R$ {produto.preco}</span>
                    <span className="text-[10px] text-outline-variant">•</span>
                    <span className={`text-[11px] font-bold ${
                      produto.status === 'critico' ? 'text-error' :
                      produto.status === 'baixo' ? 'text-[#eab308]' :
                      'text-on-surface-variant'
                    }`}>
                      {produto.qtd} unid.
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-on-surface p-1">
                <MoreVertical size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
