import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/Authcontext";
import SingleReview from "./SingleReview/SingleReview";

const Reviews = ({book}) => {
    const { token } = useContext(AuthContext)
    const content= useRef()
    console.log("book?.id",book?.id);
    
    return (
        <>
            {/* <div className="product-single-tabs font2"> */}
                {/* <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="product-tab-reviews" 
                            data-toggle="tab" href="#" 
                            role="tab" aria-controls="product-reviews-content" 
                            aria-selected="false">
                            Reviews</a>
                    </li>
                </ul> */}
                {
                    book?.Reviews?.map((review, i) => {
                        return (<SingleReview review={review} />)
                })
                }
                {/* <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="product-tab-reviews" 
                            data-toggle="tab" href="#" 
                            role="tab" aria-controls="product-reviews-content" 
                            aria-selected="false">
                            Add A Review</a>
                    </li>
                </ul> */}
            {/* </div> */}
                
        </>
    );
}

export default Reviews;