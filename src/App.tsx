import './assets/styles/globals.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landingpage/landingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
