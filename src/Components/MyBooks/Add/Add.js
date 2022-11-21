import HeroSection from "../../HeroSection/HeroSection"
import CategoriesSideBar from "../../SideBar/CategoriesSideBar"
import AddBookTry from "../AddBook/AddBooktry"

const Add = () => {

    return (
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
                                                <a class="nav-link active" id="active" aria-current="page" href="#">Add Book</a>
                                            </li> 
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <AddBookTry />
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
export default Add