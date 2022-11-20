import CategoriesSideBar from "../SideBar/CategoriesSideBar";
import Categories from "./Categories";
import './CategoriesDesigne.css'
const CategoriesDesigne = () => {


    return (
        <>
            <h2 className="section-title pb-3 mb-3 col-12">Categories</h2>

            <div className="d-fex">
                {/* <div className="side-cat"> */}
                    <CategoriesSideBar />
                {/* </div>
                <div className="categoryPlace"> */}
                <Categories />
                {/* </div> */}
            </div>

        </>

    );
}
export default CategoriesDesigne;