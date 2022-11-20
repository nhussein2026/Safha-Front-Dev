import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import Category from "./Category";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'

import politicsImg from "../../assets/images/categories/cover/arts-photography.jpg";
import religionImg from "../../assets/images/categories/cover/business-investing.jpg";
import scienceImg from "../../assets/images/categories/cover/mystery-suspense.jpg";
import NonFictionImg from "../../assets/images/categories/cover/scifi-fantasy.jpg"

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
    // console.log("books",books)
    const images = [
        {
            politicsImg: "../../assets/images/categories/cover/arts-photography.jpg"
        },
        {
            NovalImage: "../../assets/images/categories/cover/literature-fiction.jpg"
        },
        {
            NonFictionImg: "../../assets/images/categories/cover/scifi-fantasy.jpg"
        },
        {
            religionImg: "../../assets/images/categories/cover/business-investing.jpg"
        }
    ]
    const image = images[Math.floor(Math.random() * images.length)]
    return (
        <>
            <div className="page-wrapper">
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <div className="col-lg-9">
                                    <div className="row">
                                        {
                                            categories.map((category, i) => {
                                                return <Category category={category} key={i} image={politicsImg} />
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
export default Categories;