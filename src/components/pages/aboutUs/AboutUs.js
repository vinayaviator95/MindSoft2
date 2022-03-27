import React, { useState } from "react";
// import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import "../../../style/AboutUs.css";
// import Mission from "./Mission";
import { IoMdArrowDropright } from "react-icons/io";
import Mission from "../aboutUs/Mission";
import Values from "../aboutUs/Values";
import { Container } from "react-bootstrap";

// import Values from "./Values";

const AboutUs = () => {
  const [displayedContent, SetDislpayedContent] = useState(true);
  const [displayedMissionContent, SetDislpayedMissionContent] = useState(false);
  const [displayedValuesContent, SetDislpayeValuesContent] = useState(false);
  const handleClickOverview = () => {
    SetDislpayedContent(true);
    SetDislpayedMissionContent(false);
    SetDislpayeValuesContent(false);
  };

  const handleMission = () => {
    SetDislpayedContent(false);
    SetDislpayeValuesContent(false);
    SetDislpayedMissionContent(true);
  };

  const handleValues = () => {
    SetDislpayedContent(false);
    SetDislpayedMissionContent(false);
    SetDislpayeValuesContent(true);
  };
  return (
    <Container>
      <div className=" aboutContainer">
        <div className="line"></div>
        <div className="fluid-container">
          <Row className="justify-content-center">
            <Col md={3} className="  sideContainer m-2">
              <div className="sideMain">
                <div className="sideDetails">
                  <div className="heading">
                    <button id="headingTag"></button>
                    <span>ABOUT US</span>
                  </div>
                  <div
                    className="sideContent-first"
                    onClick={handleClickOverview}
                  >
                    <IoMdArrowDropright style={{ marginRight: "5px" }} />
                    <span>OverView</span>
                  </div>
                  <div className="sideContent" onClick={handleMission}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>Mission & Vision</span>
                  </div>
                  <div className="sideContent" onClick={handleValues}>
                    <IoMdArrowDropright
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    />
                    <span>CoreValues</span>
                  </div>
                </div>
              </div>
            </Col>

            {displayedContent && (
              <Col md={8} className="rightContainer m-2">
                <h3 className="rightsideHeading">OVERVIEW</h3>
                <h4>
                  <em className="overviewHighlight">Who we are</em>
                </h4>

                <p>
                  MindSoft is a global IT and Engineering solutions provider
                  catering to a diverse customer base. We ensure to empower our
                  clients with innovative solutions that add measurable value to
                  business, while adhering to global quality standards. We offer
                  an optimal blend of business processes in varied domains to
                  enable our customers to meet their corporate goals. Our
                  combination of deep industry knowledge and expertise in
                  building capabilities on short notice makes us a strategic
                  partner for our customers.
                </p>
                <p>
                  Partnering with MindSoft gives our customers access to some of
                  the finest talent in the industry. Our highly qualified team
                  of professionals leverages their skills and experiences in
                  order to design and integrate exceptionally successful
                  products and strategies. These strategies are built with the
                  aim to empower our customers with the right tools and
                  processes needed to achieve operating and financial goals.
                </p>
                <p>
                  Our seasoned professionals come experienced in a broad
                  spectrum of technologies that range from cutting-edge
                  technologies to legacy systems, enabling us to successfully
                  service a wide variety of customers.
                </p>
                <p>
                  Our primary goal is to facilitate the success of our customers
                  by ensuring the delivery of highly advanced solutions that
                  reduce project risks, enhance capabilities and create value,
                  while managing within tight budgets and timelines.
                </p>
              </Col>
            )}

            {displayedMissionContent && (
              <Col Col md={8} className="rightContainer m-2">
                <Mission />
              </Col>
            )}
            {displayedValuesContent && (
              <Col Col md={8} className="rightContainer m-2">
                <Values />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
