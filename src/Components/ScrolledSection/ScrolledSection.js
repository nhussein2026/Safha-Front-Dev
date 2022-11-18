import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ScrolledSection.css";
import categoryImg from "../../assets/images/booksImages/Atomic-Habits_.jpg"
const ScrolledSectioin = () => {

    return (
        <>
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
                        <a href="#">
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
                                        <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
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
                        <a href="#">
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
                                        <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
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
                        <a href="#">
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
                                        <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
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
                        <a href="#">
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
                                        <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
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
                        <a href="#">
                            <img src="assets/images/demoes/demo25/slider/scifi-fantasy.jpg" alt="slider" width={545} height={398} />
                            <div className="home-slide-content text-center">
                                <h3 className="ls-n-10 text-white mb-0">Scifi Fantasy</h3>
                                <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                                <span className="btn text-white">View All Products <i className="fas fa-long-arrow-alt-right" /></span>
                            </div>
                        </a>
                    </div></div></div>


        </>
    )
}
export default ScrolledSectioin;