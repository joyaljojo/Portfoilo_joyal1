import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Joyal Jojo</h4>
      <h4>Copyright &copy; 2023 Jo</h4>
      <div className='footerLinks'>
        <a href="https://github.com/joyaljojo" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/joyal-jojo-b72a42256/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:joyaljoj9656@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer