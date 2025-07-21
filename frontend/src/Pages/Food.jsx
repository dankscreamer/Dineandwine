import React, { useState } from 'react';
import '../Styles/foodwine.css'; 
import winebott from '../Assets/winebottle.mp4';
import { Link } from 'react-router-dom';

const WineDishes = () => {
  const [wine, setWine] = useState('');
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '6cde48ada8e24f25bd345c1bd24d0242'; 

  const fetchDishes = () => {
    setError('');
    setDishes([]);
    setLoading(true);

    fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (!data.pairings || data.pairings.length === 0) {
          setError(`No dish pairings found for "${wine}".`);
        } else {
          setDishes(data.pairings);
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        setError('Something went wrong while fetching dishes.');
      });
  };

  return (
    <div className="food-video-section">
        <Link to="/" className="back-button">← Back</Link>
        
      <video className="food-video-background" autoPlay loop muted>
        <source src={winebott} type="video/mp4" />
      </video>

      <div className="food-container">
        <h1>Dish Suggestions for Wine</h1>

        <input
          className="food-input"
          type="text"
          placeholder="Enter Wine Name (e.g., merlot)"
          value={wine}
          onChange={(e) => setWine(e.target.value)}
        />

        <button className="food-button" onClick={fetchDishes}>Get Dishes</button>

        {loading && <p className="food-loading">Loading...</p>}
        {error && <p className="food-error">{error}</p>}

        {dishes.length > 0 && (
          <div className="food-dish-list">
            <h3>Dishes that go well with <b>{wine}</b>:</h3>
            <ul>
              {dishes.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WineDishes;
