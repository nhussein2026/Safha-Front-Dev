import'./UpdateBook.css';

import user from '../../../assets/images/logos/logo with safha.png'
import logo2 from '../../../assets/images/logos/logo with safha.png'
import photo2 from '../../../assets/images/logos/logo with safha.png'

import { AuthContext } from "../../AuthContext/AuthContext"
import { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom"

const UpdateBook = () => {


    const  token  = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [publish, setPublish] = useState('')

    const [currentBook, setCurrentBook] = useState({
        name: '',
        pagesCount: '',
        categoryId: '',
        des: '',
        publish: '',
        publisherId: '',
        lang: '',
        ISBN: '',
        author: '',
        kinle: '',
        paper: '',
        cover: '',
    })
    const { id } = useParams()
        const navigate = useNavigate()
        const updateBook = async (event) => {
            event.preventDefault()
            let BookData = new FormData(event.target)
            const updateBook = await fetch(`${process.env.REACT_APP_API_URL}/books/edit/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: BookData,
            })
            const json = await updateBook.json()
            alert(json.messages?.join(' '))
            if (json.success) {
                navigate("/books")
            }
        }
        useEffect(
            async function getbook() {
                const bookData = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`)
                const json = await bookData.json()
                setCurrentBook(json.data)
            },
           [])
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
                            <h1 className='mb-2'>Update Book</h1>
                            <div className='form-field mb-3 d-flex flex-column align-items-start'>
                                <label htmlFor='name' className='mb-2'>Book Name</label>
                                <input placeholder='Type Book Name' type='text' id="name" value={currentBook?.name} onChange={(e) => setCurrentBook({ ...currentBook, name: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3 d-flex flex-column align-items-start'>
                                <label htmlFor='page-book' className='mb-2'>Book Pages Counts</label>
                                <input placeholder='Type Your Name' type='number' id="page-book" value={currentBook?.pagesCount} onChange={(e) => setCurrentBook({ ...currentBook, pagesCount: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3 d-flex flex-column align-items-start'>
                                <label htmlFor='book-des' className='mb-2'>Book Description</label>
                                <input placeholder='Write Book Description' type='text' id="book-des" value={currentBook?.des} onChange={(e) => setCurrentBook({ ...currentBook, des: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3 d-flex flex-column align-items-start'>
                                <label htmlFor='book-cover' className='mb-2'>Book Cover</label>
                                <input type='file' id="book-cover" value={currentBook?.cover} onChange={(e) => setCurrentBook({ ...currentBook, cover: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3 d-flex flex-column align-items-start'>
                                <label htmlFor='publish-date' className='mb-2'>Book Publish Date</label>
                                <input placeholder='Type Your Name' type='date' id="publish-date" value={currentBook?.publish} onChange={(e) => setCurrentBook({ ...currentBook, publish: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3  d-flex flex-column align-items-start'>
                                <label htmlFor='book-lang' className='mb-2'>Book Language</label>
                                <input placeholder='Email Address' type='text' id="book-lang" value={currentBook?.lang} onChange={(e) => setCurrentBook({ ...currentBook, email: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3  d-flex flex-column align-items-start'>
                                <label htmlFor='author-name' className='mb-2'>Author Name</label>
                                <input placeholder='Write Author Name' type='text' id="author-name"  value={currentBook?.author} onChange={(e) => setCurrentBook({ ...currentBook, author: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-3  d-flex flex-column align-items-start'>
                                <label htmlFor='isbn-number' className='mb-2'>Book ISBN</label>
                                <input placeholder='Write Book ISBN' type='number' id="isbn-number" value={currentBook?.ISBN} onChange={(e) => setCurrentBook({ ...currentBook, ISBN: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-5  d-flex flex-column align-items-start'>
                                <label htmlFor='password_confirmation' className='mb-2'>Category Id</label>
                                <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={currentBook?.categoryId} onChange={(e) => setCurrentBook({ ...currentBook, categoryId: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-5  d-flex flex-column align-items-start'>
                                <label htmlFor='password_confirmation' className='mb-2'>Publisher Id</label>
                                <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={currentBook?.publisherId} onChange={(e) => setCurrentBook({ ...currentBook, publisherId: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-5  d-flex flex-column align-items-start'>
                                <label htmlFor='password_confirmation' className='mb-2'>Book Type</label>
                                <input placeholder='Password Confirmation' type='password' id="password_confirmation"  value={currentBook?.kindle} onChange={(e) => setCurrentBook({ ...currentBook, kindle: e.target.value })} className='form-control' />
                            </div>
                            <div className='form-field mb-5  d-flex flex-column align-items-start'>
                                <label htmlFor='password_confirmation' className='mb-2'>Book Type</label>
                                <input placeholder='Password Confirmation' type='password' id="password_confirmation" value={currentBook?.paper} onChange={(e) => setCurrentBook({ ...currentBook, paper: e.target.value })} className='form-control' />
                            </div>
                            {/* <div className='row'> */}
                            {/* <div className='col-5'>
                        <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
                    </div> */}
                            <div className='col-12 mb-5'>
                                <button onClick={updateBook} disabled={loading} className='btn btn-primary w-100'>{loading ? 'Updateing' : 'Update'}</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default UpdateBook;