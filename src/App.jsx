import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projetos from "./Projetos";
import Videos from "./Videos";
import Apresentacoes from "./Apresentacoes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/apresentacoes" element={<Apresentacoes />} />
        </Routes>
      </div>
    </Router>
  );
}
