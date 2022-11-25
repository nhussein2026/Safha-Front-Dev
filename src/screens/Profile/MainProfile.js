import { useContext, useState } from "react"
import HeroSection from "../../Components/HeroSection/HeroSection"
import CategoriesSideBar from "../../Components/SideBar/CategoriesSideBar"
import ProfileSideBar from "../../Components/SideBar/ProfileSideBar/ProfileSideBar"
import AddProfile from "./AddProfile/AddProfile"
import EditProfile from "./EditProfile/EditProfile"
import ShowProfile from "./ShowProfile/ShowProfile"
import Profile from "./ShowProfile/ShowProfile"

const MainProfile = () => {
    // const { profile } = useContext(AuthContext)

    const [show, setShow] = useState("Show")
    const [hover, setHover] = useState("Show")
    const setActive = (type) =>{
        console.log("type=",type)
        if(type==1){
            setShow('Add')
            setHover('Add')
        }else if (type==2){
            setShow('Edit')
            setHover('Edit')
        }else if(type==3){
            setShow('Show')
            setHover('Show')
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
                                    <ul class="nav nav-tabs" id="ulStyle">
                                        {
                                            (hover=='Show')&&
                                            <>
                                                <li className="nav-item" onClick={()=>setActive(1)}>
                                                    <a className="nav-link" aria-current="page" href="#">Add Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(2)}>
                                                    <a className="nav-link" aria-current="page" href="#">Edit Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(3)}>
                                                    <a className="nav-link" id="active" aria-current="page" href="#">Show Profile</a>
                                                </li>
                                            </>   
                                        }
                                        {
                                            (hover=='Edit')&&
                                            <>
                                                <li className="nav-item" onClick={()=>setActive(1)}>
                                                    <a className="nav-link" aria-current="page" href="#">Add Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(2)}>
                                                    <a className="nav-link" id="active" aria-current="page" href="#">Edit Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(3)}>
                                                    <a className="nav-link" aria-current="page" href="#">Show Profile</a>
                                                </li>
                                            </>   
                                        }
                                        {
                                            (hover=='Add')&&
                                            <>
                                                <li className="nav-item" onClick={()=>setActive(1)}>
                                                    <a className="nav-link" id="active" aria-current="page" href="#">Add Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(2)}>
                                                    <a className="nav-link" aria-current="page" href="#">Edit Profile</a>
                                                </li>
                                                <li className="nav-item" onClick={()=>setActive(3)}>
                                                    <a className="nav-link" aria-current="page" href="#">Show Profile</a>
                                                </li>
                                            </>   
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-lg-6">
                                        {

                                            (show=='Add')&&
                                            <AddProfile />
                                        }
                                        {
                                            (show=='Edit')&&
                                            <EditProfile />
                                        }
                                        {
                                            (show=='Show')&&
                                            <ShowProfile />
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