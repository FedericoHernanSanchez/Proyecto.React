import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import DetallesProducto from './components/DetallesProducto'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutasProtegidas from './auth/RutasProtegidas'
import { CartContext } from './context/CartContext'
import './App.css'




function App() {

    const { isAuthentificated } = useContext(CartContext)



    return (


        <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/acercaDe' element={<AcercaDe />} />

            <Route path='/productos' element={<GaleriaDeProductos />} />

            <Route path='/productos/:id' element={<DetallesProducto />} />

            <Route path='/contacto' element={<Contacto />} />

            <Route path='/login' element={<Login />} />

            <Route path='/admin' element={<RutasProtegidas isAuthentificated={isAuthentificated}> <Admin /> </RutasProtegidas>} />

            <Route path='*' element={<NotFound />} />

        </Routes>


    )
}


export default App
