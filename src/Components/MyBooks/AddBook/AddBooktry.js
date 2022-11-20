import { Box, Card, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputLabel, NativeSelect } from "@mui/material"
import { Button } from "bootstrap"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/Authcontext"
import './AddBook.css';
import logo from "../../../assets/images/logo with safha.png";



const AddBook = () => {
    const { token } = useContext(AuthContext)
    const [publish, setPublish] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const AddBook = async (event) => {
        let BookData = new FormData(event.target)
        event.preventDefault()
        console.log("BookData", BookData)

        const added = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: BookData
        })
        const json = await added.json()
        // console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/books')
        }
    }
    const [categories, setCategories] = useState()
    const [publishers, setPublishers] = useState()
    useEffect(() => {
        async function getCategories() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`);
            const categoriesData = await data.json()
            setCategories(categoriesData.data)
        }
        // console.log("categoriesData",categories)
        getCategories();

        async function getPublishers() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/publishers/all`);
            const publishersData = await data.json()
            // console.log("publishersData",publishersData)
            setPublishers(publishersData.data)
        }
        getPublishers();
    }, []);
    return (
        <>
        {/* <div>
            <div class='wrapper'>
                <div class='bg-image'>
                    <img id='personal' src={photo2} alt='' />
                </div>
                <div class='registration-form'>
                    <div id='form-div' className='w-100'>
                        <div className=' mb-4'>
                            <img id='user' src={user} alt='' />
                        </div>
                        <div className=' mb-4'>
                            <img id='logo2' src={logo2} alt='' />
                        </div>
                        <h1 className='mb-2'>My Profile</h1>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='name' className='mb-2'>Name</label>
                            <input placeholder='Type Yor Name' type='text' id="name" value={currentUser?.userName} onChange={(e) => setCurrentUser({ ...currentUser, userName: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='email' className='mb-2'>Email Address</label>
                            <input placeholder='Email Address' type='email' id="email" value={currentUser?.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='Password' className='mb-2'>Password</label>
                            <input placeholder='Yor Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='Password' className='mb-2'>NewPassword</label>
                            <input placeholder='Yor Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, new_password: e.target.value })} className='form-control' />
                        </div>

                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" onChange={(e) => setCurrentUser({ ...currentUser, new_password_confirmation: e.target.value })} className='form-control' />
                        </div> */}
                        {/* <div className='row'> */}
                            {/* <div className='col-5'>
                        <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
                    </div> */}
                            {/* <div className='col-6'>
                                    <button onClick={updateProfile} disabled={loading} className='btn btn-primary w-100'>{loading ? 'Updateing' : 'Update'}</button>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}
        {/* //         </div> */}
        {/* //     </div> */}
        {/* // </div> */}
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div id='form-parent' className="my-2 p-5">
                            <div id='form-logo' className='mb-3'>
                                <img src={logo} alt='' />
                            </div>
                            <h2 id='form-title' className='mb-2'>Welcom to Safha</h2>
                            <div className='form-field mb-2'>
                                <label htmlFor='name' className='mb-1'>Name</label>
                                <input type='text'  id="name" className='form-control' />
                            </div>
                            <div className='form-field mb-2'>
                                <label htmlFor='email' className='mb-1'>Email Address</label>
                                <input type='email'  id="email" className='form-control' />
                            </div>
                            <div className='form-field mb-2'>
                                <label htmlFor='password' className='mb-1'>Password</label>
                                <input type='password'  id="password" className='form-control' />
                            </div>
                            <div className='form-field mb-2'>
                                <label htmlFor='password' className='mb-1'>Password Confirmation</label>
                                <input type='password'  id="password" className='form-control' />
                            </div>
                            <button
                                className='btn btn-primary w-49'
                                id='form-bttn'
                                onClick={AddBook}>
                                {loading ? 'Please Wait' : 'Sign UP'}
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default AddBook