import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategoriesGhadir";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
// import Sidebar from "../SideBar/SideBar";
import Suggested from "../SuggestedCategories/Suggested";
// import SingleBook from "../SingleBook/SingleBook";
const Home1 = () => {

    return (
        <>
            <Navbar />
            <HeroSection />

            <SecondNavbar />
            <HomeCategories />
            {/* <Sidebar/> */}
            <Suggested />
            <Footer />
            {/* <SingleBook/> */}
        </>
    )
}
export default Home1;