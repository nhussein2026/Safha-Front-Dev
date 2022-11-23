import { useState, useEffect, useContext } from "react"
import { json, useParams } from "react-router-dom"
import './SingleReview.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { AuthContext } from "../../AuthContext/AuthContext";

dayjs.extend(relativeTime)

const SingleReview = () => {
    const { token } = useContext(AuthContext)
    const { id } = useParams()
    const [review, setReview] = useState([])
    const [liked, setliked] = useState(review?.Likes);
    const [detailed, setDetailed] = useState(false);
    const [details, setDetails] = useState(review);

    const likeReview = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/review/${id}`, {
            method: "post",
            body: JSON.stringify({
                reviewId: id
            }),
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (json.success) {
            setliked(true)
        }
    }
    const unlikeReview = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/review/${id}`, {
            method: "post",
            body: JSON.stringify({
                reviewId: id
            }),
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (json.success) {
            setliked(false)
        }
    }
    useEffect(() => {
        const getReview = async () => {
            const getSingleReview = await fetch(`${process.env.REACT_APP_API_URL}/reviews/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await getSingleReview.json()
            if (json?.data) {
                setReview(json?.data)
                setDetailed(true)
                setDetails(json.data)

            }
        }
        getReview()
    }, [id])
    return (
        <div className="bg-white">
            <div className="container">
                <div className="main-content">
                    <div className="product-single-container product-single-default">
                        <div className="row">
                            <div className="col-md-3  product-single-gallery bg-gray">
                                <a href="#" className='mt-3'>
                                    <img src={review?.Book?.cover}
                                        width="217" height="217" alt="product" />
                                </a>
                                <h1 className="product-title mt-1 mb-1">{review?.Book?.name}</h1>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '80%' }} />
                                        <span className="tooltiptext tooltip-top" />
                                    </div>
                                    <div>
                                        <span className="ratings" style={{ width: `${Number(review?.Book?.avgRating)}%` }}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <ul className="single-info-list mt-0 mb-0">
                                    <li className='mb-0'>
                                        ISBN:
                                        <strong>{review?.Book?.ISBN}</strong>
                                        <hr className="divider mb-0 mt-1" />
                                    </li>
                                </ul>
                                <div className="product-desc  mt-0">
                                    <p className='mt-0 font2'>
                                        {review?.Book?.des}
                                    </p>
                                </div>
                                <hr className="short-divider" />
                            </div>
                            {/* End of Book section */}
                            <div id='review' className='col-md-8 '>
                                <div className='reviewContent'>
                                    <img src={review?.User?.UserInfos?.avatar} alt={review?.User?.username} />
                                    <div className='mb-0 name'>{review?.User?.username}</div>
                                    {/* <div className='mb-2 datetime' >{dayjs().toDate(dayjs(review?.created_at))}</div> */}
                                    <p>{review?.content}</p>
                                    <div className='icons d-flex align-items-center'>
                                        <div className='me-2'>
                                            {
                                                detailed && (
                                                    <>
                                                    <div className="comment">
                                                        <img src={review?.Comment?.User} alt={review?.Comment?.usename} />
                                                        <div className="mb-0 name">{}review.username</div>
                                                    </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleReview;