import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
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
    <div className="flex justify-center bg-[#212529] min-h-screen">
      <div className="w-full max-w-[480px] bg-[#f8f9fa] relative min-h-screen flex flex-col shadow-2xl overflow-hidden font-body pb-20 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-[#e9ecef] bg-[#f8f9fa] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#e9ecef] flex items-center justify-center border border-[#ced4da]">
            <User size={20} className="text-[#495057]" />
          </div>
          <span className="font-semibold text-[#212529] hidden sm:block">
            {isAuthenticated ? `Olá, ${user.name}` : 'Olá, Visitante'}
          </span>
        </div>
        <div className="flex gap-2">
          {!isAuthenticated ? (
            <>
              <button 
                onClick={() => navigate('/cadastro', { state: { from: { pathname: '/marketplace' } } })}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#495057] hover:bg-[#e9ecef] transition-colors"
              >
                Entrar
              </button>
              <button 
                onClick={() => navigate('/planos')}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-[#343a40] text-[#f8f9fa] hover:bg-[#212529] transition-colors shadow-sm"
              >
                Contrate
              </button>
            </>
          ) : (
            <button 
              onClick={() => logout()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#e03131] hover:bg-[#fff5f5] transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          )}
        </div>
      </header>

      <main className="w-full px-6 pt-6 flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-8 shadow-md group border border-[#ced4da]">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" 
            alt="Hero Banner" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/90 via-[#212529]/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-4 tracking-tight">
              CUPOM<br />
              <span className="text-[#adb5bd] text-3xl mt-2 block">15% OFF</span>
            </h1>
            <p className="text-sm text-[#dee2e6] max-w-[200px] leading-relaxed">Aproveite os melhores estabelecimentos da cidade com desconto exclusivo.</p>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 hide-scrollbar">
          {['Alimentação', 'Roupas', 'Cosméticos'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveMainCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border ${
                activeMainCategory === cat 
                  ? 'bg-[#343a40] text-[#f8f9fa] border-[#343a40] shadow-sm' 
                  : 'bg-[#f1f3f5] text-[#495057] border-[#ced4da] hover:bg-[#e9ecef]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Categories */}
        <div className="grid grid-cols-2 gap-4">
          {currentCategories.map((cat, idx) => (
            <Link 
              to="/marketplace/category"
              state={{ categoryName: cat.name, categoryImg: cat.img }}
              key={idx} 
              className="group relative rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-[#dee2e6]"
            >
              <div className="aspect-[4/3] w-full bg-[#e9ecef]">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/90 via-[#212529]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-[#f8f9fa] font-bold text-lg md:text-xl drop-shadow-lg leading-tight">{cat.name}</h3>
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
