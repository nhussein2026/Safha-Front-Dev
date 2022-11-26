import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AddReview from "../../AddReviews/AddReviews"
import SideBarWrapper from "../../SideBarWrapper/SideBarWrapper"
import SingleBook from "./SingleBook"
import './SingleBook.css'

const SingleBookIndex = () => {
    const { id } = useParams()
    const [Singlebook, setSingleBook] = useState({})
    const getBook = async () => {
        const getOneBook = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await getOneBook.json()
        console.log("json", json)
        if (json?.success) {
            setSingleBook(json?.data)
        }
    }
    useEffect(() => {
        console.log("inside useeffect index");
        
        getBook()
    }, [id])
    console.log("Index book", Singlebook, id)
    return(
        <>
        <div class="page-wrapper">
            <main class="main">
                <div className="bg-white">
                    <div className="container">
                        <div className="row main-content">
                            <SingleBook book={Singlebook}/>
                            <SideBarWrapper book={Singlebook}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        {/* <AddReview/> */}
        
        </>
    )
}
export default SingleBookIndex