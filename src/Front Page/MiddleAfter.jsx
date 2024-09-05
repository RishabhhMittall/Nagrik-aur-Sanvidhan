import React from 'react';
import "./SCSS/middleafter.scss";
import image1 from "../Utils/Images/makingImage.jpg"; // Replace with the actual path of the first image
import image2 from "../Utils/Images/brimage.png"; // Replace with the actual path of the second image

const MiddleAfter = () => {
  return (
    <div className="constitution-section">

      <div className="row">
        <div className="column">
          <img src={image1} alt="Making of Indian Constitution" className="image" />
        </div>
        <div className="column text-column">
          <p>
            The Constitution of India was adopted on January 26, 1950, and serves as the country's rulebook 
            for how it is governed. It sets out how the government works and what rights and duties citizens have.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column text-column">
          <p>
            The document was prepared by a special group called the Constituent Assembly, which included leaders like Dr. B.R. Ambedkar. 
            They spent a lot of time discussing and making changes to the draft to ensure it would be fair and effective. 
            The Constitution helps ensure that the government is organized and that everyone's rights are protected.
          </p>
        </div>
        <div className="column">
          <img src={image2} alt="Constituent Assembly" className="image" />
        </div>
      </div>
    </div>
  );
};

export default MiddleAfter;
