import React from 'react';
import "./About.css"
import ME from '../../assets/about_me.jpeg';
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
function About() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          <div className="about_content">
             <div className="about_cards">
              <article className="about_card">
              <FaAward className="about_icon"/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about_card">
              <LuUsers className="about_icon"/>
                <h5>Clients</h5>
                <small>100+ Years Working</small>
              </article>

              <article className="about_card">
              <GrProjects className="about_icon"/>
                <h5>Projects</h5>
                <small>50+ Completed Projects</small>
              </article>
             </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id voluptatibus modi expedita, accusamus excepturi, minus doloremque eaque accusantium placeat architecto voluptatem reprehenderit quisquam suscipit. Deleniti quidem ipsa eos corrupti!
             </p>
             <a href="#contact" className="btn btn-primary">Let's talk</a>
          </div>
          </div>
      </section>
    )
  }
  
  export default About;