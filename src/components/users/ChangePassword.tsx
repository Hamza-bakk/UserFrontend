import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../config";
import axios from "axios";

export const ChangePassword = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [new_password, setNewPassword] = useState("");
  const [re_new_password, setReNewPassword] = useState("");

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(new_password);
    setNewPassword(event.target.value);
  };

  const handleReNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(re_new_password);
    setReNewPassword(event.target.value);
  };

  const ResetNewPasswordAPI = async() => {
    try {
      if (new_password === re_new_password) {
        const response = await axios.post(`${API_URL}/auth/users/reset_password_confirm/`,
          { uid: uid, token: token, new_password: new_password, re_new_password: re_new_password }
        );
        console.log(response.data);
        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la réinitialisation du mot de passe :",
        error
      );
      throw error;
    }
  };

  return (
    <>
      <div className="flex flex-col  h-screen text-black ">
        <h1 className="flex flex-col mt-64">ChangePassword</h1>
        <input
          type="password"
          value={new_password}
          onChange={handleNewPasswordChange}
          placeholder="Nouveau mot de passe"
        />
        <input
          type="password"
          value={re_new_password}
          onChange={handleReNewPasswordChange}
          placeholder="Confirmer le nouveau mot de passe"
        />
        <button onClick={ResetNewPasswordAPI}>
          Réinitialiser le mot de passe
        </button>
      </div>
    </>
  );
};
