import Book from "../Book/Book";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../SideBar/SideBar";

const Books = () => {

    

    return(
        <>
        <Navbar/>
        <SecondNavbar/>
        <Book/>
        <div  className='manal'>
                <Sidebar/>
                <div className="page-wrapper">
                    <div className="top-notice p-0">
                        <div className="owl-carousel info-boxes-slider bg-primary" data-owl-options="{
                      'items': 1,
                      'dots': false,
                      'loop': false,
                      'responsive': {
                          '768': {
                              'items': 2
                          },
                          '992': {
                              'items': 3
                          }
                      }
                  }">
                            <div className="info-box info-box-icon-left">
                                <i className="icon-shipping" />
                                <div className="info-box-content">
                                    <h4>Free Shipping on Orders Over $99</h4>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                            <div className="info-box info-box-icon-left">
                                <i className="icon-money" />
                                <div className="info-box-content">
                                    <h4>Up to 40% OFF on Selected Items</h4>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                            <div className="info-box info-box-icon-left">
                                <i className="sicon-graduation" />
                                <div className="info-box-content">
                                    <h4>15% OFF Student Discount</h4>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                        </div>{/* End .owl-carousel */}
                    </div>
                    <main>
                        <div className="bg-white">
                            <div className="container">
                                <div className="row main-content">
                                    <div className="col-lg-9">
                                        <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}">
                                            <div className="toolbox-left">
                                                <a href="#" className="sidebar-toggle"><svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                                                    <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                                                    <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                                                    <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                                                    <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                                                    <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                                                    <path d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                                    <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2">
                                                    </path>
                                                    <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3" />
                                                    <path d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                                </svg>
                                                    <span>Filter</span>
                                                </a>
                                                <div className="toolbox-item toolbox-sort">
                                                    <label>Sort By:</label>
                                                    <div className="select-custom">
                                                        <select name="orderby" className="form-control">
                                                            <option value="menu_order" selected="selected">Default sorting</option>
                                                            <option value="popularity">Sort by popularity</option>
                                                            <option value="rating">Sort by average rating</option>
                                                            <option value="date">Sort by newness</option>
                                                            <option value="price">Sort by price: low to high</option>
                                                        </select>
                                                    </div>{/* End .select-custom */}
                                                </div>{/* End .toolbox-item */}
                                            </div>{/* End .toolbox-left */}
                                            <div className="toolbox-right">
                                                <div className="toolbox-item toolbox-show">
                                                    <label>Show:</label>
                                                    <div className="select-custom">
                                                        <select name="count" className="form-control">
                                                            <option value={12}>12</option>
                                                            <option value={24}>24</option>
                                                            <option value={36}>36</option>
                                                        </select>
                                                    </div>{/* End .select-custom */}
                                                </div>{/* End .toolbox-item */}
                                                <div className="toolbox-item layout-modes">
                                                    <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                                        <i className="icon-mode-grid" />
                                                    </a>
                                                    <a href="category-list.html" className="layout-btn btn-list" title="List">
                                                        <i className="icon-mode-list" />
                                                    </a>
                                                </div>{/* End .layout-modes */}
                                            </div>{/* End .toolbox-right */}
                                        </nav>
                                        <div className="row">
                                            <div className="col-6 col-sm-4 col-lg-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="demo25-product.html">
                                                            <img src="assets/images/demoes/demo25/products/product-1.jpg" width={217} height={217} alt="product" />
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
                                                            <a href="demo25-product.html">The Night Before</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>{/* End .product-ratings */}
                                                        </div>{/* End .product-container */}
                                                        <div className="price-box">
                                                            <span className="product-price">$299.0</span>
                                                        </div>{/* End .price-box */}
                                                    </div>{/* End .product-details */}
                                                </div>
                                            </div>{/* End .col-lg-3 */}
                                        </div>{/* End .row */}
                                        <nav className="toolbox toolbox-pagination">
                                            <div className="toolbox-item toolbox-show">
                                                <label className="mt-0">Show:</label>
                                                <div className="select-custom">
                                                    <select name="count" className="form-control">
                                                        <option value={12}>12</option>
                                                        <option value={24}>24</option>
                                                        <option value={36}>36</option>
                                                    </select>
                                                </div>{/* End .select-custom */}
                                            </div>{/* End .toolbox-item */}
                                            <ul className="pagination toolbox-item">
                                                <li className="page-item disabled">
                                                    <a className="page-link page-link-btn" href="#"><i className="icon-angle-left" /></a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><span className="page-link">...</span></li>
                                                <li className="page-item">
                                                    <a className="page-link page-link-btn" href="#"><i className="icon-angle-right" /></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>{/* End .col-lg-9 */}
                                    <div className="sidebar-overlay" />

                                </div>{/* End .row */}
                            </div>{/* End .container */}
                        </div>
                    </main>{/* End .main */}

                </div>{/* End .page-wrapper */}
            </div>
        </>
    )
}
export default Books;