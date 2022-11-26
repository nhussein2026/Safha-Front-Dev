import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authcontext";
import { Rating } from "@mui/material";
import './SingleBookElement.css'
const SingleBookElement = ({ book, i, customize }) => {
  const { token } = useContext(AuthContext)
  // const userId = useRef()
  // const bookId = useRef()
  const [favorite, setFavorite] = useState(false)
  const addFavorite = async (id) => {
    setFavorite(!favorite)
    // console.log("bookId.current.value",bookId.current.value)
    const postFavorite = await fetch(`${process.env.REACT_APP_API_URL}/favorites/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookId: id,
      }),
    })
    // console.log("after put add");
    console.log("customize", customize)
    const json = await postFavorite.json()
    // console.log(json)
    // window.alert(json.messages)
    if (json?.success) {
      //   console.log(json.messages)
    }
    if (!json.success) {
      window.alert(json.messages)
  }
  }
  return (
    <>
      <div className="col-6 col-sm-4 col-lg-3">
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <Link to={`/book/${book?.id}`}>
              <img src={book?.cover} className="img-fluid img-thumbnail crop"
                width="217" height="217" alt="product" />
            </Link>
            <div className="label-group">
              {/* <div className="product-label label-hot">HOT</div> */}
            </div>
            <div className="btn-icon-group">
              {/* <a href="#"
                        className="btn-icon btn-add-cart product-type-simple"><i
                            className="icon-shopping-cart"></i></a> */}
            </div>
            <a href='#'><Link className="btn-quickview"
              title="Quick View" to={`/book/${book?.id}`}>More Details</Link></a>
          </figure>
          <div className="product-details">
            {
              !(customize == "MyBooks" || customize == "MyFavorites" || customize == "embla") &&
              <>
                <div className="category-wrap">
                  <div className="category-list">
                    <Link to={`/category/${book?.Category?.id}`}>
                      <a href="#" className="product-category">{book?.Category?.name}</a>
                    </Link>
                  </div>
                  <a href="#" onClick={() => { addFavorite(book?.id) }} className="btn-icon-wish">
                    {/* <i class="icon-heart"></i> */}
                    {/*  */}
                    {
                      favorite? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                        </svg>
                    }
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="#"><Link to={`/book/${book?.id}`}>{book?.name}</Link></a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    {/* <span className="ratings" style={{ width: `${Number(book?.avgRating)}%` }}></span>
                            <span className="tooltiptext tooltip-top"></span> */}
                    <Rating sx={{
                      display: 'flex',
                      height: 15,
                      width: "100%",
                      backgroundColor: 'gray',
                      borderRadius: '1rem',
                      color: '#f44336'
                    }} name="size-larger" defaultValue={0} />
                  </div>
                </div>
                {
                  !(customize = "Features") &&
                  <>
                    <div className="price-box">
                      <span className="product-price">{book?.reviewsCount}</span>
                    </div>
                  </>
                }

              </>
            }
            {
              (customize == "MyBooks" || customize == "MyFavorites") &&
              <>
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="#" className="product-category">{book?.author}</a>
                  </div>
                  <a href="#" onClick={() => { addFavorite(book?.id) }} className="btn-icon-wish">
                    {
                      !(customize == "MyFavorites") ?
                      
                        (!favorite? 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                          </svg>)
                        :
                        (favorite? 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                          </svg>)
                    }
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="#"><Link to={`/book/${book?.id}`}>{book?.name}</Link></a>
                </h3>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );


}
export default SingleBookElement