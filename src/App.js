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
import Login from './screens/Login/Login';
import Books1 from './Components/Books/Books1';
// require('dotenv').config()

const App = () => {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/books' element={<Books />} /> */}
        <Route path='/books' element={<Books1 />} />
        <Route path='/single-book' element={<SingleBook/>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/suggested' element={<Suggested />} />
      </Routes>
    </>
  );
}

export default App;
