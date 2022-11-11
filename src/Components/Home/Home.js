import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Suggested from "../SuggestedCategories/Suggested";
// import SingleBook from "../SingleBook/SingleBook";
const Home = () => {

    return (
       <>
       <Navbar />
       <HeroSection/>
       <SecondNavbar/>
       <Suggested />
       <Footer />
       {/* <SingleBook/> */}
       </>
    )
}
export default Home;