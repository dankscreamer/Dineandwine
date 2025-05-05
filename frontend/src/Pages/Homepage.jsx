import React from 'react';
import '../Styles/homestyle.css';
import logo from '../Assets/Logo.png';

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
