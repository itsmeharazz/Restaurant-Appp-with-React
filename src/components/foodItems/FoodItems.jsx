import React, { useContext } from 'react'
import './FoodItems.css'
import { StoreContext } from '../../context/StoreContext';
import {images} from '../../assets/image/image';
const FoodItems = ({id, name, description,price,image}) => {
 const { cartItems, addToCard, removeForCard } = useContext(StoreContext);
    return (
      <div className='food-item'>
        <div className='food-items-img-container'>
          <img src={image} alt='' className='dish-image' />
          {!cartItems[id] ? (
            <img
              src={images.plus}
              className='add-icon'
              alt=''
              onClick={() => addToCard(id)}
            />
          ) : (
            <div className='food-item-count'>
              <img
                src={images.cross}
                className='cross-icon'
                alt=''
                onClick={() => removeForCard(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={images.plus}
                className='plus'
                 alt=''
                onClick={() => addToCard(id)}
              />
            </div>
          )}
        </div>
        <div className='food-info'>
          <div className='rating'>
            <p>{name}</p>
            <p>{name}</p>
          </div>
          <p className='dish-descrip'>{description}</p>
          <p className='dish-price'>${price}</p>
        </div>
      </div>
    );
};

export default FoodItems
