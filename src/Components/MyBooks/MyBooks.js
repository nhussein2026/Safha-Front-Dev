import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import SingleBookElement from "../Books/SingleBookElement/SingleBookElement";
import HeroSection from "../HeroSection/HeroSection";
import Sidebar from "../SideBar/SideBar";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'

const MyBooks = () => {
    console.log("InsideMyBooks")
    const { setHomeNav, setAboutNav, 
            setCategoriesNav, setBooksNav,
            userInfo } = useContext(AuthContext)
    console.log("user",userInfo)
    const [books, setBooks] = useState([])
    useEffect(() => {
        setCategoriesNav(false);
        setHomeNav(false);
        setBooksNav(false);
        setAboutNav(true);
        // const getBooks = async () => {
        //     const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
        //         method: 'get',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     })
        //     const json = await booksList.json()
        //     console.log(json)
        //     if (json?.success) {
        //         setBooks(json?.data)
        //     }
        // }
        // getBooks()
    }, [])
    // console.log("books",books)
    return(
        <>
            <div className="page-wrapper">
                <HeroSection />
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <Sidebar books={books} />
                                <div className="col-lg-9">
                                    <div className="row">
                                        {
                                            books.map((book, i) => {
                                                return <SingleBookElement book={book} key={i} />
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