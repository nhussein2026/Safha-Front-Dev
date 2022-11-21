import CategoriesSideBar from "./CategoriesSideBar";
import FavoriteBooks from "./FavoriteBooks";

const Sidebar = ({books}) => {    
    return (
        <>
            <div class="sidebar-overlay"></div>
            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                <div className="sidebar-wrapper">
                    <CategoriesSideBar />
                    <div className="widget widget-featured pb-0">
                        <h3 className="widget-title">Books</h3>
                        {
                            books.map((book, i) => {
                                
                                if(i<2 ){
                                    return (<FavoriteBooks book={book} />)
                                }
                            })
                        }
                                    
                    </div>{/* End .widget */}
                </div>{/* End .sidebar-wrapper */}
            </aside>{/* End .col-lg-3 */}

        </>
    )


}

export default Sidebar;