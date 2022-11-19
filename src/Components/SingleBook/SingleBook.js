import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SideBarWrapper from "../SideBarWrapper/SideBarWrapper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReview from "../AddReviews/AddReviews";
const SingleBook = () => {
    console.log("I`m in the single book")
    const { id } = useParams()
    console.log("id", id)
    const [book, setBook] = useState({})
    useEffect(() => {
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
                setBook(json?.data)
            }
        }
        getBook()
    }, [id])
    console.log("book", book)
    return (
        <>

            <div className="d-flex">
                <div className="bg-white">
                    <div className="container">
                        <div className="row main-content">
                            <div className="col-lg-9 product-sidebar-right">
                                <div className="product-single-container product-single-default">
                                    <div className="row">
                                        <div className="col-md-6 product-single-gallery">
                                            <div className="product-slider-container">
                                                <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">
                                                    <div className="product-item">
                                                        <img className="product-single-image" src="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" data-zoom-image="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" width={468} height={468} alt="product" />
                                                    </div>
                                                </div>
                                                <span className="prod-full-screen">
                                                    <i className="icon-plus" />
                                                </span>
                                            </div>
                                            {/* <img src={book?.cover} /> */}
                                            {/* <a href="demo25-product.html">
                                                <img src="https://m.media-amazon.com/images/I/513j4X3mFjL.jpg"
                                                    width="217" height="217" alt="product" />
                                            </a> */}
                                            <a href="demo25-product.html">
                                                <img src={book?.cover}
                                                    width="217" height="217" alt="product" />
                                            </a>
                                        </div>
                                        <div className="col-md-6 product-single-details font2">
                                            <h1 className="product-title">{book?.name}</h1>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '80%' }} />
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>
                                                <div>
                                                    <span className="ratings" style={{ width: `${Number(book?.avgRating)}%` }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <hr className="short-divider" />
                                            <div className="category-list">
                                                Category:
                                                <a href="demo25-shop.html" className="product-category">{book?.Category?.name}</a>
                                            </div>
                                            <hr className="short-divider" />
                                            <div className="product-desc">
                                                Description:
                                                <p>
                                                    {book?.des}
                                                </p>
                                            </div>
                                            <hr className="short-divider" />
                                            <ul className="single-info-list">
                                                <li>
                                                    ISBN:
                                                    <strong>{book?.ISBN}</strong>
                                                </li>
                                                <hr className="divider mb-0 mt-0" />
                                            </ul>
                                            {/* <hr className="divider mb-0 mt-0" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="product-single-tabs font2">
                                    <div className="nav nav-tabs d-flex" id="reviews" role="tablist">
                                        {/* <li className="nav-item">
                                            <a className="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description :</a>
                                        </li> */}
                                        <div className="nav-item">
                                            
                                            <a className="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Reviews :</a>
                    
                                        </div>
                                        
                                        <div id="addReview">
                                        <AddReview/>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                            <div className="product-desc-content">
                                                <p>{book?.Comment?.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-overlay" />
                            <div className="sidebar-toggle custom-sidebar-toggle"><i className="fas fa-sliders-h" /></div>
                        </div>
                    </div>
                </div>
                    {/* <SideBarWrapper/> */}
            </div>
        
        </>
    );
}

export default SingleBook;