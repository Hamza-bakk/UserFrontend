import './assets/styles/globals.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from './stores/userAtom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { API_URL } from '../config';
import { Navbar } from './components/landingpage/Navbar';
import LandingPage from './pages/Landingpage/landingpage';
import { AwaitPage } from './components/landingpage/AwaitPage';
import { Login } from './components/users/Login';
import { Logout } from './components/users/Logout';
import { Register } from './components/users/Register';
import { AwaitConfirmation } from './components/users/AwaitConfirmation';
import { ConfirmationMail } from './components/users/ConfirmationMail';
import { ResendConfirmationEmail } from './components/users/ResendConfirmationEmail';
import { ResetPassword } from './components/users/ResetPassword';
import { ChangePassword } from './components/users/ChangePassword';

function AppContent() {
  const [, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('access_token');

      if (token && location.pathname !== '/logout') {
        try {
          const config = {
            headers: {
              Authorization: `JWT ${token}`
            }
          };
          const response = await axios.get(`${API_URL}/auth/users/me/`, config);
          const userData = response.data;
          setUser({
            id: userData.id,
            first_name: userData.first_name,
            email: userData.email,
            isAuth: true,
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [setUser, location.pathname]);

  if (loading) {
    return <AwaitPage timeout={120000} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/await/confirmation" element={<AwaitConfirmation />} />
        <Route path="/auth/reset/password" element={<ResetPassword />} />
        <Route path="/auth/users/activation/:uid/:token" element={<ConfirmationMail />} />
        <Route path="/auth/users/password/reset/confirm/:uid/:token" element={<ChangePassword />} />
        <Route path="/auth/resend/confirmation/email" element={<ResendConfirmationEmail />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
