import './Signup.css';
import logo from "../../assets/images/logo-with-safha.png"
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Signup = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()      
    const passwordConfirmationRef = useRef()
    const register = async () => {
        console.log(usernameRef.current.value)
        const response = await fetch('http://ferasjobeir.com/api/users/register', {
            method: 'post',
            body: JSON.stringify({
                name: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: passwordConfirmationRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        window.alert(json.messages)
        if (json.success){
            navigate("/login")
        }
        
    }
    const login = () => {
        navigate('/login')
    }
    return (
        <>
        <Navbar />
        <div id='rang' className="container">
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4 border border-ligh rounded-3">
                        <a href='/'><img id='logo' src={logo} alt="Safha Logo" /></a>
                    <h2 className="mb-3" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>Create Account</h2>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">UserName</label>
                            <input ref={usernameRef} placeholder="Enter Your username" type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input ref={emailRef} placeholder="Enter Your email" type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} placeholder="Enter Your password" type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Password Confirmation</label>
                            <input ref={passwordConfirmationRef} placeholder="Enter Your Password agian" type="password" className="form-control" id="password" />
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>

                        <button onClick={Signup}
                            type="button"
                            className="btn  mb-3" 
                            id='signup-btn'
                            >Sign up
                        </button>
                        <button onClick={Signup}
                            type="button"
                            className="btn  mb-3" 
                            id='signup-btn'
                            >Go to Lognin
                        </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <Footer />
        </>
    )
}
export default Signup;