import React, { useState } from "react";
import "./nav.css";
import { images } from "../../assets/image/image";
import { Link } from "react-router-dom";
const Nav = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={images.logo} className='logo' alt='' />
      </Link>
      <ul className='nav-menu'>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}>
          Home
        </li>
        <li
          onClick={() => setMenu("items")}
          className={menu === "items" ? "active" : ""}>
          Items
        </li>
        <li
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}>
          App
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}>
          Contacts us
        </li>
      </ul>
      <div className='nav-right'>
        <div className='busket'>
          <Link to='/cart'>
            <img src={images.basket} className='cart' alt='' />
          </Link>
          <div className='count-items'>
            <span>0</span>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Nav;
