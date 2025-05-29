import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'


const Header = ({cartItems,borrarProducto}) => {
  const [isCartOpen,setIsCarOpen] = useState(false)

  return (
    <header>
      <nav>
        <ul>
          <li> <Link className='link' to={'/'}> Inicio</Link> </li>
          <li> <Link className='link' to={'/acercaDe'}> Sobre Nosotros </Link> </li>
          <li> <Link className='link' to={'/productos'}> Productos </Link> </li>
          <li> <Link className='link' to={'/contacto'}> Contacto </Link> </li>
          <li className='cart-nav'>
          <button className='btn-cart' onClick={()=> setIsCarOpen(true)}><i className='fa-solid fa-cart-shopping'></i></button>
          <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=>setIsCarOpen(false)}/>  
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header