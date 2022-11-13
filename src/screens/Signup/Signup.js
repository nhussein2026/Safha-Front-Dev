import './Signup.css';
import { useRef, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import logo from "../../assets/images/logo with safha.png";

const Signup = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const [loading, setLoading] = useState(false)
    const Signup = async () => {
        setLoading(true)
        const response = await fetch(`http://192.168.122.5:3000/api/v1/users/signup`, {
            method: 'POST',
            body: JSON.stringify({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                passwordConfirmation: passwordConfirmationRef.current.value,
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
    // const login = () => {
    //     navigate('/login')
    // }
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div id='register' className= "my-2 p-5">
                        <div id='logo' className='mb-3'>
                            <img src={logo} alt='' />
                        </div>
                        <h2 id='title' className='mb-2'>Welcom to Safha</h2>
                        <div className='form-field mb-2'>
                            <label htmlFor='name' className='mb-1'>Name</label>
                            <input type='text' ref={usernameRef} id="name" className='form-control' />
                        </div>
                        <div className='form-field mb-2'>
                            <label htmlFor='email' className='mb-1'>Email Address</label>
                            <input type='email' ref={emailRef} id="email" className='form-control' />
                        </div>
                        <div className='form-field mb-2'>
                            <label htmlFor='password' className='mb-1'>Password</label>
                            <input type='password' ref={passwordRef} id="password" className='form-control' />
                        </div>
                        <div className='form-field mb-2'>
                            <label htmlFor='password' className='mb-1'>Password Confirmation</label>
                            <input type='password' ref={passwordConfirmationRef} id="password" className='form-control' />
                        </div>
                        <div className='row mt-2'>
                            <div className='col-6' id='register-btnn'>
                                <button
                                    className='btn w-100'
                                    id='signup-bttn'
                                    onClick={Signup}>
                                        {loading ? 'Please Wait' : 'Sign UP'}
                                    </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h5><a href="/signup" id="signup-word">Already have an account, go to</a><a href="/login"> Login</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Signup;