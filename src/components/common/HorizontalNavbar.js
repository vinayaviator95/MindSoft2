import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../style/HorizontalNavbar.css";

// import { Container, Nav, NavDropdown } from "react-bootstrap";

const HorizontalNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="mindsoft-text">MINDSOFT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="float-right">
              <Link to="/" exact className="navbar-home">
                HOME
              </Link>
              <Link to="/aboutUs" exact className="navbar-home">
                ABOUT US
              </Link>
              <Link to="/service" exact className="navbar-home">
                SERVICES
              </Link>
              <Link eventKey={2} to="/contactUs" exact className="navbar-home">
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HorizontalNavbar;
