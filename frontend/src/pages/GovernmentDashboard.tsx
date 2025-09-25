import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, FileText, CheckCircle, XCircle, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';

const sidebarItems = [
  { id: 'verify', name: 'Verify Companies', icon: Shield },
  { id: 'products', name: 'Final Product List', icon: FileText }
];

const demoCompanies = [
  { 
    id: 1, 
    name: 'EcoTech Solutions', 
    companyId: 'ECO001', 
    email: 'contact@ecotech.com',
    status: 'pending',
    proofDocument: 'registration_certificate.pdf',
    registrationDate: '2024-01-10'
  },
  { 
    id: 2, 
    name: 'Green Recyclers Ltd', 
    companyId: 'GRE002', 
    email: 'info@greenrecyclers.com',
    status: 'verified',
    proofDocument: 'license_document.pdf',
    registrationDate: '2024-01-05'
  },
  { 
    id: 3, 
    name: 'Sustainable Tech Corp', 
    companyId: 'SUS003', 
    email: 'hello@sustainabletech.com',
    status: 'rejected',
    proofDocument: 'company_proof.pdf',
    registrationDate: '2024-01-08'
  }
];

const demoProducts = [
  { 
    id: 1, 
    name: 'iPhone 13', 
    brand: 'Apple', 
    condition: 'Working', 
    price: 25000, 
    user: 'John D.',
    partner: 'EcoTech Solutions',
    status: 'processed',
    carbonSaved: '2.5 kg',
    date: '2024-01-15',
    location: 'Lucknow, India'
  },
  { 
    id: 2, 
    name: 'Galaxy S21', 
    brand: 'Samsung', 
    condition: 'Minor Issues', 
    price: 18000, 
    user: 'Sarah M.',
    partner: 'Green Recyclers Ltd',
    status: 'processing',
    carbonSaved: '2.1 kg',
    date: '2024-01-14',
    location: 'Delhi, India'
  },
  { 
    id: 3, 
    name: 'MacBook Pro', 
    brand: 'Apple', 
    condition: 'Working', 
    price: 65000, 
    user: 'Alex K.',
    partner: 'EcoTech Solutions',
    status: 'completed',
    carbonSaved: '8.3 kg',
    date: '2024-01-13',
    location: 'Mumbai, India'
  }
];


const demoStats = {
  totalCompanies: 45,
  verifiedCompanies: 38,
  pendingVerifications: 7,
  totalProducts: 1247,
  processedProducts: 1156,
  carbonSaved: '15.7 tonnes',
  eWasteProcessed: '8.9 tonnes'
};

export default function GovernmentDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('verify');
  const [companies, setCompanies] = useState(demoCompanies);

  const handleCompanyAction = (companyId: number, action: 'verify' | 'reject') => {
    setCompanies(prev =>
      prev.map(company =>
        company.id === companyId
          ? { ...company, status: action === 'verify' ? 'verified' : 'rejected' }
          : company
      )
    );
  };

  if (!user) {
    return <div>Please login to access dashboard</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen sticky top-16">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Gov Portal</h2>
            <p className="text-sm text-gray-600">{user.departmentName}</p>
            <p className="text-xs text-gray-500">ID: {user.govId}</p>
          </div>
          <nav className="mt-6">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === item.id ? 'bg-emerald-50 border-r-4 border-emerald-600 text-emerald-600' : 'text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header with Stats */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Government Dashboard
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Total Companies</h3>
                <p className="text-3xl font-bold text-blue-600">{demoStats.totalCompanies}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Verified Companies</h3>
                <p className="text-3xl font-bold text-green-600">{demoStats.verifiedCompanies}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-sm font-medium text-gray-600">Carbon Saved</h3>
                <p className="text-3xl font-bold text-emerald-600">{demoStats.carbonSaved}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-sm font-medium text-gray-600">E-Waste Processed</h3>
                <p className="text-3xl font-bold text-orange-600">{demoStats.eWasteProcessed}</p>
              </div>
            </div>
          </div>

          {/* Verify Companies Tab */}
          {activeTab === 'verify' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Verify Partner Companies</h2>
              
              <div className="grid gap-6">
                {companies.map(company => (
                  <div key={company.id} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Shield className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
                          <p className="text-gray-600">Company ID: {company.companyId}</p>
                          <p className="text-gray-600">Email: {company.email}</p>
                          <p className="text-sm text-gray-500">Registered: {company.registrationDate}</p>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-3">
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{company.proofDocument}</span>
                        </div>
                        
                        {company.status === 'pending' ? (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleCompanyAction(company.id, 'verify')}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Verify
                            </button>
                            <button
                              onClick={() => handleCompanyAction(company.id, 'reject')}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                            company.status === 'verified' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {company.status === 'verified' ? 'Verified' : 'Rejected'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Final Product Processing List</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Saved</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {demoProducts.map(product => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{product.brand} {product.name}</div>
                              <div className="text-sm text-gray-500">{product.condition}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.user}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.partner}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">₹{product.price.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{product.carbonSaved}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              product.status === 'completed' ? 'bg-green-100 text-green-800' :
                              product.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Environmental Impact Summary */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">Environmental Impact Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{demoStats.totalProducts}</p>
                    <p className="text-sm text-emerald-700">Total Products</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{demoStats.processedProducts}</p>
                    <p className="text-sm text-emerald-700">Processed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{demoStats.carbonSaved}</p>
                    <p className="text-sm text-emerald-700">CO₂ Saved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{demoStats.eWasteProcessed}</p>
                    <p className="text-sm text-emerald-700">E-Waste Processed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}