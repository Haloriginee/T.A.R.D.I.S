import React from 'react';
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='doctor-solo'>
          Hello There
        </p>
        <h3>
          T.A.R.D.I.S
        </h3>
        <img
          src=''
          alt='Watch'
          className='hero-banner-image'
        />

        <div>
          <Link
            href='/product/ID'
          >
            <button
              type='button'
            >
              Button
            </button>
          </Link>

          <div className='desc'>
            <h5>
              Description
            </h5>
            <p>
              Description
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
