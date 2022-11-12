import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Authcontext';
import logo from "../../assets/images/logo.png";
import './Login.css';


const Login = () => {
    // const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const usernameRef = useRef();
    const passwordRef = useRef();
    const login = async () => {
        const response = await fetch("http://ferasjobeir.com/api/users/login",
            {
                method: "post",
                body: JSON.stringify({
                    email: usernameRef.current.value,
                    password: passwordRef.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await response.json();
        window.alert(json.messages)
        if (json.success) {
            console.log(json)
            login(json)
            // go to homeBage
            navigate('/')
        }
    }
    const Register = () => {
        navigate('/')
    }
    return (
        <>
            <div className="login">
                {/* <div id="login-container" className="container-"> */}
                {/* <div className="row"> */}
                <div id="login-child" className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4 border border-ligh rounded-3 w-100%">
                    <a href='/'><img id='logo' src={logo} alt="Safha Logo" /></a>
                    <h2 className="mb-3" style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>Welcome to SAFHA</h2>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">UserName</label>
                            <input ref={usernameRef} placeholder="Enter Your username or email" type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} placeholder="Enter Your password" type="password" className="form-control" id="password" />
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>

                            <button aria-label className="red SignupButton active" type="submit"
                             style={{ border: '0px', height: '40px', display: 'inline-block', borderRadius: '20px', WebkitFontSmoothing: 'antialiased', padding: '0px 18px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px',
                             verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#9e561f', color: 'rgb(255, 255, 255)', width: '100%' }}><div className="zI7 iyn Hsu">Log in</div></button>
                        </div>
                        <div className="mb-2 mt-3">
                            <h5><a href="/signup" id="signup-word">Not  registerd?</a><a href="/signup"> Sign Up</a></h5>
                        </div>
                    </form>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default Login;