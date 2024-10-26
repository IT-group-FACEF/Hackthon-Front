import { useState } from "react";
import { Drawer, Button as AntButton } from "antd";
import logo from "../../assets/logo.png";
import Button from "../../components/Button.jsx";

const Header = () => {
  const [visible, setVisible] = useState(false);

  // Função para rolar até a seção pelo id
  const scrollToSection = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para abrir o Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Função para fechar o Drawer
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-[#C9D9A7] w-full fixed top-0 z-50"
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex mb-2 md:mb-0">
        <a href="/">
          <img className="h-[50px] w-[70px]" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Botão Hamburger para dispositivos móveis */}
      <div className="md:hidden">
        <AntButton type="text" onClick={showDrawer}>
          ☰
        </AntButton>
      </div>

      {/* Botões de Âncoras visíveis em telas maiores */}
      <div className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center justify-center">
        <Button
          buttonText="Benefícios"
          typeButton="text"
          onClick={() => scrollToSection("unlock")}
        />
        <Button
          buttonText="Comunidade"
          typeButton="text"
          onClick={() => scrollToSection("achievements")}
        />
        <Button
          buttonText="Sua Empresa"
          typeButton="text"
          onClick={() => scrollToSection("caring")}
        />
      </div>

      {/* Botões de Login e Cadastro */}
      <div className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        <Button
          buttonText="Entrar"
          typeButton="text"
          onClick={() => (window.location.href = "/login")}
        />
        <Button
          buttonText="Registrar para Usuários"
          typeButton="primary"
          onClick={() => (window.location.href = "/registerUser")}
          style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
        />
        <Button
          buttonText="Registrar para Empresas"
          typeButton="primary"
          onClick={() => (window.location.href = "/registerCompany")}
          style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
        />
      </div>

      {/* Drawer para o menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
      >
        <div className="flex flex-col space-y-4">
          <Button
            buttonText="Benefícios"
            typeButton="text"
            onClick={() => {
              scrollToSection("unlock");
              onClose();
            }}
          />
          <Button
            buttonText="Comunidade"
            typeButton="text"
            onClick={() => {
              scrollToSection("achievements");
              onClose();
            }}
          />
          <Button
            buttonText="Sua Empresa"
            typeButton="text"
            onClick={() => {
              scrollToSection("caring");
              onClose();
            }}
          />
          <Button
            buttonText="Entrar"
            typeButton="text"
            onClick={() => {
              window.location.href = "/login";
              onClose();
            }}
          />
          <Button
            buttonText="Registrar para Usuários"
            typeButton="primary"
            onClick={() => {
              window.location.href = "/registerUser";
              onClose();
            }}
            style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
          />
          <Button
            buttonText="Registrar para Empresas"
            typeButton="primary"
            onClick={() => {
              window.location.href = "/registerCompany";
              onClose();
            }}
            style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
