import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Signup from './screens/Signup/Signup';
import Books from './Components/Books/Books';
import Reviews from './Components/Reviews/ViewReviews/Reviews';
import About from './Components/About/About';
import Suggested from './Components/SuggestedCategories/Suggested';
import { useContext } from 'react';
import { AuthContext } from './contexts/Authcontext';
import Navbar1 from './Components/Navbar/Navbar1';
import SingleBookIndex from './Components/Books/SingleBook/SingleBookIndex';
import Login from './screens/Login/Login';

import Updateprofile from './screens/Profile/Updateprofile';
import MyBooks from './Components/MyBooks/MyBooks';
import CollectionPage from './Components/Featured/OneFeature/CollectionPage';
import CategoriesDesigne from './Components/Categories/CategoriesDesigne';
import CategoryBooks from './Components/Categories/CategoryBooks/CategoryBooks';
import EmblaCarousel from './Components/ScrolledSection/EmblaCarousel';
import AddCategory from './Components/Categories/AddCategory/AddCategory';
import MainProfile from './screens/Profile/MainProfile';
import MainBook from './Components/MyBooks/MainBook/MainBook';
import SingleReview from './Components/Reviews/ViewReviews/SingleReview';
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
                <>
                  <Route path='/mybooks' element={<MyBooks />} />
                  <Route path='/addbook' element={<MainBook />} />
                  <Route path='/profile' element={<MainProfile />} />
                  <Route path='/pro' element={<Updateprofile />} />
                </>
                :
                <Route path='/about' element={<About />} />
                
                
            }
            <Route path='/about' element={<About />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/suggested' element={<Suggested />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/embla' element={<EmblaCarousel />} />
            <Route path='/addCategory' element={<AddCategory />} />
            <Route path='/review/:id' element={<SingleReview />} />



          </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
