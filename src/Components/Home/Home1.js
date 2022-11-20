import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories";
import Navbar from "../Navbar/Navbar";
// import Sidebar from "../SideBar/SideBar";
import Suggested from "../SuggestedCategories/Suggested";
// import SingleBook from "../SingleBook/SingleBook";
const Home1 = () => {

    return (
        <>
            <Navbar />
            <HeroSection />

            <HomeCategories />
            {/* <Sidebar/> */}
            <Featured/>
            <Suggested />
            <Footer />
            {/* <SingleBook/> */}
        </>
    )
}
export default Home1;