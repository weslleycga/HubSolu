import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Package, DollarSign, Settings, User } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import PerfilPage from './pages/PerfilPage';
import PlanosPage from './pages/PlanosPage';
import SelecaoNegocioPage from './pages/SelecaoNegocioPage';
import EstoquePage from './pages/EstoquePage';
import FinanceiroPage from './pages/FinanceiroPage';
import DemoDeliveryPage from './pages/DemoDeliveryPage';
import MarketplaceHome from './pages/MarketplaceHome';
import MarketplaceCategory from './pages/MarketplaceCategory';
import MarketplaceStore from './pages/MarketplaceStore';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ThemeSelectorPage from './pages/ThemeSelectorPage';
import Fundamentos from './pages/Fundamentos';

function MobileLayout({ children }) {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-full max-w-[480px] bg-background relative min-h-screen flex flex-col shadow-2xl overflow-hidden transition-colors duration-300">
        <main className="flex-1 overflow-y-auto pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/selecao-negocio" element={<SelecaoNegocioPage />} />
          <Route path="/planos" element={<PlanosPage />} />
          <Route path="/demo-delivery" element={<DemoDeliveryPage />} />
          <Route path="/marketplace" element={<MarketplaceHome />} />
          <Route path="/marketplace/category" element={<MarketplaceCategory />} />
          <Route path="/marketplace/store" element={<MarketplaceStore />} />
          <Route path="/*" element={
            <MobileLayout>
              <Routes>
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/estoque" element={<EstoquePage />} />
                <Route path="/financeiro" element={<FinanceiroPage />} />
                <Route path="/perfil" element={<PerfilPage />} />
                <Route path="/tema" element={<ThemeSelectorPage />} />
                <Route path="/fundamentos" element={<Fundamentos />} />
              </Routes>
            </MobileLayout>
          } />
        </Routes>
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
