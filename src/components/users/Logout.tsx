import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { userAtom } from '../../stores/userAtom';


export const Logout = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  const logoutOn = async () => {
    try {
      Cookies.remove('access_token');
      setUser({
        id: "",
        first_name: "",
        email: "",
        isAuth: false,
      }); 
      navigate('/');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la déconnexion :', error);
    }
  };

  useEffect(() => {
    logoutOn();
  }, []);

  return (
    <div>
      <button onClick={logoutOn}>
        Logout
      </button>
    </div>
  );
};
