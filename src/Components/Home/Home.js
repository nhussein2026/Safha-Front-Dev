import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import Suggested from "../SuggestedCategories/Suggested";
const Home = () => {

    return (
       <>
       <Navbar />
       <HeroSection/>
       <Suggested />
       <Footer />
       </>
    )
}
export default Home;