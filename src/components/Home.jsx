import React from 'react'

import banner2 from '../../src/assets/banner2.jpg'
import { Products } from './Products'

export const Home = () => {
  return (
    <div className='hero'>

        <div className="card text-bg-dark">
        <img src={banner2} class="card-img" alt="banner" height={550}/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">

                  <h5 className="card-title display-3 fw-bolder mb-0 text-center" style={{color:'#ff4500'}}>El mundo de comida mas espectacular</h5>
                  <p className="card-text lead fs-2 text-center" style={{color:'#ff4500'}}>Tenemos una gran variedad de productos y comercios para ti, acercate a nosotros</p>
              </div>
            
          </div>
        </div>
        <div>
          <Products/>
        </div>
    </div>
  )
}
