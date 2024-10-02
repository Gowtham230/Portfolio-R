import React from 'react';
import './Testimoniols.css';
import AVT1 from '../../assets/AVT1.jpeg';
import AVT2 from '../../assets/AVT2.jpeg';
import AVT3 from '../../assets/AVT3.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';
function Test() {
    return (
      <section id="testimoniols">
        <h5>Review from clients</h5>
        <h2>Testimoniols</h2>

        <div className="container test_container">
        <article className="test">
                <div className="client_avatar">
                  <img src={AVT1} alt="avatar one" />
                  
                </div>
                <h5 className="client_name">Client1</h5>
                  <small className="client_review">Lorem ipsumir  dolor sit amet consectetur adipisicing elit Quasi ut repudiandae repellat 
  saepe accusantium tempore possimus nostrum sequi magni modi vel assumenda,ex amet, quas eum vitae! 
  Voluptatibus exercitationem odit voluptas magni odio. Dolor provident aut fuga
                  </small>
              </article>
        </div>

        <div className="container test_container">
              <article className="test">
                <div className="client_avatar">
                  <img src={AVT2} alt="avatar one" />
                  
                </div>
                <h5 className="client_name">Client2</h5>
                  <small className="client_review">Lorem ipsumir  dolor sit amet consectetur adipisicing elit Quasi ut repudiandae repellat 
  saepe accusantium tempore possimus nostrum sequi magni modi vel assumenda,ex amet, quas eum vitae! 
  Voluptatibus exercitationem odit voluptas magni odio. Dolor provident aut fuga
                  </small>
              </article>
        </div>
        <div className="container test_container">
              <article className="test">
                <div className="client_avatar">
                  <img src={AVT3} alt="avatar one" />
                  
                </div>
                <h5 className="client_name">Client3</h5>
                  <small className="client_review">Lorem ipsumir  dolor sit amet consectetur adipisicing elit Quasi ut repudiandae repellat 
  saepe accusantium tempore possimus nostrum sequi magni modi vel assumenda,ex amet, quas eum vitae! 
  Voluptatibus exercitationem odit voluptas magni odio. Dolor provident aut fuga
                  </small>
              </article> 
        </div>
      </section>
    )
  }
  
  export default Test;