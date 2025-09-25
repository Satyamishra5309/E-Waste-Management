import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage your e-waste transactions and track your environmental impact</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Impact</h3>
          <div className="impact-stats">
            <div className="impact-item">
              <span className="impact-value">15</span>
              <span className="impact-label">Devices Recycled</span>
            </div>
            <div className="impact-item">
              <span className="impact-value">120kg</span>
              <span className="impact-label">CO2 Reduced</span>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3>Recent Transactions</h3>
          <div className="transactions-list">
            <div className="transaction-item">
              <span>iPhone 12 Pro</span>
              <span className="transaction-amount">+₹8,500</span>
            </div>
            <div className="transaction-item">
              <span>Dell Laptop</span>
              <span className="transaction-amount">+₹12,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;