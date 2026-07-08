import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, ChevronLeft, ChevronRight, ArrowLeft, Minus, Plus, Trash2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketplaceStore() {
  const [activeTheme, setActiveTheme] = useState('theme-fashion-minimalist');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(0);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('store_theme');
    // Força um tema claro se estiver usando um escuro por acidente, para atender ao pedido
    if (savedTheme === 'theme-food-dark-bbq' || savedTheme === 'theme-beauty-luxury-gold') {
      setActiveTheme('theme-fashion-minimalist');
      localStorage.setItem('store_theme', 'theme-fashion-minimalist');
    } else if (savedTheme) {
      setActiveTheme(savedTheme);
    }
  }, []);

  const [cart, setCart] = useState([
    { id: 1, name: 'Burger Clássico', price: 32.50, quantity: 1, img: '/images/double_smash_burger.jpg' },
    { id: 2, name: 'Batata Rústica', price: 38.90, quantity: 2, img: '/images/batata_rustica_com_cheddar.jpg' }
  ]);

  const handleUpdateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const categories = ['Todos', 'Mais Vendidos', 'Promoções', 'Lançamentos', 'Kits'];

  const products = [
    { id: 101, name: 'Costela BBQ', img: '/images/costelinha-de-porco-ao-barbecue-1657229553564_v2_4x3.jpg', price: 85.00, category: 'Mais Vendidos' },
    { id: 102, name: 'Burger Clássico', img: '/images/double_smash_burger.jpg', price: 32.50, category: 'Mais Vendidos' },
    { id: 103, name: 'Batata Rústica', img: '/images/batata_rustica_com_cheddar.jpg', price: 28.00, category: 'Promoções' },
    { id: 104, name: 'Salada Verão', img: '/images/salada_verao_refrescante.jpg', price: 38.90, category: 'Lançamentos' },
    { id: 105, name: 'Bowl Quinoa', img: '/images/bowl_de_quinoa_organica.jpeg', price: 24.90, category: 'Promoções' },
    { id: 106, name: 'Smoke Sausage', img: '/images/smoke_sausage.jpg', price: 65.00, category: 'Kits' },
    { id: 107, name: 'Combo Família', img: '/images/double_smash_burger.jpg', price: 89.90, category: 'Kits' },
    { id: 108, name: 'Costelinha Suína', img: '/images/costelinha-de-porco-ao-barbecue-1657229553564_v2_4x3.jpg', price: 54.00, category: 'Lançamentos' },
    { id: 109, name: 'Porção Batata', img: '/images/batata_rustica_com_cheddar.jpg', price: 72.00, category: 'Lançamentos' },
    { id: 110, name: 'Salada Fit', img: '/images/salada_verao_refrescante.jpg', price: 85.00, category: 'Mais Vendidos' },
    { id: 111, name: 'Mix Quinoa', img: '/images/bowl_de_quinoa_organica.jpeg', price: 18.00, category: 'Promoções' },
    { id: 112, name: 'Porção Salsicha', img: '/images/smoke_sausage.jpg', price: 68.00, category: 'Mais Vendidos' }
  ];

  // Filtragem por Categoria
  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Paginação
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => setCurrentPage(p => Math.min(totalPages - 1, p + 1));
  const prevPage = () => setCurrentPage(p => Math.max(0, p - 1));

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  return (
    <div className={`min-h-screen font-body flex flex-col ${activeTheme} bg-store-bg text-store-text transition-colors duration-500`}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-store-secondary/30 bg-store-bg/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-store-secondary/30 flex items-center justify-center overflow-hidden bg-store-secondary/20">
            <img src="/images/double_smash_burger.jpg" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <h1 className="text-xl font-bold">Nome da empresa</h1>
        </div>
        <div className="relative">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-3 rounded-full hover:bg-store-primary/10 transition-colors relative text-store-text"
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-store-primary text-store-bg text-xs font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1 shadow-md">
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
              <Search className="text-store-muted" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Barra de pesquisa" 
              className="w-full bg-store-bg border border-store-secondary/50 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:border-store-primary focus:ring-1 focus:ring-store-primary transition-all shadow-sm text-store-text placeholder-store-muted"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4 hide-scrollbar">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-store-primary text-store-bg shadow-lg scale-105' 
                    : 'bg-store-bg border border-store-secondary/50 text-store-muted hover:text-store-text hover:border-store-primary/50 hover:bg-store-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px] content-start">
            {displayedProducts.map((prod) => (
              <div key={prod.id} className="group bg-store-bg border border-store-secondary/30 rounded-2xl overflow-hidden hover:border-store-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col shadow-sm">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button 
                      onClick={() => {
                        const exists = cart.find(i => i.id === prod.id);
                        if (exists) {
                          handleUpdateQuantity(prod.id, 1);
                        } else {
                          setCart([...cart, { ...prod, quantity: 1 }]);
                        }
                        setIsCartOpen(true);
                      }}
                      className="bg-store-primary text-store-bg px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-store-secondary/20"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center flex-1 justify-between">
                  <h3 className="font-semibold text-center mb-2 text-store-text">{prod.name}</h3>
                  <span className="text-store-primary font-bold">R$ {prod.price.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            ))}
            
            {displayedProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-store-muted">
                Nenhum produto encontrado nesta categoria.
              </div>
            )}
          </div>

          {/* Pagination & Back */}
          <div className="flex justify-between items-center mt-12 mb-8">
            <Link 
              to="/marketplace/category" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-store-bg border border-store-secondary/30 hover:border-store-primary/50 transition-colors text-store-muted hover:text-store-text"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>

            {totalPages > 1 && (
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="p-2 rounded-full bg-store-bg border border-store-secondary/30 hover:border-store-primary/50 transition-colors text-store-text disabled:opacity-30 disabled:hover:border-store-secondary/30"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === i ? 'bg-store-primary scale-125' : 'bg-store-secondary/50 hover:bg-store-secondary'}`}
                    ></button>
                  ))}
                </div>
                <button 
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 rounded-full bg-store-bg border border-store-secondary/30 hover:border-store-primary/50 transition-colors text-store-text disabled:opacity-30 disabled:hover:border-store-secondary/30"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Drawer / Pop-up */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          <div className="w-full max-w-md bg-store-bg h-full shadow-2xl relative z-10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-store-secondary/30 bg-store-secondary/10 flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2 text-store-text">
                <ShoppingCart className="text-store-primary" />
                Seu Carrinho
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-2 rounded-full hover:bg-store-secondary/20 transition-colors text-store-text"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-store-muted gap-4">
                  <ShoppingCart size={48} className="opacity-20" />
                  <p>Seu carrinho está vazio</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate text-sm text-store-text">{item.name}</h4>
                      <p className="text-store-primary font-bold text-sm mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 bg-store-bg rounded-lg p-1 border border-store-secondary/50">
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-store-primary transition-colors rounded text-store-text"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center text-store-text">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-store-primary transition-colors rounded text-store-text"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-store-muted hover:text-red-500 transition-colors rounded-lg opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-store-secondary/30 bg-store-secondary/5 mt-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-store-muted font-medium">Total</span>
                <span className="text-2xl font-bold text-store-text">
                  R$ {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button 
                disabled={cart.length === 0}
                className="w-full py-4 rounded-xl bg-store-primary text-store-bg font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
