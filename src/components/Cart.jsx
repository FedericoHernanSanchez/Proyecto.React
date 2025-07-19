import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext';
import { FaTrash } from "react-icons/fa";

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleDeleteFromCart, clearCart, handleRemoveProduct } = useContext(CartContext)

    return (
        <div className={`cart-container ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <>
                        <ul className='cart-item'>
                            {cart.map((item) => (
                                <li key={item.id} >
                                    <span>{item.nombre} - ${item.precio}</span>

                                    <button onClick={() => handleDeleteFromCart(item)}>-</button>
                                    <span>{item.cantidad}</span>
                                    <button onClick={() => handleRemoveProduct(item)} >
                                        <FaTrash className='trash' />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className='cart-footer'>
                            <p >Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
                            <button onClick={() => clearCart()} className='btnCheckout'>Finalizar Compra</button>
                        </div>
                    </>)}
            </div>
        </div>
    );
};

export default Cart;