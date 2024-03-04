import React from 'react'

import banner2 from '../../src/assets/bannr_2.avif'
import { Products } from './Products'

export const Home = () => {
  return (
    <div className='hero'>

        <div className="card text-bg-dark">
        <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">

                  <h5 className="card-title display-3 fw-bolder mb-0 text-center" style={{color:'white'}}>El mundo gaming mas espectacular</h5>
                  <p className="card-text text-center" style={{color:'white',marginBottom:10}}>Tenemos una gran variedad de productos para ti, acercate a nosotros</p>
              </div>
            
          </div>
          <img src={banner2} class="card-img" alt="banner" height={550}/>
        </div>
        <div>
          <Products/>
        </div>
    </div>
  )
}
