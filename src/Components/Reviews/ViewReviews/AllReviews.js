import dayjs from 'dayjs';
import './AllReviews.css'
import relativeTime from 'dayjs/plugin/relativeTime'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
dayjs.extend(relativeTime)

const Review = ({ reviews }) => {


    return (
        <>
            {/* <div className="d-flex">
                <div className="bg-white">
                    <div className="container">
                        <div className="row main-content">
                            <div className="product-single-container product-single-default">
                                <div className="row">
                                    <div className="col-md-3  product-single-gallery bg-gray">
                                        <a href="#" className='mt-3'>
                                            <img src={reviews?.Book?.cover}
                                                width="217" height="217" alt="product" />
                                        </a>
                                            <h1 className="product-title mt-1 mb-1">{reviews?.Book?.name}</h1>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '80%' }} />
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>
                                                <div>
                                                    <span className="ratings" style={{ width: `${Number(reviews?.Book?.avgRating)}%` }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <ul className="single-info-list mt-0 mb-0">
                                                <li className='mb-0'>
                                                    ISBN:
                                                    <strong>{reviews?.Book?.ISBN}</strong>
                                                    <hr className="divider mb-0 mt-1" />
                                                </li>
                                            </ul>
                                        <div className="product-desc  mt-0">
                                            <p className='mt-0 font2'>
                                                {reviews?.Book?.des}
                                            </p>
                                        </div>
                                        <hr className="short-divider" />
                                    </div>
                                    <div id='reviewPlace' className='col-md-8 bg-green'>
                                        <div className='reviewContent'>
                                            <img src={reviews?.User?.UserInfos?.avatar} />
                                            <div className='mb-0 name'>{reviews?.User?.username}</div>
                                            <p>{reviews?.content}</p>
                                            <div className='icons d-flex align-items-center'>
                                                <div className='me-2'>
                                                    {
                                                        
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id='forGap' className='col-3 d-flex'>
                <Card sx={{ maxWidth: 345 }}>
                    <Link to={`/category/${reviews?.id}`}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={reviews?.Book?.cover}
                            alt="Category Image"
                        />
                    </Link>
                    <CardContent>
                        <Link to={`/category/${reviews?.id}`}>
                            <Typography variant="h3">
                                {reviews?.Book?.name}
                            </Typography>
                        </Link>
                        <Typography variant="h6">
                            {reviews?.content}
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
        </>
    )
}
export default Review;