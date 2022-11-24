import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Authcontext";
import SingleBookElement from "../Books/SingleBookElement/SingleBookElement";
import HeroSection from "../HeroSection/HeroSection";
import Sidebar from "../SideBar/SideBar";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'
import './MyBooks.css'

const MyBooks = () => {
    // console.log("InsideMyBooks")
    const { setHomeNav, setAboutNav, 
            setCategoriesNav, setBooksNav,
            userInfo, token, setUserInfo} = useContext(AuthContext)
    const [books, setBooks] = useState([])
    const [addedBooks, setAddedBooks] = useState([])
    // setBooks(userInfo?.FavoriteBooks)
    // console.log("user",userInfo?.FavoriteBooks)
    // console.log("before getUserInfo token",token);
    // console.log("userInfo?.FavoriteBooks",userInfo?.FavoriteBooks);
    const [added, setAdded] = useState(false)
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
                // console.log("insied if user info",json)
                setUserInfo(json?.data)
                setBooks(json?.data?.FavoriteBooks)
                window.localStorage.setItem('avatar',json?.data?.UserInfo?.avatar)
            }
        }
        getUserInfo()
    },[])

    const setFavBooksFun= () => {
        setBooks(userInfo?.FavoriteBooks)
        setAdded(false)
    }
    const setAddedBooksFun= () => {
        setAddedBooks(userInfo?.AddedBooks)
        console.log("inside set added",userInfo.AddedBooks );
        setAdded(true)
    }

    // console.log("books",books);
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
                                        <div className="col-6 col-sm-4 col-lg-6">
                                            {/* <h3 className="widget-title">Favorite Books</h3> */}
                                            <ul class="nav nav-tabs" id="ulStyle">
                                                { !added?
                                                    <li class="nav-item" onClick={setFavBooksFun}>
                                                        <a class="nav-link active" id="active" aria-current="page" href="#">Favorite</a>
                                                    </li> 
                                                    :
                                                    <li class="nav-item" onClick={setFavBooksFun}>
                                                        <a class="nav-link" aria-current="page" href="#">Favorite</a>
                                                    </li>
                                                }
                                                { added?
                                                    <li class="nav-item" onClick={setAddedBooksFun}>
                                                        <a class="nav-link active" id="active" aria-current="page" href="#">Added</a>
                                                    </li> 
                                                    :
                                                    <li class="nav-item" onClick={setAddedBooksFun}>
                                                        <a class="nav-link" aria-current="page" href="#">Added</a>
                                                    </li>
                                                }
                                            </ul>
                                        </div>
                                        {!added?
                                            <div className="row">
                                                {
                                                    books.map((book, i) => {
                                                        return <SingleBookElement book={book} key={i} customize="MyBooks"/>
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className="row">
                                                {
                                                    addedBooks.map((book, i) => {
                                                        return <SingleBookElement book={book} key={i} customize="MyFavorites"/>
                                                    })
                                                }
                                                <div className="col-6 col-sm-4 col-lg-3">
                                                    <div className="product-default inner-quickview inner-icon">
                                                        <Link to="/addbook">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17rem" height="17rem" fill="currentColor" id="addIcon" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }

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