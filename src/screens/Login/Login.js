import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Authcontext';
import logo from "../../assets/images/logo.png";
import './Login.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const accountRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false)
    const login = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`,
            {
                method: "POST",
                body: JSON.stringify({
                    account: accountRef.current.value,
                    password: passwordRef.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();
        console.log(json)
        window.alert(json.messages)
        if (json.success) {
            console.log(json)
            // Login(json)
            signIn(json)
            console.log("json.token", json.token)
            // go to homeBage
            navigate('/')
        }
    }
    return (
        <>
            <div className="nav-z"><Navbar /></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div id='register' className="my-5 p-5">
                            <div id='logo' className='mb-3'>
                                <img src={logo} alt='' />
                            </div>
                            <h2 id='title' className='mb-1'>Welcom to Safha</h2>
                            <div className='form-field mb-2'>
                                <label htmlFor='email' className='mb-1'>Email Or Username</label>
                                <input type='email' ref={accountRef} id="email" className='form-control' />
                            </div>
                            <div className='form-field mb-1'>
                                <label htmlFor='password' className='mb-1'>Password</label>
                                <input type='password' ref={passwordRef} id="password" className='form-control' />
                            </div>
                            <div className='row mt-1'>
                                <div className='col-6' id='register-btnn'>
                                    <button
                                        className='btn w-100'
                                        id='signup-bttn'
                                        onClick={login}>
                                        {loading ? 'Please Wait' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h5><a href="/signup" id="signup-word">Not registerd, go to</a><a href="/signup"> Sign Up</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;