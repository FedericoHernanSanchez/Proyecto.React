import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './styleAcercaDe.css'



const AcercaDe = () => {
  return (
    <>
      <Header />
      <section className="acerca-container">
        <img
          src="/underground.PNG"
          alt="Descripción de la imagen"
          className='img-acercaDe'

        />
        <h1>¿Quieres saber más sobre UnderGround?</h1>
        <p>
          Somos una empresa dedicada a la creación y venta de ropa personalizada,
          confeccionada con materiales de la más alta calidad para garantizar
          comodidad y durabilidad. Nuestra línea incluye desde joggers y buzos hasta
          camisetas y accesorios, todos diseñados para quienes buscan un estilo único y auténtico.
        </p>
        <p>
          Cada prenda es cuidadosamente diseñada para combinar estilo y funcionalidad,
          adaptándose a las últimas tendencias de moda urbana sin sacrificar el confort.
          En UnderGround, apostamos por la exclusividad y el detalle en cada producto.
        </p>
        
      </section>
      <Footer />
    </>
  );
};
export default AcercaDe