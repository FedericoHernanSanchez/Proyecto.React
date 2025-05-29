import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = ({productos,cargando,cart,agregarCarrito,borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <main>
        <h1>Bienvenidos a mi Tienda</h1>
        <p>
          Aca encontraras los mejores productos 
        </p>
      </main>

    {
      cargando  ? <img src={loading} alt='loading'></img> :
     <ProductList productos={productos} agregarCarrito={agregarCarrito}/>
    }

      <Footer/>
    </>
  )
}

export default Home