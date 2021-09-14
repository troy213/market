import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content subscribe'>
          <h3>Subscribe</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, nibh
            commodo maecenas sed.
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            earum quas eaque adipisci, assumenda dicta sint dolor quos in hic
            blanditiis voluptas corrupti
          </p>
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
  )
}

export default Footer
