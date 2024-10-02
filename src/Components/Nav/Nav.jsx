import React from 'react';
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import {useState} from 'react';
function Nav() {
  const [activeNav, setActiveNav] = useState('home');
    return (
      <nav>
        <a href="home" onclick={()=> setActiveNav('hpme')} className={activeNav === 'home' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onclick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser /></a>
        <a href="#experience" onclick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookReader /></a>
        <a href="#service" onclick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill /></a>
        <a href="#contact" onclick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook3Fill /></a>
      </nav>
    )
  }
  
  export default Nav;