import './AddBook.css'
import user from '../../../assets/images/logos/logo with safha.png'
import logo2 from '../../../assets/images/logos/logo with safha.png'
import photo2 from '../../../assets/images/logos/logo with safha.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useContext } from 'react'
import { AuthContext } from '../../AuthContext/AuthContext';



const AddBook = () => {
    const  token  = useContext(AuthContext);
    const [publish, setPublish] = useState('')
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState()
    const [publishers, setPublishers] = useState()
    const navigate = useNavigate();
    const [book, setBook] = useState({
        name: '',
        pagesCount: '',
        categoryId: '',
        des: '',
        publish: '',
        publisherId:'',
        lang: '',
        ISBN: '',
        author: '',
        kinle: '',
        paper: '',
        cover: '',
    })

    
        const addBook = async (event) => {
            let BookData = new FormData(event.target)
            event.preventDefault()
            const addbook = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                Body: BookData
            })
            const json = await addbook.json()
            alert(json.message?.join(' '))
            if (json.success) {
                navigate("/books")
            }
        }

    return (
        <>
            <div>
                {/* <div className='wrapper'> */}
                <div className='bg-image'>
                    <img id='personal' src={photo2} alt='' />
                </div>
                <div className='registration-form'>
                    <div id='form-div' className='w-100'>
                        <div className=' mb-4'>
                            <img id='user' src={user} alt='' />
                        </div>
                        <div className=' mb-4'>
                            <img id='logo2' src={logo2} alt='' />
                        </div>
                        <h1 className='mb-2'>Add Book</h1>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='name' className='mb-2'>Book Name</label>
                            <input placeholder='Type Book Name' type='text' id="name" value={book?.name} onChange={(e) => setBook({ ...book, name: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='page-book' className='mb-2'>Book Pages Counts</label>
                            <input placeholder='Type Your Name' type='number' id="page-book" value={book?.pagesCount} onChange={(e) => setBook({ ...book, pagesCount: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='book-des' className='mb-2'>Book Description</label>
                            <input placeholder='Write Book Description' type='text' id="book-des" value={book?.des} onChange={(e) => setBook({ ...book, des: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='book-cover' className='mb-2'>Book Cover</label>
                            <input type='file' id="book-cover" value={book?.cover} onChange={(e) => setBook({ ...book, cover: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='publish-date' className='mb-2'>Book Publish Date</label>
                            <input placeholder='Type Your Name' type='date' id="publish-date" value={book?.publish} onChange={(e) => setBook({ ...book, publish: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='book-lang' className='mb-2'>Book Language</label>
                            <input placeholder='Email Address' type='text' id="book-lang" value={book?.lang} onChange={(e) => setBook({ ...book, email: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='author-name' className='mb-2'>Author Name</label>
                            <input placeholder='Write Author Name' type='text' id="author-name" value={book?.author} onChange={(e) => setBook({ ...book, author: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='isbn-number' className='mb-2'>Book ISBN</label>
                            <input placeholder='Write Book ISBN' type='number' id="isbn-number" value={book?.ISBN} onChange={(e) => setBook({ ...book, ISBN: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Category Id</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={book?.categoryId} onChange={(e) => setBook({ ...book, categoryId: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Publisher Id</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={book?.publisherId} onChange={(e) => setBook({ ...book, publisherId: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Book Type</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={book?.kindle} onChange={(e) => setBook({ ...book, kindle: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Book Type</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={book?.paper} onChange={(e) => setBook({ ...book, paper: e.target.value })} className='form-control' />
                        </div>
                        {/* <div className='row'> */}
                        {/* <div className='col-5'>
                        <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
                    </div> */}
                        <div className='col-12 mb-5'>
                            <button onClick={addBook} disabled={loading} className='btn btn-primary w-100'>{loading ? 'Updateing' : 'Update'}</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default AddBook