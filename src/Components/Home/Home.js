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

    return (
        <>
            <HeroSection />
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