import React from 'react';
import '../Styles/homestyle.css'; 
import logo from '../Assets/Logo.png';
import winebott from '../Assets/winebottle-2.mp4';


function AboutPage() {
  return (
    <>
      <div className="video-section">
        <video className="video-background" autoPlay loop muted>
          <source src={winebott} type="video/mp4" />
        </video>

        <div className="navbar">
          <div className="navbar_logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className="notepad-btn">📝 Notepad</button>
          </div>
        </div>

        <div className="hero">
          <div className="hero-content">
            <h1 className="name">About Dine and Wine</h1>
            <p className="paragraph">
              At <strong>Dine and Wine</strong>, we believe that every meal can be a celebration when paired with the perfect wine.
              Our mission is to help you discover unique wine pairings tailored to your food, mood, and moments.
              Whether you're a seasoned sommelier or a curious beginner, we're here to elevate your dining experience.
            </p>
            <p className="paragraph">
              With curated suggestions, a personal notepad to save your favorites, and a blog packed with pairing tips,
              Dine and Wine is your companion in every glass you pour.
            </p>
          </div>
        </div>
      </div>

      <div className="ad">
        <div className="moving">
          <div className="track">
            <span>Curated Wine Pairings for Your Favorite Dishes </span>
            <span>Learn How to Taste Like a Pro </span>
            <span>Weekly Articles on Flavor Chemistry </span>
            <span>Because Every Bite Deserves the Right Sip </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
