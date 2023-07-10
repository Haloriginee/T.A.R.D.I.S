import React from 'react';

import { HeroBanner, Product, FooterBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>
          Timepiece Adventurer's Remarkable Device for Instant Synchronization
        </h2>
        <p>
          "Time management? More like a mythical creature I haven't met yet."
        </p>
      </div>

      <div className='products-container'>
{        ["Product 1", "Product 2"].map((product) => product)
}      </div>

      <FooterBanner/>
    </>
  )
}

export default Home
