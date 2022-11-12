import './Signup.css';
import logo from "../../assets/images/logo-with-safha.png"
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import logoo from "../../assets/images/logo.png";
const Signup = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const Signup = async () => {
        const response = await fetch('http://localhost:3000/api/v1/users/signup', {
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
        console.log(json)
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
            {/* <Navbar /> */}
            <div className="login">
                {/* <div id="login-container" className="container-"> */}
                {/* <div className="row"> */}
                <div id="login-child" className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4 border border-ligh rounded-3 w-100%">

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}><a href='/'><img id='logo' src={logoo} alt="Safha Logo" /></a> </div>
                    <h2 className="mb-3" style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>Welcome to SAFHA</h2>
                    <form >
                        <div className="mb-2 col-md-11" style={{
                            display: "flex",
                            justifyContent: "center",
                        }} >
                            <label htmlFor="name" className="form-label">UserName</label>
                            <input ref={usernameRef} placeholder="Enter Your username " type="name" className="form-control" id="name" />
                        </div>
                        <div className="mb-2 col-md-11" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <label htmlFor="name" className="form-label">Email</label>
                            <input ref={emailRef} placeholder="Enter Your Email" type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3 col-md-11" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} placeholder="Enter Your password" type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3 col-md-11" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <label htmlFor="password" className="form-label">Password Confirmation</label>
                            <input ref={passwordConfirmationRef} placeholder="Enter Your password Confirmation" type="password" className="form-control" id="password" />
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>

                            <button  onClick={Signup}
                            aria-label className="red SignupButton active col-md-8" type="submit"
                                style={{
                                    border: '0px', height: '40px', display: 'inline-block', borderRadius: '20px', WebkitFontSmoothing: 'antialiased', padding: '0px 18px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px',
                                    verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#9e561f', color: 'rgb(255, 255, 255)', width: '100%'
                                }}><div className="zI7 iyn Hsu">Log in</div></button>
                        </div>
                        <div className="mb-2 mt-3">
                            <h5><a href="/signup" id="signup-word">Not  registerd?</a><a href="/signup"> Sign Up</a></h5>
                        </div>
                    </form>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Signup;