import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const baseUrl = import.meta.env.VITE_API_KEY
    const loginUrl = `${baseUrl}/api/admin/login`

    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated") || false)
    const [isToken, setIsToken] = useState(sessionStorage.getItem("Token"))
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState()
    const [activeToast, setActiveToast] = useState(false)


    const loginAction = async (username, password) => {
        console.log(username, password);
        setIsLoading(true)
        try {
            const response = await axios.post(loginUrl, {
                email: username,
                password: password
            })
            localStorage.setItem("Token", response.data.token)
            sessionStorage.setItem("Token", response.data.token)
            localStorage.setItem("isAuthenticated", true)
            sessionStorage.setItem("isAuthenticated", true)

            setIsToken(response.data.token)
            setIsAuthenticated(true)
            setIsLoading(false)
            setActiveToast(true)
        } catch (error) {
            console.log('Error while login', error)
            if (error.response.status === 403) {
                setIsError(403)
            }
            if (error.response.status === 404) {
                setIsError(404)
            }
            setIsLoading(false)
        }
    }
    const logoutAction = () => {
        setIsAuthenticated(false)
        localStorage.clear()
        sessionStorage.clear()
        navigate('/', { replace: true })
    }

    return (
        <AuthContext.Provider value={{ loginAction, isLoading, isAuthenticated, logoutAction, isToken, activeToast, isError }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}