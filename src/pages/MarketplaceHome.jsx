import React from 'react';
import { Search, ShoppingCart, ChevronLeft, ChevronRight, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketplaceHome() {
  const categories = [
    { name: 'Pizzaria', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
    { name: 'Bar', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80' },
    { name: 'Sorveteria', img: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&q=80' },
    { name: 'Confeitaria', img: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=500&q=80' },
    { name: 'Hamburgueria', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
    { name: 'Padaria', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80' },
    { name: 'Galeteria', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=500&q=80' },
    { name: 'Mercadinho', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80' }
  ];

  return (
    <div className="min-h-screen bg-hub-bg text-hub-text-primary font-body pb-20">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-hub-border bg-hub-card sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-hub-primary/20 flex items-center justify-center">
            <User size={20} className="text-hub-primary" />
          </div>
          <span className="font-semibold hidden sm:block">Olá, Visitante</span>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full font-medium text-hub-text-secondary hover:text-white transition-colors">
            Entrar
          </button>
          <button className="px-6 py-2 rounded-full font-medium bg-hub-primary text-white hover:bg-hub-primary-hover transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            Contrate
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" 
            alt="Hero Banner" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              CUPOM<br />
              <span className="text-hub-primary">15% OFF</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md">Aproveite os melhores restaurantes da cidade com desconto exclusivo.</p>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4 hide-scrollbar">
          {['Alimentação', 'Roupas', 'Cosméticos'].map((cat, idx) => (
            <Link 
              key={cat}
              to="/marketplace/category"
              className={`px-8 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                idx === 0 
                  ? 'bg-white text-black shadow-lg hover:bg-gray-100' 
                  : 'bg-hub-card text-hub-text-secondary hover:bg-hub-border hover:text-white'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Grid Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              to="/marketplace/store"
              key={idx} 
              className="group bg-hub-card border border-hub-border rounded-2xl overflow-hidden hover:border-hub-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-4 mt-12">
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
      </main>
    </div>
  );
}
