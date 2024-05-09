import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Logout = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    Cookies.remove('user');
    navigate('/login');
  };

  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <div>
      <button onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};