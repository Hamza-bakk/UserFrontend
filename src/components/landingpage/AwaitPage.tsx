import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AwaitPage = ({ timeout = 120000 }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/logout');
    }, timeout);

    return () => clearTimeout(timer);
  }, [navigate, timeout]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};
