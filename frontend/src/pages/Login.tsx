import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Recycle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<'user' | 'partner' | 'government'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyId: '',
    govId: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Prepare payload according to category
      const payload: any = { email: formData.email, password: formData.password };
      if (selectedCategory === 'partner') payload.companyId = formData.companyId;
      if (selectedCategory === 'government') payload.govId = formData.govId;

      const success = await login(payload, selectedCategory);

      if (success) {
        // Navigate to dashboard based on category
        navigate(`/dashboard/${selectedCategory}`);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const categories = [
    { id: 'user', name: 'User', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
    { id: 'partner', name: 'Partner', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { id: 'government', name: 'Government', color: 'bg-red-100 text-red-800 border-red-300' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left Side - Info */}
          <div className="md:w-1/2 bg-gradient-to-br from-emerald-600 to-green-700 p-12 text-white">
            <div className="flex items-center mb-8">
              <Recycle className="h-12 w-12 mr-4 animate-pulse" />
              <Link to="/" className="text-white-600 hover:text-emerald-100 font-medium">
                <h1 className="text-4xl font-bold">CycleBit</h1>
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Continue your journey in transforming e-waste into opportunities.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="md:w-1/2 p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h2>

            {/* Category Selection */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`p-3 text-center border-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? category.color
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Render fields based on category */}
              {selectedCategory === 'user' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="user@demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                        placeholder="user123"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {selectedCategory === 'partner' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company ID or Email</label>
                    <input
                      type="text"
                      required
                      value={formData.companyId || formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, companyId: e.target.value, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="partner001 or partner@demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                        placeholder="partner123"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {selectedCategory === 'government' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Government ID</label>
                    <input
                      type="text"
                      required
                      value={formData.govId}
                      onChange={(e) => setFormData({ ...formData, govId: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="gov001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                        placeholder="gov123"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
