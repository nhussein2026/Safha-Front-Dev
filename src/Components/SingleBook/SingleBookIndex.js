import SideBarWrapper from "../SideBarWrapper/SideBarWrapper"
import SingleBook from "./SingleBook"



const SingleBookIndex = () => {
    return(
        <>
        <div className="d-flex justify-content-between" style={{backgroundColor:'#fff'}}>
            <SingleBook/>
            <SideBarWrapper/>
        </div>
        
        </>
    )
}
export default SingleBookIndex