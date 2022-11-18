import { useEffect, useState } from "react";
import card from "../../assets/images/logo.png"
import SingleCategoryElement from "./SingleCategoryElementGhadir";

const HomeCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
      const getCategories = async () => {
          const categoriesList = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`, {
              method: 'get',
              headers: {
                  'Content-Type': 'application/json',
              }
          })
          const json = await categoriesList.json()
          console.log(json)
          if (json?.success) {
              setCategories(json?.data)
          }
      }
      getCategories()
  }, [])
  return (
    <main className="main">
      <div className="intro-section">
        
      </div>
      <section className="featured-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-b-3">
              <div className="banner banner2 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-2.jpg)', backgroundColor: '#343339'}} data-animation-name="fadeInRightShorter" data-animation-delay={200}>
                
              </div>
            </div>
            <div className="col-lg-4 m-b-3">
              <div className="banner banner3 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-3.jpg)', backgroundColor: '#343436'}} data-animation-name="fadeInRightShorter" data-animation-delay={400}>
                <div className="banner-layer">
                  <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                  <p className="font2 m-b-3">21 Books</p>
                  <a href="demo25-shop.html" className="btn btn-secondary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-b-5">
              <div className="banner banner4 appear-animate" style={{backgroundImage: 'url(assets/images/demoes/demo25/banners/banner-4.jpg)', backgroundColor: '#343436'}} data-animation-name="fadeInRightShorter" data-animation-delay={600}>
                <div className="banner-layer">
                  <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                  <p className="font2 m-b-3">38 Books</p>
                  <a href="demo25-shop.html" className="btn btn-teritary">View Collections<i className="fas fa-long-arrow-alt-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
            <h2 className="section-title pb-3 mb-2">Featured Books</h2>
            <div className="row">
              {
                  categories.map((category, i) => {
                      return <SingleCategoryElement category={category} key={i} />
                  })
              }
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
      
}

export default HomeCategories;