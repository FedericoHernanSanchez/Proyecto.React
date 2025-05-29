import { useState,useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetallesProducto from './components/DetallesProducto'
import Login from './pages/Login'
import RutaProtegidas from './auth/RutaProtegidas'
import Admin from './pages/Admin'

function App() {

  const [cart,setCart] = useState([])
  const [productos,setProductos] = useState([])
  const [cargando,setCargando] = useState(true)
  const [error,setError] = useState(false)
  const [isAuthentificated,setIsAuthentificated] = useState(false)


  useEffect(() => {
    fetch('/data/data.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(() =>{
        setProductos(datos)
        setCargando(false)  
      },2000)
    })
    .catch(error =>{
      console.log(error)
      setCargando(false)
      setError(true)
    })
  },[])

  const handleAddToCart = (product) => {
    
    const productInCart = cart.find((item) => item.id === product.id);
      if(productInCart){

        setCart(cart.map((item) => item.id === product.id ? {...item
        ,quantity:item.quantity+1}: item))
      } else{
        setCart([...cart,{...product,quantity:1}])
      }
  }


  const handleDeleteFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id){
          if(item.quantity > 1){
            return {...item,quantity:item.quantity -1}
          } else{
            return null; // Si quantity es 1 ,marcamos para
          }
        } else{
          return item; //Si no es el producto, lo dejamos igual
        }
      }).filter(item => item !== null) // Quitamos los productos nulos
    })
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/>}></Route>

        <Route path='/acercaDe' element={<AcercaDe borrarProducto={handleDeleteFromCart} cart={cart}/>}></Route>

        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/>}></Route>

        <Route path='/contacto' element={<Contacto borrarProducto={handleDeleteFromCart} cart={cart}/>}></Route>
        
        <Route path='/productos/:id' element={<DetallesProducto productos={productos}/>}></Route>

        <Route path='/admin'element={<RutaProtegidas isAuthentificated={isAuthentificated}> <Admin/> </RutaProtegidas>}> </Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>

        
      </Routes>
    </Router>
  )
}

export default App
