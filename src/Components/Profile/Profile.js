import './Profile.css'
import backgroundImage from "../../assets/images/profile/56eaa2e41500002a000b2512.jpeg"




const Profile = () => {

    return (
        <>
            {/* <a href="login.html">
            <div className="header-user">
                <i className="icon-user-2"></i>
                <div className="header-userinfo">
                    <span className="d-inline-block font2 line-height-1">Hello!</span>
                    <h4 className="mb-0">My Account</h4>
                </div>
            </div>
        </a> */}

            <div className='container-fluid' id='grand-parent'>
                <div className='row' id='rowDiv' >
                    
                    <div className='col-8' id='background-parent'>
                            <img src={backgroundImage} id="backgroundImage" alt="Background Image" />
                    </div>
                    <div className='col-6 d-flex justify-content-center' id='child-img'>
                            <img src={backgroundImage} id="personalImg" alt="Background Image" />
                    </div>
                    <div className='col-5'>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Profile