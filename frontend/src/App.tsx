import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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

// Protected Route Component
function ProtectedRoute({ children, category }: { children: JSX.Element, category: string }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Optional: check if user category matches route
  if (category && user.category !== category) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

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

              {/* Dashboards with Protected Routes */}
              <Route
                path="/dashboard/user"
                element={
                  <ProtectedRoute category="user">
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/partner"
                element={
                  <ProtectedRoute category="partner">
                    <PartnerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/government"
                element={
                  <ProtectedRoute category="government">
                    <GovernmentDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute category="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Other Pages */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/government-role" element={<GovernmentRole />} />
              <Route path="/become-partner" element={<BecomePartner />} />

              {/* Catch-all for undefined routes */}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
