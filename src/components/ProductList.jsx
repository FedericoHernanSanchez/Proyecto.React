import React from 'react'
import Producto from './Producto'
import './styleProducto.css'

const ProductList = ({productos,agregarCarrito}) => {
  return (
    <>
     <h2>Galeria de Productos </h2>
     <div className='cards-container'>
      {
      productos.map(producto => (
        <Producto key={producto.id} producto={producto} agregarCarrito={agregarCarrito}/>
      ))
     }
     </div>
     
    </>
  )
}

export default ProductList