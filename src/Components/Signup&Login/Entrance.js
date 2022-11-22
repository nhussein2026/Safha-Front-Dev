//this component if for the sigup and login for the navbar
import "./Entrance.css"
import { AuthContext } from "../../contexts/Authcontext";
import { useContext } from "react";
import { Link } from "@mui/material";


const Entrance = () => {
    const { loggedIn, signOut } = useContext(AuthContext)
    return(
        <>
            <div className="img-avatar-entrance">
                <Link to="/profile">
                    <a href="#">
                        <img src={window.localStorage.getItem('avatar')} />
                    </a>
                </Link>
            </div>
            {loggedIn?
                <Link to="/signout">
                    <a href="#">
                        <button
                            onClick={signOut}
                            className="btn btn-primary w-49"
                            id='signup-bttn'>SIGN OUT
                        </button>
                        {/* <button  id='signup-bttn' className="button">Signout</button> */}
                    </a>
                </Link>
                : 
                 <Link to="/login">
                    <a href="#">
                        {/* <button id='signup-bttn' className="button">Login</button> */}
                        <button
                            className="btn btn-primary w-49"
                            id='signup-bttn'>SIGN IN
                        </button>
                    </a>
                </Link>      
            }
        </>
    )
}
export default Entrance