import { useState } from "react"
import HeroSection from "../../HeroSection/HeroSection"
import CategoriesSideBar from "../../SideBar/CategoriesSideBar"
import AddBook from "./AddBook/AddBook"
import EditBook from "./EditBook/EditBook"

const MainProfile = () => {
    const [show, setShow] = useState("Add")
    const [hover, setHover] = useState("Add")
    const setActive = (type) =>{
        console.log("type=",type)
        if(type==1){
            setShow('Add')
            setHover('Add')
        }else if (type==2){
            setShow('Edit')
            setHover('Edit')
        }
    }
    return(
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
                                    <ul className="nav nav-tabs" id="ulStyle">
                                        {
                                            (hover=='Add')&&
                                            <>
                                                <li className="nav-item" onClick={()=>setActive(1)}>
                                                    <a className="nav-link" id="active" aria-current="page" href="#">Add Book</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(2)}>
                                                    <a className="nav-link" aria-current="page" href="#">Edit Book</a>
                                                </li>
                                            </>   
                                        }
                                        {
                                            (hover=='Edit')&&
                                            <>
                                                <li className="nav-item" onClick={()=>setActive(1)}>
                                                    <a className="nav-link" aria-current="page" href="#">Add Book</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(2)}>
                                                    <a className="nav-link" id="active" aria-current="page" href="#">Edit Book</a>
                                                </li>
                                            </>   
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-lg-6">
                                        {
                                            (show=='Add')&&
                                            <AddBook />
                                        }
                                        {
                                            (show=='Edit')&&
                                            <EditBook />
                                        }
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
}
export default MainProfile