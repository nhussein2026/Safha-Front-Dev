import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegCommentAlt, FaRegHeart } from "react-icons/fa"
import relativeTime from 'dayjs/esm/plugin/relativeTime';
import * as dayjs from 'dayjs'


const SingleComment = ({comment, i}) => {
    const createdAtFun = ( (date) => {
        dayjs.extend(relativeTime)
        return dayjs(date).fromNow()
    })

    const [commentInfo, setCommentInfo] = useState({})
    useEffect(() => {
        const getComment = async () => {
            const commentShow = await fetch(`${process.env.REACT_APP_API_URL}/comments/${comment?.id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await commentShow.json()
            console.log(json)
            if (json?.success) {
                setCommentInfo(json?.data)
            }
        }
        getComment()
    }, [])
    return (
        <>
            <div key={i} className="commentsDiv">
                <div>
                    <Avatar className="avatarCom" alt="" src={commentInfo?.UserInfo?.avatar} />
                </div>
                <div className="commentContent">
                    <h6>{commentInfo?.User?.username}</h6>
                    <p className="createdAtCom">created before {createdAtFun(commentInfo?.createdAt)}</p>
                    <p className="commentContentText">{commentInfo?.content}</p>
                    {/* {setUserID(comment.id)} */}
                    {/* {(userID==comment.id)&&<button type="button" onClick={(() => {deleteCommentFun()})} className="btn btn-primary deleteButton mb-1">Delete</button>} */}
                </div>
            </div>
                {/* <div className=" mb-3 buttons-div-pCom">
                    <div className="mb-3">
                        <input ref={commentRef} placeholder="Add a new comment" type="text" />
                    </div>
                    <div className="commentCom">
                        <button onClick={addComment} type="button" className="btn btn-primary button font-class" >Add</button>
                    </div>
                </div> */}
            {/* </div>         */}
        </>
    );
}

export default SingleComment;