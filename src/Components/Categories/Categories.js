import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import Category from "./Category";
import './Categories.css';
import CategoriesSideBar from "../SideBar/CategoriesSideBar";

const Categories = () => {
    const { setBooksNav, setHomeNav, setCategoriesNav, setAboutNav } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setHomeNav(false)
        setCategoriesNav(true)
        setAboutNav(false)
        setBooksNav(false)
        const getCatgories = async () => {
            const Categories = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Categories.json()
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCatgories()
    }, [])

    return (
        <>
            {/* <div className="col-6 col-sm-4 col-lg-3">
                <div className="product-default inner-quickview inner-icon"> */}
            {/* <div className="widget widget-featured pb-0">
                <h3 className="widget-title">Books</h3> */}
                    <div className='container' id="CategoriesPlace">
                        <div className="row main-content"> 
                            {
                                categories.map((category, i) => {
                                    return <Category category={category} key={i} />
                                })
                            }
                </div>
            </div>
                
        </>
    )
}
export default Categories;