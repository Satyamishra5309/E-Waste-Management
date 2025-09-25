import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Recycle, Eye, EyeOff, Upload } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const [selectedCategory, setSelectedCategory] = useState<'user' | 'partner' | 'government'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [proofImage, setProofImage] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyId: '',
    headquarterLocation: '',
    departmentName: '',
    govId: '',
    govLocation: ''
  });

  const [errors, setErrors] = useState<string[]>([]);

  // Preselect partner if redirected from Become a Partner
  useEffect(() => {
    if (location.state?.preselectedCategory === 'partner') {
      setSelectedCategory('partner');
    }
  }, [location]);

  const validateForm = () => {
    const newErrors: string[] = [];

    if (formData.password !== formData.confirmPassword) {
      newErrors.push('Passwords do not match');
    }

    if (formData.password.length < 6) {
      newErrors.push('Password must be at least 6 characters');
    }

    if (selectedCategory === 'partner' && !proofImage) {
      newErrors.push('Please upload proof image for partner registration');
    }

    if (selectedCategory === 'user' && !profileImage) {
      newErrors.push('Please upload profile photo');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        ...formData,
        category: selectedCategory,
      });

      if (response.data.success) {
       navigate(`/dashboard/${selectedCategory}`); 
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'proof' | 'profile') => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'proof') setProofImage(file);
      else setProfileImage(file);
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
          {/* Left Info Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-emerald-600 to-green-700 p-12 text-white">
            <div className="flex items-center mb-8">
              <Recycle className="h-12 w-12 mr-4 animate-pulse" />
              <Link to="/" className="text-white-600 hover:text-emerald-100 font-medium">
                <h1 className="text-4xl font-bold">CycleBit</h1>
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-6">Join the Revolution!</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Be part of the solution to the global e-waste crisis.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 p-12 max-h-screen overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h2>

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

            {errors.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <ul className="list-disc list-inside">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Fields */}
              {selectedCategory === 'user' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="123 Green Street, Lucknow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'profile')}
                      className="block w-full text-gray-600"
                    />
                    {profileImage && <p className="text-sm text-gray-500 mt-2">Selected: {profileImage.name}</p>}
                  </div>
                </>
              )}

              {/* Partner Fields */}
              {selectedCategory === 'partner' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="EcoTech Solutions"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Headquarter Location</label>
                    <input
                      type="text"
                      required
                      value={formData.headquarterLocation}
                      onChange={(e) => setFormData({...formData, headquarterLocation: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Bengaluru, India"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company ID</label>
                    <input
                      type="text"
                      required
                      value={formData.companyId}
                      onChange={(e) => setFormData({...formData, companyId: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="ECO001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="contact@ecotech.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Proof Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'proof')}
                      className="block w-full text-gray-600"
                    />
                    {proofImage && <p className="text-sm text-gray-500 mt-2">Selected: {proofImage.name}</p>}
                  </div>
                </>
              )}

              {/* Government Fields */}
              {selectedCategory === 'government' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department Name</label>
                    <input
                      type="text"
                      required
                      value={formData.departmentName}
                      onChange={(e) => setFormData({...formData, departmentName: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Environmental Protection Agency"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Government ID</label>
                    <input
                      type="text"
                      required
                      value={formData.govId}
                      onChange={(e) => setFormData({...formData, govId: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="GOV001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      required
                      value={formData.govLocation}
                      onChange={(e) => setFormData({...formData, govLocation: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="New Delhi, India"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="dept@government.org"
                    />
                  </div>
                </>
              )}

              {/* Common Password Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 border rounded-lg pr-12"
                    placeholder="Enter secure password"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-3 border rounded-lg pr-12"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
