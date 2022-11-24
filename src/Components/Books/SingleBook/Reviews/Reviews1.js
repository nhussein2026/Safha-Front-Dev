const Reviews1 = ({book}) => {

    return (
        <>
        <div className="product-single-tabs font2">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                <a className="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Additional
                    Information</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews
                    (1)</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                <div className="product-desc-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    nostrud ipsum
                    consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit
                    esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <ul>
                    <li>Any Product types that You want - Simple,
                        Configurable</li>
                    <li>Downloadable/Digital Products, Virtual
                        Products</li>
                    <li>Inventory Management with Backordered items
                    </li>
                    </ul>
                    <p className="mb-0">Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut
                    enim ad
                    minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                    consequat. </p>
                </div>{/* End .product-desc-content */}
                </div>{/* End .tab-pane */}
                <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                <table className="table table-striped mt-2">
                    <tbody>
                    <tr>
                        <th>Weight</th>
                        <td>23 kg</td>
                    </tr>
                    <tr>
                        <th>Dimensions</th>
                        <td>12 × 24 × 35 cm</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>Black, Green, Indigo</td>
                    </tr>
                    <tr>
                        <th>Size</th>
                        <td>Large, Medium, Small</td>
                    </tr>
                    </tbody>
                </table>
                </div>{/* End .tab-pane */}
                <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                <div className="product-reviews-content">
                    <h3 className="reviews-title">1 review for Men Black Sports Shoes</h3>
                    <div className="comment-list">
                    <div className="comments">
                        <figure className="img-thumbnail">
                        <img src="assets/images/blog/author.jpg" alt="author" width={80} height={80} />
                        </figure>
                        <div className="comment-block">
                        <div className="comment-header">
                            <div className="comment-arrow" />
                            <div className="ratings-container float-sm-right">
                            <div className="product-ratings">
                                <span className="ratings" style={{width: '60%'}} />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                            </div>
                            <span className="comment-by">
                            <strong>Joe Doe</strong> – April 12, 2018
                            </span>
                        </div>
                        <div className="comment-content">
                            <p>Excellent.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="divider" />
                    <div className="add-product-review">
                    <h3 className="review-title">Add a review</h3>
                    <form action="#" className="comment-form m-0">
                        <div className="rating-form">
                        <label htmlFor="rating">Your rating <span className="required">*</span></label>
                        <span className="rating-stars">
                            <a className="star-1" href="#">1</a>
                            <a className="star-2" href="#">2</a>
                            <a className="star-3" href="#">3</a>
                            <a className="star-4" href="#">4</a>
                            <a className="star-5" href="#">5</a>
                        </span>
                        <select name="rating" id="rating" required style={{display: 'none'}}>
                            <option value>Rate…</option>
                            <option value={5}>Perfect</option>
                            <option value={4}>Good</option>
                            <option value={3}>Average</option>
                            <option value={2}>Not that bad</option>
                            <option value={1}>Very poor</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label>Your review <span className="required">*</span></label>
                        <textarea cols={5} rows={6} className="form-control form-control-sm" defaultValue={""} />
                        </div>{/* End .form-group */}
                        <div className="row">
                        <div className="col-md-6 col-xl-12">
                            <div className="form-group">
                            <label>Name <span className="required">*</span></label>
                            <input type="text" className="form-control form-control-sm" required />
                            </div>{/* End .form-group */}
                        </div>
                        <div className="col-md-6 col-xl-12">
                            <div className="form-group">
                            <label>Email <span className="required">*</span></label>
                            <input type="text" className="form-control form-control-sm" required />
                            </div>{/* End .form-group */}
                        </div>
                        <div className="col-md-6 col-xl-12">
                            <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-name" />
                            <label className="custom-control-label mb-0" htmlFor="save-name">Save my
                                name, email, and website in this browser for the
                                next
                                time I
                                comment.</label>
                            </div>
                        </div>
                        </div>
                        <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                    </form>
                    </div>{/* End .add-product-review */}
                </div>{/* End .product-reviews-content */}
                </div>{/* End .tab-pane */}
            </div>{/* End .tab-content */}
            </div>{/* End .product-single-tabs */}
            {/* End .product-single-tabs */}
            {/* End .col-lg-9 */}
        </>
    );
}

export default Reviews1;