import AddReview from "../AddReviews/AddReviews"
import SideBarWrapper from "../SideBarWrapper/SideBarWrapper"
import SingleBook from "./SingleBook"
import './SingleBook.css'



const SingleBookIndex = () => {
    return(
        <>
        <div className="d-flex justify-content-between" style={{backgroundColor:'#fff'}}>
            <SingleBook/>
            <SideBarWrapper/>
        </div>
        <AddReview/>
        
        </>
    )
}
export default SingleBookIndex