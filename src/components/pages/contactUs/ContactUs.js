import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "../../../assets/images/image";
import "../../../style/ContactUs.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <Container>
      <Row className="mt-2">
        <div className="line"></div>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
          <div className="contactUs-leftDiv">
            <div className="contactUs-heading">CONTACT US</div>
            <div className="contactUs-CorporateText">Corporate Office</div>
            <div className="mt-2 mb-2">
              <span style={{ marginRight: "5px" }}>
                <FaMapMarkerAlt />
              </span>
              <b>Address:</b>13053 Elm Tree Drive, Suite 202, Herndon, VA 20171
            </div>
            <div className="mt-2 mb-2">
              <span style={{ marginRight: "6px" }}>
                <IoIosCall />
              </span>
              <b>Phone:</b>&nbsp;(312) 585-6061
            </div>
            <div className="mt-2 mb-2">
              <span style={{ marginRight: "2px" }}>
                <MdEmail />
              </span>
              <b> Email:</b>&nbsp;info@mindsoftinc.com
            </div>
            <div>
              <img className="contactUs-image" src={images.calling} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
          <Row className="contactUs-rightDiv">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>
              <b>
                We would like to be easily accessible and to be available to our
                customers, potential clients and prospective employees. Whenever
                necessary, you just need to complete the following form.You can,
                also, visit any of our offices listed below.
              </b>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              xxxl={6}
              className="contactUs-flex"
            >
              <label>
                <b>Your Name*</b>
              </label>
              <input></input>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              xxxl={6}
              className="contactUs-flex"
            >
              <label>
                <b>Contact*</b>
              </label>
              <input></input>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              xxxl={6}
              className="contactUs-flex"
            >
              <label>
                <b>Your Email Address*</b>
              </label>
              <input></input>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              xxxl={12}
              className="contactUs-flex"
            >
              <label>
                <b>Subject*</b>
              </label>
              <input></input>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              xxxl={12}
              className="contactUs-flex"
            >
              <label>
                <b>Message*</b>
              </label>
              <input></input>
            </Col>
            <Col>
              <div className="contactUs-btnDiv">
                <button className="contactUs-btn">Send Message</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
