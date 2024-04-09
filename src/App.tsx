import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/CheckoutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <Routes>
          <Route path="/" element={<LandingPage />}  />
          <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
    </BrowserRouter >
  );
}

export default App;
