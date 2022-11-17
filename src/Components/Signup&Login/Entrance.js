//this component if for the sigup and login for the navbar
import "./Entrance.css"
import { AuthContext } from "../../contexts/Authcontext";
import { useContext } from "react";


const Entrance = () => {
    const { loggedIn } = useContext(AuthContext)
    return(
        <>
            {loggedIn?<a href="/signout"><button id='signup-bttn' className="button">Signout</button></a> : <a href="/login"><button id='signup-bttn' className="button">Login</button></a>}
        </>
    )
}
export default Entrance