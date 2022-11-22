import './Review.css'


const Review = ({ review }) => {


    return (
        <>

            <div className="d-flex">
                <div className="bg-white">
                    <div className="container">
                        <div className="row main-content">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Review;