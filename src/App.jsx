import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FP from "./FP";
import Cookie from "./Cookie";
import CatNPI from "./CatNPI";
import Game3 from "./P3";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Hovedside med navigasjon */}
        <Route path="/" element={<FP />} />
        {/* Spillruter */}
        <Route path="/cookie-clicker" element={<Cookie />} />
        <Route path="/cat-npi" element={<CatNPI />} />
        <Route path="/game3" element={<Game3 />} />
      </Routes>
    </Router>
  );
};

export default App;

