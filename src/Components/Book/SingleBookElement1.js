const SingleBookElement1 = ({book,i}) => {
    return (
      <>
            <div className="col-6 col-sm-4 col-lg-3">
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="demo25-product.html">
                            <img src={book?.cover}
                                width="217" height="217" alt="product"/>
                        </a>
                        <div className="label-group">
                          {/* <div className="product-label label-hot">HOT</div> */}
                        </div>
                        <div className="btn-icon-group">
                            {/* <a href="demo25-product.html"
                                className="btn-icon btn-add-cart product-type-simple"><i
                                    className="icon-shopping-cart"></i></a> */}
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview"
                          title="Quick View">More Details</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                              <a href="demo25-shop.html" className="product-category">{book?.Category?.name}</a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish"><i
                                  className="icon-heart"></i></a>
                        </div>
                        <h3 className="product-title">
                            <a href="demo25-product.html">{book?.name}</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '80%' }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                        </div>
                        <div className="price-box">
                            <span className="product-price">$299.0</span>
                        </div>
                    </div>
                </div>
            </div>
      
      </> 
      );
    

}
export default SingleBookElement1