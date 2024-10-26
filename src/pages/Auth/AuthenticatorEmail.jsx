import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Logo da empresa
import password from "../../assets/password.svg"; // Imagem de verificação

const EmailVerification = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o código ao backend
    console.log("Código:", code);
  };

  return (
    <section className="flex justify-center items-center min-h-screen text-center bg-[#F2E8CF]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="bg-[#A4B979] p-8 md:p-12 h-[502px] w-full max-w-md rounded-[20px] md:rounded-l-[20px] md:rounded-r-none flex flex-col justify-center items-center">
          <div className="flex md:hidden justify-center mb-4">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <div className="mb-4 text-lg font-semibold">Verifique seu E-mail</div>
          <div className="mb-8">Digite o código que foi enviado para você.</div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
            <input
              type="text"
              placeholder="Digite o Código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="p-2 rounded border border-gray-300 w-full"
            />
            <button
              type="submit"
              className="bg-[#567A35] text-white p-2 rounded hover:bg-[#4a6930]" // Cor de fundo atualizada
            >
              Verificar
            </button>
          </form>
        </div>
        <div className="hidden md:flex h-[502px] w-full max-w-md p-8 items-center bg-[#567A35] rounded-r-[20px]">
          <img
            src={password}
            alt="Verificação"
            className="w-full h-auto object-contain" // Para manter a proporção da imagem
          />
        </div>
      </div>
    </section>
  );
};

export default EmailVerification;
