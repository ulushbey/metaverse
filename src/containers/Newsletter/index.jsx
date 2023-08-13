import React from 'react'

const Newsletter = () => {
  return (
          <section className='newsletter-section padding-top halka_gradient padding-bottom pt-xl-210 pb-lg-395'>
        <img
          className='newsletter-shape'
          src='assets/images/banner/banner-shape.png'
          alt='banner'
        />
        <div className='container'>
          <div className='newsletter-wrapper'>
            <h2 className='title wow fadeInUp'>
              <span className='d-xl-block'>Subscribe to get notified</span>{' '}
              about new templates and updates
            </h2>
            <form className='newsletter-form wow fadeInUp'>
              <div className='nform-group input-group'>
                <label htmlFor='email'>
                  <img
                    src='assets/images/newsletter/label.png'
                    alt='newsletter'
                  />
                </label>
                <input
                  type='text'
                  placeholder='Email Address'
                  name='email'
                  id='email'
                />
              </div>
              <div className='nform-group button-group'>
                <button
                  type='button'
                  className='custom-button'
                  id='subs'
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p
              className='py-2 text-white'
              id='suc'
            >
              Thank you for subscribe!
            </p>
            <p
              className='py-2 text-danger'
              id='err'
            >
              Something Went Wrong!
            </p>
            <div className='bottom-text text-center wow fadeInUp'>
              <span className='text-pink'>Note:</span> Don't worry. We won't
              spam you!
            </div>
          </div>
        </div>
      </section>
  )
}

export default Newsletter