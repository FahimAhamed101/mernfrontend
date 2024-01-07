import logo from './logo.svg';
import './App.css';
import AdminDashboard from "./components/Admin/AdminDashboard";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route
          path="admin"
          element={
           
              <AdminDashboard />
          
          }
        />
    <Route path="/" element={<HomePage />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
