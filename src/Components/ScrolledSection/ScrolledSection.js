import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import "./ScrolledSection.css";
import categoryimg1 from "../../assets/images/categories/cover/scifi-fantasy.jpg"
import literatureCover from "../../assets/images/categories/cover/literature-fiction.jpg";
import artCover from "../../assets/images/categories/cover/arts-photography.jpg";
import noval from "../../assets/images/categories/cover/business-investing.jpg";
import polticsCover from "../../assets/images/categories/cover/mystery-suspense.jpg"
import { useState, useEffect } from 'react';


const ScrolledSectioin = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            const categoriesList = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await categoriesList.json()
            console.log(json)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCategories()
    }, [])


console.log("this is the scroll cat", categories.name)

    // this is for the scroll section
    let reactSwipeEl;
    return (
        <>
            {/* begining of the scroll part */}



            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {/* 1st category */}
                    <div>
                        <div class="d-flex justify-content-between">
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={artCover} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">{categories.name}</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={literatureCover} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">Literature &amp; Fiction</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={categoryimg1} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">Education &amp; Science</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*2nd category  */}
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={noval} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">Novals</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={polticsCover} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">Politics</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main'>
                                <div className="intro-section">
                                    <div className="home-slider ">
                                        <div className="home-slide">
                                            <a href="/">
                                                <img src={categoryimg1} alt="slider" id='category-img' />
                                                <div className="home-slide-content text-center">
                                                    <h3 className="ls-n-10 text-white mb-0">Relegion</h3>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactSwipe>
                <div className='d-flex justify-content-between'>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                </div>
            </div>







            {/* the new design### */}


        </>
    )
}
// ReactDOM.render(<Carousel />, document.getElementById('app'));

export default ScrolledSectioin;