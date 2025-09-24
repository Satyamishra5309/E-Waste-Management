import React, { useState } from 'react';
import { Users, Shield, BarChart3, FileText, TrendingUp, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';

const sidebarItems = [
  { id: 'users', name: 'Manage Users', icon: Users },
  { id: 'partners', name: 'Verify Partners', icon: Shield },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  { id: 'content', name: 'Content Management', icon: FileText }
];

const demoUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', type: 'user', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'EcoTech Solutions', email: 'contact@ecotech.com', type: 'partner', status: 'active', joinDate: '2024-01-10' },
  { id: 3, name: 'EPA Department', email: 'dept@gov.org', type: 'government', status: 'active', joinDate: '2024-01-05' }
];

const demoAnalytics = {
  carbonSavings: '45.7 tonnes',
  transactionVolume: '₹12.5M',
  userGrowth: '+25%',
  partnerEngagement: '87%',
  totalUsers: 15430,
  totalPartners: 145,
  totalTransactions: 8924,
  environmentalImpact: '98.5 tonnes CO₂ saved'
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen sticky top-16">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Portal</h2>
            <p className="text-sm text-gray-600">System Administrator</p>
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
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Platform Analytics</h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Carbon Savings</p>
                      <p className="text-2xl font-bold text-emerald-600">{demoAnalytics.carbonSavings}</p>
                    </div>
                    <Globe className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Transaction Volume</p>
                      <p className="text-2xl font-bold text-blue-600">{demoAnalytics.transactionVolume}</p>
                    </div>
                    <BarChart3 className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">User Growth</p>
                      <p className="text-2xl font-bold text-green-600">{demoAnalytics.userGrowth}</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Partner Engagement</p>
                      <p className="text-2xl font-bold text-purple-600">{demoAnalytics.partnerEngagement}</p>
                    </div>
                    <Shield className="h-12 w-12 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Platform Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Users:</span>
                      <span className="font-semibold text-gray-800">{demoAnalytics.totalUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Partners:</span>
                      <span className="font-semibold text-gray-800">{demoAnalytics.totalPartners}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Transactions:</span>
                      <span className="font-semibold text-gray-800">{demoAnalytics.totalTransactions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Environmental Impact:</span>
                      <span className="font-semibold text-emerald-600">{demoAnalytics.environmentalImpact}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-800">New partner verified: EcoTech Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-800">125 new user registrations today</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-emerald-800">2.5 tonnes CO₂ saved this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Manage Users</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {demoUsers.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.type === 'user' ? 'bg-blue-100 text-blue-800' :
                            user.type === 'partner' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {user.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joinDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900 mr-4">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Suspend</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Verify Partners</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Partner verification is typically handled by government agencies. 
                  Admin review is for secondary validation and platform compliance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Partner Overview</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">38</p>
                    <p className="text-green-700">Verified Partners</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">7</p>
                    <p className="text-yellow-700">Pending Review</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">2</p>
                    <p className="text-red-700">Suspended</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Management Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Content Management</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Site Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Homepage Views:</span>
                      <span className="font-semibold">45,892</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marketplace Visits:</span>
                      <span className="font-semibold">23,451</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blog Posts:</span>
                      <span className="font-semibold">47</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left bg-emerald-50 hover:bg-emerald-100 p-3 rounded-lg transition-colors">
                      <span className="font-medium text-emerald-800">Update Homepage Content</span>
                    </button>
                    <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
                      <span className="font-medium text-blue-800">Manage Partner Listings</span>
                    </button>
                    <button className="w-full text-left bg-purple-50 hover:bg-purple-100 p-3 rounded-lg transition-colors">
                      <span className="font-medium text-purple-800">System Announcements</span>
                    </button>
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