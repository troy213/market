import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import Header from './Header'
import Footer from './Footer'
import MainPromoImg from '../../assets/kajka-75.png'
import SidePromoRight from '../../assets/eiger-down-jacket.png'
import SidePromoLeft from '../../assets/cloud-up-3.png'
import Package from '../../assets/package.svg'
import Save from '../../assets/save.svg'
import Service from '../../assets/services.svg'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const App = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1090,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1090,
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

  const productList = useFetch('http://localhost:5000/product')
  const productHot = useFetch('http://localhost:5000/product/all/hot')

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
                  Shop Now
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
                    Shop Now
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
                  <a
                    href='/products?categories=apparel'
                    className='btn-outline'
                  >
                    Shop Now
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
              {productHot.isLoading ? (
                <h1>Loading</h1>
              ) : productHot.isError ? (
                <h1>Error</h1>
              ) : (
                productHot.data.map((value) => {
                  const { product_id, name, price, image, url, description } =
                    value
                  return (
                    <Product
                      key={product_id}
                      productId={product_id}
                      name={name}
                      price={price}
                      image={image}
                      url={url}
                      description={description}
                    />
                  )
                })
              )}
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
              {productList.isLoading ? (
                <h1>Loading</h1>
              ) : productList.isError ? (
                <h1>Error</h1>
              ) : (
                productList.data.map((value) => {
                  const { product_id, name, price, image, url, description } =
                    value
                  return (
                    <Product
                      key={product_id}
                      productId={product_id}
                      name={name}
                      price={price}
                      image={image}
                      url={url}
                      description={description}
                    />
                  )
                })
              )}
            </Carousel>
          </div>

          <div className='center'>
            <a href='/products' className='btn-dark'>
              View All
            </a>
          </div>
        </main>

        <div className='services'>
          <div className='services-item'>
            <img src={Package} alt='box' className='services-img' />
            <h3>Satisfactory Guarantee</h3>
            <p>
              We ensure our customers have the best experience with the best
              quality product and competitive price from our product provider.
            </p>
          </div>
          <div className='services-item'>
            <img src={Save} alt='save' className='services-img' />
            <h3>Extra Cashback</h3>
            <p>
              Get a chance to win extra cashback and other benefits from us for
              all our loyal customers.
            </p>
          </div>
          <div className='services-item'>
            <img src={Service} alt='service' className='services-img' />
            <h3>Customer Service</h3>
            <p>
              If you have any questions or suggestions, we provide our contact
              below. Our customer service will be ready to help 24 / 7.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const Product = (props) => {
  return (
    <Link
      to={{
        pathname: `/products/${props.url}`,
        state: {
          productId: `${props.productId}`,
          image: `${props.image}`,
          name: `${props.name}`,
          price: `${props.price}`,
          description: `${props.description}`,
        },
      }}
    >
      <div className='card'>
        <div className='image-container'>
          <img src={props.image} alt='products' className='product-image' />
        </div>
        <div className='product-desc'>
          <p>{props.name}</p>
          <p>$ {props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default App
