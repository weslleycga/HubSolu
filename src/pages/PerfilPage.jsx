import React, { useState, useEffect } from 'react';
import { 
  Camera, User, Store, Settings, LogOut, ChevronRight, Palette, Check, 
  BarChart3, CreditCard, ShoppingBag, Users, Calendar, AlertCircle, ExternalLink, Activity
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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

// Mock Data for Metrics
const metrics = {
  activeCustomers: 142,
  totalAccesses: 1245,
  totalOrders: 328,
  dailyAccesses: [
    { day: 'Seg', value: 120 },
    { day: 'Ter', value: 150 },
    { day: 'Qua', value: 180 },
    { day: 'Qui', value: 210 },
    { day: 'Sex', value: 350 },
    { day: 'Sáb', value: 400 },
    { day: 'Dom', value: 380 },
  ]
};

const maxAccess = Math.max(...metrics.dailyAccesses.map(d => d.value));

// Mock Data for Billing
const invoices = [
  { id: 'inv_123', date: '15/07/2026', amount: 'R$ 149,90', status: 'Atrasado', url: '#' },
  { id: 'inv_122', date: '15/06/2026', amount: 'R$ 149,90', status: 'Pago', url: '#' },
  { id: 'inv_121', date: '15/05/2026', amount: 'R$ 149,90', status: 'Pago', url: '#' },
];

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('visao_geral');
  const [activeCategory, setActiveCategory] = useState('food');
  const [activeTheme, setActiveTheme] = useState('theme-fashion-minimalist');
  const [showStripeModal, setShowStripeModal] = useState(false);
  
  const navigate = useNavigate();

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

  const hasOverdue = invoices.some(inv => inv.status === 'Atrasado');

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-body transition-colors duration-300">
      {/* Header Minimalista */}
      <header className="px-6 pt-12 pb-6 border-b border-[#e9ecef] bg-[#f8f9fa] sticky top-0 z-30">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[#212529] font-headline font-bold text-2xl tracking-tight">João Burguer's</h1>
            <p className="text-[#6c757d] text-sm mt-1">Gerencie sua loja e resultados.</p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#dee2e6] shadow-sm">
            <img 
              src="https://ui-avatars.com/api/?name=Joao+Burguers&background=343a40&color=f8f9fa" 
              alt="Perfil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Minimalist Tabs */}
        <div className="flex bg-[#e9ecef] rounded-xl p-1 overflow-x-auto hide-scrollbar">
          {[
            { id: 'visao_geral', label: 'Visão Geral', icon: BarChart3 },
            { id: 'assinatura', label: 'Assinatura', icon: CreditCard },
            { id: 'dados', label: 'Dados', icon: User },
            { id: 'loja', label: 'Loja', icon: Store }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#f8f9fa] text-[#212529] shadow-sm' 
                    : 'text-[#6c757d] hover:text-[#495057]'
                }`}
              >
                <Icon size={14} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </header>

      <div className="px-6 py-6 space-y-6 flex-1 overflow-y-auto pb-24">
        
        {/* ABA: VISÃO GERAL (DASHBOARD) */}
        {activeTab === 'visao_geral' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f1f3f5] p-4 rounded-2xl border border-[#e9ecef]">
                <div className="flex items-center gap-2 text-[#495057] mb-2">
                  <Activity size={16} />
                  <h3 className="text-xs font-semibold uppercase tracking-wider">Acessos</h3>
                </div>
                <p className="text-2xl font-bold text-[#212529]">{metrics.totalAccesses}</p>
                <p className="text-[10px] text-[#6c757d] mt-1">+12% este mês</p>
              </div>
              
              <div className="bg-[#f1f3f5] p-4 rounded-2xl border border-[#e9ecef]">
                <div className="flex items-center gap-2 text-[#495057] mb-2">
                  <ShoppingBag size={16} />
                  <h3 className="text-xs font-semibold uppercase tracking-wider">Pedidos</h3>
                </div>
                <p className="text-2xl font-bold text-[#212529]">{metrics.totalOrders}</p>
                <p className="text-[10px] text-[#6c757d] mt-1">+5% este mês</p>
              </div>
            </div>

            <div className="bg-[#f1f3f5] p-5 rounded-2xl border border-[#e9ecef]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#495057]">
                  <Users size={16} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">Clientes Ativos</h3>
                </div>
                <span className="bg-[#343a40] text-[#f8f9fa] text-xs font-bold px-2.5 py-1 rounded-full">
                  {metrics.activeCustomers}
                </span>
              </div>
              <p className="text-xs text-[#6c757d]">Clientes que realizaram ao menos 1 pedido nos últimos 30 dias.</p>
            </div>

            {/* Gráfico de Acessos por Dia */}
            <div className="bg-[#f1f3f5] p-5 rounded-2xl border border-[#e9ecef]">
              <div className="flex items-center gap-2 text-[#495057] mb-6">
                <Calendar size={16} />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Acessos na Semana</h3>
              </div>
              
              <div className="flex items-end justify-between h-32 gap-2 mt-4">
                {metrics.dailyAccesses.map((day, idx) => {
                  const heightPercent = (day.value / maxAccess) * 100;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                      <div className="w-full relative flex justify-center h-full items-end">
                        <div 
                          className="w-full max-w-[24px] bg-[#ced4da] group-hover:bg-[#adb5bd] rounded-t-md transition-all duration-300 relative"
                          style={{ height: `${heightPercent}%` }}
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#495057] opacity-0 group-hover:opacity-100 transition-opacity">
                            {day.value}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-[#6c757d]">{day.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ABA: ASSINATURA E FINANCEIRO (STRIPE) */}
        {activeTab === 'assinatura' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
            
            {hasOverdue && (
              <div className="bg-[#fff5f5] border border-[#ffc9c9] p-4 rounded-2xl flex items-start gap-3">
                <AlertCircle className="text-[#fa5252] shrink-0" size={20} />
                <div>
                  <h4 className="text-[#fa5252] font-bold text-sm">Assinatura Inadimplente</h4>
                  <p className="text-[#e03131] text-xs mt-1 leading-relaxed">
                    Você possui faturas em atraso. Regularize sua situação para continuar usando a plataforma sem interrupções.
                  </p>
                  <button 
                    onClick={() => setShowStripeModal(true)}
                    className="mt-3 bg-[#fa5252] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm hover:bg-[#e03131] transition-colors"
                  >
                    Regularizar agora
                  </button>
                </div>
              </div>
            )}

            <div className="bg-[#f1f3f5] rounded-2xl border border-[#e9ecef] overflow-hidden">
              <div className="p-5 border-b border-[#e9ecef] flex justify-between items-center bg-[#f8f9fa]">
                <div>
                  <h3 className="text-sm font-semibold text-[#495057] uppercase tracking-wider mb-1">Seu Plano Atual</h3>
                  <p className="text-xl font-bold text-[#212529]">HubSolu Pro</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#212529]">R$ 149,90</p>
                  <p className="text-xs text-[#6c757d]">por mês</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#495057] mb-4">Próxima cobrança programada para <strong className="text-[#212529]">15/08/2026</strong> via Cartão de Crédito final 4242.</p>
                <button className="w-full bg-[#e9ecef] text-[#212529] font-semibold py-3 rounded-xl border border-[#ced4da] hover:bg-[#dee2e6] transition-colors flex justify-center items-center gap-2">
                  Gerenciar no Stripe <ExternalLink size={16} />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#495057] uppercase tracking-wider mb-4 px-1">Histórico de Faturas</h3>
              <div className="space-y-3">
                {invoices.map((inv) => (
                  <div key={inv.id} className="bg-[#f1f3f5] p-4 rounded-xl border border-[#e9ecef] flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#212529] text-sm">{inv.date}</p>
                      <p className="text-xs text-[#6c757d] mt-0.5">{inv.amount}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                        inv.status === 'Pago' 
                          ? 'bg-[#ebfbee] text-[#2b8a3e]' 
                          : 'bg-[#fff5f5] text-[#e03131]'
                      }`}>
                        {inv.status}
                      </span>
                      <button className="p-1.5 text-[#495057] bg-[#e9ecef] rounded-lg hover:bg-[#ced4da] transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ABA: DADOS PESSOAIS */}
        {activeTab === 'dados' && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-[#dee2e6] bg-[#e9ecef]">
                  <img 
                    src="https://ui-avatars.com/api/?name=João+Silva&background=343a40&color=f8f9fa" 
                    alt="João Silva" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#f8f9fa] border border-[#ced4da] rounded-full flex items-center justify-center text-[#495057] shadow-sm hover:bg-[#e9ecef]">
                  <Camera size={14} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#495057] uppercase tracking-wider mb-2">Nome Completo</label>
              <input type="text" defaultValue="João Silva" className="w-full bg-[#f1f3f5] border border-[#ced4da] rounded-xl px-4 py-3.5 text-[#212529] text-sm focus:outline-none focus:border-[#adb5bd] focus:bg-[#f8f9fa] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#495057] uppercase tracking-wider mb-2">E-mail</label>
              <input type="email" defaultValue="joao.silva@email.com" className="w-full bg-[#f1f3f5] border border-[#ced4da] rounded-xl px-4 py-3.5 text-[#212529] text-sm focus:outline-none focus:border-[#adb5bd] focus:bg-[#f8f9fa] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#495057] uppercase tracking-wider mb-2">Celular / WhatsApp</label>
              <input type="tel" defaultValue="(11) 98765-4321" className="w-full bg-[#f1f3f5] border border-[#ced4da] rounded-xl px-4 py-3.5 text-[#212529] text-sm focus:outline-none focus:border-[#adb5bd] focus:bg-[#f8f9fa] transition-colors" />
            </div>
            
            <button className="w-full bg-[#343a40] text-[#f8f9fa] font-bold py-4 rounded-xl mt-6 shadow-sm hover:bg-[#212529] transition-colors">
              Salvar Alterações
            </button>
            
            <button className="w-full flex items-center justify-center gap-2 mt-4 py-4 text-[#e03131] hover:bg-[#fff5f5] rounded-xl transition-colors font-medium">
              <LogOut size={18} />
              Sair da Conta
            </button>
          </div>
        )}

        {/* ABA: LOJA (TEMA) */}
        {activeTab === 'loja' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
            <div className="bg-[#f1f3f5] p-5 rounded-2xl border border-[#e9ecef]">
              <h3 className="text-sm font-semibold text-[#495057] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Palette size={16} />
                Cores da sua Loja
              </h3>
              
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-2">
                {themeCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'bg-[#343a40] text-[#f8f9fa]'
                        : 'bg-[#e9ecef] text-[#495057] hover:bg-[#dee2e6]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Swatches */}
              <div className="grid grid-cols-1 gap-4 mb-4">
                {themes[activeCategory].map(theme => (
                  <div 
                    key={theme.id}
                    onClick={() => handleSelectTheme(theme.id)}
                    className={`relative p-[2px] rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeTheme === theme.id ? 'bg-[#343a40] shadow-md' : 'bg-transparent hover:bg-[#dee2e6]'
                    }`}
                  >
                    <div className="bg-[#f8f9fa] rounded-xl p-4 h-full border border-[#e9ecef]">
                      <div 
                        className="w-full h-16 rounded-lg mb-3 border border-[#dee2e6] shadow-inner relative overflow-hidden"
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
                          <h4 className="font-bold text-sm text-[#212529]">{theme.name}</h4>
                          <div className="flex gap-1.5 mt-2">
                            <div className="w-4 h-4 rounded-full shadow-sm border border-[#dee2e6]" style={{ backgroundColor: theme.primary }}></div>
                            <div className="w-4 h-4 rounded-full shadow-sm border border-[#dee2e6]" style={{ backgroundColor: theme.secondary }}></div>
                            <div className="w-4 h-4 rounded-full shadow-sm border border-[#dee2e6]" style={{ backgroundColor: theme.bg }}></div>
                            <div className="w-4 h-4 rounded-full shadow-sm border border-[#dee2e6]" style={{ backgroundColor: theme.text }}></div>
                          </div>
                        </div>
                        {activeTheme === theme.id && (
                          <div className="w-6 h-6 rounded-full bg-[#343a40] text-[#f8f9fa] flex items-center justify-center shadow-md">
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
                className="w-full py-4 mt-2 bg-[#f8f9fa] text-[#212529] border border-[#ced4da] rounded-xl font-semibold shadow-sm hover:bg-[#e9ecef] transition-colors flex justify-center items-center gap-2"
              >
                Visualizar Loja <ExternalLink size={16} />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* STRIPE CHECKOUT MODAL MOCK */}
      {showStripeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#212529]/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowStripeModal(false)}
          ></div>
          <div className="bg-[#f8f9fa] w-full max-w-sm rounded-2xl shadow-xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#635BFF] p-6 text-white text-center">
              <CreditCard size={32} className="mx-auto mb-3" />
              <h2 className="text-lg font-bold">Stripe Checkout</h2>
              <p className="text-white/80 text-sm">Regularização de Fatura</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#495057]">Fatura ref. 15/07</span>
                <span className="font-bold text-[#212529]">R$ 149,90</span>
              </div>
              <div className="h-px w-full bg-[#e9ecef]"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-[#212529]">Total</span>
                <span className="text-[#212529]">R$ 149,90</span>
              </div>
              
              <button 
                onClick={() => {
                  alert("Pagamento simulado com sucesso!");
                  setShowStripeModal(false);
                }}
                className="w-full bg-[#635BFF] text-white font-bold py-3.5 rounded-xl mt-4 hover:bg-[#534be8] transition-colors"
              >
                Pagar com Cartão
              </button>
              <button 
                onClick={() => setShowStripeModal(false)}
                className="w-full py-3 text-[#6c757d] font-semibold text-sm hover:text-[#495057] transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
