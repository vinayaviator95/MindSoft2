import React from "react";
import "../../style/AboutUsCard.css";
const AboutUsCard = ({ heading, content, btnText }) => {
  // const MAX_LENGTH = 250;
  return (
    <div className="aboutUsCard-wrapper">
      <div className="aboutUsCard-heading">{heading}</div>
      <p className="aboutUsCard-content">
        {content}
        {/* {`${content.substring(0, MAX_LENGTH)}...`} */}
        {/* PeopleNTech is a global IT and Engineering solutions provider catering
        to a diverse customer base. We ensure to empower our clients with
        innovative solutions that add measurable value to business, while
        adhering to global quality standards.We offer an optimal blend of
        business processes in varied domains to enable our customers to meet
        their corporate goals. Our combination of deep industry knowledge and
        expertise in building capabilities on short notice makes us a strategic
        partner for our customers. */}
      </p>
      {btnText && (
        <div className="aboutUsCard-btnDiv">
          <button className="aboutUsCard-btn">
            {btnText}
            <span></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutUsCard;
