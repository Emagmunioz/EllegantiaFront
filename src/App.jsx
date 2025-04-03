import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import EstoresLino from './pages/EstoresLino';
import LinoArrastre from './pages/LinoArrastre';
import PanelesJaponeses from './pages/PanelesJaponeses';
import LamasVerticales from './pages/LamasVerticales';
import EstoresEnrollables from './pages/EstoresEnrollables';
import About from './pages/About';
import Contact from './pages/Contact';
import CalculatePrice from './pages/CalculatePrice';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/estores-lino" element={<EstoresLino />} />
        <Route path="/lino-arrastre" element={<LinoArrastre />} />
        <Route path="/paneles-japoneses" element={<PanelesJaponeses />} />
        <Route path="/lamas-verticales" element={<LamasVerticales />} />
        <Route path="/estores-enrollables" element={<EstoresEnrollables />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculate-price" element={<CalculatePrice />} />
      </Routes>
    </Router>
  );
}

export default App;