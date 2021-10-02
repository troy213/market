import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [accordionCollapse, setAccordionCollapse] = useState(false)

  const getSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
    if (size < 707) {
      setAccordionCollapse(false)
    } else {
      setAccordionCollapse(true)
    }

    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [size, accordionCollapse])

  return (
    <footer>
      <div className='footer-container'>
        <Accordion title='Subscribe' collapse={accordionCollapse}>
          <p>
            Do not miss the chance, subscribe to our newsletter to get the
            latest information about our products.
          </p>
          <br />
          <form>
            <input
              type='text'
              placeholder='Email'
              className='subscribe-email'
              name='email'
            />
            <button type='submit' className='subscribe-submit'>
              Send
            </button>
          </form>
        </Accordion>
        <Accordion title='About Us' collapse={accordionCollapse}>
          <p>
            This is an e-commerce demo project for my website portfolio project,
            all of the representative products above just for content for this
            website, the photo of the products I get from{' '}
            <a href='https://www.osprey.com'>Osprey</a>,{' '}
            <a href='https://www.fjallraven.com'>Fjallraven</a>,{' '}
            <a href='https://www.eigeradveture.com'>Eiger</a>, and{' '}
            <a href='https://www.naturehike.com'>Naturehike</a> website and not
            mine. For any takedown request, you can send a message through my
            website <a href='https://www.triteraerlangga.com/#contact'>here</a>
          </p>
        </Accordion>
        <Accordion title='FAQ' collapse={accordionCollapse}>
          <p>Q: Can I purchase any product in this website?</p>
          <p>
            A: No, this website just for my website portfolio project, you can
            purchase the products in <a href='https://www.osprey.com'>Osprey</a>
            , <a href='https://www.fjallraven.com'>Fjallraven</a>,{' '}
            <a href='https://www.eigeradveture.com'>Eiger</a>, and{' '}
            <a href='https://www.naturehike.com'>Naturehike</a> website for all
            the product above
          </p>
        </Accordion>
        <Accordion title='Stay Connected' collapse={accordionCollapse}>
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
        </Accordion>
      </div>
      <p className='copyright'>
        Copyright 2021 Tritera Erlangga. All Rights Reserved
      </p>
    </footer>
  )
}

const Accordion = ({ title, children, collapse }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordion-item'>
      <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <div>
          <h3>{title}</h3>
          {!collapse ? (
            <>
              {isActive || collapse ? (
                <i className='fa fa-chevron-up'></i>
              ) : (
                <i className='fa fa-chevron-down'></i>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <hr />
      </div>
      {(isActive || collapse) && (
        <div className='accordion-content'>{children}</div>
      )}
    </div>
  )
}

export default Footer
