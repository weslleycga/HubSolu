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
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-full max-w-[480px] bg-background relative min-h-screen flex flex-col shadow-2xl overflow-hidden font-body pb-20">
      {/* Header Banner */}
      <div className="relative w-full h-[180px] overflow-hidden shrink-0">
        <img 
          src={categoryImg} 
          alt={categoryName} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        
        {/* Back Button */}
        <Link 
          to="/marketplace" 
          className="absolute top-4 left-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors z-10"
        >
          <ArrowLeft size={24} />
        </Link>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white tracking-widest uppercase px-4 text-center">{categoryName}</h1>
        </div>
      </div>

      <div className="flex-1 w-full px-space-4 py-space-6 flex-col overflow-y-auto">
        {/* Main Content - Store Grid */}
        <div className="grid grid-cols-2 gap-space-4">
            {Array(10).fill(null).map((_, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-outline-variant rounded-md p-space-4 flex flex-col items-center justify-center gap-space-4 group hover:border-primary/50 transition-all duration-300 hover:shadow-md shadow-sm"
              >
                <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-transparent group-hover:border-primary transition-all duration-300">
                  <span className="text-on-surface-variant text-body-2 font-medium">Sua Logo</span>
                </div>
                <Link 
                  to="/marketplace/store"
                  state={{ storeCategory: categoryName }}
                  className="w-full py-space-2 rounded-md bg-primary text-on-primary text-center text-button hover:bg-primary-dim transition-colors duration-300 shadow-sm"
                >
                  Entrar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
