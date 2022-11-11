const Sidebar = () => {

    return (
        <>

            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                <div className="sidebar-wrapper">
                    <div className="widget">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                        </h3>
                        <div className="collapse show" id="widget-body-1">
                            <div className="widget-body">
                                <ul className="cat-list">
                                    <li><a href="#">Arts &amp; Photography<span className="products-count">(2)</span></a></li>
                                    <li><a href="#">Business &amp; Investing<span className="products-count">(3)</span></a></li>
                                    <li><a href="#">Literature &amp; Fiction<span className="products-count">(4)</span></a></li>
                                    <li><a href="#">Mystery Suspense<span className="products-count">(4)</span></a></li>
                                    <li><a href="#">Scifi Fantasy<span className="products-count">(3)</span></a>
                                    </li>
                                </ul>
                            </div>{/* End .widget-body */}
                        </div>{/* End .collapse */}
                    </div>{/* End .widget */}
                    <div className="widget widget-featured pb-0">
                        <h3 className="widget-title">Featured Products</h3>
                        <div className="widget-body">
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
                            </div>{/* End .featured-col */}
                        </div>{/* End .widget-body */}
                    </div>{/* End .widget */}
                </div>{/* End .sidebar-wrapper */}
            </aside>{/* End .col-lg-3 */}

        </>
    )


}

export default Sidebar;