import React from "react";

export const AwaitConfirmation = () => {
  return (
      <div className="flex flex-col justify-center items-center w-full h-screen gradient-background">
        <div className="max-w-lg px-8 py-12 rounded-lg bg-white shadow-lg text-center">
          <h4 className="text-3xl text-gray-800 mb-8">
            Un email de confirmation vous a été envoyé !
          </h4>
          <p className="text-lg text-gray-700 mb-8">
            Merci de confirmer votre inscription afin de naviguer dans l'application.
          </p>
          <a
            href="/login"
            className="text-lg text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Connexion
          </a>
        </div>
      </div>
  );
};