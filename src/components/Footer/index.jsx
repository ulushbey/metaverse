import React from 'react'

const Footer = () => {
  return (
    <footer
        className='footer-section'
        id='contact'
      >
        <div
          className='bottom-left-shape tup_kore wow d-none d-xl-block'
          data-wow-delay='.5s'
        >
          <img
            src='assets/images/footer/bottom-left.png'
            alt='footer'
          />
        </div>
        <div
          className='bottom-right-shape tup_kore wow d-none d-xl-block'
          data-wow-delay='.5s'
        >
          <img
            src='assets/images/footer/bottom-right.png'
            alt='footer'
          />
        </div>
        <div className='footer-shape d-none d-xl-block'>
          <img
            className='wow tup_kore'
            src='assets/images/footer/footer-shape.png'
            alt='footer'
          />
        </div>
        <div className='container'>
          <div className='footer-wrapper wow fadeInUp'>
            <h2 className='title'>Work With Us</h2>
            <p>
              Do you need help with any web design or development project? Let
              us give you a hand. Get in touch with us and we will get back to
              you
              <br /> within 1-2 business days.
            </p>
            <ul className='social-icons'>
              <li>
                <a href='Mailto:pixeltheme96@gmail.com'>
                  <img
                    src='assets/images/footer/email.png'
                    alt='footer'
                  />
                </a>
              </li>
              <li>
                <a href='skype:md.shahidul349?chat'>
                  <img
                    src='assets/images/footer/skype.png'
                    alt='footer'
                  />
                </a>
              </li>
              <li>
                <a href='https://wa.me/8801622700050'>
                  <img
                    src='assets/images/footer/whatspp.png'
                    alt='footer'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-bottom'>
            <p>Copyright © pixner.net | 2020</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer