import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NovalImage from "../../assets/images/categories/cover/literature-fiction.jpg"
import './Categories.css';
import politicsImg from "../../assets/images/categories/cover/arts-photography.jpg";
import religionImg from "../../assets/images/categories/cover/business-investing.jpg";
import scienceImg from "../../assets/images/categories/cover/mystery-suspense.jpg";
import NonFictionImg from "../../assets/images/categories/cover/scifi-fantasy.jpg"

const Categories = () => {
    const randomImg = [
        
    ]
    return (
        <>
            <div className='container'>
            <div className='row'>
            <h2 className="section-title pb-3 mb-3">Categories</h2>
                <div id='forGap' className='col-12 d-flex'>
                    {/* the first category */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={NovalImage}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">Politics</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* the second category */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={politicsImg}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">Novels</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>


                    {/* third category */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={religionImg}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">Religion</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div id='forGap' className='col-12 d-flex'>
                    {/* 4th Category */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={scienceImg}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">Scientific</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* 5th Category */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={religionImg}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">None-Fiction</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* 6th Categry */}
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={NonFictionImg}
                            alt="Category Image"
                        />
                        <CardContent>
                            <Typography variant="h3">Fiction</Typography>
                            <Typography variant="h6">
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            </div>
        </>

    );
}
export default Categories