import React, { useState, useEffect } from 'react';
import '../Styles/homestyle.css';
import logo from '../Assets/Logo.png';
import winebott from '../Assets/winebottle.mp4';

function Homepage() {
  const [line, setLine] = useState('');

  useEffect(() => {
    const lines = [
      "For every meal, there's a wine—let's find yours and set the vibe!",
      "Pair your plate with the perfect wine, and let the good times flow!",
      "Wine and dine, and I’ll make sure your mood’s just fine!",
      "A great meal deserves great wine—let me match the perfect pair for you!",
      "Sip, savor, and let the wine elevate your meal and mood!"
    ];
    setLine(lines[Math.floor(Math.random() * lines.length)]);
  }, []);

  return (
    <>
      <div className="video-section">
        <video className="video-background" autoPlay loop muted>
          <source src={winebott} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="navbar">
          <div className="navbar_logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className="notepad-btn">📝 Notepad</button>
          </div>
        </div>

        <div className="hero">
          <div className="hero-content">
            <h1 className="name">Dine And Wine</h1>
            <p className="paragraph">{line}</p>
            <button className="hero-button">View Pairings</button> 
          </div>
        </div>
      </div>

      <div className="ad">
        <div className="moving">
          <div className="track">
            <span>Discover Wine Pairing Tips </span>
            <span>Save Favorites in Notepad </span>
            <span>Explore New Flavors Weekly </span>
            <span>Join the Tasting Club Today! </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
