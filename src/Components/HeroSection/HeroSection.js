const HeroSection = () => {

    return (

        <main className="main">
            <div className="category-banner-container">
                <div className="category-banner p-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <h5 className="line-height-1 text-uppercase mb-0">Book Club</h5>
                                <h2 className="m-b-2">Summer Reading</h2>
                                <h3 className="ls-n-10 font-weight-normal line-height-1 text-body m-0">The best books for
                                    your
                                    beach bag</h3>
                            </div>
                            <div className="col-md-3 col-lg-4" style={{ backgroundImage: 'url(assets/images/demoes/demo25/banners/shop-banner.png)' }}>
                            </div>
                            <div className="col-md-4 col-lg-3 text-md-center">
                                <a href="#" className="btn btn-quaternary ml-0">Explore Books <i className="fas fa-long-arrow-alt-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="demo25.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </div>
            </nav>
        </main>
    );
}
export default HeroSection;