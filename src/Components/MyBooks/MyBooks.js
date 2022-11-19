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
            // console.log("user info",json)
            if (json?.success) {
                // console.log("insied if user info",json)
                setUserInfo(json?.data)
            }
        }
        getUserInfo()
    },[])

    const setFavBooksFun= () => {
        setBooks(userInfo.FavoriteBooks)
        setAdded(false)
    }
    const setAddedBooksFun= () => {
        setAddedBooks(userInfo.AddedBooks)
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
                                                        return <SingleBookElement book={book} key={i}/>
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className="row">
                                                {
                                                    books.map((book, i) => {
                                                        return <SingleBookElement book={added} key={i}/>
                                                    })
                                                }
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