const HomeCategories = () => {
    return (
        <>
        <main className="main">
          <div className="intro-section">
            <div className="home-slider owl-carousel owl-theme appear-animate" data-owl-options="{
                      'lazyLoad': false,
                      'loop': true,
                      'center': true,
                      'navText': ['<i class=icon-angle-left>', '<i class=icon-angle-right>'],
                      'responsive': {
                          '576': {
                              'items': 2
                          },
                          '768': {
                              'items': 3
                          }
                      }
                  }" data-animation-name="fadeIn" data-animation-delay={200}>
              <div className="home-slide">
                <a href="demo25-shop.html">
                  <img src="assets/images/demoes/demo25/slider/arts-photography.jpg" alt="slider" width={545} height={398} />
                  <div className="home-slide-content text-center">
                    <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                    <span className="product-count d-block font2 ls-10 text-uppercase">2 Products</span>
                    <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                  </div>
                </a>
                <div className="product-default">
                  <figure>
                    <img src="assets/images/demoes/demo25/products/product-1.jpg" alt="product" width={250} height={375} />
                  </figure>
                  <div className="product-details">
                    <h3 className="product-title"><a href="demo25-product.html">The Night Before</a></h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$299.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-slide">
                <a href="demo25-shop.html">
                  <img src="assets/images/demoes/demo25/slider/business-investing.jpg" alt="slider" width={545} height={398} />
                  <div className="home-slide-content text-center">
                    <h3 className="ls-n-10 text-white mb-0">Business &amp; Investing</h3>
                    <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                    <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                  </div>
                </a>
                <div className="product-default">
                  <figure>
                    <img src="assets/images/demoes/demo25/products/product-2.jpg" alt="product" width={250} height={375} />
                  </figure>
                  <div className="product-details">
                    <h3 className="product-title"><a href="demo25-product.html">Call an Audible</a></h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$299.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-slide">
                <a href="demo25-shop.html">
                  <img src="assets/images/demoes/demo25/slider/literature-fiction.jpg" alt="slider" width={545} height={398} />
                  <div className="home-slide-content text-center">
                    <h3 className="ls-n-10 text-white mb-0">Literature &amp; Fiction</h3>
                    <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                    <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                  </div>
                </a>
                <div className="product-default">
                  <figure>
                    <img src="assets/images/demoes/demo25/products/product-3.jpg" alt="product" width={250} height={375} />
                  </figure>
                  <div className="product-details">
                    <h3 className="product-title"><a href="demo25-product.html">Ask Again Yes</a></h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$299.0</span>
                      <span className="product-price">$259.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-slide">
                <a href="demo25-shop.html">
                  <img src="assets/images/demoes/demo25/slider/mystery-suspense.jpg" alt="slider" width={545} height={398} />
                  <div className="home-slide-content text-center">
                    <h3 className="ls-n-10 text-white mb-0">Mystery Suspense</h3>
                    <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                    <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                  </div>
                </a>
                <div className="product-default">
                  <figure>
                    <img src="assets/images/demoes/demo25/products/product-4.jpg" alt="product" width={250} height={375} />
                  </figure>
                  <div className="product-details">
                    <h3 className="product-title"><a href="demo25-product.html">The Butterfly Garden</a></h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-slide">
                <a href="demo25-shop.html">
                  <img src="assets/images/demoes/demo25/slider/scifi-fantasy.jpg" alt="slider" width={545} height={398} />
                  <div className="home-slide-content text-center">
                    <h3 className="ls-n-10 text-white mb-0">Scifi Fantasy</h3>
                    <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                    <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                  </div>
                </a>
                <div className="product-default">
                  <figure>
                    <img src="assets/images/demoes/demo25/products/product-5.jpg" alt="product" width={250} height={375} />
                  </figure>
                  <div className="product-details">
                    <h3 className="product-title"><a href="demo25-product.html">Sorcery of Thorns</a></h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$599.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="best-sellers appear-animate" data-animation-name="fadeIn" data-animation-delay={300}>
            <div className="container">
              <div className="heading pb-3 mb-2 d-flex align-items-center justify-content-between">
                <h2 className="section-title border-0">Best Sellers Books</h2>
                <a href="demo25-shop.html" className="btn btn-link">View all products<i className="fas fa-long-arrow-alt-right" /></a>
              </div>
              <div className="row no-gutters m-0">
                <div className="col-md-4">
                  <div className="banner banner1 bg-white">
                    <div className="banner-layer d-flex flex-column align-items-center justify-content-center h-100">
                      <h5 className="font-weight-normal text-uppercase m-b-1"><i>Book Club</i></h5>
                      <h2 className="text-center">A selection with only the best books</h2>
                      <figure>
                        <img src="assets/images/demoes/demo25/banners/banner-1.png" alt="banner" width={343} height={283} />
                      </figure>
                      <a href="demo25-shop.html" className="btn btn-primary">Explore Books <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row custom-products no-gutters">
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-1.jpg" alt="product" width={217} height={217} />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">The Night Before</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$299.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-6.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">Grey</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$55.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-3.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">Ask Again Yes</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$299.0</span>
                            <span className="product-price">$259.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-7.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">On Earth We're Briefly Gorgeous</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$199.0</span>
                            <span className="product-price">$129.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-8.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">I'll Never Fall</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$199.0</span>
                            <span className="product-price">$129.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-2.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">Call an Audible</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$299.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-4.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">The Butterfly Garden</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$39.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo25-product.html">
                            <img src="assets/images/demoes/demo25/products/product-9.jpg" alt="product" width={217} height={217} />
                          </a>
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
                            <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo25-product.html">The Bear and The Dragon</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$101.0 – $111.0</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="featured-section bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 m-b-3">
                  <div className="banner banner2 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-2.jpg)', backgroundColor: '#343339'}} data-animation-name="fadeInRightShorter" data-animation-delay={200}>
                    <div className="banner-layer">
                      <h3 className="text-uppercase text-white m-b-2">Award Winners</h3>
                      <p className="font2 m-b-3">12 Books</p>
                      <a href="demo25-shop.html" className="btn btn-primary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 m-b-3">
                  <div className="banner banner3 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-3.jpg)', backgroundColor: '#343436'}} data-animation-name="fadeInRightShorter" data-animation-delay={400}>
                    <div className="banner-layer">
                      <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                      <p className="font2 m-b-3">21 Books</p>
                      <a href="demo25-shop.html" className="btn btn-secondary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 m-b-5">
                  <div className="banner banner4 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-4.jpg)', backgroundColor: '#343436'}} data-animation-name="fadeInRightShorter" data-animation-delay={600}>
                    <div className="banner-layer">
                      <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                      <p className="font2 m-b-3">38 Books</p>
                      <a href="demo25-shop.html" className="btn btn-teritary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
                <h2 className="section-title pb-3 mb-2">Featured Books</h2>
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-1.jpg" alt="product" width={217} height={217} />
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">The Night Before</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="product-price">$299.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-2.jpg" alt="product" width={217} height={217} />
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">Call an Audible</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="product-price">$299.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-6.jpg" alt="product" width={217} height={217} />
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">Grey</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="product-price">$55.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-5.jpg" alt="product" width={217} height={217} />
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">Sorcery of Thorns</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="product-price">$599.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-4.jpg" alt="product" width={217} height={217} />
                        </a>
                        <div className="label-group">
                          <div className="product-label label-hot">HOT</div>
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">The Butterfly Garden</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="product-price">$39.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo25-product.html">
                          <img src="assets/images/demoes/demo25/products/product-3.jpg" alt="product" width={217} height={217} />
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
                          <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h3 className="product-title">
                          <a href="demo25-product.html">Ask Again Yes</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$299.0</span>
                          <span className="product-price">$259.0</span>
                        </div>{/* End .price-box */}
                      </div>{/* End .product-details */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="promo-section bg-primary" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-5.png)'}}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-10 col-sm-7 col-lg-5 mb-2 mb-lg-0 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={200}>
                  <h5 className="font-weight-normal text-uppercase mb-0"><i>Available Once a year</i></h5>
                  <div className="d-inline-block">
                    <h2 className="ls-n-10 text-white mb-0">Get 30% off on orders over $299</h2>
                    <p className="font2 text-right text-uppercase text-white mb-0">* Selected books</p>
                  </div>
                </div>
                <div className="col-7 col-lg-3 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={500}>
                  <a href="demo25-shop.html" className="btn btn-quaternary">Explore Books <i className="fas fa-long-arrow-alt-right" /></a>
                </div>
              </div>
            </div>
          </section>
          <section className="recent-section appear-animate" data-animation-name="fadeIn" data-animation-delay={200}>
            <div className="container">
              <h2 className="section-title pb-3 mb-2">Recent Books</h2>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-1.jpg" alt="product" width={217} height={217} />
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
                        <a href="demo25-product.html">The Night Before</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$299.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-2.jpg" alt="product" width={217} height={217} />
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
                          <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$299.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-8.jpg" alt="product" width={217} height={217} />
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
                          <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$199.0</span>
                        <span className="product-price">$129.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-7.jpg" alt="product" width={217} height={217} />
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
                          <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$199.0</span>
                        <span className="product-price">$129.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-10.jpg" alt="product" width={217} height={217} />
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
                          <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$59.0</span>
                        <span className="product-price">$49.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo25-product.html">
                        <img src="assets/images/demoes/demo25/products/product-6.jpg" alt="product" width={217} height={217} />
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
                          <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$55.0</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="newsletter-section bg-white text-center appear-animate" data-animation-name="fadeIn" data-animation-delay={200}>
            <div className="container">
              <p className="text-dark m-b-2"><i className="far fa-envelope" /></p>
              <h2 className="ls-n-10 mb-0">Subscribe to Our Newsletter</h2>
              <h5 className="font-weight-normal text-body m-b-4">Get all the latest information on Events, Sales and
                Offers.</h5>
              <form className="newsletter-form" action="#" method="get">
                <input type="email" className="form-control font2 mb-0" placeholder="Enter Your E-mail Address..." required />
                <button type="submit" className="btn btn-submit text-white">Subscribe</button>
              </form>
            </div>
          </section>
        </main>{/* End .main */}
        </>
    )
}
export default HomeCategories;

