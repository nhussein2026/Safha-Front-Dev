import AllReviews from "./AllReviews"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SingleReview from "./SingleReview"


const Reviews = () => {
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        const getReviews = async () => {
            const getReviews = await fetch(`${process.env.REACT_APP_API_URL}/reviews/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await getReviews.json()
            if (json?.data?.length) {
                setReviews(json?.data)
            }
        }
        getReviews()
    }, [])
   
    return(
        <>
        <div className="mb-4">
                {
                    Reviews.map((reviews, i) => {
                        return <AllReviews reviews={reviews} key={i} />
                    })
                },
            </div>
        </>
    )
}
export default Reviews