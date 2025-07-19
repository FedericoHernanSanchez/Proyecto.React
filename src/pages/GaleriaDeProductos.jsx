import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loadingClothes from '../assets/loadingClothes.gif'
import { CartContext } from '../context/CartContext'
import './styleGaleriaDeProductos.css'

const GaleriaDeProductos = () => {

  const { cargando } = useContext(CartContext)

  return (
    <>
      <Header />

      <section >
        <div className='galeria-container'>
          <h1>Conozca nuestros Productos</h1>
          <p>
            En nuestro catálogo encontrará una gran variedad de productos diseñados para adaptarse a sus gustos y necesidades.
            Descubra la calidad, estilo y originalidad que nos representa.
          </p>
        </div>


        {cargando ? <img className='loading' src={loadingClothes} alt="Cargando..." /> : <ProductList />}
      </section>
      <Footer />
    </>
  );
}

export default GaleriaDeProductos