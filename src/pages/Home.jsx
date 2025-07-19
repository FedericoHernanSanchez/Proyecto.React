import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProducList from '../components/ProductList'
import loadingClothes from '../assets/loadingClothes.gif'
import { CartContext } from '../context/CartContext'
import './styleHome.css'

const Home = () => {

  const { cargando } = useContext(CartContext)

  return (
    <>
      <Header />

      <section className="bienvenida-container">
        <h1>Bienvenido a UnderGround</h1>
        <p>
          Encontrá tu ropa deseada en nuestro catálogo, con diseños exclusivos y variedad para todos los gustos.
          Explora las últimas tendencias y prendas hechas para destacar tu estilo único.
          Además, disfrutá de envíos rápidos y opciones de pago seguras para una experiencia de compra cómoda y confiable.
        </p>
      </section>

      {
        cargando ? <img className="loading" src={loadingClothes} alt="Cargando..." /> :
          <ProducList />
      }

      <Footer />
    </>
  );
}
export default Home