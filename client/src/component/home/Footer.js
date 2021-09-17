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
            <button type='submit' className='subscribe-submit'>
              Send
            </button>
          </form>
        </Accordion>
        <Accordion title='Contact' collapse={accordionCollapse}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
            sunt illum asperiores autem aliquam accusamus? Vero blanditiis
            nostrum voluptatem, facere, debitis velit fugiat deleniti quae
            distinctio iusto possimus. Doloremque!
          </p>
        </Accordion>
        <Accordion title='FAQ' collapse={accordionCollapse}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            earum quas eaque adipisci, assumenda dicta sint dolor quos in hic
            blanditiis voluptas corrupti
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
