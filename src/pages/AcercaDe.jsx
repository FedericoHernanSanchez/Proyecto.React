import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = ({cart,borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Acerca de nosotros</h1>
      <h3>Moda con Experiencia, Estilo con Pasión</h3>
      <p>
        En esta tienda, no solo vendemos ropa, creamos identidad. Con años de experiencia en el mundo de la moda, nos especializamos en prendas que combinan calidad, 
        tendencia y comodidad, diseñadas para aquellos que buscan destacar con autenticidad.

        ASDADAS
      </p>
      <Footer/>
    </>
  )
}

export default AcercaDe