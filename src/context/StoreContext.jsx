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
 
useEffect(() => {
  console.log(cartItems);
}, [cartItems]);


  const contextValue = {dish, cartItems,setCartItems,addToCard,removeForCard};
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
