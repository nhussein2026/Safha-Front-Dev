const SingleCategoryElement = ({category}) => {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 col-xl-2">
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="#">
              <img src="assets/images/demoes/demo25/products/product-5.jpg" width={217} height={217} alt="product" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
            </div>
            <div className="btn-icon-group">
              <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
            </div>
            <a href="#" className="btn-quickview" title="Quick View">Quick
              View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="#" className="product-category">category</a>
              </div>
              <a href="#" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="#">{category?.Books[0]?.name}</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="product-price">{category?.Books.length}</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
      </div>
    </>
    
  );

}

export default SingleCategoryElement;