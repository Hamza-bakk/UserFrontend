import React, { Fragment, useEffect } from 'react';
import { API_URL } from '../../../config';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ConfirmationMail = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  
  const activeClick = () => {
    axios.post(`${API_URL}/auth/users/activation/`, { uid: uid, token: token })
      .then(() => {
        navigate('/login');
      })
      .catch(err => {
        alert(err.response.data);
      });
  };
  
  useEffect(() => {
    activeClick();
  }, []);
  
  return (
    <Fragment>
      <button  onClick={activeClick}>
      </button>
    </Fragment>
  );
};
