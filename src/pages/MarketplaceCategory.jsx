import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function MarketplaceCategory() {
  const location = useLocation();
  const categoryName = location.state?.categoryName || 'Categoria';
  const categoryImg = location.state?.categoryImg || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-hub-bg text-hub-text-primary font-body flex flex-col">
      {/* Header Banner */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img 
          src={categoryImg} 
          alt={categoryName} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-widest uppercase">{categoryName}</h1>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex gap-12">
        {/* Main Content - Store Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array(9).fill(null).map((_, idx) => (
              <div 
                key={idx} 
                className="bg-hub-card border border-hub-border rounded-2xl p-6 flex flex-col items-center justify-center gap-6 group hover:border-hub-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-24 h-24 rounded-full bg-hub-border flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-hub-primary transition-all duration-300">
                  <span className="text-hub-text-secondary font-medium">Sua Logo</span>
                </div>
                <Link 
                  to="/marketplace/store"
                  className="w-full py-2.5 rounded-xl bg-hub-border text-center font-medium hover:bg-hub-primary hover:text-white transition-colors duration-300"
                >
                  Entrar
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
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
          
          <div className="mt-12">
            <Link 
              to="/marketplace" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hub-card hover:bg-hub-border transition-colors text-hub-text-secondary hover:text-white"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>
          </div>
        </div>

        {/* Sidebar Banner */}
        <div className="hidden lg:block w-[300px] shrink-0">
          <div className="sticky top-6 w-full h-[800px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1528699633788-424224dc89b5?w=500&q=80" 
              alt="Ad Banner" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-around py-20">
              <h2 className="text-4xl font-bold text-white tracking-widest uppercase text-center leading-relaxed">
                <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Anuncie</span>
                Aqui
              </h2>
              <h2 className="text-4xl font-bold text-white tracking-widest uppercase text-center leading-relaxed">
                <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Anuncie</span>
                Aqui
              </h2>
              <h2 className="text-4xl font-bold text-white tracking-widest uppercase text-center leading-relaxed">
                <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Anuncie</span>
                Aqui
              </h2>
            </div>
            <div className="absolute inset-0 border-2 border-white/10 rounded-3xl group-hover:border-hub-primary/50 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
