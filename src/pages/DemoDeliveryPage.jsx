import React, { useState, useEffect } from 'react';
import { 
  Search, Plus, MapPin, CreditCard, Receipt, 
  ChevronRight, ArrowLeft, Home, ShoppingBag, User 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const themes = {
  fastfood: {
    appBg: 'bg-white',
    textColor: 'text-gray-900',
    textMuted: 'text-gray-500',
    inputBg: 'bg-gray-100',
    navBg: 'bg-white',
    navBorder: 'border-gray-100',
    ctaColor: 'bg-red-600',
    ctaHover: 'hover:bg-red-700',
    ctaShadow: 'shadow-red-500/30',
    activeNav: 'text-red-600',
    badgeBg: 'bg-red-500',
    heroTag: 'bg-yellow-400 text-gray-900',
    heroTitle: 'Combo Monster - 30% OFF',
    heroImg: 'https://loremflickr.com/600/400/burger,fries',
    ringClass: 'ring-red-600',
    prod1Title: 'Double Smash Burger',
    prod1Desc: 'Pão brioche, 2x blend 90g, queijo cheddar, molho da casa e bacon crocante.',
    prod1Img: '/images/double_smash_burger.jpg',
    prod2Title: 'Batata Rústica com Cheddar',
    prod2Desc: 'Porção de batatas rústicas com nosso exclusivo creme de cheddar.',
    prod2Img: '/images/batata_rustica_com_cheddar.jpg',
  },
  vegan: {
    appBg: 'bg-[#faf9f6]', 
    textColor: 'text-[#3e4033]',
    textMuted: 'text-[#878a73]', 
    inputBg: 'bg-[#f0efe9]',
    navBg: 'bg-[#faf9f6]',
    navBorder: 'border-[#eae8e1]',
    ctaColor: 'bg-[#4ade80]', 
    ctaHover: 'hover:bg-[#22c55e]',
    ctaShadow: 'shadow-green-500/20',
    activeNav: 'text-[#22c55e]',
    badgeBg: 'bg-[#f59e0b]',
    heroTag: 'bg-[#d9f99d] text-[#3f6212]',
    heroTitle: 'Saladas Frescas da Estação',
    heroImg: 'https://loremflickr.com/600/400/salad',
    ringClass: 'ring-[#4ade80]',
    prod1Title: 'Bowl de Quinoa Orgânica',
    prod1Desc: 'Quinoa, abacate, tomate cereja, grão de bico crocante e molho tahine.',
    prod1Img: '/images/bowl_de_quinoa_organica.jpeg',
    prod2Title: 'Salada Verão Refrescante',
    prod2Desc: 'Mix de folhas, morangos, amêndoas e queijo feta vegano com vinagrete.',
    prod2Img: '/images/salada_verao_refrescante.jpg',
  },
  bbq: {
    appBg: 'bg-[#121212]', 
    textColor: 'text-[#f5f5f5]', 
    textMuted: 'text-[#a3a3a3]', 
    inputBg: 'bg-[#262626]', 
    navBg: 'bg-[#1c1c1c]',
    navBorder: 'border-[#2d2d2d]',
    ctaColor: 'bg-orange-500', 
    ctaHover: 'hover:bg-orange-600',
    ctaShadow: 'shadow-orange-500/20',
    activeNav: 'text-orange-500',
    badgeBg: 'bg-orange-500',
    heroTag: 'bg-red-600 text-white',
    heroTitle: 'Texas Brisket Defumado',
    heroImg: '/images/costelinha-de-porco-ao-barbecue-1657229553564_v2_4x3.jpg',
    ringClass: 'ring-orange-500',
    prod1Title: 'Costelinha BBQ Premium',
    prod1Desc: 'Costelinha de porco defumada por 12 horas em lenha de macieira com BBQ caseiro.',
    prod1Img: '/images/costelinha-de-porco-ao-barbecue-1657229553564_v2_4x3.jpg',
    prod2Title: 'Smoked Sausage',
    prod2Desc: 'Linguiça artesanal defumada recheada com queijo provolone e jalapeño.',
    prod2Img: '/images/smoke_sausage.jpg',
  },
};

export default function DemoDeliveryPage() {
  const [currentTheme, setCurrentTheme] = useState('bbq');
  const [currentView, setCurrentView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Burger');
  const navigate = useNavigate();

  const t = themes[currentTheme];

  const categories = [
    { id: 'Burger', emoji: '🍔', label: 'Burger' },
    { id: 'Pizza', emoji: '🍕', label: 'Pizza' },
    { id: 'Sushi', emoji: '🍣', label: 'Sushi' },
    { id: 'Saudavel', emoji: '🥗', label: 'Saudável' }
  ];

  useEffect(() => {
    document.body.className = currentTheme === 'bbq' ? 'bg-[#0a0a0a]' : 'bg-gray-100';
    return () => { document.body.className = 'bg-[#0e0e11] text-slate-50'; };
  }, [currentTheme]);

  return (
    <div className={`flex flex-col min-h-screen items-center py-10 transition-colors duration-500 ${currentTheme === 'bbq' ? 'bg-[#0a0a0a]' : 'bg-gray-100'}`}>
      
      {/* Controls */}
      <div className={`mb-8 w-full max-w-md rounded-2xl border p-4 shadow-sm transition-colors duration-500 ${currentTheme === 'bbq' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex justify-between items-center mb-3">
            <h2 className={`text-sm font-bold uppercase tracking-wider ${currentTheme === 'bbq' ? 'text-gray-300' : 'text-gray-500'}`}>
            Escolha o Tema
            </h2>
            <button onClick={() => navigate(-1)} className={`text-sm underline ${currentTheme === 'bbq' ? 'text-gray-400' : 'text-gray-500'}`}>Voltar ao app</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => setCurrentTheme('fastfood')} className="rounded-lg bg-red-100 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-200">Fast Food</button>
          <button onClick={() => setCurrentTheme('vegan')} className="rounded-lg bg-green-100 px-3 py-2 text-xs font-semibold text-green-700 hover:bg-green-200">Vegano</button>
          <button onClick={() => setCurrentTheme('bbq')} className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-orange-400 hover:bg-gray-950">BBQ Dark</button>
        </div>
      </div>

      {/* Mobile Device Mockup */}
      <div className={`relative h-[812px] w-full max-w-[375px] overflow-hidden rounded-[40px] border-[8px] border-gray-900 shadow-2xl transition-colors duration-500 ${t.appBg} ${t.textColor}`}>
        
        {/* Status Bar */}
        <div className="relative z-50 flex h-12 w-full items-center justify-between px-6 text-xs font-medium">
          <span>9:41</span>
          <div className="flex gap-1">
             <span className="font-bold">LTE</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="no-scrollbar relative h-full w-full overflow-y-auto px-6 pb-24 pt-4">
          
          {/* HOME VIEW */}
          {currentView === 'home' && (
            <div>
              <header className="mb-6 flex items-center justify-between">
                <div className="cursor-pointer" onClick={() => setCurrentView('address')}>
                  <p className={`mb-1 text-sm ${t.textMuted}`}>Entregar para</p>
                  <h1 className="flex items-center gap-1 text-lg font-bold">Rua das Flores, 123</h1>
                </div>
                <div className="h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-full bg-gray-200" onClick={() => setCurrentView('profile')}>
                  <img src="https://ui-avatars.com/api/?name=Ana+Souza&background=random" className="h-full w-full object-cover" alt="Profile" />
                </div>
              </header>

              <div className="relative mb-6">
                <Search size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${t.textMuted}`} />
                <input type="text" placeholder="O que você quer comer hoje?" className={`w-full rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-colors duration-300 ${t.inputBg} ${t.textColor}`} />
              </div>

              <div className="relative mb-8 h-40 w-full overflow-hidden rounded-2xl shadow-sm">
                <img src={t.heroImg} className="h-full w-full object-cover" alt="Banner" />
                <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/80 to-transparent p-6 text-left">
                  <span className={`mb-1 w-fit rounded px-1 text-xs font-bold uppercase tracking-wider ${t.heroTag}`}>DESTAQUE</span>
                  <h2 className="w-2/3 text-2xl font-black leading-tight text-white">{t.heroTitle}</h2>
                </div>
              </div>

              <div className="mb-8 flex justify-between">
                {categories.map(cat => (
                  <div key={cat.id} className="flex cursor-pointer flex-col items-center gap-2" onClick={() => setActiveCategory(cat.id)}>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-sm transition-colors ${t.inputBg} ${activeCategory === cat.id ? `ring-2 ${t.ringClass}` : 'ring-transparent'}`}>
                      {cat.emoji}
                    </div>
                    <span className={`text-xs ${activeCategory === cat.id ? `font-semibold ${t.textColor}` : `font-medium ${t.textMuted}`}`}>{cat.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold">Mais Pedidos</h3>
              <div className="flex flex-col gap-4">
                {[1, 2].map(num => (
                  <div key={num} className={`flex gap-4 rounded-xl border p-3 shadow-sm transition-colors ${t.appBg} ${t.navBorder}`}>
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      <img src={num === 1 ? t.prod1Img : t.prod2Img} className="h-full w-full object-cover" alt="Product" />
                    </div>
                    <div className="flex w-full flex-col justify-between py-1">
                      <h4 className="mb-1 text-base font-bold">{num === 1 ? t.prod1Title : t.prod2Title}</h4>
                      <p className={`mb-2 line-clamp-2 text-xs ${t.textMuted}`}>{num === 1 ? t.prod1Desc : t.prod2Desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">R$ {num === 1 ? '32,90' : '24,50'}</span>
                        <button className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md transition-colors ${t.ctaColor} ${t.ctaHover} ${t.ctaShadow}`}>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFILE VIEW */}
          {currentView === 'profile' && (
            <div className="flex flex-col h-full">
              <div className="mb-8 mt-2 flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <img src="https://ui-avatars.com/api/?name=Ana+Souza&background=random" className="h-full w-full object-cover" alt="Ana" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Ana Souza</h2>
                  <p className={`text-xs ${t.textMuted}`}>ana.souza@email.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button onClick={() => setCurrentView('address')} className={`flex items-center justify-between rounded-xl border p-4 shadow-sm transition-colors ${t.inputBg} ${t.navBorder}`}>
                  <div className="flex items-center gap-3">
                    <MapPin size={24} />
                    <div className="text-left">
                      <span className="block text-sm font-bold">Meus Endereços</span>
                      <span className={`block text-xs ${t.textMuted}`}>Casa, Trabalho</span>
                    </div>
                  </div>
                  <ChevronRight size={20} className={t.textMuted} />
                </button>
                <button onClick={() => setCurrentView('payment')} className={`flex items-center justify-between rounded-xl border p-4 shadow-sm transition-colors ${t.inputBg} ${t.navBorder}`}>
                  <div className="flex items-center gap-3">
                    <CreditCard size={24} />
                    <div className="text-left">
                      <span className="block text-sm font-bold">Pagamento</span>
                      <span className={`block text-xs ${t.textMuted}`}>Cartões, Pix</span>
                    </div>
                  </div>
                  <ChevronRight size={20} className={t.textMuted} />
                </button>
                <button onClick={() => setCurrentView('orders')} className={`flex items-center justify-between rounded-xl border p-4 shadow-sm transition-colors ${t.inputBg} ${t.navBorder}`}>
                  <div className="flex items-center gap-3">
                    <Receipt size={24} />
                    <div className="text-left">
                      <span className="block text-sm font-bold">Meus Pedidos</span>
                      <span className={`block text-xs ${t.textMuted}`}>Histórico</span>
                    </div>
                  </div>
                  <ChevronRight size={20} className={t.textMuted} />
                </button>
              </div>

              <div className="mt-12 pb-4 pt-8">
                <button className={`w-full rounded-xl border border-transparent py-3 text-sm font-bold transition-colors ${t.inputBg} hover:brightness-110`}>
                  Sair do aplicativo
                </button>
              </div>
            </div>
          )}

          {/* ADDRESS & PAYMENT & ORDERS VIEWS (simplified for demo) */}
          {['address', 'payment', 'orders'].includes(currentView) && (
            <div className="flex flex-col h-full">
              <div className="mb-6 mt-2 flex items-center gap-3">
                <button onClick={() => setCurrentView('profile')} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-bold">
                  {currentView === 'address' ? 'Endereços' : currentView === 'payment' ? 'Pagamento' : 'Pedidos'}
                </h2>
              </div>
              <div className={`rounded-xl border p-4 shadow-sm flex flex-col ${t.inputBg} ${t.navBorder}`}>
                <p className={`text-sm ${t.textMuted}`}>Visualização de {currentView} - Simulada no React</p>
                <button onClick={() => setCurrentView('profile')} className={`mt-4 w-full rounded-xl py-3 text-sm font-bold text-white shadow-md transition-colors ${t.ctaColor} ${t.ctaHover} ${t.ctaShadow}`}>
                  Voltar
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation */}
        <div className={`absolute bottom-0 left-0 flex h-20 w-full items-center justify-around border-t px-2 pb-4 transition-colors duration-300 ${t.navBg} ${t.navBorder}`}>
          <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center gap-1 ${currentView === 'home' ? t.activeNav : t.textMuted}`}>
            <Home size={24} />
            <span className="text-[10px] font-semibold">Início</span>
          </button>
          <button className={`flex flex-col items-center gap-1 relative ${currentView === 'search' ? t.activeNav : t.textMuted}`}>
            <Search size={24} />
            <span className="text-[10px] font-medium">Busca</span>
          </button>
          <button onClick={() => setCurrentView('orders')} className={`flex flex-col items-center gap-1 relative ${currentView === 'orders' ? t.activeNav : t.textMuted}`}>
            <ShoppingBag size={24} />
            <span className="text-[10px] font-medium">Pedidos</span>
            <span className={`absolute right-0 top-0 h-2 w-2 rounded-full ${t.badgeBg}`}></span>
          </button>
          <button onClick={() => setCurrentView('profile')} className={`flex flex-col items-center gap-1 ${currentView === 'profile' ? t.activeNav : t.textMuted}`}>
            <User size={24} />
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
