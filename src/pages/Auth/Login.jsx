import { useState } from "react";
import { api } from "../../utils/api";
import App from "../../components/Form";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassoword] = useState("");
  const [confirmarSenha, setCofirmarSenha] = useState("");

  //   const handleLoginSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await api.post("/auth/login", {
  //         user,
  //         password,
  //       });
  //       if (response.status >= 200 && response.status < 300) {
  //         Navigate("/Home");
  //       } else {
  //         console.error("Falha no login", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao enviar os dadoss: ", error);
  //     }
  //     console.log("User: ", user);
  //     console.log("Password: ", password);
  //   };

  return (
    <section className="flex justify-center items-center">
      <div>
        <div>Entrar</div>
        <App />
      </div>
    </section>
  );
}

export default Login;
