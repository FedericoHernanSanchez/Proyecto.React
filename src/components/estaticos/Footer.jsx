import React from 'react'
import { Link } from 'react-router-dom';
import './styleEstatico.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">UnderGround</h2>
        <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/acercaDe">Sobre Nosotros</Link>
          <Link to="/productos">Galería de Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
      <p className="footer-copy">&copy; 2025 - Proyecto React</p>
    </footer>
  );
};

export default Footer