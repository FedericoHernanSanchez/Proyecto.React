import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthentificated, setisAuthentificated] = useState(false)
    const [busqueda, setBusqueda] = useState('')


    useEffect(() => {
        fetch('https://687032a77ca4d06b34b631ab.mockapi.io/productos-ecommerce/productos')
            .then(response => response.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
    }, [])


    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))


    const handleAddToCart = (product, cantidad) => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            ));
        } else {
            toast.success(`El producto ${product.nombre} se ha agregado al carrito`);
            setCart([...cart, { ...product, cantidad }]);
        }
    }


    const handleDeleteFromCart = (product) => {
        toast.error(`El producto ${product.nombre} se ha eliminado del carrito`)
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    } else {
                        return null; // Si cantidad es 1 , marcamos para eliminar
                    }
                } else {
                    return item; //Si no es el producto, la dejamos igual
                }
            }).filter(item => item !== null) //quitamos los productos nulos
        })
    }

    const handleRemoveProduct = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id));
        toast.error(`El producto ${product.nombre} fue eliminado completamente del carrito`);
    }

    const clearCart = () => {
        setCart([])
        toast.info("Compra Finalizada")
    }

    return (
        <CartContext.Provider value={{
            cart, productos, cargando, error, handleAddToCart,
            handleDeleteFromCart, isAuthentificated, setisAuthentificated,handleRemoveProduct, productosFiltrados, busqueda, setBusqueda, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}