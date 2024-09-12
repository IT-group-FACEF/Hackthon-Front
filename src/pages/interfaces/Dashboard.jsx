import React from "react";
import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/Header";
import Content from "../../components/Content";

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <DashboardHeader />
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
