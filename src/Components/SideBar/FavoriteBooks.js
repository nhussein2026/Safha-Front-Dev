// const FavoriteBooks = ({book}) => {
//     // console.log("Number(book.avgRating)",Number(book.avgRating))
//     return(
//     <>
//         <div className="widget-body">
//             <div className="featured-col">
//                 <div className="product-default left-details product-widget">
//                     <figure>
//                         <a href="#">
//                             <img src={book?.cover} width={217} height={217} alt="product" />
//                         </a>
//                     </figure>
//                     <div className="product-details">
//                         <h3 className="product-title">
//                             <a href="#">{book?.name}</a>
//                         </h3>
//                         <div className="ratings-container">
//                             <div className="product-ratings">
//                                 <span className="ratings" style={{ width: `${Number(book?.avgRating)}%` }} />
//                                 {/* End .ratings */}
//                                 <span className="tooltiptext tooltip-top" />
//                             </div>{/* End .product-ratings */}
//                         </div>{/* End .product-container */}
//                         <div className="price-box">
//                             <span className="product-price">{book?.reviewsCount}</span>
//                         </div> {/* End .price-box */}
//                     </div>{/* End .product-details */}
//                 </div>
//             </div>{/* End .featured-col */}
//         </div>{/* End .widget-body */}
//     </>
//     )
// }

// export default FavoriteBooks;




import { useState } from "react";
import { Rating } from "@mui/material";
const FavoriteBooks = ({ book }) => {
    // console.log("Number(book.avgRating)",Number(book.avgRating))
    return (
        <>
            <div className="widget-body">
                <div className="featured-col">
                    <div className="product-default left-details product-widget">
                        <figure>
                            <a href="#">
                                <img src={book?.cover} width={217} height={217} alt="product" />
                            </a>
                        </figure>
                        <div className="product-details">
                            <h3 className="product-title">
                                <a href="#">{book?.name}</a>
                            </h3>
                            
                                <div className="product-ratings">
                                    {/* <span className="ratings" style={{ width: `${Number(book?.avgRating)}%` }} /> */}
                                    {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                                    <Rating name="rating" precision={0.5}   />
                                    {/* End .ratings */}
                                    <span className="tooltiptext tooltip-top" />
                                </div>{/* End .product-ratings */}
                           
                            <div className="price-box">
                                <span className="product-price">{book?.reviewsCount}</span>
                            </div> {/* End .price-box */}
                        </div>{/* End .product-details */}
                    </div>
                </div>{/* End .featured-col */}
            </div>{/* End .widget-body */}
        </>
    )
}

export default FavoriteBooks;