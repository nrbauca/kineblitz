import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import Home from './Pages/Home';
import Kineblitz from './Pages/Kineblitz';
import AboutUs from './Pages/AboutUs';
import LogIn from "./Pages/LogIn";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
