import { useEffect, useState } from "react";
import SingleBookElement1 from "../Book/SingleBookElement1";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../SideBar/SideBar";
// <!-- Plugins CSS File -->
//   <link rel="stylesheet" href="assets/css/bootstrap.min.css">

//   <!-- Main CSS File -->
//   <link rel="stylesheet" href="assets/css/demo25.min.css">
//   <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css">
//   <link rel="stylesheet" type="text/css" href="assets/vendor/simple-line-icons/css/simple-line-icons.min.css"></link>
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
            {/* <body className="boxed"> */}
                <div className="page-wrapper">
                    <Navbar/>
                    <HeroSection />
                    <SecondNavbar/>
                    <main className="main">
                        <div className="bg-white">
                            <div className="container">
                                <div className="row main-content">
                                    <div className="col-lg-9">
                                        {/* <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}"> */}
                                            <div className="toolbox-left">
                                                <Sidebar/>
                                                <div className="row">
                                                    {
                                                        books.map((book, i) => {
                                                            return <SingleBookElement1 book={book} key={i} />
                                                        })
                                                    }
                                                </div>
                                            </div>  
                                        {/* </nav> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            {/* </body> */}
        </>
    )
}
export default Books1;