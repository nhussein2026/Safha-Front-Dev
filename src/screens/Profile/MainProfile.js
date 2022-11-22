import HeroSection from "../../Components/HeroSection/HeroSection"
import CategoriesSideBar from "../../Components/SideBar/CategoriesSideBar"
import ProfileSideBar from "../../Components/SideBar/ProfileSideBar/ProfileSideBar"
import ShowProfile from "./ShowProfile/ShowProfile"
import Profile from "./ShowProfile/ShowProfile"

const MainProfile = () => (
    <>

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
                                            <a class="nav-link active" id="active" aria-current="page" href="#">Show Profile</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-lg-6">
                                        {/* <div className="product-default inner-quickview inner-icon"> */}
                                            <ShowProfile />
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
)
export default MainProfile