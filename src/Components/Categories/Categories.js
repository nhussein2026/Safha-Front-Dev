import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import Category from "./Category";
import './Categories.css';

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
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCatgories()
    }, [])

    return (
        <>
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