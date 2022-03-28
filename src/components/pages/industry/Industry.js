import React, { useState } from "react";
import "../../../style/AboutUs.css";
// import Mission from "./Mission";
import { IoMdArrowDropright } from "react-icons/io";

import { Container, Row, Col } from "react-bootstrap";
import IndustryComponent from "./IndustryComponent";

// import Values from "./Values";

const Services = () => {
  const [displayedContent, SetDislpayedContent] = useState(true);
  // const [displayIndustry, setDisplayIndustry] = useState(false);
  const handleDisplayIndustry = () => {
    // setDisplayIndustry(true);
    SetDislpayedContent(true);
  };

  return (
    <Container>
      <div className=" aboutContainer">
        <div className="line"></div>
        <div className="fluid-container">
          <Row className="justify-content-center">
            <Col md={4} className="  sideContainer m-2">
              <div className="sideMain">
                <div className="sideDetails">
                  <div className="heading">
                    <button id="headingTag"></button>
                    <span>Industry</span>
                  </div>
                  {/* <div
                    className="sideContent-first"
                    onClick={handleClickOverview}
                  >
                    <IoMdArrowDropright style={{ marginRight: "5px" }} />
                    <span>Software Development</span>
                  </div> */}
                  {/* <div className="sideContent" onClick={handleMission}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Management Consulting</span>
                  </div> */}
                  {/* <div className="sideContent" onClick={handleValues}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>IT Services</span>
                  </div> */}
                  {/* <div className="sideContent" onClick={handleMission}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Technology Consulting</span>
                  </div>
                  <div className="sideContent" onClick={handleValues}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Staff Augmentation</span>
                  </div> */}
                  {/* <div className="sideContent" onClick={handleValues}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Business Process Assurance</span>
                  </div> */}
                  {/* <div className="sideContent" onClick={handleValues}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>APO/KPO</span>
                  </div> */}
                  <div className="sideContent" onClick={handleDisplayIndustry}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Industry</span>
                  </div>
                </div>
              </div>
            </Col>

            {displayedContent && (
              <Col md={7} className="rightContainer m-2">
                <IndustryComponent />
              </Col>
            )}

            {/* {displayedMissionContent && (
              <Col Col md={7} className="rightContainer m-2">
                <TechnologyConsulting />
              </Col>
            )}
            {displayedValuesContent && (
              <Col Col md={7} className="rightContainer m-2">
                <StaffAugmentatuon />
              </Col>
            )} */}
            {/* {displayIndustry && (
              <Col Col md={7} className="rightContainer m-2">
                <Industry />
              </Col>
            )} */}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
