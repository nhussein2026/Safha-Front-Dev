import Review from "./Review"
import { useState, useEffect } from "react"



const Reviews = () => {
    // const { id } = useParams()
    // const  token  = useContext(AuthContext)

 
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        const getReviews = async () => {
            const getReviews = await fetch(`${process.env.REACT_APP_API_URL}/reviews/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token}`

                }
            })
            const json = await getReviews.json()
            console.log("json", json)
            if (json?.data?.length) {
                setReviews(json?.data)
            }
        }
        getReviews()

        const getReview = async() => {
            // const 
        }
    }, [])
    return(
        <>
        <div className="mb-4">
                {
                    Reviews.map((review, i) => {
                        return <Review review={review} key={i} />
                    })
                }
            </div>
        </>
    )
}
export default Reviews