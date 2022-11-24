import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/Authcontext";
import SingleReview from "./SingleReview/SingleReview";

const Reviews = ({book}) => {
    
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
                
            </div>
        </>
    );
}

export default Reviews;