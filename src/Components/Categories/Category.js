import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Categories.css';
import politicsImg from "../../assets/images/categories/categoriesImages/pexels-sound-on-3394660.jpg";
import religionImg from "../../assets/images/categories/cover/business-investing.jpg";
import scienceImg from "../../assets/images/categories/cover/mystery-suspense.jpg";
import NonFictionImg from "../../assets/images/categories/cover/scifi-fantasy.jpg"
import NovalImage from "../../assets/images/categories/cover/literature-fiction.jpg"




const Category = ({ category }) => {
    const images =
        [
            politicsImg,

            scienceImg,

            NovalImage,

            NonFictionImg,

            religionImg
        ]

    const randomnumber = Math.floor(Math.random() * images.length)
    console.log("image", images.NovalImage)
    const image = images[randomnumber]
    return (
        <>
            {/* the first category */}
            <div id='forGap' className='col-3 d-flex'>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt="Category Image"
                    />
                    {/* <img src={`"${image}"`} /> */}
                    <CardContent>
                        <Typography variant="h3">{category?.name}</Typography>
                        <Typography variant="h6">
                            {category?.des}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default Category;