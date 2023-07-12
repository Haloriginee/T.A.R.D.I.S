import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // notification for adding or removing items

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = ( product, quantity ) => {

    const exist = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(exist) {

      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return{
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart`);
  }

  const increaseQuantity = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decreaseQuantity = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return1;
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
