import React, { useState } from 'react';
import '../Styles/paringswine.css'; 
import winebott from '../Assets/winebottle-2.mp4'; 
import { Link } from 'react-router-dom';

const WinePairing = () => {
  const [food, setFood] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '6cde48ada8e24f25bd345c1bd24d0242';

  const fetchPairings = () => {
    setError('');
    setResult(null);

    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (!data.pairedWines || data.pairedWines.length === 0) {
          setError(`No wine pairings found for "${food}".`);
        } else {
          setResult(data);
        }
      })
      .catch(err => {
        console.error(err);
        setError('Something went wrong while fetching data.');
      });
  };

  const saveWine = (product) => {
    const existing = JSON.parse(localStorage.getItem('savedWines')) || [];

    const alreadySaved = existing.some(w => w.title === product.title);
    if (alreadySaved) {
      alert('Already saved!');
      return;
    }

    const updated = [...existing, product];
    localStorage.setItem('savedWines', JSON.stringify(updated));
    alert('Saved to Notepad!');
  };

  return (
    <div className="winepairing-video-section">
      <Link to="/" className="back-button">← Back</Link>

      <video className="winepairing-video-background" autoPlay loop muted>
        <source src={winebott} type="video/mp4" />
      </video>

      <div className="winepairing-container">
        <h2>Wine Pairing Finder</h2>

        <input
          type="text"
          value={food}
          placeholder="Enter a food (e.g. steak)"
          onChange={(e) => setFood(e.target.value)}
          className="winepairing-input"
        />

        <button onClick={fetchPairings} className="winepairing-button">
          Get Pairings
        </button>

        <div className="winepairing-result">
          {error && <p className="winepairing-error">{error}</p>}

          {result && (
            <>
              <h3>Pairings for "{food}"</h3>
              <p>{result.pairingText}</p>

              <ul>
                {result.pairedWines.map((wine, index) => (
                  <li key={index}>{wine}</li>
                ))}
              </ul>

              {result.productMatches && result.productMatches.length > 0 && (
                <div className="winepairing-products">
                  <h4>Recommended Wines</h4>
                  {result.productMatches.map((product, index) => (
                    <div key={index} className="winepairing-product">
                      <img src={product.imageUrl} alt={product.title} />
                      <h5>{product.title}</h5>
                      <p>Price: {product.price}</p>
                      <p>Average Rating: {product.averageRating || 'N/A'}</p>
                      <p>Description: {product.description}</p>
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Buy Now →
                      </a>
                      <button 
                        onClick={() => saveWine(product)} 
                        style={{
                          marginTop: '0.5em',
                          padding: '0.4em 1em',
                          border: 'none',
                          backgroundColor: '#800000',
                          color: 'white',
                          borderRadius: '0.3em',
                          cursor: 'pointer'
                        }}
                      >
                        Save to Notepad
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinePairing;
