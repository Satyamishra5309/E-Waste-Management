import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Users, Recycle, Globe, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';

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
             backgroundImage: `url('https://images.pexels.com/photos/7048060/pexels-photo-7048060.jpeg')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlendMode: 'overlay',
           }}>
        <div className="absolute inset-0 bg-emerald-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Slogan */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Don't just trash it, <span className="text-emerald-300">cash it!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-emerald-100">
              Turn your old tech into tomorrow's treasure.
            </p>
            <p className="text-lg md:text-xl mb-4 text-emerald-200">
              Your e-waste is someone else's e-opportunity.
            </p>
            <p className="text-lg md:text-xl mb-8 text-emerald-200">
              Sell your old devices, power new innovations.
            </p>
            <Link to="/signup" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
              Get Started Today
            </Link>
          </div>

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

      {/* Action Buttons */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/dashboard/user" className="group">
              <div className="bg-emerald-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow group-hover:bg-emerald-100">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Sell</h3>
                <p className="text-emerald-600">Turn your old devices into cash</p>
              </div>
            </Link>
            
            <Link to="/marketplace" className="group">
              <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow group-hover:bg-green-100">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Buy</h3>
                <p className="text-green-600">Find refurbished tech at great prices</p>
              </div>
            </Link>
            
            <Link to="/become-partner" className="group">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow group-hover:bg-gray-100">
                <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Partner</h3>
                <p className="text-gray-600">Join our recycling network</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">The E-Waste Crisis</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="bg-emerald-800 rounded-xl p-8 mb-8">
                <h3 className="text-6xl font-bold text-emerald-300 mb-2">62M</h3>
                <p className="text-xl">Tonnes of global e-waste annually</p>
              </div>
              <div className="bg-emerald-800 rounded-xl p-8">
                <h3 className="text-6xl font-bold text-emerald-300 mb-2">4M</h3>
                <p className="text-xl">Tonnes of e-waste in India per year</p>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Be Part of the Solution</h3>
              <p className="text-lg mb-8 text-emerald-100">
                Every device you recycle through CycleBit helps reduce environmental impact 
                and creates economic opportunities. Join thousands of users making a difference.
              </p>
              <Link to="/signup" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
                Start Recycling Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Upload', desc: 'List your old device with photos', icon: '📱' },
              { step: 2, title: 'Price', desc: 'Get instant price estimation', icon: '💰' },
              { step: 3, title: 'Connect', desc: 'Match with verified partners', icon: '🤝' },
              { step: 4, title: 'Recycle', desc: 'Complete the transaction safely', icon: '♻️' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.step}. {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-emerald-600 mx-auto mt-4 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Trusted Partners</h2>
          <div className="flex items-center justify-center space-x-8 overflow-hidden">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md min-w-24 h-24 flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                  index === currentPartner ? 'scale-110 shadow-lg bg-emerald-50' : 'opacity-70'
                }`}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  index === 1 ? 'md:scale-110 bg-emerald-50' : 'md:opacity-80'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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