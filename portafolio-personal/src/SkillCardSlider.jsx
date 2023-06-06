import './SkillCardSlider.css';
import React, { useState } from 'react';

function SkillCardSlider({ imageUrl, title, description }) {
  const [isCardClicked, setCardClicked] = useState(false);

  const handleClick = () => {
    setCardClicked(!isCardClicked);
  };

  return (
    <div className="ContainerSkills">
      <div
        className={`InfoSkills ${isCardClicked ? 'cardClicked' : ''}`}
        onClick={handleClick}
      >
        <div className="FrontSide">
          <h2>{title}</h2>
          <img src={imageUrl} height="140" alt="Card" />
        </div>
        <div className="BackSide">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCardSlider;
