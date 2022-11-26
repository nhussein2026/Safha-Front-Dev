import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/Authcontext";
import SingleReview from "./SingleReview/SingleReview";

const Reviews = ({book}) => {
    const { token } = useContext(AuthContext)
    const content= useRef()
    console.log("book?.id",book?.id);
    // const {id} = useParams()
    // const [loading, setLoading] = useState(false)
    // const [review, setReview] = useState({
    //     content: '',
    //     bookId: id,
    // })
    // const AddReview = async (event) => {
    //     event.preventDefault()
    //     setLoading(true)
    //     console.log("inside Add Review");
    //     // console.log("content",content.current.value )
    //     const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`,
    //         {
    //             method: "POST",
    //             body: JSON.stringify(review),
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         }
    //     );
    //     // console.log("content",content.current.value )
    //     const json = await response.json();
    //     console.log(json)
    //     window.alert(json.messages)
    //     if (json.success) {
    //         // alert(json.messages.join(' '))
    //     }
    // }
    // console.log("content",content.current.value );
    return (
        <>
            <div className="product-single-tabs font2">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="product-tab-reviews" 
                            data-toggle="tab" href="#" 
                            role="tab" aria-controls="product-reviews-content" 
                            aria-selected="false">
                            Reviews</a>
                    </li>
                </ul>
                {
                    book?.Reviews?.map((review, i) => {
                        return (<SingleReview review={review} />)
                })
                }
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="product-tab-reviews" 
                            data-toggle="tab" href="#" 
                            role="tab" aria-controls="product-reviews-content" 
                            aria-selected="false">
                            Add A Review</a>
                    </li>
                </ul>
                {/* <form>
                    <div className='form-field mb-1 mx-2'>
                        <label htmlFor='content' className='mb-1'></label>
                        <input name="content" id="password" value={review?.content} onChange={(e) => { setReview({ ...review, content: e.target.value }) }} className='form-control'/>
                    </div>
                    <button className='btn btn-primary w-49' type="submit" id='signup-bttn' onClick={AddReview}>
                        {loading ? 'Please Wait' : 'Add'}
                    </button>
                </form> */}
            </div>
                
        </>
    );
}

export default Reviews;