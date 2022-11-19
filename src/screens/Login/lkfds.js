// import { useRef, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../contexts/Authcontext';
// import logo from "../../assets/images/logo.png";
// import './Login.css';

// const Login2 = () => {
//     const { signIn } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const accountRef = useRef();
//     const passwordRef = useRef();
//     const [loading, setLoading] = useState(false)
//     // console.log("accountRef.current.value",accountRef.current.value);
//     const login = async () => {
//         setLoading(true)
//         console.log("inside login");
//         const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`,
//             {
//                 method: "POST",
//                 body: JSON.stringify({
//                     account: accountRef.current.value,
//                     password: passwordRef.current.value,
//                 }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         const json = await response.json();
//         console.log(json)
//         window.alert(json.messages)
//         if (json.success) {
//             console.log(json)
//             // Login(json)
//             signIn(json)
//             console.log("json.token", json.token)
//             // go to homeBage
//             navigate('/')
//         }
//     }
    
//     return (
//         <>
//             {/* <div className="nav-z"><Navbar /></div> */}
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
//                         <div id='register' className="my-5 p-5">
//                             <div id='logo' className='mb-3'>
//                                 <img src={logo} alt='' />
//                             </div>
//                             <h2 id='title' className='mb-1'>Welcom to Safha</h2>
//                             <form>
//                                 <div className="mb-3">
//                                     <label htmlFor='email' className="form-label">Email Or Username</label>
//                                     <input type="email" ref={accountRef} id="email" className="form-control" placeholder="name@example.com" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor='password' className="form-label">Password</label>
//                                     <input type="password" ref={passwordRef} id="password" className="form-control" placeholder="*******" />
//                                 </div>
//                                 <button
//                                         type="submit" 
//                                         className="btn btn-primary w-49"
//                                         id='signup-bttn'
//                                         onClick={login}>
//                                         {loading ? 'Please Wait' : 'Sign In'}</button>
//                             </form>
//                             <div className="mt-2">
//                                 <h5><a href="/signup" id="signup-word">Not registerd, go to</a><a href="/signup" id="signUpBtn"> Sign Up</a></h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Login2;