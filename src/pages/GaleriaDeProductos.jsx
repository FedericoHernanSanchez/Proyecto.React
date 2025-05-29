import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const GaleriaDeProductos = ({productos,cargando,cart,agregarCarrito,borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Galeria de productos</h1>
       {
        cargando  ? <img src={loading} alt='loading'></img> :
        <ProductList productos={productos} agregarCarrito={agregarCarrito} />
    }
      <Footer/>
    </>
  )
}

export default GaleriaDeProductos