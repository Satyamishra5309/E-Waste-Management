import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart3, Shield, Globe, TrendingUp, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const partnerStats = [
  { label: 'Active Partners', value: '150+', icon: Users, color: 'text-blue-600' },
  { label: 'Devices Processed', value: '45K+', icon: BarChart3, color: 'text-emerald-600' },
  { label: 'Revenue Generated', value: '₹8.5M+', icon: DollarSign, color: 'text-green-600' },
  { label: 'Carbon Impact', value: '120 tonnes CO₂', icon: Globe, color: 'text-purple-600' }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Lucrative Revenue Streams',
    description: 'Access to a steady flow of high-value e-waste with transparent pricing and guaranteed transactions.',
    highlight: 'Average 30% profit margin'
  },
  {
    icon: Shield,
    title: 'Government Compliance',
    description: 'Built-in regulatory compliance tools and documentation to meet all environmental standards.',
    highlight: 'Automated compliance reporting'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Scale your recycling business with access to verified suppliers and buyers across India.',
    highlight: '40% average growth in first year'
  },
  {
    icon: Globe,
    title: 'Environmental Impact',
    description: 'Be part of the solution to the e-waste crisis while building a profitable, sustainable business.',
    highlight: 'Track your environmental contributions'
  }
];

const requirements = [
  'Valid business registration and recycling license',
  'Compliance with environmental safety standards',
  'Processing capacity of minimum 100 devices per month',
  'Insurance coverage for e-waste handling',
  'Quality assurance and testing capabilities',
  'Secure data destruction protocols'
];

const processSteps = [
  {
    step: 1,
    title: 'Application & Verification',
    description: 'Submit your application with required documentation. Our team reviews your credentials and facilities.',
    duration: '3-5 business days'
  },
  {
    step: 2,
    title: 'Government Approval',
    description: 'Your application undergoes regulatory review and approval by relevant government authorities.',
    duration: '7-10 business days'
  },
  {
    step: 3,
    title: 'Platform Integration',
    description: 'Get trained on our platform, receive access credentials, and start processing devices.',
    duration: '2-3 business days'
  },
  {
    step: 4,
    title: 'Go Live',
    description: 'Begin receiving device assignments and start earning revenue immediately.',
    duration: 'Same day'
  }
];

export default function BecomePartner() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-200 to-emerald-300 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-black mr-4" />
                <span className="text-black text-lg font-medium">Partner Program</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Join India's Leading <span className="text-black">E-Waste</span> Recycling Network
              </h1>
              <p className="text-xl mb-8 text-black">
                Transform your recycling business with access to a verified supply chain, 
                guaranteed transactions, and comprehensive regulatory support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  state={{ preselectedCategory: 'partner' }}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Apply to Become Partner
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center justify-center"
                >
                  Existing Partner Login
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="../img/partner.png"
                alt="E-waste recycling facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner Network Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a thriving ecosystem of verified partners making a real difference in e-waste management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerStats.map((stat, index) => {
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

      {/* Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Partner with CycleBit?</h2>
            <p className="text-xl text-gray-600">
              Unlock new revenue opportunities while contributing to environmental sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <div className="bg-green-50 px-3 py-2 rounded-lg inline-block">
                        <span className="text-green-700 font-medium text-sm">{benefit.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Application Process</h2>
            <p className="text-xl text-gray-600">
              Get started in just a few steps and begin earning within 2-3 weeks
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <div className="text-sm font-medium text-green-600">{step.duration}</div>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-green-600 mx-auto mt-4 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Partner Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                To ensure quality and compliance, we have specific requirements for our partner network.
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Apply?</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Application Fee</h4>
                  <p className="text-green-700">₹5,000 (refundable upon approval)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Processing Time</h4>
                  <p className="text-blue-700">10-15 business days average</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Support</h4>
                  <p className="text-purple-700">Dedicated partner success manager</p>
                </div>
                <Link
                  to="/signup"
                  state={{ preselectedCategory: 'partner' }}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Start Application
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how our partners are growing their businesses and making an impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "EcoTech Solutions",
                location: "Mumbai",
                growth: "300% revenue increase",
                quote: "CycleBit transformed our business. We went from processing 50 devices monthly to over 500.",
                devices: "6,500+ processed"
              },
              {
                name: "Green Recyclers Ltd",
                location: "Bangalore",
                growth: "250% capacity expansion",
                quote: "The platform's compliance tools made it easy to meet all regulatory requirements.",
                devices: "4,200+ processed"
              },
              {
                name: "Sustainable Tech Corp",
                location: "Delhi",
                growth: "200% profit margin",
                quote: "Transparent pricing and guaranteed payments have stabilized our cash flow significantly.",
                devices: "3,800+ processed"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{story.name}</h3>
                  <p className="text-green-600 font-medium">{story.location}</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">{story.growth}</p>
                </div>
                <blockquote className="text-gray-600 italic mb-4 text-center">
                  "{story.quote}"
                </blockquote>
                <div className="text-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.devices}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}