import React from 'react'

const index = () => {
  return (
    <section className='process-section padding-top'>
        <div className='container'>
          <div className='section-header wow fadeInUp'>
            <h2 className='title'>Bizni jarayon</h2>
          </div>
          <div className='row justify-content-center mb--45 wow fadeInUp'>
            <div className='col-md-6 col-lg-4'>
              <div className='process-item'>
                <div className='process-thumb'>
                  <img
                    src='assets/images/process/01.png'
                    alt='process'
                  />
                </div>
                <div className='process-content'>
                  <p>
                    We start with a planning call to understand all your needs,
                    goals and requirements. Once with that, we organize an
                    action plan to get started.
                  </p>
                  <a
                    href='#0'
                    className='pro-button'
                  >
                    Jarayonni boshlash
                    <i className='fas fa-arrow-right' />
                  </a>
                </div>
                <div className='process-bottom'>
                  <div className='abs-title'>1st step</div>
                  <h3 className='title'>Idea</h3>
                  <span className='plus-icon' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='process-item active'>
                <div className='process-thumb'>
                  <img
                    src='assets/images/process/02.png'
                    alt='process'
                  />
                </div>
                <div className='process-content'>
                  <p>
                    We create a design mockup of your website, and present it to
                    you to start the iteration process. In this way, we ensure
                    you love the final design.
                  </p>
                  <a
                    href='#0'
                    className='pro-button'
                  >
                    Iqtibos Olish
                    <i className='fas fa-arrow-right' />
                  </a>
                </div>
                <div className='process-bottom'>
                  <div className='abs-title'>2nd step</div>
                  <h3 className='title'>Design</h3>
                  <span className='plus-icon active' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='process-item'>
                <div className='process-thumb'>
                  <img
                    src='assets/images/process/03.png'
                    alt='process'
                  />
                </div>
                <div className='process-content'>
                  <p>
                    We start the website build on following the best web
                    development practices, to ensure you have a top notch, high
                    performing website.
                  </p>
                  <a
                    href='#0'
                    className='pro-button'
                  >
                    Loyihani boshlash
                    <i className='fas fa-arrow-right' />
                  </a>
                </div>
                <div className='process-bottom'>
                  <div className='abs-title'>3rd step</div>
                  <h3 className='title'>Develop.</h3>
                  <span className='plus-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default index