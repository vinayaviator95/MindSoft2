import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/Footer.css";

const Footer = () => {
  return (
    <Container>
      <Row className="footer-wrapper">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} xxxl={7}>
          <div className="footer-heading">Let's Talk</div>
          <p className="footer-content">
            Every project starts with a chat. Mindsoft leads our client
            conversations and will be happy to disciss your project. We will
            also pull in the right people from the team when needed.
          </p>
          <button className="footer-tellUsText">
            Tell us about your requirement
          </button>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} xxxl={5}>
          <div className="footer-right">
            <div className="footer-flex1">
              <div className="footer-flex1-div1">Email</div>
              <div className="footer-flex1-div2">info@mindsoftinc.com</div>
            </div>
            <div className="footer-flex2">
              <div className="footer-flex2-div1">Phone</div>
              <div className="footer-flex2-div2">(312) 585-6061</div>
            </div>
            <div className="footer-flex3">
              <div className="footer-flex3-div1">Address</div>
              <div className="footer-flex3-div2">
                13053 Elm Tree Drive, Suite 202, Herndon, VA 20171
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          xxxl={12}
          className="text-center mt-2"
        >
          <div className="footer-copyright">
            Copyright © 2022 Mindsoft. All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
