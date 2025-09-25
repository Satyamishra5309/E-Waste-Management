import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, Truck, CreditCard, Recycle, Users } from 'lucide-react';

const Flowchart = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'List Your Device',
      description: 'Upload photos and details of your old electronics',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'AI Evaluation',
      description: 'Our AI assesses condition and suggests optimal pricing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Find Buyers',
      description: 'Connect with verified partners and individual buyers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Schedule Pickup',
      description: 'Free doorstep pickup service across major cities',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Get Paid',
      description: 'Secure payment directly to your account',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Recycle,
      title: 'Eco Impact',
      description: 'Track your contribution to reducing e-waste',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How CycleBit Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Simple, secure, and sustainable. Transform your old devices into cash in just 6 easy steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Step {index + 1}</div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
          >
            Start Selling Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Flowchart;