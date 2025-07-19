import React, { useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Swal from "sweetalert2"
import './styleContacto.css'

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Mensaje Enviado",
      text: "Gracias por enviar su mensaje",
      icon: "success",
    });
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <>
      <Header />
      <section className="contacto-container">
        <div className='content-container'>
          <h1>¿Necesitás saber más sobre nuestros productos o hacer un reclamo?</h1>
          <p>No dudes en contactarte con nosotros. Completá el formulario y te responderemos a la brevedad.</p>
        </div>


        <form onSubmit={handleSubmit} className="formulario-contacto">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contacto