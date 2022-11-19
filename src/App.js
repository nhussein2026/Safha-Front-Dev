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


import Home1 from './Components/Home/Home1';
import Navbar1 from './Components/Navbar/Navbar1';
import SingleBookIndex from './Components/SingleBook/SingleBookIndex';
import Login from './screens/Login/Login1';
// require('dotenv').config()

const App = () => {

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
            <Route path='/categories' element={<Categories />} />
            <Route path='/about' element={<About />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/suggested' element={<Suggested />} />
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/scroll' element={<HomeCategories />} /> */}
            <Route path='/scroll' element={<ScrolledSectioin />} />


          </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;
