import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Package, Star, Shield, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const sidebarItems = [
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  { id: 'products', name: 'Accepted Products', icon: Package },
  { id: 'starred', name: 'Starred Products', icon: Star },
  { id: 'verification', name: 'Gov. Verification', icon: Shield }
];

const demoAnalytics = {
  totalAccepted: 156,
  totalCollected: 142,
  pending: 14,
  amountExchanged: 89500
};

const demoProducts = [
  { id: 1, name: 'iPhone 13', brand: 'Apple', condition: 'Working', price: 25000, user: 'John D.', date: '2024-01-15' },
  { id: 2, name: 'Galaxy S21', brand: 'Samsung', condition: 'Minor Issues', price: 18000, user: 'Sarah M.', date: '2024-01-14' },
  { id: 3, name: 'MacBook Pro', brand: 'Apple', condition: 'Working', price: 65000, user: 'Alex K.', date: '2024-01-13' }
];

const demoStarredProducts = [
  { id: 1, name: 'iPhone 14 Pro', brand: 'Apple', condition: 'Excellent', price: 45000, user: 'Mike R.', status: 'pending' },
  { id: 2, name: 'ThinkPad X1', brand: 'Lenovo', condition: 'Good', price: 35000, user: 'Lisa T.', status: 'pending' },
  { id: 3, name: 'Surface Pro', brand: 'Microsoft', condition: 'Working', price: 28000, user: 'David L.', status: 'pending' }
];

const demoVerificationUpdates = [
  { id: 1, message: 'Your recycling license has been approved', type: 'success', date: '2024-01-15' },
  { id: 2, message: 'Annual compliance report due in 30 days', type: 'warning', date: '2024-01-10' },
  { id: 3, message: 'Environmental impact certificate issued', type: 'info', date: '2024-01-05' }
];

export default function PartnerDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('analytics');
  const [starredProducts, setStarredProducts] = useState(demoStarredProducts);

  const handleProductAction = (productId: number, action: 'accept' | 'reject') => {
    setStarredProducts(prev =>
      prev.map(product =>
        product.id === productId
          ? { ...product, status: action === 'accept' ? 'accepted' : 'rejected' }
          : product
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Partner Portal</h2>
            <p className="text-sm text-gray-600">{user.companyName}</p>
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {user.name}
            </h1>
            <p className="text-gray-600">Company ID: {user.companyId}</p>
          </div>

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Accepted</p>
                      <p className="text-3xl font-bold text-emerald-600">{demoAnalytics.totalAccepted}</p>
                    </div>
                    <Package className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Collected</p>
                      <p className="text-3xl font-bold text-green-600">{demoAnalytics.totalCollected}</p>
                    </div>
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-3xl font-bold text-yellow-600">{demoAnalytics.pending}</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-yellow-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Amount Exchanged</p>
                      <p className="text-3xl font-bold text-blue-600">₹{demoAnalytics.amountExchanged.toLocaleString()}</p>
                    </div>
                    <BarChart3 className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {demoProducts.slice(0, 3).map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Package className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{product.brand} {product.name}</h4>
                          <p className="text-sm text-gray-600">From: {product.user}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600">₹{product.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{product.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Accepted Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Accepted Products</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {demoProducts.map(product => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{product.brand} {product.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.condition === 'Working' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.condition}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{product.price.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Starred Products Tab */}
          {activeTab === 'starred' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Starred Products - Accept/Reject</h2>
              
              <div className="grid gap-6">
                {starredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{product.brand} {product.name}</h3>
                          <p className="text-gray-600">Condition: {product.condition}</p>
                          <p className="text-gray-600">User: {product.user}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-emerald-600">₹{product.price.toLocaleString()}</p>
                        {product.status === 'pending' ? (
                          <div className="flex space-x-2 mt-4">
                            <button
                              onClick={() => handleProductAction(product.id, 'accept')}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Accept
                            </button>
                            <button
                              onClick={() => handleProductAction(product.id, 'reject')}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            product.status === 'accepted' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status === 'accepted' ? 'Accepted' : 'Rejected'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Government Verification Tab */}
          {activeTab === 'verification' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Government Verification Updates</h2>
              
              <div className="space-y-4">
                {demoVerificationUpdates.map(update => (
                  <div key={update.id} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        update.type === 'success' ? 'bg-green-100' :
                        update.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <Shield className={`h-6 w-6 ${
                          update.type === 'success' ? 'text-green-600' :
                          update.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{update.message}</p>
                        <p className="text-sm text-gray-500 mt-1">{update.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">Compliance Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">Recycling License</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">Environmental Compliance</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700">Annual Report</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Due Soon</span>
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