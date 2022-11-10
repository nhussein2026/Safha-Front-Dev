import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [loggedIn, setLoggedIn] = useState(!!token)
    const logIn = (data) => {
        window.localStorage.setItem('token', data.token)
        setLoggedIn(true)
        setToken(data.token)
    }
    const logOut = () => {
        window.localStorage.removeItem('token')
        // window.localStorage.clear()
        setLoggedIn(false)
        setToken('')
        // console.log(logOut+"logOut delete token")
    }
    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            logIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider