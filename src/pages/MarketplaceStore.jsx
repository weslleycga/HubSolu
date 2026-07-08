import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronLeft, ChevronRight, ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketplaceStore() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Produto 1', price: 29.90, quantity: 1, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80' },
    { id: 2, name: 'Produto 2', price: 45.00, quantity: 2, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&q=80' }
  ]);

  const products = [
    { name: 'Pizza Margherita', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', price: 45.90 },
    { name: 'Burger Clássico', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', price: 32.50 },
    { name: 'Frango Assado', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=500&q=80', price: 28.00 },
    { name: 'Massa Bolonhesa', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80', price: 38.90 },
    { name: 'Salada Fit', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', price: 24.90 },
    { name: 'Tábua de Frios', img: 'https://images.unsplash.com/photo-1574969476901-7fa197c40d99?w=500&q=80', price: 65.00 },
    { name: 'Sushi Combo', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', price: 89.90 },
    { name: 'Risoto de Cogumelos', img: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500&q=80', price: 54.00 },
    { name: 'Camarão Empanado', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=500&q=80', price: 72.00 },
    { name: 'Costela BBQ', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', price: 85.00 },
    { name: 'Bolo de Chocolate', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80', price: 18.00 },
    { name: 'Salmão Grelhado', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80', price: 68.00 }
  ];

  return (
    <div className="min-h-screen bg-hub-bg text-hub-text-primary font-body flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-hub-border bg-hub-card sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-hub-border flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&q=80" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <h1 className="text-xl font-bold">Nome da empresa</h1>
        </div>
        <div className="relative">
          <button className="p-3 rounded-full bg-hub-border hover:bg-hub-primary/20 transition-colors relative">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-hub-primary text-white text-xs font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-hub-text-secondary" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Barra de pesquisa" 
              className="w-full bg-hub-card border border-hub-border rounded-full py-4 pl-12 pr-4 focus:outline-none focus:border-hub-primary focus:ring-1 focus:ring-hub-primary transition-all shadow-inner"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4 hide-scrollbar">
            {['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'].map((cat, idx) => (
              <button 
                key={idx}
                className={`px-8 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  idx === 0 
                    ? 'bg-hub-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                    : 'bg-hub-card border border-hub-border text-hub-text-secondary hover:text-white hover:border-hub-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div key={idx} className="group bg-hub-card border border-hub-border rounded-2xl overflow-hidden hover:border-hub-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-hub-primary text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      Adicionar
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center flex-1 justify-between">
                  <h3 className="font-semibold text-center mb-2">{prod.name}</h3>
                  <span className="text-hub-primary font-bold">R$ {prod.price.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination & Back */}
          <div className="flex justify-between items-center mt-12 mb-8">
            <Link 
              to="/marketplace/category" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hub-card hover:bg-hub-border transition-colors text-hub-text-secondary hover:text-white"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-hub-card hover:bg-hub-border transition-colors">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-hub-primary"></div>
                <div className="w-2 h-2 rounded-full bg-hub-border"></div>
                <div className="w-2 h-2 rounded-full bg-hub-border"></div>
              </div>
              <button className="p-2 rounded-full bg-hub-card hover:bg-hub-border transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Cart Sidebar */}
        <div className="hidden xl:flex w-[380px] shrink-0 flex-col bg-hub-card border border-hub-border rounded-3xl overflow-hidden h-[calc(100vh-140px)] sticky top-[100px] shadow-2xl">
          <div className="p-6 border-b border-hub-border bg-hub-bg/50">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="text-hub-primary" />
              Seu Carrinho
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center group">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate text-sm">{item.name}</h4>
                  <p className="text-hub-primary font-bold text-sm mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 bg-hub-bg rounded-lg p-1 border border-hub-border">
                    <button className="p-1 hover:text-hub-primary transition-colors rounded">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button className="p-1 hover:text-hub-primary transition-colors rounded">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button className="p-2 text-hub-text-secondary hover:text-error transition-colors rounded-lg opacity-0 group-hover:opacity-100">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-hub-border bg-hub-bg/50 mt-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-hub-text-secondary font-medium">Total</span>
              <span className="text-2xl font-bold">
                R$ {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button className="w-full py-4 rounded-xl bg-hub-primary text-white font-bold text-lg hover:bg-hub-primary-hover transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-1">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
