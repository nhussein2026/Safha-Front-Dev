import './Featured.css'
import { useEffect, useState } from 'react'
import SingleBookElement from '../Books/SingleBookElement/SingleBookElement'
import OneFeature from './OneFeature/OneFeature'
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
    // books.reviewsCount
    return (
        <>
            <section className="featured-section bg-white">
                <div className="container">
                    <div className="row">
                        <OneFeature books={books}/>
                    </div>
                    <div>
                        <h2 className="section-title pb-3 mb-3">Featured Books</h2>
                        <div className="row">
                            {
                                books.map((book, i) => {
                                    if(i<4){
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