import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../../../contexts/Authcontext"



const Review = ({review}) => {


    return (
        <>
            
            <div className="d-flex">
                <div className="bg-white">
                    <div className="container">
                        <div className="row main-content">
                            <div className="col-lg-9 product-sidebar-right">
                                <div className="product-single-container product-single-default">
                                    <div className="row">
                                        <div className="col-md-4 product-single-gallery">
                                            <div className="product-slider-container">
                                                <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">
                                                    <div className="product-item">
                                                        <img className="product-single-image" src="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" data-zoom-image="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" width={468} height={468} alt="product" />
                                                    </div>
                                                </div>
                                            </div>

                                            <a href="#">
                                                <img src={review?.Book?.cover}
                                                    width="317" height="317" alt="product" />
                                            </a>
                                        </div>
                                        <div className="col-md-6 product-single-details font2" id="font2">
                                            <h1 className="product-title">{review?.Book?.name}</h1>
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
                                            <hr className="short-divider" />
                                            <div className="category-list">
                                                Category:
                                                <a href="demo25-shop.html" className="product-category">{review?.Book?.Category?.name}</a>
                                            </div>
                                            <hr className="short-divider" />
                                            <div className="product-desc">
                                                Description:
                                                <p>
                                                    {review?.Book?.des}
                                                </p>
                                            </div>
                                            <hr className="short-divider" />
                                            <ul className="single-info-list">
                                                <li>
                                                    ISBN:
                                                    <strong>{review?.Book?.ISBN}</strong>
                                                </li>
                                                <hr className="divider mb-0 mt-0" />
                                            </ul>
                                            {/* <hr className="divider mb-0 mt-0" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="product-single-tabs font2">
                                    <div className="nav nav-tabs d-flex" id="reviews" role="tablist">
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                            <div className="product-desc-content">
                                                <p>{review?.Book?.Comment?.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SideBarWrapper/> */}
            </div>
        </>
    )
}
export default Review;