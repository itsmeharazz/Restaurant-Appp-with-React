import React, { useContext } from 'react';
import'./FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../foodItems/FoodItems';

const FoodDisplay = ({ category }) => {
 const {dish} =  useContext(StoreContext)
 return(
  <div className="food-display">
    <h2>Top Dishes Near You</h2>
    <div className="food-display-list">
      {
        dish.map((items,index)=>{
          if(category === "all" || category == items.category){
            return (<FoodItems key={index} id={items._id} name={items.name} image={items.image} description={items.description} price={items.price}  />)

          }
        })
      }
    </div>
  </div>
 )
};

export default FoodDisplay