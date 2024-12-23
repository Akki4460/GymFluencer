import './Foter.css'
import React from 'react'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Fotter = () => {
  return (
    <div className='Footer-container'>
      <hr />
        <div className='footer'>
          <div className='social-links'>
          <a href='https://github.com/Akki4460/GymFluencer.git'><img src={ Github } alt="" /></a>
        <a href='https://www.linkedin.com/in/akhileshbhosale/'><img src={ Linkedin } alt="" /></a>
         </div>
        <div className="logo-f">
          <img src={ Logo } alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2 "></div>

    </div>
  )
}

export default Fotter