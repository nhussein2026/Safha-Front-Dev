import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import HeroSection from "../HeroSection/HeroSection";
import CategoriesSideBar from "../SideBar/CategoriesSideBar";
import Categories from "./Categories";
import './CategoriesDesigne.css'
const CategoriesDesigne = () => {
    const { setBooksNav, setHomeNav, setCategoriesNav, setAboutNav } = useContext(AuthContext)

    useEffect(() => {
        setHomeNav(false)
        setCategoriesNav(true)
        setAboutNav(false)
        setBooksNav(false)
    },[])

    return (
        <>
            {/* <h2 className="section-title pb-3 mb-3 col-12">Categories</h2>

            <div className="d-fex"> */}
                {/* <div className="side-cat"> */}
                    {/* <CategoriesSideBar /> */}
                {/* </div>
                <div className="categoryPlace"> */}
                {/* <Categories /> */}
                {/* </div> */}
            {/* </div> */}

            <div className="page-wrapper">
                <HeroSection />
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <div class="sidebar-overlay"></div>
                                <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                                    <div className="sidebar-wrapper">
                                        <CategoriesSideBar />
                                    </div>
                                </aside>
                                <div className="col-lg-9">
                                    <div className="col-6 col-sm-4 col-lg-6">
                                        <ul class="nav nav-tabs" id="ulStyle">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="active" aria-current="page" href="#">Categories</a>
                                            </li> 
                                            <li class="nav-item">
                                                <a class="nav-link active" id="active" aria-current="page" href="addCategory">Add Categories</a>
                                            </li> 
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <Categories />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>

    );
}
export default CategoriesDesigne;