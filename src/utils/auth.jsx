import { api } from "./api";

export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login falhou");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Erro no registro:", error);
    throw error;
  }
};
