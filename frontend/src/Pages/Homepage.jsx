import React, { useState, useEffect } from 'react';
import '../Styles/homestyle.css';
import logo from '../Assets/Logo.png';
import winebott from '../Assets/winebottle.mp4';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; 

function Homepage() {
  const [line, setLine] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const [notepadOpen, setNotepadOpen] = useState(false);
  const [savedWines, setSavedWines] = useState([]);

  useEffect(() => {
    const lines = [
      "For every meal, there's a wine—let's find yours and set the vibe!",
      "Pair your plate with the perfect wine, and let the good times flow!",
      "Wine and dine, and I’ll make sure your mood’s just fine!",
      "A great meal deserves great wine—let me match the perfect pair for you!",
      "Sip, savor, and let the wine elevate your meal and mood!"
    ];
    setLine(lines[Math.floor(Math.random() * lines.length)]);

    const stored = JSON.parse(localStorage.getItem('savedWines')) || [];
    setSavedWines(stored);
  }, []);

  const removeWine = (indexToRemove) => {
    const updated = savedWines.filter((_, index) => index !== indexToRemove);
    setSavedWines(updated);
    localStorage.setItem('savedWines', JSON.stringify(updated));
  };

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
              <li><a href="/About">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className="notepad-btn" onClick={() => setNotepadOpen(!notepadOpen)}>
              {notepadOpen ? 'Close Notepad ❌' : '📝 Notepad'}
            </button>
          </div>
        </div>

        <div className="hero">
          <div className="hero-content">
            <h1 className="name">Dine And Wine</h1>
            <p className="paragraph">{line}</p>
            <button className="hero-button" onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? 'Hide Pairings ⬆' : 'View Pairings ⬇'}
            </button>

            {showLinks && (
              <div className="pairing-links">
                <Link to="/Parings" className="pair-link">Wine Pairing</Link>
                <Link to="/food" className="pair-link">Food Pairing</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {notepadOpen && (
        <div className="notepad-popup">
          <h2>🗒️ Notepad – Saved Wines</h2>
          {savedWines.length === 0 ? (
            <p>No saved wines yet.</p>
          ) : (
            savedWines.map((wine, idx) => (
              <div key={idx} className="saved-wine-card">
                <button className="remove-wine-btn" onClick={() => removeWine(idx)}>❌</button>
                <h4>{wine.title}</h4>
                <p>{wine.price}</p>
                <a href={wine.link} target="_blank" rel="noopener noreferrer">Buy →</a>
              </div>
            ))
          )}
        </div>
      )}

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
