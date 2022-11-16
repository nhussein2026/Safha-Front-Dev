import { useEffect, useState } from "react";
import SingleBookElement from "../Book/SingleBookElement";
import SingleBookElement1 from "../Book/SingleBookElement1";
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
            <div class="bg-white">
                <div class="container">
                    <div class="row main-content">
                        <div class="col-lg-9">
                            <nav class="toolbox sticky-header" data-sticky-options="{'mobile': true}">
                                <div class="row">
                                    {
                                        books.map((book, i) => {
                                            return <SingleBookElement1 book={book} key={i} />
                                        })
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}
export default Books1;