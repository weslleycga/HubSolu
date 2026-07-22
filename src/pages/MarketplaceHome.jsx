import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronLeft, ChevronRight, Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function MarketplaceHome() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [activeMainCategory, setActiveMainCategory] = useState('Alimentação');

  const allCategories = {
    'Alimentação': [
      { name: 'Pizzaria', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
      { name: 'Bar', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80' },
      { name: 'Sorveteria', img: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&q=80' },
      { name: 'Confeitaria', img: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=500&q=80' },
      { name: 'Hamburgueria', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
      { name: 'Padaria', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80' },
      { name: 'Galeteria', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=500&q=80' },
      { name: 'Mercadinho', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80' }
    ],
    'Roupas': [
      { name: 'Moda Masculina', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80' },
      { name: 'Moda Feminina', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80' },
      { name: 'Infantil', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80' },
      { name: 'Calçados', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80' },
    ],
    'Cosméticos': [
      { name: 'Maquiagem', img: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500' },
      { name: 'Perfumaria', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80' },
      { name: 'Skincare', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80' },
      { name: 'Cabelos', img: 'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&w=500' },
    ]
  };

  const currentCategories = allCategories[activeMainCategory] || [];

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-full max-w-[480px] bg-background relative min-h-screen flex flex-col shadow-2xl overflow-hidden font-body pb-20">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-hub-primary/20 flex items-center justify-center">
            <User size={20} className="text-hub-primary" />
          </div>
          <span className="font-semibold hidden sm:block">
            {isAuthenticated ? `Olá, ${user.name}` : 'Olá, Visitante'}
          </span>
        </div>
        <div className="flex gap-space-3">
          {!isAuthenticated ? (
            <>
              <button 
                onClick={() => navigate('/cadastro', { state: { from: { pathname: '/marketplace' } } })}
                className="px-space-4 py-space-2 rounded-pill text-button text-on-surface-variant hover:bg-surface-variant transition-colors"
              >
                Entrar
              </button>
              <button 
                onClick={() => navigate('/planos')}
                className="px-space-4 py-space-2 rounded-pill text-button bg-primary text-on-primary hover:bg-primary-dim transition-colors shadow-md"
              >
                Contrate
              </button>
            </>
          ) : (
            <button 
              onClick={() => logout()}
              className="flex items-center gap-2 px-space-4 py-space-2 rounded-pill text-button text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          )}
        </div>
      </header>

      <main className="w-full px-4 pt-space-4 flex-1 overflow-y-auto">
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
              <span className="text-[#a5b4fc] text-4xl mt-2 block">15% OFF</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md">Aproveite os melhores restaurantes da cidade com desconto exclusivo.</p>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="flex justify-center gap-space-3 mb-space-6 overflow-x-auto pb-space-2 hide-scrollbar">
          {['Alimentação', 'Roupas', 'Cosméticos'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveMainCategory(cat)}
              className={`px-space-4 py-space-2 rounded-pill text-button whitespace-nowrap transition-all duration-300 border ${
                activeMainCategory === cat 
                  ? 'bg-primary text-on-primary border-primary shadow-md' 
                  : 'bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Categories */}
        <div className="grid grid-cols-2 gap-space-4">
          {currentCategories.map((cat, idx) => (
            <Link 
              to="/marketplace/category"
              state={{ categoryName: cat.name, categoryImg: cat.img }}
              key={idx} 
              className="group relative rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm border border-outline-variant/30"
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradiente permanente para garantir a leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Texto sobreposto na parte inferior */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-lg leading-tight">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
      </div>
    </div>
  );
}
