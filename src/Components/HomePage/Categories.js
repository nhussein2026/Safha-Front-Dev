import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories2";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
// import Sidebar from "../SideBar/SideBar";
import Suggested from "../SuggestedCategories/Suggested";
// import SingleBook from "../SingleBook/SingleBook";
const Categories = () => {

    return (
        <>
            <Navbar />
            <HeroSection />

            <SecondNavbar />
            <HomeCategories />
            <Suggested />
            <Footer />
        </>
    )
}
export default Categories;