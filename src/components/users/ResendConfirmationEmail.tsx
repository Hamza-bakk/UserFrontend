import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostAPI } from '../../backend/ApiRESTFULL/post/post';

const { ResendActivationEmail } = PostAPI;

export const ResendConfirmationEmail = () => {
    const [email, setEmail] = useState(""); 

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const resendEmailAxio = async () => {
        console.log(email);
        
        try {
            await ResendActivationEmail(email);
        } catch (error) { 
            console.error("Erreur lors de la réexpédition de l'email d'activation :", error);
        }
    };

    return (
        <>
        <div className="flex flex-col gradient-background h-screen text-black">
            <input 
                id="email" 
                name='email'
                className='flex h-10 w-90 mt-64 mx-auto rounded-lg pl-4 focus:outline-none'
                value={email} 
                onChange={handleEmailChange} 
                placeholder="Saisissez votre email ici" 
            />
            <button 
                className="flex h-10 w-90 mt-8 mx-auto pl-4 focus:outline-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={resendEmailAxio}
            >
                Renvoyer le email de confirmation
            </button> 
            <a
            href="/login"
            className="flex h-10 w-90 mt-8 mx-auto pl-4 focus:outline-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Connexion
          </a>
        </div>
    </>
    );
};
