import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsCard from "../../cards/AboutUsCard";
import {
  aboutUsCardString,
  servicesCardData,
} from "../../../assets/utility/string";
import ServicesCard from "../../cards/ServicesCard";
import "../../../style/Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <div className="line"></div>
        <div>
          MindSoft is a global IT and Engineering solutions provider whose
          business focus is in Development, Outsourcing, and Consulting. We are
          a Global Technology company with Customer Focus as one of our Core
          Values. We are Agile. We are always present with the right solutions
          at the right place and the right time to meet your requirements. Our
          offerings are IP oriented, tried and tested over time. We strive to
          ensure that our Clients are the front runners and equipped with latest
          technologies.
        </div>
        <div className="aboutUs-heading">ABOUT US</div>
        {aboutUsCardString.map((item) => {
          return (
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <AboutUsCard
                heading={item.heading}
                btnText={item.btnText}
                content={item.content}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <div className="home-heading">SERVICES</div>
        {servicesCardData.map((item) => {
          return (
            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} xxxl={4}>
              <ServicesCard
                img={item.img}
                heading={item.heading}
                content={item.content}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
