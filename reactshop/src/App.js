import logo from './logo.svg';
import './App.css';
import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import AdminDashboard from "./components/Admin/AdminDashboard";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route
          path="admin"
          element={
           
            <AdminRoutes>
            <AdminDashboard />
          </AdminRoutes>
          
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
    <Route path="/" element={<HomePage />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
