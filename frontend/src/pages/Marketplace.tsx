import React, { useState } from 'react';
import { Search, Filter, Heart, ShoppingCart, Star, MapPin, Smartphone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';

const demoProducts = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    price: 45000,
    originalPrice: 65000,
    condition: 'Excellent',
    location: 'Mumbai',
    seller: 'TechCycle Partners',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    category: 'smartphones',
    components: ['screen', 'battery', 'charger']
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    brand: 'Apple',
    price: 75000,
    originalPrice: 120000,
    condition: 'Good',
    location: 'Delhi',
    seller: 'EcoTech Solutions',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'laptops',
    components: ['screen', 'battery', 'charger', 'accessories']
  },
  {
    id: '3',
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    price: 32000,
    originalPrice: 55000,
    condition: 'Very Good',
    location: 'Bangalore',
    seller: 'Green Recyclers',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/340103/pexels-photo-340103.jpeg',
    category: 'smartphones',
    components: ['screen', 'battery']
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    brand: 'Dell',
    price: 42000,
    originalPrice: 80000,
    condition: 'Good',
    location: 'Chennai',
    seller: 'Sustainable Tech',
    rating: 4.3,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    category: 'laptops',
    components: ['screen', 'charger']
  },
  {
    id: '5',
    name: 'iPad Air',
    brand: 'Apple',
    price: 28000,
    originalPrice: 45000,
    condition: 'Very Good',
    location: 'Pune',
    seller: 'TechCycle Partners',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    category: 'tablets',
    components: ['screen', 'charger', 'accessories']
  },
  {
    id: '6',
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 25000,
    originalPrice: 42000,
    condition: 'Good',
    location: 'Hyderabad',
    seller: 'EcoTech Solutions',
    rating: 4.4,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    category: 'smartphones',
    components: ['screen', 'battery', 'charger']
  }
];

export default function Marketplace() {
  const { cart, wishlist, addToCart, addToWishlist, removeFromWishlist } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'smartphones', 'laptops', 'tablets', 'accessories'];
  const conditions = ['all', 'Excellent', 'Very Good', 'Good', 'Fair'];
  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'];

  const filteredProducts = demoProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesCondition = selectedCondition === 'all' || product.condition === selectedCondition;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesLocation = selectedLocation === 'all' || product.location === selectedLocation;
      
      return matchesSearch && matchesCategory && matchesCondition && matchesPrice && matchesLocation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return new Date(b.id).getTime() - new Date(a.id).getTime();
        default: return 0;
      }
    });

  const isInWishlist = (productId: string) => wishlist.some(item => item.id === productId);
  const isInCart = (productId: string) => cart.some(item => item.id === productId);

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        condition: product.condition,
        seller: product.seller
      });
    }
  };

  const handleAddToCart = (product: any) => {
    if (!isInCart(product.id)) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        condition: product.condition,
        seller: product.seller
      });
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Very Good': return 'bg-blue-100 text-blue-800';
      case 'Good': return 'bg-yellow-100 text-yellow-800';
      case 'Fair': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Marketplace</h1>
            <p className="text-gray-600">Discover refurbished tech at great prices</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <Heart className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">{wishlist.length}</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <ShoppingCart className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">{cart.length}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 bg-white rounded-xl p-6 shadow-md h-fit`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Condition Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center bg-white px-4 py-2 rounded-lg shadow-sm"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => handleWishlistToggle(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full ${
                        isInWishlist(product.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-400 hover:text-red-500'
                      } transition-colors`}
                    >
                      <Heart className="h-5 w-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
                      {product.condition}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{product.brand}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-emerald-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-sm text-emerald-600 font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {product.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>Sold by: {product.seller}</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-1">Includes:</div>
                      <div className="flex flex-wrap gap-1">
                        {product.components.map(component => (
                          <span key={component} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isInCart(product.id)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        isInCart(product.id)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}