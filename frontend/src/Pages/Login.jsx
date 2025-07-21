
import React, { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError('Google Sign-In failed.');
      console.error(err);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password.');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Dine And Wine</h2>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>

      <div className="or-divider">or</div>

      <form onSubmit={handleEmailLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Login with Email</button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="note">
        Don’t have an account? Use Google to sign in – it's quick and easy!
      </p>
    </div>
  );
}

export default Login;
