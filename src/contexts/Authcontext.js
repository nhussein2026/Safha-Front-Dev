import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [loggedIn, setLoggedIn] = useState(!!token)
    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [homeNav, setHomeNav] = useState(false)
    const [categoriesNav, setCategoriesNav] = useState(false)
    const [booksNav, setBooksNav] = useState(false)
    const [aboutNav, setAboutNav] = useState(false)
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        const u = window.localStorage.getItem('user')
        if (u) {
            setUser(JSON.parse(u))
        }
    }, [])

    const signIn = (response) => {
        window.localStorage.setItem('token', response.token)
        setAvatar(window.localStorage.getItem('avatar'))
        setLoggedIn(true)
        setToken(response.token)
        setUser(response.data)
        window.localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    const signOut = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('avatar')
        setLoggedIn(false)
        setToken('')
        setUser({})
    }

    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            signIn,
            signOut,
            user,
            homeNav, setHomeNav,
            categoriesNav, setCategoriesNav,
            booksNav, setBooksNav,
            aboutNav, setAboutNav,
            userInfo, setUserInfo,
            avatar, setAvatar,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider