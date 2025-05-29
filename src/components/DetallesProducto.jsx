import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProducto = ({productos}) => {

  const {id} = useParams( )

  const product =productos.find( producto => producto.id == id)

  return (
    <div>
        <h1>Detalle del producto : {id}</h1>
        {product ? (<h2 style={{color:'black'}}>{product.nombre}</h2>) : (<p style={{color:'black'}}>Producto no encontrado</p>)}
    </div>
  )
}

export default DetallesProducto