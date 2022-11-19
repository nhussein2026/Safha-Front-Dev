import './Featured.css'
import bookImg from "../../assets/images/booksImages/Atomic-Habits_.jpg"
import featureImg1 from "../../assets/images/demoes/demo25/products/product-6.jpg"
import featurImg2 from "../../assets/images/demoes/demo25/products/product-9.jpg"
const Featured1 = () => {

    return (

        <>
            <section className="featured-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-b-3">
                            <div className="banner banner2" id='banner-place'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Award Winners</h3>
                                    <p className="font2 m-b-3">12 Books</p>
                                    <a href="#" className="btn btn-primary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-3">
                            <div className="banner" id='banner-palce3'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                                    <p className="font2 m-b-3">21 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-secondary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-5">
                            <div className="banner" id='banner-place4'>
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                                    <p className="font2 m-b-3">38 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-teritary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title pb-3 mb-3">Featured Books</h2>
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="demo25-product.html">
                                            <img src={featureImg1} width={217} height={217} alt="product" />
                                        </a>
                                        <div className="btn-icon-group">
                                            <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                        </div>
                                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
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
                                            <a href="#">Gray</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>{/* End .product-ratings */}
                                        </div>{/* End .product-container */}
                                    </div>{/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="#">
                                            <img src={featurImg2} width={220} height={217} alt="product" />
                                        </a>
                                        <div className="btn-icon-group">
                                            <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                        </div>
                                        <a href="/" className="btn-quickview" title="Quick View">Quick
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
                                            <a href="demo25-product.html">The Bear and the Dragon</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>{/* End .product-ratings */}
                                        </div>{/* End .product-container */}
                                    </div>{/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="#">
                                            <img src={featurImg2} width={217} height={217} alt="product" />
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
                                            <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
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
                                    </div>{/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="product-default inner-quickview inner-icon">
                                    <figure>
                                        <a href="#">
                                            <img src={featureImg1} width={217} height={217} alt="product" />
                                        </a>
                                        <div className="btn-icon-group">
                                            <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
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
                                            <a href="#">Sorcery of Thorns</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>{/* End .product-ratings */}
                                        </div>{/* End .product-container */}
                                    </div>{/* End .product-details */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Featured1;