import { API_URL } from "../../../../config";
import axios from "axios";

export const GetApi = {
  UserLogin: async (token: string) => {
    console.log(`J'ai réussi a avoir le token `, token);
    try {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
      const response = await axios.get(`${API_URL}/auth/users/me/`, config);
      const userData = response.data;
      localStorage.setItem("access_token", token);
      console.log("User data:", userData);
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },

  // Autres méthodes...
};
