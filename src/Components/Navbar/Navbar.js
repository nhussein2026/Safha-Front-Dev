import "./Navbar.css"
import logo from "../../assets/images/cuted-logo.png"

const Navbar = () => {

    return(
        <>
        <header className="header">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler pl-0" type="button">
                            <i className="fas fa-bars"></i>
                        </button>
                        <a href="/" className="logo">
                            <img src={logo} alt="Safha Logo" width="150" height="50" />
                        </a>
                        <nav className="main-nav">
                            <ul className="menu">
                                <li className="active">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/categories">Categories</a>
                                    <div className="megamenu megamenu-fixed-width megamenu-cols">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">VARIATION 1</a>
                                                <ul className="submenu">
                                                    <li><a href="category.html">Fullwidth Banner</a></li>
                                                    <li><a href="category-banner-boxed-slider.html">Boxed Slider
                                                            Banner</a>
                                                    </li>
                                                    <li><a href="category-banner-boxed-image.html">Boxed Image
                                                            Banner</a>
                                                    </li>
                                                    <li><a href="category.html">Left Sidebar</a></li>
                                                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                    <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                                                    <li><a href="category-horizontal-filter1.html">Horizontal
                                                            Filter1</a>
                                                    </li>
                                                    <li><a href="category-horizontal-filter2.html">Horizontal
                                                            Filter2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">VARIATION 2</a>
                                                <ul className="submenu">
                                                    <li><a href="category-list.html">List Types</a></li>
                                                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a>
                                                    </li>
                                                    <li><a href="category.html">3 Columns Products</a></li>
                                                    <li><a href="category-4col.html">4 Columns Products</a></li>
                                                    <li><a href="category-5col.html">5 Columns Products</a></li>
                                                    <li><a href="category-6col.html">6 Columns Products</a></li>
                                                    <li><a href="category-7col.html">7 Columns Products</a></li>
                                                    <li><a href="category-8col.html">8 Columns Products</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 p-0">
                                                <div className="menu-banner">
                                                    <figure>
                                                        <img src="assets/images/menu-banner.jpg" alt="Menu banner"
                                                            width="300" height="300" />
                                                    </figure>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span className="">UP TO</span><br />
                                                            <b className="">50%</b>
                                                            <i>OFF</i>
                                                        </h4>
                                                        <a href="category.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/books">Books</a>
                                    <div className="megamenu megamenu-fixed-width">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">PRODUCT PAGES</a>
                                                <ul className="submenu">
                                                    <li><a href="demo25-product.html">SIMPLE PRODUCT</a></li>
                                                    <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                                    <li><a href="demo25-product.html">SALE PRODUCT</a></li>
                                                    <li><a href="demo25-product.html">FEATURED & ON SALE</a></li>
                                                    <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                                                    <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                                    <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                                    <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                <ul className="submenu">
                                                    <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                                    <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                                    <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                                    <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                                    <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                                    <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a>
                                                    </li>
                                                    <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                                    <li><a href="#">BUILD YOUR OWN</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 p-0">
                                                <div className="menu-banner menu-banner-2">
                                                    <figure>
                                                        <img src="assets/images/menu-banner-1.jpg" alt="Menu banner"
                                                            className="product-promo" width="380" height="790" />
                                                    </figure>
                                                    <i>OFF</i>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span className="">UP TO</span><br />
                                                            <b className="">50%</b>
                                                        </h4>
                                                    </div>
                                                    <a href="category.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="d-none d-xl-block">
                                    <a href="/books">REviews</a>
                                    <div className="megamenu megamenu-fixed-width">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">PRODUCT PAGES</a>
                                                <ul className="submenu">
                                                    <li><a href="demo25-product.html">SIMPLE PRODUCT</a></li>
                                                    <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                                    <li><a href="demo25-product.html">SALE PRODUCT</a></li>
                                                    <li><a href="demo25-product.html">FEATURED & ON SALE</a></li>
                                                    <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                                                    <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                                    <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                                    <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                <ul className="submenu">
                                                    <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                                    <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                                    <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                                    <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                                    <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                                    <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a>
                                                    </li>
                                                    <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                                    <li><a href="#">BUILD YOUR OWN</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 p-0">
                                                <div className="menu-banner menu-banner-2">
                                                    <figure>
                                                        <img src="assets/images/menu-banner-1.jpg" alt="Menu banner"
                                                            className="product-promo" width="380" height="790" />
                                                    </figure>
                                                    <i>OFF</i>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span className="">UP TO</span><br />
                                                            <b className="">50%</b>
                                                        </h4>
                                                    </div>
                                                    <a href="category.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <a href="/about">About</a>
                                    <ul>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single.html">Blog Post</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right pl-0 pl-lg-4">
                        <div
                            className="header-search header-search-inline header-search-category w-lg-max text-right d-none d-sm-flex">
                            <a href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                            <form action=" #" method="get">
                                <div className="header-search-wrapper">
                                    <input type="search" className="form-control font-italic" name="q" id="q"
                                        placeholder="Searching for any book" required />
                                    <button className="btn icon-magnifier" title="search" type="submit"></button>
                                </div>
                            </form>
                        </div>

                        <span className="separator d-none d-lg-inline"></span>

                        <a href="login.html">
                            <div className="header-user">
                                <i className="icon-user-2"></i>
                                <div className="header-userinfo">
                                    <span className="d-inline-block font2 line-height-1">Hello!</span>
                                    <h4 className="mb-0">My Account</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Navbar;