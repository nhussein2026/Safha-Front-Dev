import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CollectionPage from "./CollectionPage";

const OneFeature = () => {
    return (
        <>
            <div className="col-lg-4 m-b-3">
                <div className="banner banner2" id='banner-place'>
                    <div className="banner-layer">
                        <h3 className="text-uppercase text-white m-b-2">Awarded Books</h3>
                        <p className="font2 m-b-3">12 Books</p>
                        <Link to={`/collection`}>
                            <a href="#" className="btn btn-primary" >
                                    View Collections
                                    <i className="fas fa-long-arrow-alt-right" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 m-b-3">
                <div className="banner" id='banner-palce3'>
                    <div className="banner-layer">
                        <h3 className="text-uppercase text-white m-b-2">Best Seller Books</h3>
                        <p className="font2 m-b-3">21 Books</p>
                        <Link to={`/collection`}>
                            <a href="#" className="btn btn-secondary">
                                View Collections
                                <i className="fas fa-long-arrow-alt-right" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 m-b-5">
                <div className="banner" id='banner-place4'>
                    <div className="banner-layer">
                        <h3 className="text-uppercase text-white m-b-2">Most Reviewed</h3>
                        <p className="font2 m-b-3">38 Books</p>
                        <Link to={`/collection`}>
                            <a href="#" className="btn btn-teritary">
                                View Collections
                                <i className="fas fa-long-arrow-alt-right" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
                 
        </>
    )
}
export default OneFeature;