import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import Home from './Pages/Home';
import Kineblitz from './Pages/Kineblitz';
import AboutUs from './Pages/AboutUs';
import Login from "./Pages/LogIn";
import Dashboard from './Pages/Dashboard';
import UserDashboard from './Pages/UserDashboard';
import Record from './Pages/Record';
import Register from './Pages/Register';
import Reset from './Pages/Reset';
import LoginAuth from './Pages/LoginAuth';
import RegisterAuth from './Pages/RegisterAuth';
import ResetAuth from './Pages/ResetAuth';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/kineblitz" element={<Kineblitz />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/record" element={<Record />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/loginauth" element={<LoginAuth />} />
          <Route path="/registerauth" element={<RegisterAuth />} />
          <Route path="/resetauth" element={<ResetAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
