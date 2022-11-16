
const CategoriesSideBar = () => {

    return (
        <>
            <div className="widget">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                </h3>
                <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                        <ul className="cat-list">
                            <li><a href="#">Arts &amp; Photography<span className="products-count">(2)</span></a></li>
                            <li><a href="#">Business &amp; Investing<span className="products-count">(3)</span></a></li>
                            <li><a href="#">Literature &amp; Fiction<span className="products-count">(4)</span></a></li>
                            <li><a href="#">Mystery Suspense<span className="products-count">(4)</span></a></li>
                            <li><a href="#">Scifi Fantasy<span className="products-count">(3)</span></a>
                            </li>
                        </ul>
                    </div>{/* End .widget-body */}
                </div>{/* End .collapse */}
            </div>{/* End .widget */}

        </>
    )


}

export default CategoriesSideBar;