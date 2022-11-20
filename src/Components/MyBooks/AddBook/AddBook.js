import './AddBook.css'
import user from '../../../assets/images/logos/logo with safha.png'
import logo2 from '../../../assets/images/logos/logo with safha.png'
import photo2 from '../../../assets/images/logos/logo with safha.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useContext } from 'react'
import { AuthContext } from '../../AuthContext/AuthContext';






const AddBook = () => {
    const { token } = useContext(AuthContext);
    const [publish, setPublish] = useState('')
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState()
    const [publishers, setPublishers] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const addBook = async (event) => {
            let BookData = new FormData(event.target)
            event.preventDefault()
            const book = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                Body: BookData
            })
            const json = await book.json()
            alert(json.message?.join(' '))
            if (json.success) {
                navigate("/books")
            }
        }
       
        // useEffect(() => {
        //     async function getCategories() {
        //         const data = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`);
        //         const categoriesData = await data.json()
        //         setCategories(categoriesData.data)
        //     }
        //     getCategories()

        //     async function getPublishers() {
        //         const data = await fetch(`${process.env.REACT_APP_API_URL}/publishers/all`)
        //         const publishersData = await data.json()
        //         setPublishers(publishersData.data)
        //     }
        //     getPublishers();
        // }, [])
        
    }, [])
    return (
        // <div>
        //     <div class='wrapper'>
        //         <div class='bg-image'>
        //             <img id='personal' src={photo2} alt='' />
        //         </div>
        //         <div class='registration-form'>
        //             <div id='form-div' className='w-100'>
        //                 <div className=' mb-4'>
        //                     <img id='user' src={user} alt='' />
        //                 </div>
        //                 <div className=' mb-4'>
        //                     <img id='logo2' src={logo2} alt='' />
        //                 </div>
        //                 <h1 className='mb-2'>Add Books</h1>
        //                 <div className='form-field mb-3 d-flex flex-column align-items-start'>
        //                     <label htmlFor='name' className='mb-2'>Name</label>
        //                     <input placeholder='Type Your Name' type='text' id="name" value={currentUser?.userName} onChange={(e) => setCurrentUser({ ...currentUser, userName: e.target.value })} className='form-control' />
        //                 </div>
        //                 <div className='form-field mb-3  d-flex flex-column align-items-start'>
        //                     <label htmlFor='email' className='mb-2'>Email Address</label>
        //                     <input placeholder='Email Address' type='email' id="email" value={currentUser?.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} className='form-control' />
        //                 </div>
        //                 <div className='form-field mb-3  d-flex flex-column align-items-start'>
        //                     <label htmlFor='Password' className='mb-2'>Password</label>
        //                     <input placeholder='Your Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })} className='form-control' />
        //                 </div>
        //                 <div className='form-field mb-3  d-flex flex-column align-items-start'>
        //                     <label htmlFor='Password' className='mb-2'>NewPassword</label>
        //                     <input placeholder='Your Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, new_password: e.target.value })} className='form-control' />
        //                 </div>

        //                 <div className='form-field mb-5  d-flex flex-column align-items-start'>
        //                     <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
        //                     <input placeholder='Password Confirmation' type='password' id="password_confirmation" onChange={(e) => setCurrentUser({ ...currentUser, new_password_confirmation: e.target.value })} className='form-control' />
        //                 </div>
        //                 {/* <div className='row'> */}
        //                 {/* <div className='col-5'>
        //                 <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
        //             </div> */}
        //                 <div className='col-12 mb-5'>
        //                     <button onClick={addBook} disabled={loading} className='btn btn-primary w-100'>{loading ? 'Updateing' : 'Update'}</button>
        //                 </div>
        //                 {/* </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
        </>
    )
}

export default AddBook