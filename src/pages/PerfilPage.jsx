import React, { useState } from 'react';
import { Camera, User, Store, Settings, LogOut, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('dados');
  const { isDark, toggleTheme } = useTheme();

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
        </div>

        {/* Tab Content */}
        {activeTab === 'dados' && (
          <div className="space-y-4">
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
            <button className="w-full bg-primary/10 text-primary font-bold py-3 rounded-xl mt-4">
              Salvar Alterações
            </button>
          </div>
        )}

        {activeTab === 'negocio' && (
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
              
              <Link to="/planos" className="flex items-center justify-center w-full bg-surface-container-high border border-outline-variant/20 text-on-surface text-sm font-medium py-2.5 rounded-xl">
                Gerenciar Plano
              </Link>
            </div>
          </div>
        )}

        {/* Options Menu */}
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

      </div>
    </div>
  );
}
