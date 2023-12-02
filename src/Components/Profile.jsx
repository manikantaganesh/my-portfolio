import React, { useEffect } from 'react';
import Typed from 'typed.js';
import data from '../staticData';

const profile = () => {
  useEffect(() => {
    new Typed('#typed', {
      strings: ['Software Developer', 'Freelancer', 'Gamer','Travel lover'],
      backDelay: 500,
      startDelay: 400,
      typeSpeed: 70,
      backSpeed: 90,
      smartBackspace: true, // this is a default
      loop: true
    });
  });

  return (
    <div className="container">
      <div className="content-center">
        <div style={{fontSize: "2.5em"}} className="title">Manikanta Ganesh Nanduri</div>
        <div>
          <span style={{fontSize:20}} className="category text-white" id="typed"></span>
        </div>
        <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a>
        <a className="btn btn-primary" href={data.resumeLink} data-aos="zoom-in" data-aos-anchor="data-aos-anchor" target="_blank">Download CV</a>
      </div>
    </div>
  );
}

export default profile;
