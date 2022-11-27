import { useContext, useEffect, useState } from "react";
import SingleBookElement from "./SingleBookElement/SingleBookElement";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/SideBar";
import Navbar1 from "../Navbar/Navbar1";
import { AuthContext } from "../../contexts/Authcontext";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'

const Books = () => {
    const { setBooksNav, setHomeNav, setCategoriesNav, setAboutNav, favBooks } = useContext(AuthContext)
    console.log(useContext(AuthContext), '111111')
    const [books, setBooks] = useState([])
    useEffect(() => {
        setHomeNav(false)
        setCategoriesNav(false)
        setAboutNav(false)
        setBooksNav(true)
        const getBooks = async () => {
            const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await booksList.json()
            console.log(json)
            if (json?.success) {
                setBooks(json?.data)
            }
        }
        getBooks()
    }, [])
    // console.log("books",books)
    return(
        <>
            {/* <body className="boxed"> */}
                <div className="page-wrapper">
                    {/* <Navbar1/> */}
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
                                                    return <SingleBookElement book={book} key={i} customize="books" 
                                                    favorite={favBooks?.find((favbook) =>
                                                        favbook?.id==book?.id ) ? true : false} />
                                                })
                                            }
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <Footer /> */}
                </div>
            {/* </body> */}
        </>
    )
}
export default Books;