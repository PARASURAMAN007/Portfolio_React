import React from 'react'
import './Hero.css'
import profile from '../../Components/Navbar/assets/img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="profile" />
        <h1><span>I'm Parasuraman,</span> frontend developer.</h1>
        <p>I'm a Creative Designer and I make things work.Turning your dreams into reality</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
              </div>
            <div className="hero-resume">
            <a href='/resume.pdf' download>My resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero