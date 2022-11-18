import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authcontext";

const SingleBookElement = ({book,i}) => {
  const { token } = useContext(AuthContext)
  const userId = useRef()
  const bookId = useRef()
  // const [favorite, setFavorite] = useState(false)
  const addFavorite = async (id) => {
    console.log("bookId.current.value",bookId.current.value)
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
    console.log("after put add");
    const json = await postFavorite.json()
    console.log(json)
    window.alert(json.messages)
    if (json?.success) {
      console.log(json.messages)
    }
  }
  return (
    <>
          <div className="col-6 col-sm-4 col-lg-3">
              <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <Link to={`/book/${book?.id}`}>
                          <img src={book?.cover} className="img-fluid img-thumbnail"
                              width="217" height="217" alt="product"/>
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
                      <div className="category-wrap">
                          <div className="category-list">
                            <a href="#" className="product-category">{book?.Category?.name}</a>
                          </div>
                          <a href="#" onClick={()=>{addFavorite(book?.id)}} className="btn-icon-wish">
                            {/* <i className="icon-heart"></i> */}
                            <i className="icon-heart bi bi-suit-heart"></i>
                          </a>
                      </div>
                      <h3 className="product-title">
                        
                        <a href="#"><Link to={`/book/${book?.id}`}>{book?.name}</Link></a>
                      </h3>
                      <div className="ratings-container">
                          <div className="product-ratings">
                              <span className="ratings" style={{ width: `${Number(book?.avgRating)}%` }}></span>
                              <span className="tooltiptext tooltip-top"></span>
                          </div>
                      </div>
                      <div className="price-box">
                          <span className="product-price">{book?.reviewsCount}</span>
                      </div>
                  </div>
              </div>
          </div>
    
    </> 
    );
  

}
export default SingleBookElement