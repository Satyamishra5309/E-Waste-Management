import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Recycle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Recycle className="h-8 w-8 text-emerald-600 mr-2 animate-spin" />
              <span className="text-2xl font-bold text-emerald-600">CycleBit</span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Buy
            </Link>
            {user ? (
              <Link to={`/dashboard/${user.type}`} className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                Sell
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                Sell
              </Link>
            )}
            <Link to="/government-role" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Government Role
            </Link>
            <Link to="/become-partner" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Become a Partner
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={"/dashboard/user"} className="text-gray-700 text-sm">Hello, {user.name}</Link>
                <button
                  onClick={handleLogout}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                  Login
                </Link>
                <Link to="/signup" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/marketplace" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Buy
            </Link>
            {user ? (
              <Link to={`/dashboard/${user.type}`} className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                Sell
              </Link>
            ) : (
              <Link to="/login" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                Sell
              </Link>
            )}
            <Link to="/government-role" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Government Role
            </Link>
            <Link to="/become-partner" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Become a Partner
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
                <Link to="/signup" className="block text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}