import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart3, FileText, Users, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const impactStats = [
  { label: 'E-Waste Monitored', value: '2.5M tonnes', icon: BarChart3, color: 'text-emerald-600' },
  { label: 'Companies Regulated', value: '450+', icon: Users, color: 'text-blue-600' },
  { label: 'Carbon Footprint Reduced', value: '67% decrease', icon: TrendingUp, color: 'text-green-600' },
  { label: 'Environmental Compliance', value: '98% rate', icon: Shield, color: 'text-purple-600' }
];

const keyFeatures = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Monitor and ensure all e-waste processing partners comply with environmental regulations and safety standards.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track e-waste flow, processing rates, and environmental impact through comprehensive dashboards and reports.'
  },
  {
    icon: FileText,
    title: 'Documentation & Reporting',
    description: 'Maintain detailed records of e-waste processing, partner certifications, and environmental impact assessments.'
  },
  {
    icon: Globe,
    title: 'Environmental Impact Tracking',
    description: 'Monitor carbon savings, resource recovery, and overall environmental benefits from e-waste recycling activities.'
  }
];

const trends = [
  {
    title: 'Growing E-Waste Crisis',
    stat: '62M tonnes globally',
    description: 'Global e-waste generation is increasing by 3-5% annually, requiring urgent government intervention and regulation.',
    trend: '+21% from 2019'
  },
  {
    title: 'India E-Waste Generation',
    stat: '4.2M tonnes annually',
    description: 'India is the third-largest e-waste generator globally, making regulatory oversight critical for environmental protection.',
    trend: '+30% growth expected by 2025'
  },
  {
    title: 'Recycling Rate Gap',
    stat: 'Only 20% properly recycled',
    description: 'Despite growing awareness, most e-waste still ends up in landfills, highlighting the need for better tracking systems.',
    trend: 'Target: 70% by 2027'
  }
];

export default function GovernmentRole() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-emerald-300 mr-4" />
                <span className="text-emerald-200 text-lg font-medium">Government Partnership</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Regulatory Oversight for <span className="text-emerald-300">Sustainable</span> E-Waste Management
              </h1>
              <p className="text-xl mb-8 text-emerald-100">
                Government agencies play a crucial role in monitoring, regulating, and ensuring compliance 
                in e-waste processing to protect our environment and public health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  state={{ preselectedCategory: 'government' }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
                >
                  Join as Government Partner
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-emerald-300 text-emerald-100 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center"
                >
                  Access Portal
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7432017/pexels-photo-7432017.jpeg"
                alt="Government oversight"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Government Impact Through CycleBit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how government oversight and regulation through our platform is making a measurable difference
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Government Portal Features</h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools for regulatory oversight and environmental protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trends & Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">E-Waste Trends & Statistics</h2>
            <p className="text-xl text-gray-600">
              Understanding the scale and urgency of the e-waste crisis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-100">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{trend.stat}</div>
                  <div className="text-lg font-semibold text-gray-800">{trend.title}</div>
                  <div className="text-sm text-emerald-600 font-medium mt-1">{trend.trend}</div>
                </div>
                <p className="text-gray-600 leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Government Partnership Matters */}
      <div className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Government Partnership is Critical</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 p-2 rounded-lg mt-1">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Regulatory Enforcement</h3>
                    <p className="text-emerald-100">
                      Ensure all e-waste processing partners meet strict environmental and safety standards 
                      through continuous monitoring and compliance verification.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 p-2 rounded-lg mt-1">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Policy Development</h3>
                    <p className="text-emerald-100">
                      Use real-time data and insights from our platform to develop evidence-based 
                      policies for sustainable e-waste management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 p-2 rounded-lg mt-1">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Environmental Protection</h3>
                    <p className="text-emerald-100">
                      Track and measure environmental impact, ensuring e-waste processing contributes 
                      to carbon reduction and resource conservation goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Ready to Make an Impact?</h3>
                <p className="text-emerald-100 mb-8">
                  Join government agencies already using CycleBit to monitor and regulate 
                  e-waste processing across the country.
                </p>
                <Link
                  to="/signup"
                  state={{ preselectedCategory: 'government' }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-colors inline-flex items-center"
                >
                  Create Government Account
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}