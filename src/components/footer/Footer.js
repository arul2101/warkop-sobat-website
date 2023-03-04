import React from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer>
        <div className="socials">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiFacebook /></a>
        </div>

        <div className="links">
            <a href="#">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#menu">Menu</a>
            <a href="#kontak">Kontak</a>
        </div>

        <div className="credit">
            <p>created by <a href="#">Sidiq Yanuar</a>. | &copy; 2023.</p>
        </div>
    </footer>
  )
}

export default Footer;