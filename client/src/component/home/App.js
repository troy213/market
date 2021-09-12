import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const App = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1080,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1080,
        min: 830,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 830,
        min: 570,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    xs: {
      breakpoint: {
        max: 570,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  }

  return (
    <>
      <Header value='' />

      <div className='container'>
        <section className='promo'>
          <div className='main-promo'>
            <div className='promo-content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, placeat aspernatur ad tempora quisquam rem deserunt.
              </p>
              <div>
                <a href='/' className='btn-outline'>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className='side-promo'>
            <div className='side-promo-item'>
              <div className='promo-content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <a href='/' className='btn-outline'>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className='side-promo-item'>
              <div className='promo-content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                  <a href='/' className='btn-outline'>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className='main'>
          <h2>Hot Products</h2>
          <div className='hot-products'>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=''
              containerClass='slider-container'
              dotListClass=''
              draggable
              focusOnSelect={false}
              itemClass=''
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=''
              slidesToSlide={1}
              swipeable
            >
              <Product
                image='/img/products/backpack/aether-70-grey-1.jpg'
                title='Aether 70'
                price='330'
              />
              <Product
                image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
                title='Atmos AG 65'
                price='300'
              />
              <Product
                image='/img/products/backpack/kajka-75-1.jpg'
                title='Kajka 75'
                price='450'
              />
              <Product
                image='/img/products/backpack/aircontact-pro-70+15-1.png'
                title='Aircontact 70'
                price='300'
              />
              <Product />
              <Product />
            </Carousel>
          </div>

          <h2>All Products</h2>
          <div className='all-products'>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=''
              containerClass='slider-container'
              dotListClass=''
              draggable
              focusOnSelect={false}
              itemClass=''
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=''
              slidesToSlide={1}
              swipeable
            >
              <Product
                image='/img/products/backpack/aether-70-grey-1.jpg'
                title='Aether 70'
                price='330'
              />
              <Product
                image='/img/products/backpack/aircontact-pro-70+15-1.png'
                title='Aircontact 70'
                price='300'
              />
              <Product
                image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
                title='Atmos AG 65'
                price='300'
              />
              <Product
                image='/img/products/backpack/kajka-75-1.jpg'
                title='Kajka 75'
                price='450'
              />

              <Product />
              <Product />
            </Carousel>
          </div>

          <div className='center'>
            <a href='/products' className='btn-outline'>
              View All
            </a>
          </div>
        </main>

        <div className='services'>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

const Product = (props) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={props.image} alt='products' className='product-image' />
      </div>
      <div className='product-desc'>
        <p>
          <strong>{props.title}</strong>
        </p>
        <p>$ {props.price}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
