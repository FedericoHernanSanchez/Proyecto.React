import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Header from './estaticos/Header'
import Footer from './estaticos/Footer'
import './styleDetallesProducto.css'

const DetallesProducto = () => {

  const { id } = useParams()

  const { productos } = useContext(CartContext)

  const product = productos.find(producto => producto.id == id)

  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#c00' }}>Detalle del producto: {id}</h1>
        <p style={{ fontSize: '1.2rem' }}>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="product-detail-section">
        <h1 className="product-detail-title">{product.nombre}</h1>

        {product.imagen && (
          <img src={product.imagen} alt={product.nombre} className="product-detail-image" />
        )}

        <p className="product-detail-description">{product.descripcion}</p>

        <p className="product-detail-price">Precio: ${product.precio}</p>

        

        <p className="product-detail-stock">Stock: {product.stock}</p>

        <Link to="/" className="product-detail-back-link">Volver a Home</Link>
      </section>
      <Footer />
    </>
  );
}

export default DetallesProducto