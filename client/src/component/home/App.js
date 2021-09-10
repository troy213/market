import React from 'react'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import avatar from '../../assets/avatar-default.jpg'
import './App.css'

const App = (props) => {
  React.useEffect(() => {
    const test = document.getElementById('test')
    if (test.scrollWidth) {
      console.log(document.getElementById('test').scrollWidth)
    }
  })

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <h1 className='logo'>Logo</h1>
          <input type='text' className='search-bar' placeholder='search' />
          <div className='nav-utils'>
            <i className='fa fa-search search'></i>
            <i className='fa fa-shopping-cart cart'></i>
            <img src={avatar} alt='avatar' className='avatar' />
            <p>login</p>
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
          <section className='slider hot-products' id='test'>
            <i className='fa fa-chevron-left chevron left'></i>
            <i className='fa fa-chevron-right chevron right'></i>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </section>

          <h2>All Products</h2>
          <section className='slider all-products'>
            <i className='fa fa-chevron-left chevron left'></i>
            <i className='fa fa-chevron-right chevron right'></i>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </section>

          <div className='center'>
            <a href='/' className='btn-outline'>
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
  return <div className='card'></div>
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
