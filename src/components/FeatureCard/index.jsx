import React from 'react'

const FeatureCard = ({item}) => {
  return (
    <div className='col-xl-3 col-lg-4 col-sm-6 wow fadeInUp'>
              <div className='feature-item'>
                <div className='feature-thumb'>
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className='feature-content'>
                  <h3 className='title'>{item.title}</h3>
                  <p>{item.text}
                  </p>
                </div>
              </div>
            </div>
  )
}

export default FeatureCard