import logo from "../../assets/images/cuted-logo.png"
import Entrance from "../Signup&Login/Entrance";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";

const Navbar1 = () => {
	const { loggedIn } = useContext(AuthContext)
    return(
        <>
        <header className="header">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler pl-0" type="button">
                            <i className="fas fa-bars"></i>
                        </button>
                        <a href="/" className="logo">
                            <img src={logo} alt="Safha Logo" width="150" height="50" />
                        </a>
                        <nav className="main-nav">
                            <ul className="menu">
                                <li className="active">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/categories">Categories</a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/books">Books</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right pl-0 pl-lg-4">
                        <div
                            className="header-search header-search-inline header-search-category w-lg-max text-right d-none d-sm-flex">
                            <a href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                            <form action=" #" method="get">
                                <div className="header-search-wrapper">
                                    <input type="search" className="form-control font-italic" name="q" id="q"
                                        placeholder="Searching for any book" required />
                                    <button className="btn icon-magnifier" title="search" type="submit"></button>
                                </div>
                            </form>
                        </div>

                        <span className="separator d-none d-lg-inline"></span>
				          <Entrance />   
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Navbar1;