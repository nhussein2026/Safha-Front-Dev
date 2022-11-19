import './AddReviews.css'
import { useRef, useContext } from "react";
import { AuthContext } from '../AuthContext/AuthContext'

const AddReview = () => {
    const token = useContext(AuthContext)

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
        window.alert(json.messages)
    }
    return (
        <div className='AddReview'>
            <div>
                <textarea className="textArea"
                    type="text"
                    placeholder='What is Your Opinion?'
                    ref={contentRef}
                    id="content">

                </textarea>
            </div>
            <button id='button' onClick={AddReview}>Create Review</button>

        </div>
    )
}
export default AddReview