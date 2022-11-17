// import Sidebar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import CategoriesSideBar from "../SideBar/CategoriesSideBar";
import FavoriteBooks from "../SideBar/FavoriteBooks";



const SideBarWrapper = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await booksList.json()
            console.log(json)
            if (json?.success) {
                setBooks(json?.data)
            }
        }
        getBooks()
    }, [])
    return (
        <>
            <div>
                <aside className="sidebar-product col-lg-3 mobile-sidebar">
                    <div classname="sidebar-wrapper">
                        <div className="widget widget-info">
                            <h3 className="widget-title m-b-3">AUTHOR</h3>
                            <div className="widget-body bg-gray">
                                <h4 className="font2 text-dark line-height-1 m-b-1">Wendy Walker</h4>
                                <p className="font2 font-weight-normal line-height-1 ls-0 text-uppercase">12
                                    Books</p>
                                <a href="#" className="d-inline-block text-uppercase">View All
                                    Books</a>
                            </div>
                        </div>
                    </div>
                    {/* <Sidebar/> */}

                    <div className="sidebar-wrapper">
                        <div className="widget widget-featured pb-0">
                            <h3 className="widget-title">Books</h3>
                            {
                                books.map((book, i) => {
                                    // console.log(i)
                                    if (i < 2) {
                                        return (<FavoriteBooks book={book} />)
                                    }
                                })
                            }

                        </div>{/* End .widget */}
                    </div>{/* End .sidebar-wrapper */}

                </aside>

            </div >
        </>
    )
}
export default SideBarWrapper;