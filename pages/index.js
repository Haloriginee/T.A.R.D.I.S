import React from 'react';

import { HeroBanner, Product, FooterBanner } from '../components';
import { client } from "../lib/client";

const Home = ({ productsData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}

      <div className='products-heading'>
        <h2>
          Timepiece Adventurer's Remarkable Device for Instant Synchronization
        </h2>
        <p>
          "Time management? More like a mythical creature I haven't met yet."
        </p>
      </div>

      <div className='products-container'>
        {productsData?.map((product) => product.name)}
      </div>

      <FooterBanner/>
    </>
  )
}

export async function getServerSideProps() {
  const productQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData }
  }
}

export default Home
