import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/IMG1.jpg';
import IMG2 from '../../assets/IMG2.jpg';
import IMG3 from '../../assets/IMG3.jpg';
import IMG4 from '../../assets/IMG4.jpg';
import IMG5 from '../../assets/IMG5.jpg';
import IMG6 from '../../assets/IMG6.jpg';
function Portfolio() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>
         
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG2} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG3} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG4} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG5} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG6} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
            </div>
          </article>
        </div>
      </section>
    )
  }
  
  export default Portfolio;