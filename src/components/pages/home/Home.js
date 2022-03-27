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
        <div className="aboutUs-heading">ABOUT US</div>
        {aboutUsCardString.map((item) => {
          return (
            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} xxxl={4}>
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
