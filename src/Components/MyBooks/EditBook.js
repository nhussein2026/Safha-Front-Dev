// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../contexts/Authcontext";
// import SingleBookElement from "../Books/SingleBookElement/SingleBookElement";
// import SingleBookElement1 from "../Books/SingleBookElement/SingleBookELement1";
// import HeroSection from "../HeroSection/HeroSection";
// import Sidebar from "../SideBar/SideBar";
// // import '../../assets/css/demo/demo25/demo25.css'
// // import '../../assets/css/demo25.min.css'
// import './MyBooks.css'

// const EditBook = () => {
//     // console.log("InsideMyBooks")
//     const { setHomeNav, setAboutNav, 
//             setCategoriesNav, setBooksNav,
//             userInfo, token, setUserInfo} = useContext(AuthContext)
//     const [books, setBooks] = useState([])
//     const [addedBooks, setAddedBooks] = useState([])
//     const [added, setAdded] = useState(false)
//     useEffect(()=>{
//         setCategoriesNav(false);
//         setHomeNav(false);
//         setBooksNav(false);
//         setAboutNav(true);

//         const getUserInfo = async () => {
//             const userInfoFetch = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
//                 method: 'get',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 }
//             })
//             const json = await userInfoFetch.json()
//             // console.log("user info",json)
//             if (json?.success) {
//                 // console.log("insied if user info",json)
//                 setUserInfo(json?.data)
//                 setBooks(json?.data?.FavoriteBooks)
//             }
//         }
//         getUserInfo()
//     },[])

//     const setFavBooksFun= () => {
//         setBooks(userInfo?.FavoriteBooks)
//         setAdded(false)
//     }
//     const setAddedBooksFun= () => {
//         setAddedBooks(userInfo?.AddedBooks)
//         console.log("inside set added",userInfo.AddedBooks );
//         setAdded(true)
//     }

//     // console.log("books",books);
//     return(
//         <>
//             <div className="page-wrapper">
//                 <HeroSection />
//                 <main className="main">
//                     <div className="bg-white">
//                         <div className="container">
//                             <div className="row main-content">
//                                 <Sidebar books={books} />
//                                 <div class="sidebar-overlay"></div>
//                                     <div className="col-lg-9">
//                                         <div className="col-6 col-sm-4 col-lg-6">
//                                             {/* <h3 className="widget-title">Favorite Books</h3> */}
//                                             <ul class="nav nav-tabs" id="ulStyle">
//                                                 { !added?
//                                                     <li class="nav-item" onClick={setFavBooksFun}>
//                                                         <a class="nav-link active" id="active" aria-current="page" href="#">Favorite</a>
//                                                     </li> 
//                                                     :
//                                                     <li class="nav-item" onClick={setFavBooksFun}>
//                                                         <a class="nav-link" aria-current="page" href="#">Favorite</a>
//                                                     </li>
//                                                 }
//                                                 { added?
//                                                     <li class="nav-item" onClick={setAddedBooksFun}>
//                                                         <a class="nav-link active" id="active" aria-current="page" href="#">Added</a>
//                                                     </li> 
//                                                     :
//                                                     <li class="nav-item" onClick={setAddedBooksFun}>
//                                                         <a class="nav-link" aria-current="page" href="#">Added</a>
//                                                     </li>
//                                                 }
//                                             </ul>
//                                         </div>
//                                         {!added?
//                                             <div className="row">
//                                                 {
//                                                     books.map((book, i) => {
//                                                         return <SingleBookElement book={book} key={i} customize="MyBooks"/>
//                                                     })
//                                                 }
//                                             </div>
//                                             :
//                                             <div className="row">
//                                                 {
//                                                     addedBooks.map((book, i) => {
//                                                         return <SingleBookElement book={book} key={i} customize="MyFavorites"/>
//                                                     })
//                                                 }
//                                                 <div className="col-6 col-sm-4 col-lg-3">
//                                                     <div className="product-default inner-quickview inner-icon">
//                                                         <Link to="/addbook">
//                                                             <svg xmlns="http://www.w3.org/2000/svg" width="17rem" height="17rem" fill="currentColor" id="addIcon" className="bi bi-plus-lg" viewBox="0 0 16 16">
//                                                                 <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
//                                                             </svg>
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         }

//                                     </div> 
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </>
//     )
// }
// export default EditBook;

import './UpdateBook.css'
import user from '../../../assets/images/logos/logo with safha.png'
import logo2 from '../../../assets/images/logos/logo with safha.png'
import photo2 from '../../../assets/images/logos/logo with safha.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useContext } from 'react'
import { AuthContext } from '../../AuthContext/AuthContext';



const EditBook = () => {
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

    
        const editBook = async (event) => {
            let BookData = new FormData(event.target)
            console.log(event.target)
            event.preventDefault()
            const editBook = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
                method: 'Put',
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
                        <h1 className='mb-2'>Edit Book</h1>
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
                            <label htmlFor='author-name' className='mb-2'>Book Language</label>
                            <input placeholder='Write Author Name' type='text' id="author-name" value={book?.lang} onChange={(e) => setBook({ ...book, lang: e.target.value })} className='form-control' />
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
                            <input placeholder='category id' type='text' id="password_confirmation" value={book?.categoryId} onChange={(e) => setBook({ ...book, categoryId: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Publisher Id</label>
                            <input placeholder='Write the publisher' type='text' id="password_confirmation" value={book?.publisherId} onChange={(e) => setBook({ ...book, publisherId: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>kindle</label>
                            <input placeholder='if book is kindle type 1 or 0 for opist' type='number' id="password_confirmation" value={book?.kindle} onChange={(e) => setBook({ ...book, kindle: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-5  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>paper</label>
                            <input placeholder='if book is paper inert 1 or 0 for opist' type='number' id="password_confirmation" value={book?.paper} onChange={(e) => setBook({ ...book, paper: e.target.value })} className='form-control' />
                        </div>
                        <div className='col-12 mb-5'>
                            <button onClick={editBook} disabled={loading} className='btn btn-primary w-100'>{loading ? 'Adding Book' : 'Add'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditBook