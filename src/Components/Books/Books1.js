import { useEffect, useState } from "react";
import SingleBookElement from "../Book/SingleBookElement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../SideBar/SideBar";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'

const Books1 = () => {
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
    console.log("books",books)
    return(
        <>
            <Navbar/>
            <SecondNavbar/>
            {/* <SingleBookElement /> */}
            <div className="books" >
                {
                    books.map((book, i) => {
                        return <SingleBookElement book={book} key={i} />
                    })
                }
            </div>
            
            <Footer />
        </>
    )
}
export default Books1;