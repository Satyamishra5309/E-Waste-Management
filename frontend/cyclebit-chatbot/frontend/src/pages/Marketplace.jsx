import React from 'react';
import './Marketplace.css';

const Marketplace = () => {
  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <p>Browse quality refurbished electronics</p>
      </div>
      
      <div className="products-grid">
        <div className="product-card">
          <div className="product-image">📱</div>
          <div className="product-info">
            <h3>iPhone 13 Pro</h3>
            <p>128GB • Excellent Condition</p>
            <span className="product-price">₹45,999</span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image">💻</div>
          <div className="product-info">
            <h3>Dell XPS 13</h3>
            <p>i7 • 16GB RAM • 512GB SSD</p>
            <span className="product-price">₹62,999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;