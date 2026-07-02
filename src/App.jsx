import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Package, DollarSign, Settings, User } from 'lucide-react';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import PerfilPage from './pages/PerfilPage';
import PlanosPage from './pages/PlanosPage';
import SelecaoNegocioPage from './pages/SelecaoNegocioPage';
import EstoquePage from './pages/EstoquePage';
import FinanceiroPage from './pages/FinanceiroPage';
import DemoDeliveryPage from './pages/DemoDeliveryPage';

function BottomNav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-primary' : 'text-on-surface-variant';

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] bg-surface border-t border-outline-variant/10 pb-safe pt-2 px-6 flex justify-between items-center z-50">
      <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${isActive('/')}`}>
        <Home size={24} />
        <span className="text-[10px] font-medium">Início</span>
      </Link>
      <Link to="/estoque" className={`flex flex-col items-center gap-1 p-2 ${isActive('/estoque')}`}>
        <Package size={24} />
        <span className="text-[10px] font-medium">Estoque</span>
      </Link>
      <Link to="/financeiro" className={`flex flex-col items-center gap-1 p-2 ${isActive('/financeiro')}`}>
        <DollarSign size={24} />
        <span className="text-[10px] font-medium">Finanças</span>
      </Link>
      <Link to="/perfil" className={`flex flex-col items-center gap-1 p-2 ${isActive('/perfil')}`}>
        <User size={24} />
        <span className="text-[10px] font-medium">Perfil</span>
      </Link>
    </div>
  );
}

function MobileLayout({ children }) {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-full max-w-[480px] bg-background relative min-h-screen flex flex-col shadow-2xl overflow-hidden">
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/selecao-negocio" element={<SelecaoNegocioPage />} />
        <Route path="/planos" element={<PlanosPage />} />
        <Route path="/demo-delivery" element={<DemoDeliveryPage />} />
        <Route path="/*" element={
          <MobileLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/estoque" element={<EstoquePage />} />
              <Route path="/financeiro" element={<FinanceiroPage />} />
              <Route path="/perfil" element={<PerfilPage />} />
            </Routes>
          </MobileLayout>
        } />
      </Routes>
    </Router>
  );
}
