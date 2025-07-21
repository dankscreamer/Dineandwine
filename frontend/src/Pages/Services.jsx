import React from 'react';
import '../Styles/services.css'; 
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div className="services-page">
      <header className="services-header">
        <img src={logo} alt="Logo" className="services-logo" />
        <h1>Our Services</h1>
        <p>Helping you pair wine and food like a pro 🍷🍽️</p>
      </header>

      <section className="services-section">
        <div className="service-card">
          <h2>🍷 Wine Pairing Guide</h2>
          <p>
            Discover the perfect wine for any meal using our AI-driven pairing
            engine. Whether it’s seafood or steak, we help you choose the best match.
          </p>
        </div>

        <div className="service-card">
          <h2>📓 Personal Notepad</h2>
          <p>
            Save your favorite wines, take notes, and track your tasting journey.
            Your personalized notepad remembers everything for your next sip!
          </p>
        </div>

        <div className="service-card">
          <h2>🛍️ Buy Recommendations</h2>
          <p>
            Get direct links to buy curated wines based on your preferences and
            budget. Quality and convenience in a single click.
          </p>
        </div>

        <div className="service-card">
          <h2>📰 Weekly Wine Blog</h2>
          <p>
            Stay informed with our weekly blog featuring wine tips, pairing trends,
            vineyard stories, and seasonal suggestions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
