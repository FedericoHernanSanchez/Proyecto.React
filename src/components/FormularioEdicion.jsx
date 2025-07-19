import React, { useEffect, useState } from 'react'
import './styleFormulario.css'



const FormularioEdicion = ({ productoSeleccionado, onActualizar }) => {

    const [producto, setProducto] = useState(productoSeleccionado)


    useEffect(() => {
        setProducto(productoSeleccionado)
    }, [productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }


    return (
        <form className="form-container" onSubmit={(e) => {
            e.preventDefault()
            onActualizar(producto)
        }}>
            <div className="form-group">
                <label className="form-label">ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <button type="submit" className="form-submit-button">Actualizar Producto</button>
        </form>
    );
}

export default FormularioEdicion