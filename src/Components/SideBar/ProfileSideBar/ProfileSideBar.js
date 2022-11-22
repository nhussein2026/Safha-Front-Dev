import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProfileSideBar = () => {
    
    return (
        <>
            <div className="widget">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                </h3>
                <div className="collapse show" id="widget-body-1">
                    <div className="widget-body">
                        <ul className="cat-list">
                            <Link to="/profile">
                                <li>
                                    Show Profile
                                </li> 
                            </Link>
                        </ul>
                    </div>{/* End .widget-body */}
                </div>{/* End .collapse */}
            </div>{/* End .widget */}

        </>
    )


}

export default ProfileSideBar;