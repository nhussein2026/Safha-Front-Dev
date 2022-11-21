import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import featureImg1 from "../../assets/images/demoes/demo25/products/product-6.jpg"

import "./EmblaCarousel.css"
const EmblaCarousel = () => {


  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="embla__slide">
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="embla__slide">
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
              <div className='col-6 col-md-4 col-xl-2'>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="demo25-product.html">
                      <img src={featureImg1} width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel;