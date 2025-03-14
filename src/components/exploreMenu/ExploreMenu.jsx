import React from 'react';
import './ExploreMenu.css';
import {category} from '../../assets/image/image';
const ExploreMenu = ({ menu, setMenu }) => {
  return (
    <div className='explore-menu'>
      <h1>Explore Our Menu!</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
        ullam modi eius optio, qui autem, atque non, quis ipsam eaque quod
        possimus reiciendis laudantium. Nisi architecto non quas laudantium.
      </p>
      <div className='category'>
        {category.map((item, index) => {
          return (
            <div
              onClick={() =>
                setMenu((prev) =>
                  prev === item.cate_name ? "All" : item.cate_name
                )
              }
              key={index}
              className='category-items'>
              <div className='pic'>
                <img src={item.cata_img} alt='' className={menu===item.cate_name?'active':""} />
              </div>
              <p>{item.cate_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu