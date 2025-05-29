import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contacto = ({cart,borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Contacto</h1>
      <p>
        ¡Hablemos! Estamos aquí para ayudarte ,valoramos cada mensaje, duda o idea que nos compartas. No dudes en escribirnos:
      </p>
      <Footer/>
    </>
  )
}

export default Contacto