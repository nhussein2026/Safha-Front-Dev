import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Categories.css';
import CategoryImg1 from "../../assets/images/categories/categoriesImages/pexels-pixabay-48020.jpg";
import CategoryImg2 from "../../assets/images/categories/categoriesImages/book-4916655_960_720.jpg";
import CategoryImg3 from "../../assets/images/categories/categoriesImages/715667.jpg";
import CategoryImg4 from "../../assets/images/categories/categoriesImages/5a00d3720e8525eec2752fd9.png";
import CategoryImg5 from "../../assets/images/categories/categoriesImages/ef54004d7b0bb041f6449a21ca56ebcc.jpg";
import CategoryImg6 from "../../assets/images/categories/categoriesImages/depositphotos_5849562-stock-photo-composition-with-stack-of-books.jpg";
import CategoryImg7 from "../../assets/images/categories/categoriesImages/books-education-school-literature-wallpaper.jpg";
import CategoryImg8 from "../../assets/images/categories/categoriesImages/532-5323584_open-book-with-apple-clipart-graphic-library-download.png";
import CategoryImg9 from "../../assets/images/categories/categoriesImages/883-material-retro-books-articles.jpg";
import CategoryImg10 from "../../assets/images/categories/categoriesImages/AdobeStock_38970571.jpeg";
import CategoryImg11 from "../../assets/images/categories/categoriesImages/shutterstock_112499642.jpg";
import CategoryImg12 from "../../assets/images/categories/categoriesImages/5a00d35d0e8525eec2752fd8.png";
import CategoryImg13 from "../../assets/images/categories/categoriesImages/PNGPIX-COM-Opened-Book-PNG-Transparent-Image.png";
import CategoryImg14 from "../../assets/images/categories/categoriesImages/books-on-white-14658344378sO.jpg";
import CategoryImg15 from "../../assets/images/categories/categoriesImages/editor-1.jpg";
import CategoryImg16 from "../../assets/images/categories/categoriesImages/PNGPIX-COM-Open-Book-PNG-Transparent-Image.png";
import CategoryImg17 from "../../assets/images/categories/categoriesImages/screen-9.jpg";
import CategoryImg18 from "../../assets/images/categories/categoriesImages/kZSZwX-zfaND6Z.png";
import CategoryImg19 from "../../assets/images/categories/categoriesImages/131858-antique-book-free-hd-image.png";
import CategoryImg20 from "../../assets/images/categories/categoriesImages/depositphotos_6111711-stock-photo-books-isolated-on-a-white.jpg";
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const images = [
        CategoryImg1, CategoryImg2, CategoryImg3,CategoryImg4, CategoryImg5, CategoryImg6,
        CategoryImg7, CategoryImg8, CategoryImg9, CategoryImg10, CategoryImg11,
        CategoryImg12, CategoryImg13, CategoryImg14, CategoryImg15, CategoryImg16,
        CategoryImg17, CategoryImg18, CategoryImg19, CategoryImg20
    ]
    const randomnumber = Math.floor(Math.random() * images.length)
    const image = images[randomnumber]
    return (
        <>
            {/* the first category */}
            <div id='forGap' className='col-3 d-flex'>
                <Card sx={{ maxWidth: 345 }}>
                    <Link to={`/category/${category?.id}`}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={image}
                            alt="Category Image"
                        />
                    </Link>
                    {/* <img src={`"${image}"`} /> */}
                    <CardContent>
                        <Link to={`/category/${category?.id}`}>
                            <Typography variant="h3">
                                {category?.name}
                            </Typography>
                        </Link>
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