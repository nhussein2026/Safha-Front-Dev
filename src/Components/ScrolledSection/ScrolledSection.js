import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import "./ScrolledSection.css";
import categoryimg1 from "../../assets/images/categories/cover/scifi-fantasy.jpg"
import bookImg from "../../assets/images/categories/product-5.jpg"


const ScrolledSectioin = () => {
    let reactSwipeEl;
    return (
        <>
            {/* begining of the scroll part */}



            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: false }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {/* 1st category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*2nd category  */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3rd Category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4th Category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 5th Category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 6th Category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 7th Category */}
                    <div>
                        <div className='main'>
                            <div className="intro-section">
                                <div className="home-slider ">
                                    <div className="home-slide">
                                        <a href="/">
                                            <img src={categoryimg1} alt="slider" id='category-img' />
                                            <div className="home-slide-content text-center">
                                                <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactSwipe>
                {/* <div> */}
                    <button onClick={() => reactSwipeEl.next()}>Next</button>
                    <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                {/* </div> */}
            </div>







            {/* the new design### */}


        </>
    )
}
// ReactDOM.render(<Carousel />, document.getElementById('app'));

export default ScrolledSectioin;