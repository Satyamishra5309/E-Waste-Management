import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import PartnerDashboard from './pages/PartnerDashboard';
import GovernmentDashboard from './pages/GovernmentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Marketplace from './pages/Marketplace';
import GovernmentRole from './pages/GovernmentRole';
import BecomePartner from './pages/BecomePartner';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard/user" element={<UserDashboard />} />
              <Route path="/dashboard/partner" element={<PartnerDashboard />} />
              <Route path="/dashboard/government" element={<GovernmentDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/government-role" element={<GovernmentRole />} />
              <Route path="/become-partner" element={<BecomePartner />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;