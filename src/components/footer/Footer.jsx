import React from 'react'
import './footer.css'
import { HiOutlineMail } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>NODIRBEKDEV.TECH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="t.me/xushbaxtov"><LiaTelegramPlane/></a>
        <a href="https://www.instagram.com/nodirbek___x"><FaInstagram/></a>
        <a href="mailto:nodirbek.devoloper@gmail.com"><HiOutlineMail/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; NODIRBEKDEV.TECH . All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer