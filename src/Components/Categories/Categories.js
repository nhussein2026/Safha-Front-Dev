import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import Category from "./Category";
import './Categories.css';
import Sidebar from "../SideBar/SideBar";

const Categories = () => {
    const { setBooksNav, setHomeNav, setCategoriesNav, setAboutNav } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setHomeNav(false)
        setCategoriesNav(false)
        setAboutNav(false)
        setBooksNav(true)
        const getCatgories = async () => {
            const Categories = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Categories.json()
            console.log(json)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCatgories()
    }, [])

    return (
        <>
            <div className='container'>
                <div className="row main-content">
                    <h2 className="section-title pb-3 mb-3">Categories</h2>
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