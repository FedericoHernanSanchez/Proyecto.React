import { createContext, useContext, useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { CartContext } from "./CartContext";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setError] = useState({})
    const navigate = useNavigate()

    const { setisAuthentificated } = useContext(CartContext)

    useEffect(() => {
        const isAuthentificated = localStorage.getItem('isAuth') === 'true'
        if(isAuthentificated){
            setisAuthentificated(true)
            navigate('/admin')
        }
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault()
        let validationErrors = {}
        if (!email) {
            validationErrors.email = 'Email es requerido'
        }
        if (!password) {
            validationErrors.password = 'La Contraseña es requerida'
        }

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
            return
        }



        try {

            const res = await fetch('data/user.json')
            const users = await res.json()

            const foundUser = users.find((user) => user.email === email && user.password === password)
            
            if (!foundUser) {
                setError({ email: 'credenciales invalidas' })
            } else {
                if (foundUser.role === 'admin') {
                    setisAuthentificated(true)
                    localStorage.setItem('isAuth',true)
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            }

        } catch (err) {
            setError({ email: 'Algo salio mal.Por favor, intentalo mas tarde' })
            console.log(err)
        }
    };

    return (
        <AuthContext.Provider value={{email,setEmail,password,setPassword,handleSubmit,errors}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)