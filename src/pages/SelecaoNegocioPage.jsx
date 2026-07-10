import React, { useState } from 'react';
import { Truck, Utensils, Wine, Coffee, Store, MoreHorizontal, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const businessTypes = [
  { id: 'food_truck', label: 'Food Truck', icon: Truck },
  { id: 'restaurante', label: 'Restaurante', icon: Utensils },
  { id: 'bebidas', label: 'Depósito de Bebidas', icon: Wine },
  { id: 'cafe', label: 'Café', icon: Coffee },
  { id: 'comercio', label: 'Comércio Informal', icon: Store },
  { id: 'outro', label: 'Outro', icon: MoreHorizontal },
];

export default function SelecaoNegocioPage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-full max-w-[480px] bg-background relative min-h-screen flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface">
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Voltar</span>
        </button>
      </header>

      <div className="flex-1 px-6 flex flex-col pt-8">
        {/* Progress Bar */}
        <div className="relative mb-10 flex w-full max-w-sm mx-auto items-center justify-between">
          <div className="absolute left-0 top-1/2 z-0 h-1 w-full -translate-y-1/2 bg-surface-container rounded-full"></div>
          <div className="absolute left-0 top-1/2 z-0 h-1 w-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
          
          <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary-fixed">
            <span className="text-sm font-bold">1</span>
          </div>
          <div className="relative z-10 w-8 h-8 rounded-full bg-primary text-on-primary-fixed ring-4 ring-background flex items-center justify-center">
            <span className="text-sm font-bold">2</span>
          </div>
          <div className="relative z-10 w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center">
            <span className="text-sm font-bold">3</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-headline font-bold text-on-surface mb-2">Qual é seu negócio?</h1>
          <p className="text-on-surface-variant text-sm">Isso nos ajuda a personalizar sua experiência.</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {businessTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selected === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected 
                    ? 'border-primary bg-primary/10' 
                    : 'border-transparent bg-surface-container hover:bg-surface-container-high'
                }`}
              >
                <Icon size={32} className={`${isSelected ? 'text-primary' : 'text-on-surface-variant'}`} />
                <span className={`text-sm font-medium ${isSelected ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  {type.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-auto pb-10">
          <button
            disabled={!selected}
            onClick={() => navigate('/planos')}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
              selected 
                ? 'bg-gradient-primary text-on-primary-fixed shadow-[0_10px_20px_rgba(189,157,255,0.2)] hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-surface-container text-on-surface-variant cursor-not-allowed'
            }`}
          >
            Continuar
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
