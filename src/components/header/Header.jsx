import React from 'react'
import './header.css'
import CTA from './CTA'
import { me } from '../../assets'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nodirbek</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <Socials/>

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header