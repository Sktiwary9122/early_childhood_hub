import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EconomicContext from './pages/EconomicContext';
import SocialContext from './pages/SocialContext';
import CulturalContext from './pages/CulturalContext';
import HealthContext from './pages/HealthContext';
import CrisisContext from './pages/CrisisContext';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/economic" element={<EconomicContext />} />
          <Route path="/social" element={<SocialContext />} />
          <Route path="/cultural" element={<CulturalContext />} />
          <Route path="/health" element={<HealthContext />} />
          <Route path="/crisis" element={<CrisisContext />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
