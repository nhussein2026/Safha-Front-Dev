import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import SingleBookElement from "../Books/SingleBookElement/SingleBookElement";
import HeroSection from "../HeroSection/HeroSection";
import Sidebar from "../SideBar/SideBar";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'
import './MyBooks.css'

const MyBooks = () => {
    console.log("InsideMyBooks")
    const { setHomeNav, setAboutNav, 
            setCategoriesNav, setBooksNav,
            userInfo, token, setUserInfo} = useContext(AuthContext)
    const [books, setBooks] = useState([])
    // setBooks(userInfo?.FavoriteBooks)
    // console.log("user",userInfo?.FavoriteBooks)
    // console.log("before getUserInfo token",token);
    // console.log("userInfo?.FavoriteBooks",userInfo?.FavoriteBooks);
    useEffect(()=>{
        setCategoriesNav(false);
        setHomeNav(false);
        setBooksNav(false);
        setAboutNav(true);

        const getUserInfo = async () => {
            const userInfoFetch = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            const json = await userInfoFetch.json()
            console.log("user info",json)
            if (json?.success) {
                console.log("insied if user info",json)
                setUserInfo(json?.data)
                setBooks(json?.data?.FavoriteBooks)
            }
        }
        getUserInfo()
    },[])
    console.log("books",books);
    return(
        <>
            <div className="page-wrapper">
                <HeroSection />
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <Sidebar books={books} />
                                <div class="sidebar-overlay"></div>
                                    <div className="col-lg-9">
                                        <div className="col-6 col-sm-4 col-lg-4">
                                            <h3>Favorite Books</h3>
                                        </div>
                                        <div className="row">
                                            {
                                                books.map((book, i) => {
                                                    return <SingleBookElement book={book} key={i}/>
                                                })
                                            }
                                        </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MyBooks;