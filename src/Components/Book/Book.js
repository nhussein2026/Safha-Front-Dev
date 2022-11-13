const Book = () => {
    return (
        <div>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="demo25-shop.html" className="product-category">category</a>
              </div>
              <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="demo25-product.html">On Earth We're Briefly Gorgeous</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$199.0</span>
              <span className="product-price">$129.0</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
          {/* End .col-lg-3 */}
          <div className="col-6 col-sm-4 col-lg-3">
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
            </div></div></div>
      );
    

}
export default Book