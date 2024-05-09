import './assets/styles/globals.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './stores/userAtom';
import { Navbar } from './components/landingpage/Navbar';
import  LandingPage  from './pages/Landingpage/landingpage';
import { Login } from './components/users/Login';
import {Logout } from './components/users/Logout';
import { Register } from './components/users/Register';
import { AwaitConfirmation } from './components/users/AwaitConfirmation';
import { ConfirmationMail } from './components/users/ConfirmationMail';


function App() {
  const [, setUser] = useAtom(userAtom);
  
  useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);


  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/await/confirmation" element={<AwaitConfirmation/>} />
        <Route path="/auth/users/activation/:uid/:token" element={<ConfirmationMail/>} />
      </Routes>
    </Router>
  );
}

export default App;
