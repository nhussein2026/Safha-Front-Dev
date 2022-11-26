import './AddReviews.css'
import { useRef, useContext ,useState,useEffect} from "react";
import { AuthContext } from '../AuthContext/AuthContext'

const AddReview = () => {
    const token = useContext(AuthContext)
    const [Reviews, setReviews] = useState([]);

    const contentRef = useRef();
    const CreateReview = async () => {
        const response = await fetch('https://safha.fjobeir.com/backend/reviews',
            {
                method: "post",
                body: JSON.stringify({
                    content: contentRef.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token.token}`
                },
            }
        );

        console.log(AddReview)
        const json = await response.json();
        // window.alert(json.messages)
    }
    // const getReview = async () => {
    //     const response = await fetch('https://safha.fjobeir.com/backend/reviews/all', {
    //         method: 'Get',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token.token}`
    //         }
    //     })
    //     console.log(getReview)
    //     const json = await response.json()
    //     setReviews(json.data)
    //     console.log(json)
    // }
    // useEffect(() => {
    //     getReview()
    // }, [])
    // console.log(Reviews)

    return (
        // <div className='AddReview'>
        //     <div>
        //         <textarea className="textArea"
        //             type="text"
        //             placeholder='What is Your Opinion?'
        //             ref={contentRef}
        //             id="content">

        //         </textarea>
        //     </div>
        //     <button id='button' onClick={AddReview}>Create Review</button>

        // </div>
        <div>
        {/* Button trigger modal */}
        <button type="button" className="btn " id="buttoColor"   data-toggle="modal" data-target="#exampleModalLong">
          Reviews
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default AddReview