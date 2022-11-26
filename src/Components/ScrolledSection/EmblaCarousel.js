import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import featureImg1 from "../../assets/images/demoes/demo25/products/product-6.jpg"

import "./EmblaCarousel.css"
import SingleBookElement from '../Books/SingleBookElement/SingleBookElement';
const EmblaCarousel = () => {
  const [books, setBooks] = useState([])
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  useEffect(() => {
    const getBooks = async () => {
        const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await booksList.json()
        console.log(json)
        if (json?.success) {
            setBooks(json?.data)
        }
    }
    getBooks()
}, [])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className='container'>
            <div className='row'>
              {
                books.map((book, i) => {
                  if(i>7 && i <12){
                    return <SingleBookElement book={book} key={i} customize="embla" />
                  } 
                })
              }
              {/* <div className='col-6 col-md-4 col-xl-2'> */}
            </div>
          </div>
          
        </div>
        <div className="embla__slide">
          <div className='container'>
            <div className='row'>
            {
                books.map((book, i) => {
                  if(i>1 && i <6){
                    return <SingleBookElement book={book} key={i} customize="embla" />
                  }  
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel;