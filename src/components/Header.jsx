import React from "react";
import { Layout } from "antd"; // Importa Layout
const { Header } = Layout; // Extrai Header de Layout

const CustomHeader = () => {
  return (
    <Header className="bg-[#f5f5f5]">
      <h1>Dashboard</h1>
    </Header>
  );
};

export default CustomHeader;
