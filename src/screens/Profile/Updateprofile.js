
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo with safha.png";


const Updateprofile = () => {
    const navigate = useNavigate()
    const backgroundImgRef = useRef()
    const avatarImgRef = useRef();
    const descRef = useRef();
    const nameRef = useRef()
    const usernameRef = useRef()
    const [loading, setLoading] = useState(false)
    const updateProfile = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/userInfos/edit/`, {
            method: 'Get',
            body: JSON.stringify({
                username: usernameRef.current.value,
                
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("json", response.json)
        const json = await response.json()
        window.alert(json.messages)
        if (json.success) {
            navigate('/login')
        }

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div id='register' className="my-2 p-5">
                            <h2 id='title' className='mb-2'>Updating My Profile Data</h2>
                            <div class="mb-3">
                                <label for="form-File" class="form-label">Insert Your Background Image</label>
                                <input href={backgroundImgRef} class="form-control" type="file" id="form-File" />
                            </div>
                            <div class="mb-3">
                                <label for="form-File" class="form-label">Insert Your Avatar</label>
                                <div className="hide-file"></div>
                                <input href={avatarImgRef} class="form-control" type="file" id="form-File" />
                            </div>


                            <div className='form-field mb-2'>
                                <label htmlFor='name' className='mb-1'>Name</label>
                                <input type='text' ref={usernameRef} id="name" className='form-control' />
                            </div>
                            <div className='form-field mb-2'>
                                <label htmlFor='name' className='mb-1'>des</label>
                                <input type='text' ref={usernameRef} id="name" className='form-control' />
                            </div>
                            <div className='form-field mb-2'>
                                <label htmlFor='name' className='mb-1'>Username</label>
                                <input type='text' ref={usernameRef} id="name" className='form-control' />
                            </div>
                            {/* <div className='row mt-2'> */}
                            {/* <div className='col-6' id='register-btnn'> */}
                            <button
                                className='btn btn-primary w-49'
                                id='signup-bttn'
                                onClick={updateProfile}>
                                {loading ? 'Please Wait' : 'Sign UP'}
                            </button>
                            {/* </div> */}
                            {/* </div> */}
                            <div className="mt-2">
                                <h5><a href="/signup" id="signup-word">Already have an account, go to</a><a href="/login" id="signUpBtn"> Login</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Updateprofile;