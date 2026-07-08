import React, { useState, useEffect } from 'react';
import { Camera, User, Store, Settings, LogOut, ChevronRight, Palette, Check, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const themeCategories = [
  { id: 'food', label: 'Alimentação' },
  { id: 'fashion', label: 'Moda' },
  { id: 'beauty', label: 'Beleza' }
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

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('dados');
  const [activeCategory, setActiveCategory] = useState('food');
  const [activeTheme, setActiveTheme] = useState('theme-fashion-minimalist');
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('store_theme');
    if (savedTheme) {
      setActiveTheme(savedTheme);
      if (savedTheme.includes('food')) setActiveCategory('food');
      if (savedTheme.includes('fashion')) setActiveCategory('fashion');
      if (savedTheme.includes('beauty')) setActiveCategory('beauty');
    }
  }, []);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
    localStorage.setItem('store_theme', themeId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-surface border-b border-outline-variant/10 flex justify-between items-center">
        <div>
          <h1 className="text-on-surface font-headline font-bold text-2xl">Meu Perfil</h1>
          <p className="text-on-surface-variant text-sm mt-1">Gerencie sua conta e negócio.</p>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm"
          title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <div className="px-6 py-6 space-y-6">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative group mb-3">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/20">
              <img 
                src="https://ui-avatars.com/api/?name=João+Silva&background=6366f1&color=fff" 
                alt="João Silva" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-surface-container-high border border-outline-variant/20 rounded-full flex items-center justify-center text-primary shadow-md">
              <Camera size={16} />
            </button>
          </div>
          <h2 className="text-on-surface font-bold text-lg">João Silva</h2>
          <p className="text-on-surface-variant text-sm">joao.silva@email.com</p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-surface-container rounded-xl p-1">
          <button 
            onClick={() => setActiveTab('dados')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'dados' ? 'bg-surface-container-high text-on-surface shadow' : 'text-on-surface-variant'}`}
          >
            Dados
          </button>
          <button 
            onClick={() => setActiveTab('negocio')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'negocio' ? 'bg-surface-container-high text-on-surface shadow' : 'text-on-surface-variant'}`}
          >
            Negócio
          </button>
          <button 
            onClick={() => setActiveTab('tema')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'tema' ? 'bg-surface-container-high text-on-surface shadow' : 'text-on-surface-variant'}`}
          >
            Tema
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'dados' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <label className="block text-xs font-medium text-on-surface-variant mb-1">Nome Completo</label>
              <input type="text" defaultValue="João Silva" className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-on-surface-variant mb-1">E-mail</label>
              <input type="email" defaultValue="joao.silva@email.com" className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-on-surface-variant mb-1">Celular / WhatsApp</label>
              <input type="tel" defaultValue="(11) 98765-4321" className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary/50" />
            </div>
            <button className="w-full bg-primary/10 text-primary font-bold py-3 rounded-xl mt-4 hover:bg-primary/20 transition-colors">
              Salvar Alterações
            </button>
          </div>
        )}

        {activeTab === 'negocio' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
            <div className="bg-gradient-to-br from-surface-container to-surface border border-outline-variant/10 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-on-surface font-bold flex items-center gap-2">
                      <Store size={18} className="text-primary" />
                      João Burguer's
                    </h3>
                    <p className="text-on-surface-variant text-xs mt-1">Plano atual: <span className="text-secondary font-medium">Pro</span></p>
                  </div>
                  <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded-full border border-green-500/20">Ativo</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-4">Próxima cobrança: 15/07/2026</p>
                
                <Link to="/planos" className="flex items-center justify-center w-full bg-surface-container-high border border-outline-variant/20 text-on-surface text-sm font-medium py-2.5 rounded-xl hover:bg-surface-container-highest transition-colors">
                  Gerenciar Plano
                </Link>
              </div>
            </div>
            
            <button 
              onClick={() => setActiveTab('tema')}
              className="w-full bg-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center justify-between hover:bg-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Palette className="text-primary" size={24} />
                <div className="text-left">
                  <h4 className="text-on-surface font-bold text-sm">Personalizar Loja</h4>
                  <p className="text-on-surface-variant text-xs">Mude as cores do seu cardápio</p>
                </div>
              </div>
              <ChevronRight className="text-primary" size={20} />
            </button>
          </div>
        )}

        {activeTab === 'tema' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-on-surface font-bold text-lg flex items-center gap-2">
                <Palette size={20} className="text-primary" />
                Cores da Loja
              </h3>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-2">
              {themeCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Swatches */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              {themes[activeCategory].map(theme => (
                <div 
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme.id)}
                  className={`relative p-[2px] rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeTheme === theme.id ? 'bg-gradient-to-r from-primary to-secondary shadow-lg' : 'bg-transparent hover:bg-surface-container-high'
                  }`}
                >
                  <div className="bg-surface-container rounded-xl p-4 h-full border border-outline-variant/10">
                    <div 
                      className="w-full h-16 rounded-lg mb-3 shadow-inner relative overflow-hidden"
                      style={{ backgroundColor: theme.bg }}
                    >
                      <div className="absolute top-2 left-2">
                        <div className="w-10 h-1.5 rounded" style={{ backgroundColor: theme.text, opacity: 0.8 }}></div>
                        <div className="w-6 h-1 rounded mt-1" style={{ backgroundColor: theme.text, opacity: 0.4 }}></div>
                      </div>
                      <div className="absolute top-2 right-2 w-3 h-3 rounded-full" style={{ backgroundColor: theme.secondary }}></div>
                      <div className="absolute bottom-2 left-2 right-2 h-4 rounded-[4px] flex items-center justify-center text-[6px] font-bold" style={{ backgroundColor: theme.primary, color: theme.bg }}>
                        Ação
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-on-surface">{theme.name}</h4>
                        <div className="flex gap-1 mt-1.5">
                          <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: theme.primary }}></div>
                          <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: theme.secondary }}></div>
                          <div className="w-4 h-4 rounded-full shadow-sm border border-gray-500/20" style={{ backgroundColor: theme.bg }}></div>
                          <div className="w-4 h-4 rounded-full shadow-sm border border-gray-500/20" style={{ backgroundColor: theme.text }}></div>
                        </div>
                      </div>
                      {activeTheme === theme.id && (
                        <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
                          <Check size={12} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/marketplace/store')}
              className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
            >
              Visualizar Loja
            </button>
          </div>
        )}

        {/* Options Menu (Only visible on Dados or Negocio) */}
        {activeTab !== 'tema' && (
          <div className="bg-surface-container rounded-2xl overflow-hidden mt-6">
            <button className="w-full flex items-center justify-between p-4 border-b border-outline-variant/5 text-on-surface hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-on-surface-variant" />
                <span className="text-sm font-medium">Configurações do App</span>
              </div>
              <ChevronRight size={18} className="text-on-surface-variant" />
            </button>
            <button className="w-full flex items-center justify-between p-4 text-error hover:bg-error/5 transition-colors">
              <div className="flex items-center gap-3">
                <LogOut size={20} />
                <span className="text-sm font-medium">Sair</span>
              </div>
              <ChevronRight size={18} className="text-error" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
