import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ScrolledSection.css";
import categoryImg from "../../assets/images/booksImages/Atomic-Habits_.jpg"
const ScrolledSectioin = () => {

    return(
        <>
        <Navbar />
        
        <section className="scrollport">
            <div className="categories-cards">
                <img src={categoryImg} />
                <div className="big-dev">
                 <h1>big one</h1>
               </div>
                {/* <div className="small-dev"><h2>Small one</h2></div> */}
            </div>
       
        
      </section>

        </>
    )
}
export default ScrolledSectioin;