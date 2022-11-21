import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signup from './screens/Signup/Signup';
import Books from './Components/Books/Books';
import Reviews from './Components/Reviews/Reviews';
import Categories from './Components/Categories/Categories';
import About from './Components/About/About';
import Suggested from './Components/SuggestedCategories/Suggested';
import SingleBook from "./Components/SingleBook/SingleBook";
import { useContext } from 'react';
import { AuthContext } from './contexts/Authcontext';
import Profile from './Components/Profile/Profile';
import ScrolledSectioin from './Components/ScrolledSection/ScrolledSection';
import HomeCategories from './Components/HomeCategories/HomeCategories2';
import Navbar1 from './Components/Navbar/Navbar1';
import SingleBookIndex from './Components/SingleBook/SingleBookIndex';
import Login from './screens/Login/Login';

import Updateprofile from './Components/Profile/Updateprofile';
import MyBooks from './Components/MyBooks/MyBooks';
import AddBook from './Components/MyBooks/AddBook/AddBook';
import CategoriesF from './Components/Categories/Categories';
import CollectionPage from './Components/Featured/OneFeature/CollectionPage';
import CategoriesDesigne from './Components/Categories/CategoriesDesigne';
import UpdateBook from './Components/MyBooks/UpdateBook/UpdateBook';
import CategoryBooks from './Components/Categories/CategoryBooks/CategoryBooks';
import EmplaScroll from './Components/ScrolledSection/EmblaScroll';
// require('dotenv').config()

const App = () => {
  const { loggedIn } = useContext(AuthContext)
  return (
    <>
      <div className="page-wrapper">
        <Navbar1/>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/book/:id' element={<SingleBookIndex/>} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/categories' element={<CategoriesDesigne />} />
            <Route path='/category/:id' element={<CategoryBooks />} />
            {/* <Route path='/mybooks' element={<MyBooks />} /> */}
            {
              loggedIn?
                <Route path='/mybooks' element={<MyBooks />} />
                :
                <Route path='/about' element={<About />} />
            }
            <Route path='/footer' element={<Footer />} />
            <Route path='/suggested' element={<Suggested />} />
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/scroll' element={<HomeCategories />} /> */}
            <Route path='/scroll' element={<ScrolledSectioin />} />
            <Route path='/pro' element={<Updateprofile />} />
            <Route path='/addbook' element={<AddBook />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/update-book' element={<UpdateBook />} />
            <Route path='/embla' element={<EmplaScroll />} />

      


          </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
