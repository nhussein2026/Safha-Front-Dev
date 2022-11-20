import { useEffect, useState } from "react";
import SingleBookElement from "../../Books/SingleBookElement/SingleBookElement";
import HeroSection from "../../HeroSection/HeroSection";
import Sidebar from "../../SideBar/SideBar";

const CollectionPage = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
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
    const rand = Math.floor(Math.random() * books.length)
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
                                                if(i>rand){
                                                    return <SingleBookElement book={book} key={i} customize="books" />
                                                }
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
export default CollectionPage;