import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function CadastroPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;
    
    login(email, password);
    
    // Redirect back to where they came from, or to selecao-negocio
    const from = location.state?.from?.pathname || '/selecao-negocio';
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center bg-[#212529] min-h-screen">
      <div className="w-full max-w-[480px] bg-[#f8f9fa] relative min-h-screen flex flex-col px-6 py-12 overflow-hidden shadow-2xl transition-colors duration-300">
        
        <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold font-headline text-[#212529] mb-2">Bem-vindo de volta!</h1>
          <p className="text-[#6c757d] font-body">Faça login para continuar.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-semibold text-[#495057] uppercase tracking-wider mb-1.5">E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#adb5bd]">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#f1f3f5] border border-[#ced4da] rounded-xl py-3 pl-11 pr-4 text-[#212529] placeholder:text-[#adb5bd] focus:outline-none focus:border-[#adb5bd] focus:bg-[#f8f9fa] transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495057] uppercase tracking-wider mb-1.5">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#adb5bd]">
                <Lock size={20} />
              </div>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#f1f3f5] border border-[#ced4da] rounded-xl py-3 pl-11 pr-4 text-[#212529] placeholder:text-[#adb5bd] focus:outline-none focus:border-[#adb5bd] focus:bg-[#f8f9fa] transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-xs font-semibold text-[#6c757d] hover:text-[#212529] transition-colors">Esqueceu a senha?</a>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#343a40] text-[#f8f9fa] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-sm hover:bg-[#212529] active:scale-[0.98] transition-all"
          >
            Entrar
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-[#6c757d]">
            Não tem uma conta? <Link to="/selecao-negocio" className="text-[#212529] font-bold underline">Crie agora</Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
