import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2"

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)

    useEffect(() => {
        fetch("https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch('https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos')
            const data = await res.json()
            setProductos(data)
        } catch (e) {
            console.log(e)
        }
    }


    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                title: "🙂",
                text: "Producto agregado correctamente!",
                icon: "success"
            });
            cargarProductos()
        } catch (error) {
            console.log(error.message);

        }
    }

    const handleEliminarProducto = async (id) => {
        const result = await Swal.fire({
            title: '¿Quieres eliminar el producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error("Error al eliminar");
                } else {
                    Swal.fire({
                        title: "🙂",
                        text: "Producto eliminado!",
                        icon: "success",
                        timer: 1500,
                    });
                    cargarProductos();
                }
            } catch (e) {
                alert("Hubo un problema al eliminar el producto");
            }
        }
    };

    const handleActualizarProducto = async (producto) => {
        try {
            const response = await fetch(`https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!response.ok) {
                throw Error("Error al actualizar el producto ")
            } else {
                const data = await response.json()
                Swal.fire({
                    title: "🙂",
                    text: "Producto actualizado!",
                    icon: "success"
                });
                setOpenEditor(false)
                setSeleccionado(null)
                cargarProductos()
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <AdminContext.Provider value={{
            productos, loading, open, setOpen, seleccionado,
            setSeleccionado, agregarProducto, handleActualizarProducto, handleEliminarProducto, openEditor, setOpenEditor
        }}>
            {children}
        </AdminContext.Provider>
    )
}