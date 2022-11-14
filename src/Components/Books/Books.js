import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../SideBar/SideBar";
import { useState, useEffect } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const books = await fetch(`http://localhost:3000/api/v1/books`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await books.json()
            console.log(json)
            if (json?.data?.length) {
                setBooks(json?.data)
            }
        }
        getBooks()
    }, [])


    return (
        <>
            <div className="books" >
                {
                    books.map((book, i) => {
                        return <Book book={book} key={i} />
                    })
                }
            </div>
        </>
    )
}
export default Books;