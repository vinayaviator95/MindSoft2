import React from "react";
import "../../style/ServicesCard.css";

const ServicesCard = ({ img, heading, content }) => {
  const MAX_HEADING = 20;
  const MAX_CONTENT = 170;
  return (
    <div className="servicesCard-wrapper">
      <div>
        <img className="serviceCard-img" src={img} alt="" />
      </div>
      <div className="servicesCard-body">
        <div className="servicesCard-heading">
          {heading.length > MAX_HEADING
            ? `${heading.substring(0, MAX_HEADING)}... `
            : heading}
        </div>
        <p class="servicesCard-text">
          {content.length > MAX_CONTENT
            ? `${content.substring(0, MAX_CONTENT)}... `
            : content}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
