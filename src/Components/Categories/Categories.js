import Navbar from "../Navbar/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Authcontext";

const Categories = () => {

    const { setHomeNav, setAboutNav, setCategoriesNav, setBooksNav } = useContext(AuthContext)
    useEffect(()=>{
        setCategoriesNav(true);
        setHomeNav(false);
        setBooksNav(false);
        setAboutNav(false);
    },[])
    return(
        <>
        {/* <Navbar /> */}
        </>
    )
}
export default Categories;