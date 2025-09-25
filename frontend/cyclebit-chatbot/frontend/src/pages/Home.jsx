import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform E-Waste into Opportunity</h1>
          <p>CycleBit connects buyers, sellers, and recyclers for sustainable electronics management</p>
          <div className="hero-buttons">
            <button className="btn-primary">Sell Your Device</button>
            <button className="btn-secondary">Browse Marketplace</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="recycling-animation">♻️</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>2.5M+</h3>
          <p>Devices Recycled</p>
        </div>
        <div className="stat-item">
          <h3>450+</h3>
          <p>Partner Facilities</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>67%</h3>
          <p>Carbon Reduction</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>How CycleBit Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Buy Refurbished</h3>
            <p>Quality-checked electronics with warranty</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Sell E-Waste</h3>
            <p>Get fair prices for your old devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3>Recycle Responsibly</h3>
            <p>Environmentally safe disposal methods</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Impact</h3>
            <p>Monitor your environmental contribution</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;