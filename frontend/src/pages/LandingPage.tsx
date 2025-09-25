import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Smartphone, 
  Users, 
  Recycle,
  ShoppingBag, 
  Star,
  Quote,
  Globe,
  Leaf,
  TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Flowchart from '../components/Flowchart';
import { useAuth } from '../contexts/AuthContext';

const partners = [
  { name: 'Amazon', logo: 'https://images.pexels.com/photos/4466751/pexels-photo-4466751.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' },
  { name: 'Samsung', logo: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' },
  { name: 'Apple', logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' },
  { name: 'Microsoft', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' },
  { name: 'Dell', logo: 'https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' },
  { name: 'HP', logo: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1' }
];

const heroImages = [
  'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
  'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
  'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg'
];

const partnerLogos = [
  { name: 'Amazon', logo: 'A' },
  { name: 'Samsung', logo: 'S' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Google', logo: 'G' },
  { name: 'Microsoft', logo: 'M' },
  { name: 'Dell', logo: 'D' }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Electronics Seller',
    image: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'CycleBit helped me earn ₹15,000 from my old laptop and phone. The pickup service was amazing, and payment was instant!',
    rating: 5
  },
  {
    name: 'Rahul Kumar',
    role: 'Tech Enthusiast',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'Found great deals on refurbished devices. The AI condition assessment is spot-on. Highly recommend for buyers and sellers!',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'Partner Buyer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    text: 'As a bulk buyer, CycleBit\'s platform streamlined our procurement process. Excellent quality devices at competitive prices.',
    rating: 5
  }
];

export default function LandingPage() {
  const { user } = useAuth();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partnerLogos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      icon: ShoppingBag,
      title: 'Buy',
      description: 'Discover quality refurbished electronics at unbeatable prices. Every purchase helps reduce e-waste.',
      features: ['Verified Quality', 'Best Prices', 'Warranty Included'],
      cta: 'Browse Products',
      link: '/marketplace',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Sell',
      description: 'Turn your old devices into cash. List your electronics and connect with buyers instantly.',
      features: ['AI Price Estimation', 'Free Pickup', 'Instant Payment'],
      cta: 'Start Selling',
      link: user ? '/dashboard/user' : '/signup',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Partner',
      description: 'Join our network of buyers and access bulk quantities of quality refurbished electronics.',
      features: ['Bulk Purchasing', 'Priority Access', 'Custom Solutions'],
      cta: 'Become Partner',
      link: user ? '/dashboard/partner' : '/signup',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 min-h-screen flex items-center"
           style={{
             backgroundImage: `url('https://images.pexels.com/photos/7048060/pexels-photo-7048060.jpeg')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlendMode: 'overlay',
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Slogan */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="space-y-6">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Don't just trash it,
                </span>
                <br />
                <span className="text-gray-900">cash it!</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl text-gray-600 leading-relaxed">
                Turn your old tech into tomorrow's treasure. Your e-waste is someone else's e-opportunity.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg text-gray-500">
                Sell your old devices, power new innovations.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={user ? '/dashboard/user' : '/signup'}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg flex items-center justify-center group"
              >
                Start Selling Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/marketplace"
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all flex items-center justify-center"
              >
                Browse Products
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to buy, sell, or partner with us, we have the perfect solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>

                <ul className="space-y-2 mb-8">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={card.link}
                  className={`block text-center bg-gradient-to-r ${card.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}
                >
                  {card.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowchart */}
      <Flowchart />

      {/* Partners Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses who trust CycleBit for their e-waste management needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
            {partners.map((partner, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people using CycleBit.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className={`bg-white rounded-xl p-8 shadow-lg ${index === 1 ? 'scale-105 border-2 border-green-200' : 'opacity-90'}`}>
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center space-x-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Recycle className="h-8 w-8 text-emerald-400 mr-2" />
                <span className="text-2xl font-bold">CycleBit</span>
              </div>
              <p className="text-gray-300">Transforming e-waste into opportunities for a sustainable future.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2024 CycleBit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
