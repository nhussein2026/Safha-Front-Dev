import './Featured.css'
import { useEffect, useState } from 'react'
import SingleBookElement from '../Books/SingleBookElement/SingleBookElement'
const Featured = () => {
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
    return (
        <>
            <section className="featured-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-b-3">
                            <div className="banner banner2" id='banner-place'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Award Winners</h3>
                                    <p className="font2 m-b-3">12 Books</p>
                                    <a href="#" className="btn btn-primary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-3">
                            <div className="banner" id='banner-palce3'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                                    <p className="font2 m-b-3">21 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-secondary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-5">
                            <div className="banner" id='banner-place4'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                                    <p className="font2 m-b-3">38 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-teritary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title pb-3 mb-3">Featured Books</h2>
                        <div className="row">
                            {
                                books.map((book, i) => {
                                    if(i<5){
                                        return <SingleBookElement book={book} key={i} customize="Features" />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Featured;