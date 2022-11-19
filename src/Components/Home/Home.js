import { useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/Authcontext';
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories2";
import Navbar from "../Navbar/Navbar";
import ScrolledSectioin from "../ScrolledSection/ScrolledSection";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
// import Sidebar from "../SideBar/SideBar";
import Suggested from "../SuggestedCategories/Suggested";
// import SingleBook from "../SingleBook/SingleBook";
const Home = () => {
    const { token, setUserInfo, userInfo } = useContext(AuthContext)
    console.log("before getUserInfo token",token);
    useEffect(()=>{
        const getUserInfo = async () => {
            const userInfoFetch = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            const json = await userInfoFetch.json()
            console.log("user info",json)
            if (json?.success) {
                setUserInfo(json?.data)
            }
        }
        getUserInfo()
    },[])
    
    return (
        <>
            {/* <HeroSection /> */}
            <ScrolledSectioin />
            <SecondNavbar />
            <HomeCategories />
            <Featured />
            {/* <Sidebar/> */}
            <Suggested />
            {/* <SingleBook/> */}
        </>
    )
}
export default Home;