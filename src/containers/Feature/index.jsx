import React from 'react'
import Title from '../../components/Navbar/Title'
import featureData from '../../data/feature.data'
import FeatureCard from '../../components/FeatureCard'

const Feature = () => {
  return (
    <section
        className='feature-section pos-rel padding-top'
        id='feature'
      >
        <div
          className='feature-bg bg_img top_center'
          data-background='assets/images/feature/feature-bg.png'
        ></div>
        <div className='container'>
          <div className='row justify-content-center justify-content-xl-end'>
            <div className='col-xl-6 wow fadeInUp'>
              <div className='section-header left-style'>
                <Title
                title={'Nima bizni boshqalardan ustun qiladi?'}
                text={'Qarang buyuk kelajak sizni kutmoqda, siz nimani kutyabsiz?'}
                />
              </div>
            </div>
            {
            featureData.map((item, index) => (
                <FeatureCard item={item} key={index} />
            ))
            }
            
          </div>
          <div className='row justify-content-end wow fadeInUp'>
            <div className='col-xl-9'>
              <div className='feature-bottom-content'>
                <p>
                  And much, much more! Each Template designed by our team is
                  carefully designed to always deliver you and your users the
                  best experience possible.
                </p>
                <a
                  href='#contact'
                  className='custom-button'
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feature