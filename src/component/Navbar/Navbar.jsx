import React from 'react'
import "./Navbar.css"
import { GrCart } from 'react-icons/gr';
import { IoSearchSharp } from 'react-icons/io5';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">LOGO</h3>

        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className='left'>
          <div className="cart">
            <GrCart size={20} />
            <span>Cart</span>
          </div>

          <div className="search-box">
            <input type="search" placeholder="Search..." />
            <IoSearchSharp size={20} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar