import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';     
import Paringswine from './Pages/Paringswine';
import WineDishes from './Pages/Food';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/parings" element={<Paringswine />} />
        <Route path="/food" element={<WineDishes />} />
        
      </Routes>
    </Router>
  );
}

export default App;
