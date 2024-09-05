import React from 'react';
import './SCSS/header.scss';
import headImg from "../Utils/Images/headimage.png";

const ConstitutionLanding = () => {
  return (
    <div className="constitution-landing">
      <div className="content">
        <h1>Learn, play, and explore <span>India's</span> Constitution!</h1>
        <p>
          Unlock the power of India's Constitution with engaging games, interactive debates,
          and comprehensive learning tools. Dive into the world of 'Nagrik Aur Samvidhan' and
          explore your rights and duties in a fun, accessible way!
        </p>
        <div className="buttons">
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="image-container">
        <img src={headImg} alt="India's Constitution illustration" />
      </div>
    </div>
  );
};

export default ConstitutionLanding;
