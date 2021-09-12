import React from 'react'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import avatar from '../../assets/avatar-default.jpg'
import './App.css'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const App = (props) => {
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

  let myFormRef = null

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      myFormRef.submit()
    }
  }

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <a href='/'>
            <h1 className='logo'>Logo</h1>
          </a>
          <form ref={(input) => (myFormRef = input)}>
            <input
              type='text'
              className='search-bar'
              name='search'
              placeholder='search'
              onKeyDown={onEnterPress}
            />
          </form>
          <div className='nav-utils'>
            <i className='fa fa-search search'></i>
            <i className='fa fa-shopping-cart cart'></i>
            <a href='/login' className='login'>
              <img src={avatar} alt='avatar' className='avatar' />
              <p>login</p>
            </a>
          </div>
        </div>
      </nav>

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

      <footer>
        <div className='footer-container'>
          <div className='footer-content subscribe'>
            <h3>Subscribe</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
              nibh commodo maecenas sed.
            </p>
            <form>
              <input
                type='text'
                placeholder='Email'
                className='subscribe-email'
                name='email'
              />
              <br />
              <button type='submit' className='subscribe-submit'>
                Send
              </button>
            </form>
          </div>
          <div className='footer-content contact'>
            <h3>Contact</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
              sunt illum asperiores autem aliquam accusamus? Vero blanditiis
              nostrum voluptatem, facere, debitis velit fugiat deleniti quae
              distinctio iusto possimus. Doloremque!
            </p>
          </div>
          <div className='footer-content faq'>
            <h3>FAQ</h3>
            <hr />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            earum quas eaque adipisci, assumenda dicta sint dolor quos in hic
            blanditiis voluptas corrupti
          </div>
          <div className='footer-content socials'>
            <h3>Stay Connected</h3>
            <hr />
            <div>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-instagram'>&nbsp;</i>
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-facebook'>&nbsp;</i>
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-twitter'>&nbsp;</i>
                <span>Twitter</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-youtube'>&nbsp;</i>
                <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
        <p className='copyright'>
          Copyright 2021 Tritera Erlangga. All Rights Reserved
        </p>
      </footer>
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
