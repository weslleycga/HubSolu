import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function CadastroPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e11] px-6 py-12 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-secondary/20 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold font-headline text-on-surface mb-2">Bem-vindo de volta!</h1>
          <p className="text-on-surface-variant font-body">Faça login para acessar seu negócio.</p>
        </div>

        <form className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-1.5">E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline-variant">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                className="w-full bg-surface-container border border-outline-variant/20 rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline-variant">
                <Lock size={20} />
              </div>
              <input 
                type="password" 
                className="w-full bg-surface-container border border-outline-variant/20 rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-xs font-medium text-primary hover:text-primary-container transition-colors">Esqueceu a senha?</a>
            </div>
          </div>

          <button 
            type="button" 
            onClick={() => navigate('/selecao-negocio')}
            className="w-full bg-gradient-primary text-on-primary-fixed font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-[0_10px_20px_rgba(189,157,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Entrar
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-on-surface-variant">
            Não tem uma conta? <Link to="/selecao-negocio" className="text-primary font-semibold">Crie agora</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
