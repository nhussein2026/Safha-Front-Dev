import './HeroSection.css'
const HeroSection = () => {

    return (

        <main className="main">
            <div className="category-banner-container">
                <div className="category-banner p-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5" style={{ backgroundImage: 'url()'}}>
                                <h2 className="m-b-2">Safha</h2>
                                <h3 className="ls-n-10 font-weight-normal line-height-1 text-body m-0">Readers Are Leaders</h3>
                            </div>
                            <div className="col-md-3 col-lg-4" id="for-logo">
                            </div>
                            <div className="col-md-4 col-lg-3 text-md-center">
                                <a href="/reviews" className="btn btn-quaternary ml-0">Explore Books Reviews <i className="fas fa-long-arrow-alt-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="demo25.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </div>
            </nav> */}
        </main>
    );
}
export default HeroSection;