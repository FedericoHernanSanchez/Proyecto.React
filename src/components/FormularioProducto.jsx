import React, { useState } from 'react'
import './styleFormulario.css'

function FormularioProducto({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',

    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }

        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }

        if (producto.stock === '' || isNaN(producto.stock)) {
            nuevosErrores.stock = 'El stock es obligatorio.';
        } else if (Number(producto.stock) < 0) {
            nuevosErrores.stock = 'El stock no puede ser negativo.';
        }

        if (!producto.imagen.trim()) {
            nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
        } else {
            try {
                new URL(producto.imagen);
            } catch (e) {
                nuevosErrores.imagen = 'Debe ser una URL válida.';
            }
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto);
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            imagen: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    className="form-input"
                />
                {errores.nombre && <p className="form-error">{errores.nombre}</p>}
            </div>

            <div className="form-group">
                <label className="form-label">Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                    min="0"
                    className="form-input"
                />
                {errores.precio && <p className="form-error">{errores.precio}</p>}
            </div>

            <div className="form-group">
                <label className="form-label">Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    className="form-input"
                />
                {errores.stock && <p className="form-error">{errores.stock}</p>}
            </div>

            <div className="form-group">
                <label className="form-label">Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    className="form-input"
                />
                {errores.imagen && <p className="form-error">{errores.imagen}</p>}
            </div>

            <button type="submit" className="form-submit-button">
                Agregar Producto
            </button>
        </form>
    );
}

export default FormularioProducto