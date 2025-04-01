import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import EstoresLino from './pages/EstoresLino';
import LinoArrastre from './pages/LinoArrastre';
import EstoresEnrollables from './pages/EstoresEnrollables';
import LamasVerticales from './pages/LamasVerticales';
import PanelesJaponeses from './pages/PanelesJaponeses';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estores-lino" element={<EstoresLino />} />
        <Route path="/lino-arrastre" element={<LinoArrastre />} />
        <Route path="/estores-enrollables" element={<EstoresEnrollables />} />
        <Route path="/lamas-verticales" element={<LamasVerticales />} />
        <Route path="/paneles-japoneses" element={<PanelesJaponeses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;