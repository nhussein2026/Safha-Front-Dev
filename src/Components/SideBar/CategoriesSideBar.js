import { useEffect, useState } from "react"

const CategoriesSideBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            const categoriesList = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await categoriesList.json()
            console.log(json)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCategories()
    }, [])
    return (
        <>
            <div className="widget">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                </h3>
                <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                        <ul className="cat-list">
                            {
                                categories.map((category, i) => {
                                    console.log("category?.name",category?.name)
                                    return(
                                        <li><a href="#">{category?.name}<span className="products-count">({category?.Books?.length})</span></a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>{/* End .widget-body */}
                </div>{/* End .collapse */}
            </div>{/* End .widget */}

        </>
    )


}

export default CategoriesSideBar;