import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import './SingleReview.css'
import relativeTime from 'dayjs/esm/plugin/relativeTime';
import * as dayjs from 'dayjs'

import { FaHeart, FaRegCommentAlt, FaRegHeart } from "react-icons/fa"
import SingleComment from "./SingleComment/SingleComment";
import { AuthContext } from "../../../../../contexts/Authcontext";


const SingleReview = ({review}) => {
    const { token } = useContext(AuthContext)
    const [reviewInfo, setReviewInfo] = useState({})
    const [usersInfo, setUsersInfo] = useState([])
    const [comment, setComment] = useState(false)
    const [like, setLike] = useState(false)
    const [loading, setLoading] = useState(false)

    const createdAtFun = ( (date) => {
        dayjs.extend(relativeTime)
        return dayjs(date).fromNow()
    })
    const commentFun = (()=> {
        setComment(!comment)
        setNewComment({ ...newComment, reviewId: reviewInfo?.id })
    })

    const getReview = async () => {
        const reviewList = await fetch(`${process.env.REACT_APP_API_URL}/reviews/${review.id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await reviewList.json()
        console.log(json)
        if (json?.success) {
            setReviewInfo(json?.data)
        }
    }

    useEffect(() => {
        const getUsersInfo= async () => {
            const userInfoList = await fetch(`${process.env.REACT_APP_API_URL}/userInfos/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await userInfoList.json()
            console.log(json)
            if (json?.success) {
                setUsersInfo(json?.data)
            }
        }
        getReview()
        getUsersInfo()
    }, [])

    const [newComment, setNewComment] = useState({
        content: '',
        reviewId: '',
    })
    const addCommentFun = async (event) => {
        event.preventDefault()
        setLoading(true)
        // console.log("inside Add Review");
        // console.log("content",content.current.value )
        const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`,
            {
                method: "POST",
                body: JSON.stringify(newComment),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        // console.log("content",content.current.value )
        const json = await response.json();
        console.log("json newComment",json)
        // window.alert(json.messages)
        if (json.success) {
            getReview()
            // alert(json.messages.join(' '))

        }
        if (!json.success) {
            window.alert(json.messages)
        }
    }
    const AddlikeFun = async (event) => {
        event.preventDefault()
        setLoading(true)
        console.log("inside Add like");
        const response = await fetch(`${process.env.REACT_APP_API_URL}/likes/reviews/${reviewInfo?.id}`,
            {
                method: "POST",
                body: JSON.stringify({
                    likeableId: reviewInfo?.id,
                    likeableType: "review",
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const json = await response.json();
        console.log("json newLike",json)
        if (json.success) {
            setLike(!like)
            getReview()
            // window.alert(json.messages)
        }
        if (!json.success) {
            window.alert(json.messages)
        }
    }
    
    // console.log("reviewInfo?.id",reviewInfo?.id);
    // console.log("newComment",newComment);
    // console.log("reviewInfo", reviewInfo);
    // console.log("reviewInfo?.UserInfo?.avatar", reviewInfo?.UserInfo?.avatar);
    // setNewComment.reviewId(reviewInfo?.id)
    
    return (
        <>
            <div className="postsDiv">
                <div className="topPart">
                    <div className="avatarClass">
                        {
                            usersInfo.map((userInfo)=>{
                                if(userInfo.userId == reviewInfo?.userId){
                                return(
                                    <img alt="" src={`${userInfo?.avatar}`} />
                                )}
                            })      
                        }
                    </div>
                    <div className="postContentTopPart">
                        <h6>{reviewInfo?.User?.username}</h6>
                        <p className="createdAt">{createdAtFun(reviewInfo?.createdAt)}</p>   
                    </div>
                </div>
                
                <div className="postContent">
                    <div className="desArea">
                        <p className="postContentText">{reviewInfo?.content}</p>
                    </div>
                    <div className="buttons-div-p">
                        <div className="like-posts displayFlexRow" onClick={AddlikeFun} >
                            {
                                like?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                </svg>
                            }
                            
                            {/* <p className="counter">{reviewInfo?.Likes.length}</p> */}
                        </div>
                        <div className="comment-posts displayFlexRow" onClick={commentFun}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {/* <p className="counter">{reviewInfo?.Comments.length}</p> */}
                        </div>
                    </div>                                
                    { comment&&
                        <>
                            <div className="commentsDivPost">
                                {
                                (reviewInfo?.Comments.length>0)&&
                                    (reviewInfo?.Comments.map((comment, i) =>{
                                        return(<SingleComment comment={comment} key={i} usersInfo={usersInfo}/>)}))
                                }
                            </div>
                            {/* <div className="commentsDivPost"> */}
                                <div className="buttons-div-pCom" id="addComment">
                                    <div className="mb-3">
                                        <input placeholder="Write your comment" value={newComment?.content} onChange={(e) => { setNewComment({ ...newComment, content: e.target.value }) }} type="text" />
                                    </div>
                                    <div className="commentCom">
                                        <button itemID="input-placeholder" type="button" id='bttn' className="btn btn-primary button" onClick={addCommentFun}>
                                        {loading ? 'Wait' : 'Add'}
                                        </button>
                                    </div>
                                </div>
                            {/* </div> */}
                        </>
                    }   
                </div>
            </div>
        </>
    );
}

export default SingleReview;