import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';
import { 
  ArrowRight, 
  Smartphone, 
  Users, 
  Recycle,
  ShoppingBag, 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Globe,
  TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Flowchart from '../components/Flowchart';

const partners = [
  { name: 'Apple', logo: '/img/apple.jpeg' },
  { name: 'Asus', logo: '/img/asus.png' },
  { name: 'Dell', logo: '/img/dell.png' },
  { name: 'Google', logo: '/img/google.png' },
  { name: 'Samsung', logo: '/img/samsung.png' },
  { name: 'HP', logo: '/img/hp.png' },
  { name: 'TATA', logo: '/img/tata.png' }
];


const heroImages = [
  'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
  'img/herocarousel1.png',
  'img/herocarousel2.png'
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

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "CycleBit made it so easy to sell my old laptop. Great prices and smooth process!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Tech Solutions Inc.",
    rating: 5,
    comment: "As a partner, we've processed thousands of devices through CycleBit. Excellent platform!",
    avatar: "TS"
  },
  {
    id: 3,
    name: "Green Initiative Dept.",
    rating: 5,
    comment: "CycleBit helps us track e-waste efficiently. Great for environmental monitoring.",
    avatar: "GI"
  }
];

export default function LandingPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 min-h-screen flex items-center"
           style={{
             backgroundImage: "url('/img/hero_bg.png')",
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlendMode: 'overlay',
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/img/hero_bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Slogan */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Don't just trash it,
                  </span>
                  <br />
                  <span className="text-gray-900">cash it!</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  Turn your old tech into tomorrow's treasure. Your e-waste is someone else's e-opportunity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-gray-500"
                >
                  Sell your old devices, power new innovations.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  to="/signup"
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

       {/* Three Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to buy, sell, or partner with us, we have the perfect solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
                link: '/signup',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'Partner',
                description: 'Join our network of buyers and access bulk quantities of quality refurbished electronics and other e-waste.',
                features: ['Bulk Purchasing', 'Priority Access', 'Custom Solutions'],
                cta: 'Become Partner',
                link: '/signup',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
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

      {/* Stats Section */}
     <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The E-Waste Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the scale helps us make a bigger impact together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                stat: '62M',
                label: 'Tonnes of e-waste globally per year',
                color: 'text-red-500'
              },
              {
                icon: TrendingUp,
                stat: '4M',
                label: 'Tonnes generated in India annually',
                color: 'text-orange-500'
              },
              {
                icon: Leaf,
                stat: '3rd',
                label: 'Largest e-waste generator in the world',
                color: 'text-green-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} bg-white rounded-full shadow-lg mb-4`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowchart */}
      <Flowchart />

      {/* Partners Carousel */}
      <section className="py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-xl text-gray-600">
        Join thousands of businesses who trust CycleBit for their e-waste management needs.
      </p>
    </motion.div>

    {/* Carousel container */}
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex space-x-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate logos twice for smooth infinite scrolling */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[150px]"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


       {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real people using CycleBit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white rounded-xl p-8 shadow-lg ${
                  index === 1 ? 'scale-105 border-2 border-green-200' : 'opacity-90'
                }`}
              >
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
              <p className="text-gray-300">
                Transforming e-waste into opportunities for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-emerald-400">Home</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-emerald-400">Buy</Link></li>
                <li><Link to="/login" className="text-gray-300 hover:text-emerald-400">Sell</Link></li>
                <li><Link to="/become-partner" className="text-gray-300 hover:text-emerald-400">Partner</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/government-role" className="text-gray-300 hover:text-emerald-400">Government Role</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-300 mb-2">Email: hello@cyclebit.com</p>
              <p className="text-gray-300 mb-2">Phone: +91 98765 43210</p>
              <p className="text-gray-300">Address: Green Tech Park, Bangalore</p>
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