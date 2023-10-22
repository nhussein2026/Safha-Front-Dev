//this component if for the sigup and login for the navbar
import "./Entrance.css"
import { AuthContext } from "../../../contexts/Authcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from './ProfileDropdown.module.css'

const ProfileDropdown = () => {
    const { loggedIn, signOut } = useContext(AuthContext)
    return (
        <>

            {loggedIn ?
                <>
                    <div className="img-avatar-entrance">
                        <Link to="/profile">
                            <a href="#">
                                <img src={window.localStorage.getItem('avatar')} />
                            </a>
                        </Link>
                    </div>
                    {/* the new code of profile drop */}
                    {/* drop try */}
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>me</button>
                        <div className={styles.dropdownContent}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/settings">Settings</Link>
                            <Link to="/logout" onClick={signOut}>Logout</Link>
                        </div>
                    </div>


                </>
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
export default ProfileDropdown;