import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/SideBar";
import Navbar1 from "../Navbar/Navbar1";
import { AuthContext } from "../../contexts/Authcontext";
import SingleBookElement from "../Books/SingleBookElement/SingleBookElement";
import Collection from "./Collections";


const CollectionFetch = () => {
    const { setBooksNav, setHomeNav, setCategoriesNav, setAboutNav } = useContext(AuthContext)
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
    return (
        <>

            <div className="page-wrapper">
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <Sidebar books={books} />
                                <div className="col-lg-9">
                                    <div className="row">
                                        {
                                            books.map((book, i) => {
                                                return <Collection book={book} key={i} />
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
export default CollectionFetch;