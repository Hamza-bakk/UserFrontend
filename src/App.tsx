import './assets/styles/globals.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './stores/userAtom';
import { Navbar } from './components/landingpage/Navbar';
import  LandingPage  from './pages/Landingpage/landingpage';
import { Login } from './components/users/Login';
import {Logout } from './components/users/Logout';
import { Register } from './components/users/Register';
import { AwaitConfirmation } from './components/users/AwaitConfirmation';
import { ConfirmationMail } from './components/users/ConfirmationMail';
import { ResendConfirmationEmail } from './components/users/ResendConfirmationEmail';
import { ResetPassword } from './components/users/ResetPassword';
import { ChangePassword } from './components/users/ChangePassword';


function App() {

  const [, setUser] = useAtom(userAtom);
  useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      setUser(user);
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
        <Route path="/auth/reset/password" element={<ResetPassword/>} />
        <Route path="/auth/users/activation/:uid/:token" element={<ConfirmationMail/>} />
        <Route path="/auth/users/password/reset/confirm/:uid/:token" element={<ChangePassword/>} />

        <Route path="/auth/resend/confirmation/email" element={<ResendConfirmationEmail/>} />
      </Routes>
    </Router>
  );
}

export default App;
