//this component if for the sigup and login for the navbar
import "./Entrance.css"
import { AuthContext } from "../../../contexts/Authcontext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './ProfileDropdown.module.css'
import { BsFillPersonFill } from 'react-icons/bs'

const ProfileDropdown = () => {
    const { loggedIn, signOut } = useContext(AuthContext)
    const  [avatar, setAvatar] = useState('');

    useEffect(()=> {
        const avatarFromLocalStorage = window.localStorage.getItem('avatar');
        if ( avatarFromLocalStorage) {
            setAvatar(avatarFromLocalStorage);
        }
    }, []);

    const hasAvatar = avatar && avatar !== '';

    return (
        <>

            {loggedIn ?
                (
                    <>
                        {/* <div className="img-avatar-entrance">
                            <Link to="/profile">
                                <a href="#">
                                    <img src={window.localStorage.getItem('avatar')} />
                                </a>
                            </Link>
                        </div> */}
                        {/* the new code of profile drop */}
                        {/* drop try */}
                        <div className={styles.dropdown}>
                            <div className={styles.dropbtn}>
                                {
                                   hasAvatar ?
                                        (
                                            <div className={styles.drop}>
                                                <img src={avatar} alt=" " id={styles.profileImg}/>
                                            </div>
                                        ) :
                                        <div className={styles.profileimg}>
                                            <h1 className={styles.dropIcon}>
                                                <BsFillPersonFill />
                                            </h1>
                                        </div>
                                }
                            </div>
                            <div className={styles.dropdownContent}>
                                <Link to="/profile">Profile</Link>
                                <Link to="/settings">Settings</Link>
                                <Link to="/logout" onClick={signOut}>Logout</Link>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <Link to="/login">
                        <a href="#">
                            {/* <button id='signup-bttn' className="button">Login</button> */}
                            <button
                                className="btn btn-primary w-49"
                                id='signup-bttn'>SIGN IN
                            </button>
                        </a>
                    </Link>
                )
            }
        </>
    )
}
export default ProfileDropdown;