const SingleBookElement1 = ({book,i}) => {
    return (
      <>
            <div class="col-6 col-sm-4 col-lg-3">
                <div class="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="demo25-product.html">
                            <img src={book?.cover}
                                width="217" height="217" alt="product"/>
                        </a>
                        <div class="label-group">
                          {/* <div class="product-label label-hot">HOT</div> */}
                        </div>
                        <div class="btn-icon-group">
                            {/* <a href="demo25-product.html"
                                class="btn-icon btn-add-cart product-type-simple"><i
                                    class="icon-shopping-cart"></i></a> */}
                        </div>
                        <a href="ajax/product-quick-view.html" class="btn-quickview"
                          title="Quick View">More Details</a>
                    </figure>
                    <div class="product-details">
                        <div class="category-wrap">
                            <div class="category-list">
                              <a href="demo25-shop.html" class="product-category">{book?.Category?.name}</a>
                            </div>
                            <a href="wishlist.html" class="btn-icon-wish"><i
                                  class="icon-heart"></i></a>
                        </div>
                        <h3 class="product-title">
                            <a href="demo25-product.html">{book?.name}</a>
                        </h3>
                        <div class="ratings-container">
                            <div class="product-ratings">
                                {/* <span class="ratings" style="width:80%"></span>
                                <span class="tooltiptext tooltip-top"></span> */}
                            </div>
                        </div>
                        <div class="price-box">
                            {/* <span class="product-price">$299.0</span> */}
                        </div>
                    </div>
                </div>
            </div>
      
      </> 
      );
    

}
export default SingleBookElement1