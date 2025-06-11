import React from "react";
import logo from '../../public/logo/Mystrix-IT-Logo.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div id="header_container">
        <div id="header_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div id="navbar">
        <ul>
            <li>
                <Link className='link' to="/">Home</Link>
            </li>
            <li>
                <Link className='link' to="/about">About</Link>
            </li>
            <li>
                <Link className='link' to="/Product">Product</Link>
            </li>
            
        </ul>

        </div>
    <div id="actions">
        <ul>
            <li>
                <button>sign In</button>
            </li>
            <li>
                <button>sign Up</button>
            </li>
        </ul>
    </div>
      </div>
    </div>
  )
}

export default Header

