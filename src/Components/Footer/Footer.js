import logo from "../../assets/images/logo.png"

const Footer = () => {

    return (
        <>
            <footer className="footer font2">
                <div className="container">
                    <div className="footer-middle">
                        <div className="row">
                            <div className="col-lg-5 mb-1 mb-lg-0">
                                <div className="appear-animate" data-animation-name="fadeInUpShorter"
                                    data-animation-delay="200">
                                    <a href="demo25.html">
                                        <img src="assets/images/logo-black.png" alt="Logo" width="111"
                                            height="44" className="m-b-4" /></a>
                                </div>

                                <div className="contact-widget">
                                    <p>Safha is a website enabled you to share your experience</p> 
                                    <p> and reviews with readers from all around the world.</p>

                                    <div className="row ls-0">
                                        <div className="col-md-2-5">
                                            
                                        </div>
                                        <div className="col-md-3-5">
                                        {/* <a href="demo25.html" className="logo">
                                                <img src={logo} alt="Porto Logo" width="111" height="44" />
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End .col-lg-5 --> */}

                            <div className="col-lg-2 col-sm-4">
                                <div className="widget">
                                    <h4 className="widget-title">Account</h4>

                                    <ul className="links">
                                        <li><a href="dashboard.html">My Account</a></li>
                                        <li><a href="#">Track Your Order</a></li>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Shipping Guide</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Product Support</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-lg-2 --> */}

                            <div className="col-lg-3 col-sm-4">
                                <div className="widget">
                                    <h4 className="widget-title">About</h4>

                                    <ul className="links">
                                        <li><a href="about.html">About Porto</a></li>
                                        <li><a href="#">Our Guarantees</a></li>
                                        <li><a href="#">Terms And Conditions</a></li>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                        <li><a href="#">Intellectual Property Claims</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-lg-3 --> */}

                            <div className="col-lg-2 col-sm-4">
                                <div className="widget">
                                    <h4 className="widget-title">Features</h4>

                                    <ul className="links">
                                        <li><a href="#">Powerful Admin Panel</a></li>
                                        <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                                        <li><a href="#">Super Fast HTML Template</a></li>
                                        <li><a href="#">1st Fully Working Ajax Theme</a></li>
                                        <li><a href="#">33 Unique Shop Demos</a></li>
                                    </ul>
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-lg-2 --> */}
                        </div>
                        {/* <!-- End .row --> */}
                    </div>
                    {/* <!-- End .footer-middle --> */}

                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-copyright py-3 pr-4 mb-0">&copy; Safha. 2022. All Rights Reserved</p>

                        <div className="social-icons py-3">
                            <a href="#" className="social-icon social-facebook icon-facebook" target="_blank"
                                title="Facebook"></a>
                            <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                            <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank"
                                title="Linkedin"></a>
                        </div>
                        {/* <!-- End .social-icons --> */}
                    </div>
                    {/* <!-- End .footer-bottom --> */}
                </div>
                {/* <!-- End .container --> */}
            </footer>
            {/* <!-- End .footer --> */}
        </>
    )
}
export default Footer;