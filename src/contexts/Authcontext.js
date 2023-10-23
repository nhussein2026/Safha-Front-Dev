import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [loggedIn, setLoggedIn] = useState(!!token)
    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [categories, setCategories] = useState([])
    const [publishers, setPublishers] = useState([])
    const [favBooks, setFavBooks] = useState([])
    const [homeNav, setHomeNav] = useState(false)
    const [categoriesNav, setCategoriesNav] = useState(false)
    const [booksNav, setBooksNav] = useState(false)
    const [aboutNav, setAboutNav] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    // useEffect(() => {
    //     const u = window.localStorage.getItem('user')
    //     if (u) {
    //         setUser(JSON.parse(u))
    //     }
    // }, [])

    const signIn = (response) => {
        setToken(response.token)
        setAvatar(response.avatar)
        setLoggedIn(true)
        // setUser(response.data)
        window.localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    const signOut = () => {
        setLoggedIn(false)
        setToken(null)
        setAvatar(null)
        setUser({})
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            signIn,
            signOut,
            // user, setUser,
            homeNav, setHomeNav,
            categoriesNav, setCategoriesNav,
            booksNav, setBooksNav,
            aboutNav, setAboutNav,
            userInfo, setUserInfo,
            avatar, setAvatar,
            categories, setCategories,
            publishers, setPublishers,
            favBooks, setFavBooks,
            profile, setProfile,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider