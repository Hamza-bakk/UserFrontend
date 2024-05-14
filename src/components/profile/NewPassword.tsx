import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostAPI } from "../../backend/ApiRESTFULL/post/post";

const { SetNewPasswordAPI } = PostAPI;

export const NewPassword = () => {
    const navigate = useNavigate();
    const [formDataPassword, setFormDataPassword] = useState({
        current_password: "",
        new_password: "",
        re_new_password: "",
    });

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataPassword((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmitNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access_token");
            if (!token) {
                console.error("No token found");
                return;
            }

            console.log(token);
            console.log(formDataPassword);

            await SetNewPasswordAPI(token, formDataPassword);
            navigate("/confirm/password");
        } catch (error) {
            console.error('An error occurred during password change:', error);
            // Display error to the user
        }
    };

    return (
        <div className="flex gradient-background flex-col items-center justify-center h-screen">
            <div className="flex w-full border-spacing-8 flex-col max-w-lg p-8 gap-8 gradient-background text-center rounded-lg shadow-lg">
                <form onSubmit={handleSubmitNewPassword} className="flex flex-col space-y-4">
                    <input
                        name="current_password"
                        id="current_password"
                        type="password"
                        placeholder="Current password"
                        value={formDataPassword.current_password}
                        onChange={handleChangePassword}
                    />
                    <input
                        name="new_password"
                        id="new_password"
                        type="password"
                        placeholder="New password"
                        value={formDataPassword.new_password}
                        onChange={handleChangePassword}
                    />
                    <input
                        name="re_new_password"
                        id="re_new_password"
                        type="password"
                        placeholder="New password again"
                        value={formDataPassword.re_new_password}
                        onChange={handleChangePassword}
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};
