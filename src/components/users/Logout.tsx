import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { userAtom } from '../../stores/userAtom';
import { PostAPI } from '../../backend/ApiRESTFULL/post/post';

const { LogoutUser } = PostAPI;

export const Logout = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  const logoutOn = async () => {
    try {
      await LogoutUser();
      setUser({
        id: "",
        first_name: "",
        email: "",
      }); 
      Cookies.remove('user');
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
