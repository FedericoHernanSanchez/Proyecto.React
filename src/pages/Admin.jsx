import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { CgLogOut } from "react-icons/cg";
import Modal from "../components/Modal"
import loadingClothes from '../assets/loadingClothes.gif'
import './styleAdmin.css'

const Admin = () => {


    const { setisAuthentificated } = useContext(CartContext)
    const { productos, loading, open, setOpen, seleccionado,
        setSeleccionado, agregarProducto, handleActualizarProducto, handleEliminarProducto, openEditor, setOpenEditor } = useContext(AdminContext)

    const navigate = useNavigate()




    return (
        <div >
            {loading ? (
                <img className="loading" src={loadingClothes} alt="Cargando..." />
            ) : (
                <>
                    <nav className="nav-dashboard">
                        <p className="dashboard-title">Admin Dashboard</p>
                        <button
                            className="logout-button"
                            onClick={() => {
                                setisAuthentificated(false);
                                navigate('/');
                                localStorage.removeItem('isAuth');
                            }}
                        >
                            <CgLogOut />
                        </button>
                    </nav>
                    <div className="container-addButton" >
                        <button className="addProductButton" onClick={() => setOpen(true)}>
                            Agregar producto nuevo
                        </button>
                    </div>
                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <div className="span-container">
                                    <span >{product.nombre}</span>
                                    <span className="span-price">${product.precio}</span>
                                </div>

                                <div>
                                    <button className="editButton" onClick={() => {
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button onClick={() => handleEliminarProducto(product.id)} className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>

            )}

            {open && (
                <Modal isOpen={open} onClose={() => setOpen(false)} title="Agregar Producto">
                    <FormularioProducto
                        onAgregar={async (producto) => {
                            await agregarProducto(producto);
                            setOpen(false);
                        }}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
            )}
            {openEditor && (
                <Modal isOpen={openEditor} onClose={() => setOpenEditor(false)} title="Editar Producto">
                    <FormularioEdicion
                        productoSeleccionado={seleccionado}
                        onActualizar={async (producto) => {
                            await handleActualizarProducto(producto);
                            setOpenEditor(false);
                            setSeleccionado(null);
                        }}
                        onClose={() => setOpenEditor(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Admin;
