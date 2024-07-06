import React from 'react'
import './About.css'
import theme_pattern from '../Navbar/assets/theme_pattern.svg'
import profile_img from '../Navbar/assets/about_profile.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I've been working on WebDevelopment and I'm pretty good at Coding. I love working in Peaceful Environment.</p>
                    <p>I'm really passionate about The Thrill Of Creation. My dream is to became a Passionate Developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>Git</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Spring boot</p><hr style={{width: "60%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About