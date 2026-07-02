import React, { useState } from 'react';
import { Check, CheckCircle2, Star, ArrowRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PlanosPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-[#0e0e11] border-b border-outline-variant/10 relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-12 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <X size={18} />
        </button>
        <h1 className="text-on-surface font-headline font-bold text-2xl pr-10">Escolha seu plano</h1>
        <p className="text-on-surface-variant text-sm mt-1">Faça upgrade e libere todo o potencial.</p>
      </header>

      <div className="px-6 py-6 space-y-4 flex-1">
        
        {/* Pro Plan (Featured) */}
        <div 
          onClick={() => setSelectedPlan('pro')}
          className={`relative overflow-hidden rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'pro' 
              ? 'border-primary bg-gradient-to-br from-surface-container-high to-surface shadow-[0_0_20px_rgba(189,157,255,0.15)]' 
              : 'border-outline-variant/20 bg-surface-container'
          }`}
        >
          {/* Glow effect */}
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
          
          <div className="absolute right-4 top-4 bg-primary text-on-primary-fixed text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Popular
          </div>

          <div className="p-5">
            <h3 className="flex items-center gap-2 font-headline text-lg font-bold text-on-surface mb-1">
              Pro
              <Star size={14} className="text-primary fill-primary" />
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-headline text-3xl font-black text-on-surface">R$ 29</span>
              <span className="font-body text-xs text-on-surface-variant">/mês</span>
            </div>
            
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm font-medium text-on-surface">Produtos ilimitados</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm font-medium text-on-surface">Assistente com IA</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm font-medium text-on-surface">Relatórios avançados</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm font-medium text-on-surface">Suporte prioritário</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Free Plan */}
        <div 
          onClick={() => setSelectedPlan('gratuito')}
          className={`relative overflow-hidden rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'gratuito' 
              ? 'border-primary bg-surface-container-high' 
              : 'border-outline-variant/20 bg-surface-container'
          }`}
        >
          <div className="p-5">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-1">Gratuito</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-headline text-3xl font-black text-on-surface">R$ 0</span>
              <span className="font-body text-xs text-on-surface-variant">/para sempre</span>
            </div>
            
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-outline-variant mt-0.5 shrink-0" />
                <span className="font-body text-sm text-on-surface-variant">Até 20 produtos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-outline-variant mt-0.5 shrink-0" />
                <span className="font-body text-sm text-on-surface-variant">Controle básico</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-outline-variant mt-0.5 shrink-0" />
                <span className="font-body text-sm text-on-surface-variant">Acesso mobile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Bottom */}
      <div className="p-6 border-t border-outline-variant/10 bg-surface pb-10">
        <button className="w-full bg-gradient-primary text-on-primary-fixed font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(189,157,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
          {selectedPlan === 'pro' ? 'Assinar Plano Pro' : 'Continuar com Gratuito'}
          <ArrowRight size={18} />
        </button>
        <p className="text-center font-body text-[10px] text-on-surface-variant mt-3">
          Cancele quando quiser. Sem taxas escondidas.
        </p>
      </div>
    </div>
  );
}
