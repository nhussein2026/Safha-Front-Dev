import logo from "../../assets/images/cuted-logo.png"
import ProfileDropdown from "./ProfileDrop/ProfileDropdown";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "../../screens/Profile/ShowProfile/ShowProfile";

const Navbar1 = () => {
    const searchRef = useRef()
    const [search, setSearch] = useState([])
    const searchFun = async (event) => {
        event.preventDefault()
        const booksList = await fetch(`${process.env.REACT_APP_API_URL}/search/?name=${searchRef.current.value}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await booksList.json()
        console.log("json search", json)
        if (json?.success) {
            setSearch(json?.data)
        }
    }
    const { loggedIn, signIn, setHomeNav, homeNav,
        setCategoriesNav, categoriesNav,
        setBooksNav, booksNav,
        setAboutNav, aboutNav } = useContext(AuthContext)
    useEffect(() => {
        if (homeNav) {
            setCategoriesNav(false);
            setBooksNav(false);
            setAboutNav(false);
        } else if (categoriesNav) {
            setHomeNav(false);
            setBooksNav(false);
            setAboutNav(false);
        } else if (booksNav) {
            setCategoriesNav(false);
            setHomeNav(false);
            setAboutNav(false);
        } else if (aboutNav) {
            setCategoriesNav(false);
            setHomeNav(false);
            setBooksNav(false);
        } else {
            // return
            setHomeNav(true)
        }
        // console.log("homeNav",homeNav)
    }, [homeNav, categoriesNav, booksNav, aboutNav])
    return (
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
                                    {homeNav ?
                                        <li className="active">
                                            <Link to='/'>
                                                <a href="#">Home</a>
                                            </Link>
                                        </li> :
                                        <li>
                                            <Link to='/'>
                                                <a href="#">Home</a>
                                            </Link>
                                        </li>
                                    }
                                    {categoriesNav ?
                                        <li className="active">
                                            <Link to='/categories'>
                                                <a href="#">Categories</a>
                                            </Link>
                                        </li> :
                                        <li>
                                            <Link to='/categories'>
                                                <a href="#">Categories</a>
                                            </Link>
                                        </li>
                                    }
                                    {booksNav ?
                                        <li className="active d-none d-xl-block">
                                            <Link to='/books'>
                                                <a href="#">Books</a>
                                            </Link>
                                        </li> :
                                        <li className="d-none d-xl-block">
                                            <Link to='/books'>
                                                <a href="#">Books</a>
                                            </Link>
                                        </li>
                                    }

                                    {loggedIn ?
                                        (aboutNav ?
                                            <li className="active">
                                                <Link to='/mybooks'>
                                                    <a href="#">Mybooks</a>
                                                </Link>
                                            </li>

                                            :
                                            <li>
                                                <Link to='/mybooks'>
                                                    <a href="#">Mybooks</a>
                                                </Link>
                                            </li>
                                        )
                                        :
                                        (aboutNav ?
                                            <li className="active">
                                                <Link to='/about'>
                                                    <a href="#">About</a>
                                                </Link>
                                            </li>
                                            :
                                            <li>
                                                <Link to='/about'>
                                                    <a href="#">About</a>
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div className="header-right pl-0 pl-lg-4">
                            <div
                                className="header-search header-search-inline header-search-category w-lg-max text-right d-none d-sm-flex">
                                <a href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                                <form action=" #" method="get">
                                    <div className="header-search-wrapper">
                                        <input type="search" ref={searchRef} className="form-control font-italic" name="q" id="q"
                                            placeholder="Search" required />
                                        <button className="btn icon-magnifier" title="search" onClick={searchFun} type="submit"></button>
                                    </div>
                                </form>
                            </div>
                            <span className="separator d-none d-lg-inline"></span>
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar1;