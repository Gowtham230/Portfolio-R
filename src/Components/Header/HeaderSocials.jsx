import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://github.com"><FaSquareGithub /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://twitter.com"><FaSquareTwitter /></a>
    </div>
  )
}

export default HeaderSocials