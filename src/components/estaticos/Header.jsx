import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import './styleEstatico.css'
import Cart from '../Cart'
import { FaShoppingCart } from "react-icons/fa"
import { MdLogin } from "react-icons/md";

const Header = () => {

  const [isCartOpen, setCartOpen] = useState(false)




  return (
    <header>
      <nav className="navbar navbar-expand-lg  bg-dark custom-navbar" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand logo" to="/">Underground</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-aligned">
              <li className="nav-item">
                <NavLink className="link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/acercade">Sobre nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/productos">Galeria de productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <button className="btnCart link" onClick={() => setCartOpen(true)} style={{ background: 'none', border: 'none' }}>
                  <FaShoppingCart />
                </button>
                <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/login">
                  <MdLogin />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header