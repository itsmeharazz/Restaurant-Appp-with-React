import React, { createContext, useState, useEffect } from "react";
import { dish } from "../assets/image/image";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
 const [cartItems, setCartItems] = useState({})

 const addToCard=(itemId)=>{
    if (!cartItems[itemId]){
        setCartItems((prev)=>({
            prev,[itemId]:1
        }))
    }else {
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1
        }));
    }
 }
 const removeForCard=(itemId)=>{
    setCartItems((prev)=>({
        ...prev,[itemId]:prev[itemId]-1
    }))
 }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = dish.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
 
useEffect(() => {
  console.log(cartItems);
}, [cartItems]);


  const contextValue = {
    dish,
    cartItems,
    setCartItems,
    addToCard,
    removeForCard,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
