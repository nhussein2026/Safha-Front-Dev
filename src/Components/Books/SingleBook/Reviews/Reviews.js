import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/Authcontext";
import SingleReview from "./SingleReview/SingleReview";

const Reviews = ({book}) => {
        
    return (
        <>
            {
                book?.Reviews?.map((review, i) => {
                    return (<SingleReview review={review} />)
            })
            }   
        </>
    );
}

export default Reviews;