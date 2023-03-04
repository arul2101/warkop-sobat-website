import React, { useState } from 'react';
import './navbar.css';
import { FiMenu } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => { setToggle(!toggle) };

  return (
    <nav>
        <div className="navbar-title">
            <a href="#">Warkop<span>Sobat</span></a>
        </div>

        <div className="navbar-menu" id={toggle ? "active" : ""}>
            <a href="#">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#kontak">Kontak</a>
        </div>

        <div className="toggle">
            <FiSearch className='icon search' />
            <RiShoppingCartLine className="icon shop" />
            {toggle ? <FiX className='icon menu' onClick={handleToggle}/> : <FiMenu className='icon menu' onClick={handleToggle}/>}
        </div>
    </nav>
  )
}

export default Navbar;