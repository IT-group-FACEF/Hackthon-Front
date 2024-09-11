import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/interfaces/Dashboard";
import Register from "../pages/Auth/Register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
