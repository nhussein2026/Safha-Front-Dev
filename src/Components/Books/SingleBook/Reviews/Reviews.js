const Reviews = ({book}) => {

    return (
        <>
        <div className="product-single-tabs font2">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="product-tab-reviews" 
                        data-toggle="tab" href="#" 
                        role="tab" aria-controls="product-reviews-content" 
                        aria-selected="false">
                        Reviews</a>
                </li>
            </ul>
            
            </div>
        </>
    );
}

export default Reviews;