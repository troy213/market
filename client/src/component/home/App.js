import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import MainPromoImg from '../../assets/kajka-75.png'
import SidePromoRight from '../../assets/eiger-down-jacket.png'
import SidePromoLeft from '../../assets/cloud-up-3.png'
import Package from '../../assets/package.svg'
import Save from '../../assets/save.svg'
import Service from '../../assets/services.svg'
import { Link } from 'react-router-dom'
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
        min: 575,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    xs: {
      breakpoint: {
        max: 575,
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
              <div className='promo-content-desc'>
                <h3>Carrier</h3>
                <p>Find your best suitable pack for your hike</p>
                <a href='/products?categories=carrier' className='btn-outline'>
                  Buy Now
                </a>
              </div>
              <img
                src={MainPromoImg}
                alt='main-promo'
                className='promo-content-image'
              />
            </div>
          </div>
          <div className='side-promo'>
            <div className='side-promo-item first'>
              <div className='promo-content'>
                <div className='promo-content-desc'>
                  <h3>Tent</h3>
                  <p>Light yet durable for the best hike experience</p>
                  <a href='/products?categories=tent' className='btn-outline'>
                    Buy Now
                  </a>
                </div>
                <img
                  src={SidePromoLeft}
                  alt='side-promo'
                  className='promo-content-image'
                />
              </div>
            </div>
            <div className='side-promo-item second'>
              <div className='promo-content'>
                <div className='promo-content-desc'>
                  <h3>Jacket</h3>
                  <p>Keep your body warm with high fill power down jacket</p>
                  <a href='/products?categories=jacket' className='btn-outline'>
                    Buy Now
                  </a>
                </div>
                <img
                  src={SidePromoRight}
                  alt='side-promo'
                  className='promo-content-image'
                />
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
                url='aether-70'
                image='/img/products/backpack/aether-70-grey-1.jpg'
                title='Aether 70'
                price='330'
              />
              <Product
                url='atmos-ag-65'
                image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
                title='Atmos AG 65'
                price='300'
              />
              <Product
                url='kajka-75'
                image='/img/products/backpack/kajka-75-1.jpg'
                title='Kajka 75'
                price='450'
              />
              <Product
                url='aircontact-70'
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
                url='aether-70'
                image='/img/products/backpack/aether-70-grey-1.jpg'
                title='Aether 70'
                price='330'
              />
              <Product
                url='aircontact-70'
                image='/img/products/backpack/aircontact-pro-70+15-1.png'
                title='Aircontact 70'
                price='300'
              />
              <Product
                url='atmos-ag-65'
                image='/img/products/backpack/atmos-ag-65-grey-1.jpg'
                title='Atmos AG 65'
                price='300'
              />
              <Product
                url='kajka-75'
                image='/img/products/backpack/kajka-75-1.jpg'
                title='Kajka 75'
                price='450'
              />

              <Product />
              <Product />
            </Carousel>
          </div>

          <div className='center'>
            <a href='/products' className='btn-outline dark'>
              View All
            </a>
          </div>
        </main>

        <div className='services'>
          <div className='services-item'>
            <img src={Package} alt='box' className='services-img' />
            <h3>Satisfactory Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              consequuntur hic facilis perferendis
            </p>
          </div>
          <div className='services-item'>
            <img src={Save} alt='save' className='services-img' />
            <h3>Extra Cashback</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              consequuntur hic facilis perferendis
            </p>
          </div>
          <div className='services-item'>
            <img src={Service} alt='service' className='services-img' />
            <h3>Customer Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              consequuntur hic facilis perferendis
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

const Product = (props) => {
  return (
    <Link
      to={{
        pathname: `/products/${props.url}`,
        state: {
          image: `${props.image}`,
          title: `${props.title}`,
          price: `${props.price}`,
        },
      }}
    >
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
    </Link>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
