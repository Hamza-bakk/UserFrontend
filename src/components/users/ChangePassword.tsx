import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../config";
import axios from "axios";

export const ChangePassword = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleReNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReNewPassword(event.target.value);
  };

  const ResetNewPasswordAPI = async() => {
    try {
      if (newPassword === reNewPassword) {
        const response = await axios.post(`${API_URL}/auth/users/reset_password_confirm/`,
          { uid: uid, token: token, new_password: newPassword, re_new_password: reNewPassword }
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
          value={newPassword}
          onChange={handleNewPasswordChange}
          placeholder="Nouveau mot de passe"
        />
        <input
          type="password"
          value={reNewPassword}
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
