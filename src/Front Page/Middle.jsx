import React from 'react';
import './SCSS/middle.scss';
import playImage from "../Utils/Images/bgimagePlay.png"; 

const Middle = () => {
  return (
    <div className="explore-section">
      <h2 className="section-title">— Explore —</h2>
      <div className="cards-container">
      <div className="card image-card">
          <img src={playImage} alt="Play & Learn" />
          <div className="overlay">
            <h3>Watch & Read</h3>
          </div>
        </div>
        <div className="card image-card">
          <img src={playImage} alt="Play & Learn" />
          <div className="overlay">
            <h3>Play & Learn</h3>
          </div>
        </div>
        <div className="card image-card">
          <img src={playImage} alt="Play & Learn" />
          <div className="overlay">
            <h3>Debate & Discover</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
