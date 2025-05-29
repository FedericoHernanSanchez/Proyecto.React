import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaProtegidas = ({isAuthentificated,children}) => {
    if(!isAuthentificated){
        return <Navigate to="/login" replace></Navigate>
    }
  return children;
}

export default RutaProtegidas