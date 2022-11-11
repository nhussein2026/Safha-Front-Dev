import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const SingleBook = () => {

    return (
        <div>
            <Navbar />
            <div className="bg-white">
                <div className="container">
                    <div className="row main-content">
                        <div className="col-lg-9 product-sidebar-right">
                            <div className="product-single-container product-single-default">
                                <div className="cart-message d-none">
                                    <strong className="single-cart-notice">“The Night Before”</strong>
                                    <span>has been added to your cart.</span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 product-single-gallery">
                                        <div className="product-slider-container">
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">
                                                <div className="product-item">
                                                    <img className="product-single-image" src="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" data-zoom-image="assets/images/demoes/demo25/products/zoom/product-1-big.jpg" width={468} height={468} alt="product" />
                                                </div>
                                            </div>
                                            {/* End .product-single-carousel */}
                                            <span className="prod-full-screen">
                                                <i className="icon-plus" />
                                            </span>
                                        </div>
                                        <div className="prod-thumbnail owl-dots">
                                            <div className="owl-dot">
                                                <img src="assets/images/demoes/demo25/products/zoom/product-1-thumb.jpg" width={110} height={110} alt="product-thumbnail" />
                                            </div>
                                        </div>
                                    </div>{/* End .product-single-gallery */}
                                    <div className="col-md-6 product-single-details font2">
                                        <h1 className="product-title">The Night Before</h1>
                                        <div className="product-nav">
                                            <div className="product-prev">
                                                <a href="#">
                                                    <span className="product-link" />
                                                    <span className="product-popup">
                                                        <span className="box-content">
                                                            <img alt="product" width={150} height={150} src="assets/images/demoes/demo25/products/product-3.jpg" style={{ paddingTop: '0px' }} />
                                                            <span>Ask Again Yes</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="product-next">
                                                <a href="#">
                                                    <span className="product-link" />
                                                    <span className="product-popup">
                                                        <span className="box-content">
                                                            <img alt="product" width={150} height={150} src="assets/images/demoes/demo25/products/product-4.jpg" style={{ paddingTop: '0px' }} />
                                                            <span>The Butterfly Garden</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>{/* End .product-ratings */}
                                            <a href="#" className="rating-link">( 6 Reviews )</a>
                                        </div>{/* End .ratings-container */}
                                        <hr className="short-divider" />
                                        <div className="price-box">
                                            <span className="product-price">$299.0</span>
                                        </div>{/* End .price-box */}
                                        <div className="product-desc">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                fames
                                                ac turpis
                                                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                                                sit
                                                amet,
                                                ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
                                                vitae est.
                                                Mauris placerat eleifend leo.
                                            </p>
                                        </div>{/* End .product-desc */}
                                        <ul className="single-info-list">
                                            {/**/}
                                            <li>
                                                AVAILABILITY:
                                                <strong>
                                                    <a href="#" className="product-category">10 IN STOCK</a>
                                                </strong>
                                            </li>
                                            <li>
                                                SKU:
                                                <strong>654613612</strong>
                                            </li>
                                        </ul>
                                        <div className="product-action">
                                            <div className="product-single-qty">
                                                <input className="horizontal-quantity form-control" type="text" />
                                            </div>{/* End .product-single-qty */}
                                            <a href="cart.html" className="btn btn-dark add-cart icon-shopping-cart mr-2" title="Add to Cart">Add to Cart</a>
                                            <a href="cart.html" className="btn btn-gray view-cart d-none">View cart</a>
                                        </div>{/* End .product-action */}
                                        <hr className="divider mb-0 mt-0" />
                                        <div className="product-single-share mb-2">
                                            <label className="sr-only">Share:</label>
                                            <div className="social-icons mr-2">
                                                <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                                                <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                                                <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin" />
                                                <a href="#" className="social-icon social-gplus fab fa-google-plus-g" target="_blank" title="Google +" />
                                                <a href="#" className="social-icon social-mail icon-mail-alt" target="_blank" title="Mail" />
                                            </div>{/* End .social-icons */}
                                            <a href="wishlist.html" className="btn-icon-wish add-wishlist" title="Add to Wishlist"><i className="icon-wishlist-2" /><span>Add to
                                                Wishlist</span></a>
                                        </div>{/* End .product single-share */}
                                    </div>{/* End .product-single-details */}
                                </div>{/* End .row */}
                            </div>{/* End .product-single-container */}
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
                                    {/* <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
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
                                    </div>End .tab-pane */}
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
                                                                    <span className="ratings" style={{ width: '60%' }} />
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
                                                        <select name="rating" id="rating" required style={{ display: 'none' }}>
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
                                </div>
                                
                            </div>{/* End .product-single-tabs */}
                            {/* End .product-single-tabs */}
                        </div>{/* End .col-lg-9 */}
                        <div className="sidebar-overlay" />
                        <div className="sidebar-toggle custom-sidebar-toggle"><i className="fas fa-sliders-h" /></div>
                        <aside className="sidebar-product col-lg-3 mobile-sidebar">
                            <div className="sidebar-wrapper">
                                <div className="widget widget-info">
                                    <h3 className="widget-title m-b-3">AUTHOR</h3>
                                    <div className="widget-body bg-gray">
                                        <h4 className="font2 text-dark line-height-1 m-b-1">Wendy Walker</h4>
                                        <p className="font2 font-weight-normal line-height-1 ls-0 text-uppercase">12
                                            Books</p>
                                        <a href="demo25-shop.html" className="d-inline-block text-uppercase">View All
                                            Books</a>
                                    </div>
                                </div>
                                <div className="widget widget-featured">
                                    <h3 className="widget-title m-b-3">FEATURED BOOKS</h3>
                                    <div className="widget-body p-0">
                                        <div className="owl-carousel widget-featured-products">
                                            <div className="featured-col">
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-1.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">The Night Before</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '80%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="product-price">$299.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-2.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">Call an Audible</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '0%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="product-price">$299.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-3.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">I'll Never Tell</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '0%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="old-price">$199.0</span>
                                                            <span className="product-price">$129.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                            </div>{/* End .featured-col */}
                                            <div className="featured-col">
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-1.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">The Night Before</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '80%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="product-price">$299.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-2.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">Call an Audible</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '0%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="product-price">$299.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/small/product-3.jpg" width={75} height={75} alt="product" />
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h3 className="product-title">
                                                            <a href="demo25-product.html">I'll Never Tell</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '0%' }} />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="old-price">$199.0</span>
                                                            <span className="product-price">$129.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                            </div>{/* End .featured-col */}
                                        </div>{/* End .widget-featured-slider */}
                                    </div>{/* End .widget-body */}
                                </div>{/* End .widget */}
                                <div className="widget widget-custom">
                                    <h3 className="widget-title m-b-1">CUSTOM HTML BLOCK</h3>
                                    <div className="widget-body p-0">
                                        <h4 className="mb-2">This is a custom sub-title.</h4>
                                        <p className="font2 text-dark mb-0">Lorem ipsum dolor sit amet, consectetur elitad
                                            adipiscing Cras non placerat
                                            mi.</p>
                                    </div>
                                </div>
                                <div className="sidebar-banner d-flex justify-content-end" style={{ backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-sidebar.jpg)', backgroundColor: '#343339' }}>
                                    <div className="banner-layer">
                                        <h3 className="line-height-1 text-uppercase text-white m-b-1">Award Winners</h3>
                                        <p className="font2 line-height-1 mb-2">12 Books</p>
                                        <a href="demo25-shop.html" className="btn btn-primary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </aside>{/* End .col-md-3 */}
                    </div>{/* End .row */}
                    <div className="products-section pt-0 pb-5">
                        <h2 className="section-title pb-3 m-b-4">Related Products</h2>
                        <div className="products-slider 5col owl-carousel owl-theme dots-top dots-small">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-3.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">Ask Again Yes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.0</span>
                                        <span className="product-price">$259.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-2.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">Call an Audible</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$299.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-6.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">Grey</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$55.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-8.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-sale">-35%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">I'll Never Tell</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$199.0</span>
                                        <span className="product-price">$129.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-7.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-sale">-35%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">On Earth We're Briefly Gorgeous</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$199.0</span>
                                        <span className="product-price">$129.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo25-product.html">
                                        <img src="assets/images/demoes/demo25/products/product-10.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-sale">-17%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo25-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo25-product.html">Queen Bee</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$59.0</span>
                                        <span className="product-price">$49.0</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>{/* End .products-slider */}
                    </div>{/* End .products-section */}
                </div>
            </div>
            {/* End .main */}
           
            <Footer/>
        </div>
    );
}

export default SingleBook;