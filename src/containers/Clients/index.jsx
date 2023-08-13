import React from 'react'

const Clients = () => {
  return (
    <section
        className='clients-section pos-rel padding-top padding-bottom pt-xl-175 oh'
        id='testimonials'
      >
        <div className='client-section-header'>
          <div
            className='bg_img'
            data-background='assets/images/client/client-bg.jpg'
          />
          <div className='container'>
            <div className='client-header wow fadeInUp'>
              <h2 className='title'>Feedback</h2>
              <p>We create our products with passion and love.</p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mt--70'>
            <div className='offset-md-2 offset-xl-4 col-md-10 col-xl-8'>
              <div className='client-item wow fadeInUp'>
                <div className='client-thumb'>
                  <img
                    src='assets/images/client/01.png'
                    alt='client'
                  />
                </div>
                <div className='client-content'>
                  <h4 className='title'>Denis Pakhaliuk</h4>
                  <p>
                    Templates by these guys perfectly match our needs and Pixner
                    helps to shape that future today by creating some great
                    templates.
                  </p>
                </div>
              </div>
            </div>
            <div className='offset-xl-1 col-md-10 col-xl-8'>
              <div className='client-item wow fadeInUp'>
                <div className='client-thumb'>
                  <img
                    src='assets/images/client/02.png'
                    alt='client'
                  />
                </div>
                <div className='client-content'>
                  <h4 className='title'>Nicole Caba</h4>
                  <p>
                    Pixner templates are amazing. It's like they read my mind!
                    The design and quality of code is excellent.
                  </p>
                </div>
              </div>
            </div>
            <div className='offset-md-2 offset-xl-3 col-md-10 col-xl-8'>
              <div className='client-item wow fadeInUp'>
                <div className='client-thumb'>
                  <img
                    src='assets/images/client/03.png'
                    alt='client'
                  />
                </div>
                <div className='client-content'>
                  <h4 className='title'>Deena Fox</h4>
                  <p>
                    Pixner design did an excellent job designing my website.I am
                    so happy I chose pixner Web Design to do this for me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Clients