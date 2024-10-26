import { api } from "./api";
import { message } from "antd";

export const login = async (credentials, navigate) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.status === 200) {
      message.success("Login bem-sucedido!"); 
      navigate("/dashboard"); 
      return response.data;
    } else {
      throw new Error("Login falhou");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      message.error("Credenciais inválidas");
    } else {
      console.error("Erro no login:", error);
      message.error("Erro no login: " + error.message);
    }
    throw error; 
  }
};

export const register = async (userData, navigate) => {
  try {
    const response = await api.post("/register", userData);

    if (response.status === 200) {
      message.success("Registro bem-sucedido!"); 
      navigate("/login"); 
      return response.data;
    } else {
      throw new Error("Login falhou");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      message.error("Credenciais inválidas");
    } else {
      console.error("Erro no login:", error);
      message.error("Erro no login: " + error.message);
    }
    throw error;
  }
};
