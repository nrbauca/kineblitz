import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import Home from './Pages/Home';
import Kineblitz from './Pages/Kineblitz';
import AboutUs from './Pages/AboutUs';
import LogIn from "./Pages/LogIn";
import Dashboard from './Pages/Dashboard'
import UserDashboard from './Pages/UserDashboard'
import Record from './Pages/Record'
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
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
