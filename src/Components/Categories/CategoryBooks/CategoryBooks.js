import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleBookElement from "../../Books/SingleBookElement/SingleBookElement"
import HeroSection from "../../HeroSection/HeroSection"
import Sidebar from "../../SideBar/SideBar"

const CategoryBooks = () => {
    const { id } = useParams()
    console.log("id",id)
    const [category, setCategory] = useState([])
    const [books, setBooks] = useState([])
    useEffect(() => {
        console.log("inseide useEffect");
        const getCategory = async () => {
            const getOneCategory = await fetch(`${process.env.REACT_APP_API_URL}/categories/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await getOneCategory.json()
            // console.log("json,json",json?.data?.Book)
            if (json?.success) {
                setCategory(json?.data)
                setBooks(json?.data?.Books)
            }
        }
        getCategory()
    }, [])
    // console.log("category",category)
    return(
        <>
            <div className="page-wrapper">
                <HeroSection />
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <Sidebar books={books} />
                                <div class="sidebar-overlay"></div>
                                    <div className="col-lg-9">
                                        <div className="col-6 col-sm-4 col-lg-6">
                                            {/* <h3 className="widget-title">Favorite Books</h3> */}
                                            <ul class="nav nav-tabs" id="ulStyle">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="active" aria-current="page" href="#">
                                                        {category?.name}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            {
                                                books.map((book, i) => {
                                                    return <SingleBookElement book={book} key={i} customize="MyFavorites"/>
                                                })
                                            }
                                        </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default CategoryBooks