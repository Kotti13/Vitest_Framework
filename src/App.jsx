import { useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import './App.css'

function App() {
 

  return (
    
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* Add more routes as needed */}
      </Routes >
    
  )
}

export default App
