import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import toast from "react-hot-toast";

const Cart = () => {

  const cartRef = useRef();
  const { cartItems, totalQuantities, totalPrice, setShowCart } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef} >
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>
            Cart
          </span>
          <span className='cart-num-items'>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
        <div className='empty-cart'>
          <AiOutlineShopping size={150} />
          <h3>
            Your Cart Is Empty
          </h3>
          <Link
            href='/'
          >
            <button
              type='button'
              className='btn'
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      <div className='product-container'>
        {cartItems.length >= 1 && cartItems.map((item, index) => (
          <div className='product' key={item._id}>
            <img
              src={urlFor(item?.image[0])}
              alt={item.name}
              className='cart-product-image'
            />
          </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Cart
