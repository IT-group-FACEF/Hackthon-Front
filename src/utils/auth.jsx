import { api } from "./api";
import { message } from "antd";

export const login = async (credentials, navigate) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.status === 200) {
      message.success("Login bem-sucedido!"); // Exibe mensagem de sucesso
      navigate("/dashboard"); // Redireciona o usuário após o login bem-sucedido
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
    throw error; // Ainda lança o erro para ser capturado, se necessário
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/register", userData);

    if (response.status === 200) {
      message.success("Registro bem-sucedido!"); // Exibe mensagem de sucesso
      navigate("/login"); // Redireciona o usuário após o login bem-sucedido
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
