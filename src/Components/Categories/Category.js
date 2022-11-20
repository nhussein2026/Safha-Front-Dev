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



const Category = ({category}) => {
    const images = [
        {
            politicsImg: "../../assets/images/categories/cover/arts-photography.jpg"
        },
        {
            NovalImage: "../../assets/images/categories/cover/literature-fiction.jpg"
        },
        {
            NonFictionImg: "../../assets/images/categories/cover/scifi-fantasy.jpg"
        },
        {
            religionImg: "../../assets/images/categories/cover/business-investing.jpg"
        }
    ]
    const randomimg = images[Math.floor(Math.random() * images.length)]
    return(
        <>
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
                                image={randomimg}
                                alt="Category Image"
                            />
                            <CardContent>
                                <Typography variant="h3">{category?.name}</Typography>
                                <Typography variant="h6">
                                {category?.des}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
        </>
    )
}
export default Category;