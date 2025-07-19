import React, { useState, useContext } from 'react'
import './styleProducto.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../pages/styleAdmin.css'


const Producto = ({ producto }) => {

    const { handleAddToCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev))

    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <section className='card'>
            <div className='imgContainer'>
                <img className='card-image' src={producto.imagen} alt="" />
            </div>
            <div className='datos-container'>
                <h3 className='nombre'>{producto.nombre}</h3>
                <p className='precio'>${producto.precio}</p>
                <p className='stock'>{producto.stock}</p>
            </div>

            <div className='cantidadContainer'>
                <button onClick={decrease} className='qtyButton'>-</button>
                <span>{cantidad}</span>
                <button onClick={increase} className='qtyButton'>+</button>
            </div>

            <button className='agregar-carrito' onClick={() => handleAddToCart(producto, cantidad)}> Agregar al carrito</button>

            <Link className='ver-mas' to={`/productos/${producto.id}`}>Ver mas</Link>

        </section>
    )
}

export default Producto