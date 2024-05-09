import './assets/styles/globals.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/landingpage/Navbar';
import  LandingPage  from './pages/Landingpage/landingpage';
import { Login } from './components/users/Login';
import { Register } from './components/users/Register';
import { AwaitConfirmation } from './components/users/AwaitConfirmation';
import { ConfirmationMail } from './components/users/ConfirmationMail';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/await/confirmation" element={<AwaitConfirmation/>} />
        <Route path="/auth/users/activation/:uid/:token" element={<ConfirmationMail/>} />
      </Routes>
    </Router>
  );
}

export default App;
