import React, { useState, useEffect } from 'react';
import { Check, Palette, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'food', label: 'Alimentação' },
  { id: 'fashion', label: 'Roupas e Moda' },
  { id: 'beauty', label: 'Cosméticos e Beleza' }
];

const themes = {
  food: [
    { id: 'theme-food-fresh-organic', name: 'Fresh Organic', primary: '#4ade80', secondary: '#fef08a', bg: '#f8fafc', text: '#0f172a' },
    { id: 'theme-food-spicy-bite', name: 'Spicy Bite', primary: '#ef4444', secondary: '#f97316', bg: '#fffbeb', text: '#451a03' },
    { id: 'theme-food-dark-bbq', name: 'Dark BBQ', primary: '#f59e0b', secondary: '#dc2626', bg: '#171717', text: '#fafafa' }
  ],
  fashion: [
    { id: 'theme-fashion-minimalist', name: 'Minimalist Chic', primary: '#171717', secondary: '#e5e5e5', bg: '#ffffff', text: '#000000' },
    { id: 'theme-fashion-pastel-vibe', name: 'Pastel Vibe', primary: '#c084fc', secondary: '#f472b6', bg: '#faf5ff', text: '#4c1d95' },
    { id: 'theme-fashion-streetwear', name: 'Denim & Street', primary: '#2563eb', secondary: '#fbbf24', bg: '#f1f5f9', text: '#0f172a' }
  ],
  beauty: [
    { id: 'theme-beauty-nude-elegance', name: 'Nude Elegance', primary: '#d97757', secondary: '#f3d2c1', bg: '#fffbf9', text: '#2b1b17' },
    { id: 'theme-beauty-luxury-gold', name: 'Luxury Gold', primary: '#d4af37', secondary: '#1a1a1a', bg: '#0a0a0a', text: '#f3f4f6' },
    { id: 'theme-beauty-rose-water', name: 'Rose Water', primary: '#fb7185', secondary: '#fecdd3', bg: '#fff1f2', text: '#881337' }
  ]
};

export default function ThemeSelectorPage() {
  const [activeCategory, setActiveCategory] = useState('food');
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('store_theme') || 'theme-fashion-minimalist';
  });

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
    localStorage.setItem('store_theme', themeId);
    // Para efeito de preview local na document.body também (opcional)
    document.body.className = `bg-background text-on-background font-body antialiased ${themeId}`;
  };

  useEffect(() => {
    // Garante que o painel principal não seja quebrado se a classe de tema afetar o app todo
    document.body.classList.remove(activeTheme);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Palette className="text-hub-primary" />
          Personalização da Loja
        </h1>
        <p className="text-hub-text-secondary text-sm">
          Escolha o tema perfeito para combinar com a identidade do seu negócio. Suas alterações são aplicadas instantaneamente.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-hub-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                : 'bg-hub-card border border-hub-border text-hub-text-secondary hover:text-white hover:border-hub-primary/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Theme Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {themes[activeCategory].map(theme => (
          <div 
            key={theme.id}
            onClick={() => handleSelectTheme(theme.id)}
            className={`relative p-1 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
              activeTheme === theme.id ? 'bg-gradient-to-r from-hub-primary to-secondary' : 'bg-transparent hover:bg-hub-border/50'
            }`}
          >
            <div className="bg-hub-card rounded-xl p-4 h-full border border-hub-border">
              {/* Preview UI */}
              <div 
                className="w-full h-32 rounded-lg mb-4 shadow-inner relative overflow-hidden"
                style={{ backgroundColor: theme.bg }}
              >
                <div className="absolute top-3 left-3">
                  <div className="w-16 h-3 rounded" style={{ backgroundColor: theme.text, opacity: 0.8 }}></div>
                  <div className="w-10 h-2 rounded mt-1" style={{ backgroundColor: theme.text, opacity: 0.4 }}></div>
                </div>
                
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full" style={{ backgroundColor: theme.secondary }}></div>
                
                <div className="absolute bottom-3 left-3 right-3 h-8 rounded-md flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: theme.primary, color: theme.bg }}>
                  Ação Principal
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm">{theme.name}</h3>
                  <div className="flex gap-1 mt-2">
                    <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: theme.primary }}></div>
                    <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: theme.secondary }}></div>
                    <div className="w-4 h-4 rounded-full shadow-sm border border-gray-300" style={{ backgroundColor: theme.bg }}></div>
                    <div className="w-4 h-4 rounded-full shadow-sm border border-gray-300" style={{ backgroundColor: theme.text }}></div>
                  </div>
                </div>
                {activeTheme === theme.id && (
                  <div className="w-6 h-6 rounded-full bg-hub-primary text-white flex items-center justify-center shadow-lg">
                    <Check size={14} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-hub-card border border-hub-border rounded-2xl p-6 text-center">
        <Smartphone className="mx-auto text-hub-text-secondary mb-3" size={32} />
        <h3 className="font-semibold mb-2">Visualizar Loja</h3>
        <p className="text-sm text-hub-text-secondary mb-4">
          Veja como seu catálogo está ficando para os clientes.
        </p>
        <Link 
          to="/marketplace/store"
          className="inline-block w-full py-3 rounded-xl bg-hub-border hover:bg-hub-primary hover:text-white transition-colors text-sm font-medium"
        >
          Acessar minha Loja
        </Link>
      </div>
    </div>
  );
}
