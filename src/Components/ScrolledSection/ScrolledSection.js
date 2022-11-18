import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import "./ScrolledSection.css";

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
                    <div> <section className="scrollport">
                        <div className="categories-cards">
                            <h1>hi this is me the big</h1>
                            <div className="big-dev">
                                <h1>big one</h1>
                            </div>
                        </div>
                    </section></div>
                    <div> <section className="scrollport">
                        <div className="categories-cards">
                            <h1>hi this is me the big</h1>
                            <div className="big-dev">
                                <h1>big one</h1>
                            </div>
                        </div>
                    </section></div>
                    <div> <section className="scrollport">
                        <div className="categories-cards">
                            <h1>hi this is me the big</h1>
                            <div className="big-dev">
                                <h1>big one</h1>
                            </div>
                        </div>
                    </section></div>
                </ReactSwipe>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            </div>


            {/* <section className="scrollport">
            <div className="categories-cards">
                <h1>hi this is me the big</h1>
                <div className="big-dev">
                 <h1>big one</h1>
               </div>
            </div>
        </section> */}

        </>
    )
}
// ReactDOM.render(<Carousel />, document.getElementById('app'));

export default ScrolledSectioin;