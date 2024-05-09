import './assets/styles/globals.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  LandingPage  from './pages/Landingpage/landingpage';
import { Login } from './components/users/Login';
import { Register } from './components/users/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
