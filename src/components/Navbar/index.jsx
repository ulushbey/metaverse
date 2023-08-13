import React from 'react'
import navbarData from '../../data/navbar.data'

const Navbar = () => {
  return (
    <header className='header-section'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo'>
              <a href='#'>
                <img
                  src='assets/images/logo/logo.png'
                  alt='logo'
                />
              </a>
            </div>
            <ul className='menu'>
              {
                navbarData.map((item, index) => (
                    <li>
                <a href={item.path}>{item.title}</a>
              </li>
                ))
              }
              <li className='d-sm-none text-center'>
                <a
                  href='#contact'
                  className='header-button'
                >
                  Bizga murojaat
                </a>
              </li>
            </ul>
            <div className='header-bar d-md-none mr-sm-3'>
              <span />
              <span />
              <span />
            </div>
            <div className='header-right'>
              <a
                href='#contact'
                className='header-button d-none d-sm-inline-block m-0'
              >
                Bizga murojaat
              </a>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar