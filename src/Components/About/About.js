import "./About.css";
import aboutImg from "../../assets/images/About-img/879028-Many-Library-Book-Glasses-Bokeh.jpg"
import { AuthContext } from '../../contexts/Authcontext';
import { useContext, useEffect } from "react";

const About = () => {
    const { setHomeNav, setAboutNav, setCategoriesNav, setBooksNav } = useContext(AuthContext)
    useEffect(()=>{
        setCategoriesNav(false);
        setHomeNav(false);
        setBooksNav(false);
        setAboutNav(true);
    },[])
    return (
        <>
            <div>
                {/* Hero Start */}
                <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                    <div className="row py-5">
                        <div className="col-12 text-center">
                            <h1 className="display-3 text-uppercase text-white mb-md-4">About Safha</h1>
                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="/about" className="btn btn-light py-md-3 px-md-5">About</a>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* About Start */}
                <div className="container-fluid p-5">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={aboutImg} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase">About Us</h5>
                                <h1 className="display-3 text-uppercase mb-0">Welcome to Safha</h1>
                            </div>
                            <h4 className="text-body mb-4">Safha is a webpage to show books reviews. Our mission is to help reader to find and share book's review and discuss it with others.

                            </h4>
                            <p className="mb-4">
                                See what books your friends are reading.
                                Track the books you're reading, have read, and want to read.
                                Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.
                                Find out if a book is a good fit for you from our community’s reviews.
                            </p>

                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Programe Start */}
                {/* <div className="container-fluid programe position-relative px-5 mt-5" style={{ marginBottom: '180px' }}>
                    <div className="row g-5 gb-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-light rounded text-center p-5">
                                <i className="flaticon-six-pack display-1 text-primary" />
                                <h3 className="text-uppercase my-4">Body Building</h3>
                                <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                                <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-light rounded text-center p-5">
                                <i className="flaticon-barbell display-1 text-primary" />
                                <h3 className="text-uppercase my-4">Weight Lefting</h3>
                                <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                                <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-light rounded text-center p-5">
                                <i className="flaticon-bodybuilding display-1 text-primary" />
                                <h3 className="text-uppercase my-4">Muscle Building</h3>
                                <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                                <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 text-center">
                            <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                            <a href className="btn btn-primary py-3 px-5">Become A Member</a>
                        </div>
                    </div>
                </div> */}
                {/* Programe Start */}
                {/* Facts Start */}
                <div className="container-fluid facts p-5" id="count-place" style={{ marginBottom: '90px' }}>
                    <div className="row gx-5 gy-4 py-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-star fs-4 text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5 className=" text-uppercase">Experience</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-users fs-4 text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5 className=" text-uppercase">Our Trainers</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check fs-4 text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5 className=" text-uppercase">Complete Project</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-mug-hot fs-4 text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-uppercase">Happy Clients</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}
                <a href="#" class="btn btn-dark py-3 fs-4 back-to-top"><i class="bi bi-arrow-up"></i></a>
            </div>
        </>
    )
}
export default About;